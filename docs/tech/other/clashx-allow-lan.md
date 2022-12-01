---
tags:
  - clashx
---

# 如何使用 ClashX 允许局域网连接 Allow LAN

## 功能介绍

在电脑使用 ClashX 启用代理并打开 `允许局域网连接`，即可以共享网络环境给同一局域网的其他设备。

## 操作流程

第一步，打开 `允许局域网连接` 或 `Allow LAN` 开关。

![clashx](/img/clashx-allow-lan/clashx-allow-lan-1.png)

第二步：查看 PC 本机在局域网中的 IP 地址 `192.168.x.x`。

以 macOS 为例，打开 `系统偏好设置` -> `网络` 即可查看自己的本机 IP：

![查看IP](/img/clashx-allow-lan/clashx-allow-lan-2.png)

第三步：使用本机 IP 配置同一网络下其他设备的网络代理：`WiFi 感叹号` -> `配置代理` -> `手动`:

![配置网络代理](/img/clashx-allow-lan/clashx-allow-lan-3.png)

- 服务器：填写本机 IP `192.168.x.x`
- 端口：填写 `7890`
- 认证：不开启

填写完成后保存，然后尝试打开 Google 测试一下，查看是否可以正常访问。

(o ゜ ▽ ゜)o☆[BINGO!]
