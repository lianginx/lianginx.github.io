---
layout: page

pageInfo:
  title: INX 应用商店
  titleTemplate: 致力于推广各类高品质软件的在线应用商店
apps:
  - name: Rectangle Pro
    intro: 使用键盘快捷键来移动/调整窗口大小
    icon: /img/app-icon/rectangle-pro.png
    link: https://rectangleapp.com/pro
    category: 系统增强
    updated: "2022-12-11"
    charge: 免费10天
    chip:
      - AppleChip
    size: 14.7MB
    tags:
      - 窗口调整
  - name: HapiGo
    intro: 多合一启动器，即时搜索、快速预览及直接启动
    icon: /img/app-icon/hapigo.png
    link: https://hapigo.com/
    category: 系统增强
    updated: "2022-12-11"
    charge: 免费+订阅
    size: 31.8MB
    chip:
      - AppleChip
    tags:
      - 启动器
      - 剪贴板
      - 翻译
  - name: HyperSwitch
    intro: 还原 Windows 窗口切换
    icon: /img/app-icon/hyperswitch.png
    link: https://bahoom.com/hyperswitch
    category: 系统增强
    updated: "2022-12-11"
    charge: 免费
    size: 2.2 MB
    chip:
      - AppleChip
    tags:
      - 窗口切换
  - name: Karabiner Elements
    intro: 键盘/鼠标改键工具
    icon: /img/app-icon/karabiner-elements.png
    link: https://karabiner-elements.pqrs.org/
    category: 系统增强
    updated: "2022-12-11"
    charge: 免费
    size: 20.7 MB
    chip:
      - AppleChip
    tags:
      - 改键
  - name: MacCopier
    intro: 自动复制短信验证码到剪贴板
    icon: /img/app-icon/mac-copier.png
    link: https://github.com/DreamSaddle/MacCopier
    category: 系统增强
    updated: "2022-12-11"
    charge: 免费开源
    size: 20.7 MB
    chip:
      - AppleChip
    tags:
      - 改键
  - name: 图压
    intro: 简单易用的图片压缩软件
    icon: /img/app-icon/tuya.png
    link: https://tuya.xinxiao.tech/
    category: 效率工具
    updated: "2022-12-11"
    charge: 免费开源
    size: 75.1MB
    chip:
      - AppleChip
      - Windows
    tags:
      - 图片压缩
  - name: Android 文件传输
    intro: 在 Mac 电脑和 Android 设备之间浏览和传输文件
    icon: /img/app-icon/usbfistman.png
    link: https://tuya.xinxiao.tech/
    category: 系统增强
    updated: "2022-12-11"
    charge: 免费
    size: 3.7 MB
    chip:
      - AppleChip
    tags:
      - 文件传输
  - name: MenubarX
    intro: Mac 菜单栏浏览器，可以在菜单栏固定任何网页
    icon: /img/app-icon/menubar-x.png
    link: https://menubarx.app/
    category: 效率工具
    updated: "2022-12-11"
    charge: 免费+买断
    size: 8 MB
    chip:
      - AppleChip
    tags:
      - 浏览器
      - 菜单栏增强
  - name: OpenEmu
    intro: 多合一掌机/街机模拟器，包括但不限于 GBA/NDS/FC/PSP/……
    icon: /img/app-icon/openemu.png
    link: https://openemu.org/
    category: 游戏工具
    updated: "2022-12-11"
    charge: 免费开源
    size: 32MB
    chip:
      - AppleChip
    tags:
      - 游戏机模拟器
  - name: Shottr
    intro: 屏幕截图工具，支持取色/贴图/标注/测量/OCR/无痕打码/滚动截图……
    icon: /img/app-icon/shottr.png
    link: https://shottr.cc/
    category: 系统增强
    updated: "2022-12-11"
    charge: 免费
    size: 1.3MB
    chip:
      - AppleChip
    tags:
      - 屏幕截图
      - 图片打码
      - OCR
---

<script setup>
import AppLayout from "/.vitepress/theme/layouts/app.vue";
import { useData } from "vitepress";

const { frontmatter } = useData();
</script>

<AppLayout :apps="frontmatter.apps">
  <template #title>{{ frontmatter.pageInfo.title }}</template>
  <template #title-template>{{ frontmatter.pageInfo.titleTemplate }}</template>
</AppLayout>
