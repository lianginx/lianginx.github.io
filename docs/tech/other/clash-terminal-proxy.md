---
tags:
  - clash
---

# 配置 Clash 终端代理

>参考：[在命令行工具中使用代理](https://github.com/islishude/shell-proxy)

## 临时代理

在终端窗口中输入以下命令，临时使用代理连接，关闭终端窗口后失效。

```sh
# Clash 终端代理
export https_proxy=http://127.0.0.1:7890;export http_proxy=http://127.0.0.1:7890;export all_proxy=socks5://127.0.0.1:7890
```

## 常驻代理

通过配置终端描述文件，实现自动启用代理。

一、查看终端 Shell 版本，macOS 一般默认是 `zsh` 。

```sh
echo $0
```

二、根据输出提示编辑对应文件，将上面临时代理中的命令粘贴进来，保存文件。

```sh
# bash
vi ~/.bashrc
# zsh
vi ~/.zshrc

# 保存并退出
:wq
```

三、重启终端，测试连接 Google，提示 200 表示代理成功。

```sh
curl -I https://www.google.com
# HTTP/1.1 200 Connection established 成功
```