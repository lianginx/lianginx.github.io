---
tags:
  - mac
---

# Mac Dock Bar 易用性调整

>参考：[通过终端命令调整 Dock 栏的隐藏速度｜一日一技 · Mac](https://sspai.com/post/33366)

## 前置条件

右键点击 Dock 栏，选择 `启用隐藏` 后，再进行以下配置。

## 移除显示延迟

```sh
# 移除延迟
defaults write com.apple.dock autohide-delay -int 0; killall Dock;
# 恢复默认
defaults delete com.apple.dock autohide-delay; killall Dock;
```

## 调整动画速度

```sh
# 无动画
defaults write com.apple.dock autohide-time-modifier -float 0; killall Dock;
# 动画 0.5s
defaults write com.apple.dock autohide-time-modifier -float 0.5; killall Dock;
# 恢复默认
defaults delete com.apple.dock autohide-time-modifier; killall Dock;
```

## 恢复出厂设置

```sh
defaults delete com.apple.dock; killall Dock;
```

此命令会把 Dock 栏恢复成出厂时的默认状态（包括图标）。
