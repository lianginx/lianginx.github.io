# NSSM 使用说明

NSSM（Non‑Sucking Service Manager）是一个轻量、稳定的 Windows 工具，用于将普通可执行程序注册为系统服务，使其能够随系统启动、在后台持续运行，并支持自动重启、进程优先级设置和日志管理，无需修改程序源码，广泛应用于后台任务、网络代理内核和长期运行的自定义工具管理。

## 安装 NSSM

前往官网 [下载安装](https://nssm.cc/download)，或使用 WinGet 安装：

```bash
winget install NSSM.NSSM
```

## NSSM 常用命令

> `[]` 表示可选参数，`<>` 表示必填参数。

```bash
nssm install [servicename]  # 新增服务
nssm remove [servicename]   # 移除服务
nssm edit <servicename>     # 编辑服务
```

```bash
nssm start <servicename>    # 启动服务
nssm stop <servicename>     # 停止服务
nssm restart <servicename>  # 重启服务
nssm pause <servicename>    # 暂停服务
nssm continue <servicename> # 恢复服务
nssm status <servicename>   # 查询服务状态
```

更多命令请 [查看官方文档](https://nssm.cc/commands)。
