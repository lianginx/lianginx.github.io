---
tags:
    - note
    - vscode
    - markdown
---

# Visoul Studio Code 图床扩展 PicGo 配置

## 前言

涉及到的工具与服务：

- VS Code
- [PicGo 扩展](vscode:extension/Spades.vs-picgo)
- [SM.MS 免费图床](https://sm.ms)

使用 VS Code + Markdown 在本地写笔记体验很不错，但相比于云笔记，本地文档在插入图片方面很不方便，这导致我写东西时极力避免使用图片，而有时候仅用文字又很难描述清楚，比较不舒服。

最近，我发现 SM.MS 在线图床似乎很不错，配合 PicGo 可以实现不逊色于云笔记的图片上传体验，简直给我打开了新世界，所以写篇笔记记录一下配置过程。

SM.MS 是一个比较知名的老牌的图床网站了，2015 年运行至今，稳定运行多年，支持免费图片外链，上传下载速度都还可以，非常推荐使用。

> 此笔记所有图片均使用的在线图床外链，浏览时可以体验一下图片加载速度。

## 注册 SM.MS 获取 Token

第一步：[点击注册 SM.MS](https://sm.ms/register)。

![20220601001140](https://s2.loli.net/2022/06/01/UE8zox5SWMqKCNT.png)

第二步：注册后登录，点击右上角 `User → Dashboard` 进入仪表盘。

![20220601001549](https://s2.loli.net/2022/06/01/GLeMtKDwz6VETs4.png)

第三步：在左侧菜单中找到并点击 API Token，复制 Secret Token。

![20220601001842](https://s2.loli.net/2022/06/01/XcUqgpui3b2V5Ij.png)

## 安装并配置 PicGo 扩展

第一步：[点击安装 PicGo 扩展](vscode:extension/Spades.vs-picgo)。

第二步：安装成功后按下 `command + ,` 进入设置，搜索 `picgo smms`，配置图床 Token。

![20220601003815](https://s2.loli.net/2022/06/01/gUy1lEfiIk3TaPO.png)

## 使用说明

macOS 快捷键：

- `cmd + opt + u` 上传并插入剪贴板中的图片
- `cmd + opt + e` 上传并插入选择的图片
- `cmd + opt + o` 在输入框内输入本地图片路径，上传并插入

Windows 快捷键：

- `ctrl + alt + u` 上传并插入剪贴板中的图片
- `ctrl + alt + e` 上传并插入选择的图片
- `ctrl + alt + o` 在输入框内输入本地图片路径，上传并插入
