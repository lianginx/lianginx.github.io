---
tags:
  - npm
  - npmrc
  - nodejs
  - electron
  - node-sass
---

# NPM 配置文件 `.npmrc`

> 官方文档：https://docs.npmjs.com/cli/v9/configuring-npm/npmrc

## 配置文件

文件可以存在四个位置，具有不同的作用域：

- 项目配置文件：在项目根目录创建 `.npmrc` 文件作为当前项目的 NPM 配置文件。
- 用户配置文件：在当前用户根目录 `~/.npmrc` 创建文件作为当前用户的 NPM 配置文件。
- 全局配置文件：使用 `npm config get prefix` 获取 NPM 全局安装路径，使用获取的路径加上 `.../etc/.npmrc` 获取全局配置文件，当前配置文件作用于所有用户。
- NPM 内置配置文件：放置于 `/path/to/npm/npmrc`，不可修改。

所有 npm 配置文件都是 `ini` 格式的参数列表:

```ini
key = value
```

可以直接修改文件，也可以使用 NPM 命令进行配置：

```bash
# 设置
npm config set <key>=<value> [<key>=<value> ...]
npm set <key>=<value> [<key>=<value> ...]

# 获取
npm config get [<key> [<key> ...]]
npm get [<key> [<key> ...]]

# 显示所有配置（可显示为 json 结构）
npm config list [--json]

# 从所有配置文件中删除指定 key
npm config delete <key> [<key> ...]

# VIM 模式编辑配置文件，默认用户配置文件，-g 编辑全局配置
npm config edit [-g]

# 尝试修复无效的配置项目
npm config fix

# 命令别名: c
```

## 用途

### 配置默认镜像源

```ini
# 切换为国内源，避免安装依赖超时
registry = https://registry.npmmirror.com
```

可选源：

- 阿里 - https://registry.npmmirror.com
- 腾讯 - http://mirrors.cloud.tencent.com/npm/
- 华为 - https://repo.huaweicloud.com/repository/npm/

### 配置软件包镜像源

```ini
# Node-Sass
sass_binary_site = https://npmmirror.com/mirrors/node-sass/

# Electron
electron_mirror = https://npmmirror.com/mirrors/electron/

# Node.js
disturl = https://npmmirror.com/dist
```

Node.js 可选源：

- 阿里 - https://npmmirror.com/mirrors/node-sass/
- 华为 - https://repo.huaweicloud.com/node-sass

Electron 可选源：

- 阿里 - https://npmmirror.com/mirrors/electron/
- 华为 - https://repo.huaweicloud.com/electron/

Node.js 可选源：

- 阿里 - https://npmmirror.com/dist
- 华为 - https://repo.huaweicloud.com/nodejs
