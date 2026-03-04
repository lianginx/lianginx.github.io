# macOS Launchd 入门

Launchd 是 macOS 的系统服务管理工具（相当于 Windows 服务和 Linux systemd），它允许用户创建、启动、停止和配置 macOS 系统服务。

## Launchd 的基本概念

launchd 分为两个部分：`launchd` 与 `launchctl`。

`launchd` 是常驻后台的守护进程，负责读取各种 `*.plist` 配置进行启动、停止、重启服务等操作，是真正干活的力工。

`launchctl` 是用来管理 `launchd` 的操作台，负责向 `launchd` 发送指令，属于下发命令的管理层。

## Launchd 配置文件

Launchd 配置是一个 XML 格式的文本文件：

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">

<plist version="1.0">
<dict>
    <!-- 必填：全局唯一 ID，通常反域名 -->
    <key>Label</key>
    <string>com.example.hello</string>

    <!-- 必填：启动命令与参数 -->
    <key>ProgramArguments</key>
    <array>
        <string>/bin/bash</string>
        <string>/Users/you/scripts/hello.sh</string>
    </array>

    <!-- 可选：指定启动命令程序的工作目录 -->
    <key>WorkingDirectory</key>
    <string>/Users/you</string>

    <!-- 可选：开机/登录时立即运行一次 -->
    <key>RunAtLoad</key>
    <true/>

    <!-- 可选：每 300 秒执行一次 -->
    <key>StartInterval</key>
    <integer>300</integer>

    <!-- 可选：每天 09:30 执行一次 -->
    <key>StartCalendarInterval</key>
    <dict>
        <key>Hour</key>
        <integer>9</integer>
        <key>Minute</key>
        <integer>30</integer>
    </dict>

    <!-- 可选：保持存活；true 时退出后会被拉起 -->
    <key>KeepAlive</key>
    <true/>

    <!-- 可选：常规日志输出 -->
    <key>StandardOutPath</key>
    <string>/tmp/com.example.hello.out.log</string>

    <!-- 可选：异常日志输出 -->
    <key>StandardErrorPath</key>
    <string>/tmp/com.example.hello.err.log</string>
</dict>
</plist>
```

Launchd 配置文件必须以 `.plist` 作为后缀名，文件名通常与配置中的 `Label` 一致。

Launchd 配置文件通常放在以下目录中，放置目录会决定自动加载行为、运行权限和启动时机：

| 目录                          | 运行权限 | 启动时机       | 适用场景                                                               |
| ----------------------------- | -------- | -------------- | ---------------------------------------------------------------------- |
| **`/Library/LaunchDaemons/`** | `root`   | 系统启动时     | 需要高权限的系统级服务，如网络守护进程、硬件监控、系统备份等           |
| **`/Library/LaunchAgents/`**  | 登录用户 | 所有用户登录时 | 对所有用户可用的服务，如全局快捷键、多用户应用助手等                   |
| **`~/Library/LaunchAgents/`** | 当前用户 | 当前用户登录时 | **最常用**，仅当前用户需要的服务，如个人定时任务、应用通知、同步工具等 |

以上目录会被系统在启动/登录流程中自动扫描并加载。

除了等待登录时自动加载外，也可以手动 `bootstrap` 指定任意可访问路径的 `plist`。

使用 `bootstrap` 启动服务只是临时加载到目标域，当域的生命周期结束后丢失，下次系统启动/登录时只会自动加载配置目录中未被 `disable` 的 plist 配置。

## 常用管理命令

### 配置校验

```bash
# 校验 plist 语法是否正确（推荐先执行）
plutil -lint ~/Library/LaunchAgents/com.example.hello.plist

# 查看 plist 内容（格式化输出）
plutil -p ~/Library/LaunchAgents/com.example.hello.plist
```

### 服务加载与卸载

```bash
# 加载并激活服务
launchctl bootstrap gui/$(id -u) ~/Library/LaunchAgents/com.example.hello.plist

# 移除服务（与 bootstrap 相对）
launchctl bootout gui/$(id -u) ~/Library/LaunchAgents/com.example.hello.plist
```

**参数说明：**

- `$(id -u)`：获取当前用户 ID

### 服务状态查看

```bash
# 列出所有已加载的服务
launchctl list

# 查找特定服务
launchctl list | grep com.example.hello

# 查看详细状态（推荐）
launchctl print gui/$(id -u)/com.example.hello

# 查看服务是否正在运行
ps aux | grep -i "hello.sh"
```

**状态字段说明：**

```
PID    Status   Label
56789  0        com.example.hello
#      ↑        ↑
#      │        └─ 服务标识符
#      └─ 退出代码（0 表示正常）
```

### 服务控制

```bash
# 重启服务（一键操作）
launchctl kickstart gui/$(id -u)/com.example.hello

# 强制停止服务（不卸载）
launchctl kill SIGTERM gui/$(id -u)/com.example.hello

# 立即触发一次运行（即使不在定时时间）
launchctl kickstart --immediate gui/$(id -u)/com.example.hello
```

**常用信号：**

| 信号      | 说明         | 使用场景         |
| --------- | ------------ | ---------------- |
| `SIGTERM` | 正常终止     | 优先尝试         |
| `SIGKILL` | 强制杀死     | 无响应时使用     |
| `SIGHUP`  | 重新加载配置 | 支持热重载的服务 |

### 系统级服务（需要 sudo）

```bash
# 加载系统级服务
sudo launchctl bootstrap system /Library/LaunchDaemons/com.example.daemon.plist

# 卸载系统级服务
sudo launchctl bootout system /Library/LaunchDaemons/com.example.daemon.plist

# 查看系统服务状态
sudo launchctl print system/com.example.daemon
```
