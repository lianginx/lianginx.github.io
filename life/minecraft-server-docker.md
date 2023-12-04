---
tags:
  - minecraft
  - docker
---

# 使用 Docker 搭建 Minecraft 服务端

## 下载客户端启动器

下载 [Hello Minecraft! Launcher](https://hmcl.huangyuhui.net/download)，简称 HMCL。

HMCL 是一个免费、开源的 Minecraft 启动器，允许玩家方便快捷地安装、管理、运行游戏。

:::tip 提示
客户端游戏版本需要与服务端保持一致才能连接至服务端。
:::

## 部署 Docker 服务端镜像

> 文档：https://github.com/itzg/docker-minecraft-server

```bash
# -e ONLINE_MODE=FALSE 关闭正版验证
docker run -d -it -p 25565:25565 --name mc -e ONLINE_MODE=FALSE -e EULA=TRUE itzg/minecraft-server
```

## server.properties 游戏服务器配置

> Wiki：https://minecraft.fandom.com/zh/wiki/Server.properties

## 进入 Minecraft 服务器控制台

```bash
docker exec -i mc rcon-cli
```
