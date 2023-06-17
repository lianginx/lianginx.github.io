---
tags:
  - mac
  - homebrew
---

# Homebrew 安装与使用

> 参考：[程序员 Homebrew 使用指北](https://sspai.com/post/56009)

## Homebrew 是什么？

Homebrew 是一个软件包管理器，支持 macOS 和 Linux，它可以让你一个命令快速安装软件，而不需要再去下载之后用鼠标把 APP 拖到应用程序文件夹中。

## 如何安装

安装脚本来自：[Homebrew 国内镜像](https://brew.idayer.com/)，安装成功后需要重启终端才能使用。

```sh
/bin/bash -c "$(curl -fsSL https://gitee.com/ineo6/homebrew-install/raw/master/install.sh)"
```

> 默认使用中科大镜像源，如果需要换源参考  [换源](https://brew.idayer.com/guide/change-source/)。

## 如何使用

### 常用命令

| 命令                         | 说明                           | 其他                                  |
| ---------------------------- | ------------------------------ | ------------------------------------- |
| brew install [--cask] [name] | 安装软件                       | cask 表示有 UI 的软件                 |
| brew search [name]           | 搜索软件                       | [网页搜索](https://formulae.brew.sh/) |
| brew list                    | 查看已安装软件                 |                                       |
| brew upgrade [name]          | 更新全部（某个）软件           |                                       |
| brew uninstall [name]        | 卸载软件                       |                                       |
| brew update                  | 更新 Homebrew                  |                                       |
| brew cleanup [name]          | 清理全部（某个）软件的历史版本 |                                       |
| brew info [name]             | 查看软件信息                   |                                       |
| brew tab [user/repo]         | 添加 tab                       |                                       |

### 常用软件仓库

```sh
# 字体库
brew tab homebrew/cask-fonts
```

### 常用字体包

```sh
# 安装 Fira Code 字体
brew install --cask font-fira-code
# 安装 Source Code Pro 字体
brew install --cask font-source-code-pro
```

### 常用软件包

```sh
# 安装 Node.js
brew install node
# 安装 VS Code
brew install --cask visual-studio-code
# 安装 pnpm
brew install pnpm
# 安装空格快速预览 Markdown 插件
brew install --cask qlmarkdown
# 安装 cakebrew（Homebrew 的 GUI 管理器）
brew install --cask cakebrew
```
