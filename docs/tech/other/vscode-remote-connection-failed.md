# 远程主机不满足运行 VS Code 服务器的先决条件

## 问题描述

[我可以在较旧的 Linux 发行版上运行 VS Code Server 吗？](https://code.visualstudio.com/docs/remote/faq#_can-i-run-vs-code-server-on-older-linux-distributions)

> 从 VS Code 版本 1.99（2025 年 3 月）开始，由 VS Code 分发的预构建服务器仅与基于 glibc 2.28 或更高版本的 Linux 发行版兼容。例如，这些包括 Debian 10、RHEL 8 或 Ubuntu 20.04。

## 临时解决方案

这个可作为最简单的临时解决方案，先使用最后支持的旧版本连接远程服务器，后面再研究如何彻底解决问题。

下载 VS Code 最后可用的版本 `1.98.2` 重装即可正常连接远程服务器。

覆盖安装前先到设置中 [关闭 VS Code 的自动更新](vscode://settings/update.mode)，某则重装后会自动更新。

[下载 macOS Intel 芯片](https://update.code.visualstudio.com/1.98.2/darwin/stable)

[下载 macOS Apple 芯片](https://update.code.visualstudio.com/1.98.2/darwin-arm64/stable)

[下载 Windows x64](https://update.code.visualstudio.com/1.98.2/win32-x64/stable)

[下载 Windows Arm64](https://update.code.visualstudio.com/1.98.2/win32-arm64/stable)

如果需要其他版本请到这里 [获取旧版本 VS Code 安装包](https://code.visualstudio.com/docs/supporting/faq#_previous-release-versions)。
