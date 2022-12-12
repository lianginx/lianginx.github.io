---
layout: page

title: INX 应用商店
titleTemplate: &intro 致力于推广各类高品质软件的在线应用商店
description: *intro
---

<script setup lang="ts">
import { ref } from "vue";
import { useData } from 'vitepress';
import AppStore from "/.vitepress/theme/layouts/appStore.vue";

import IconRectanglePro from "/img/app-icon/rectangle-pro.webp";
import IconHapiGo from "/img/app-icon/hapigo.webp";
import IconTuYa from "/img/app-icon/tuya.webp";
import IconHyperSwitch from "/img/app-icon/hyperswitch.webp";
import IconKarbinerElements from "/img/app-icon/karabiner-elements.webp";
import IconMacCopier from "/img/app-icon/maccopier.webp";
import IconMenuBarX from "/img/app-icon/menubarx.webp";
import IconOpenEmu from "/img/app-icon/openemu.webp";
import IconShottr from "/img/app-icon/shottr.webp";
import IconUsbfistman from "/img/app-icon/usbfistman.webp";
import IconSwitchHosts from "/img/app-icon/switchhosts.webp";
import IconPixelmatorPro from "/img/app-icon/pixelmator-pro.webp";
import IconKeka from "/img/app-icon/keka.webp";
import IconSnippetsLab from "/img/app-icon/snippets-lab.webp";
import IconClashX from "/img/app-icon/clashx.webp";

const { frontmatter } = useData();
const pageInfo = {
  title: frontmatter.value.title,
  titleTemplate: frontmatter.value.description,
};
const apps = [
  {
    name: "ClashX",
    intro: "方便快捷的管理/切换 Host 文件",
    link: "https://github.com/yichengchen/clashX",
    icon: IconClashX,
    category: "网络代理",
    updated: "2022-12-12",
    charge: "免费开源",
    size: "20MB",
    chip: [
      "AppleChip",
    ],
    tags: [
      "科学上网"
    ]
  }, {
    name: "SwitchHosts",
    intro: "方便快捷的管理/切换 Host 文件",
    link: "https://swh.app/",
    icon: IconSwitchHosts,
    category: "系统增强",
    updated: "2022-12-12",
    charge: "免费开源",
    size: "81.8MB",
    chip: [
      "AppleChip",
      "Windows",
      "Linux"
    ],
    tags: [
      "科学上网"
    ]
  }, {
    name: "Pixelmator Pro",
    intro: "简单易用的专业图像编辑工具",
    link: "https://www.pixelmator.com/pro/",
    icon: IconPixelmatorPro,
    category: "图像编辑",
    updated: "2022-12-12",
    charge: "免费7天+买断",
    size: "81.8MB",
    chip: [
      "AppleChip",
    ],
    tags: [],
  }, {
    name: "Keka",
    intro: "小巧轻便的文件压缩工具",
    link: "http://www.keka.io/zh-cn/",
    icon: IconKeka,
    category: "系统增强",
    updated: "2022-12-12",
    charge: "自愿付费",
    size: "36.4MB",
    chip: [
      "AppleChip",
    ],
    tags: [
      "文件压缩",
    ],
  }, {
    name: "SnippetsLab",
    intro: "代码片段 + Markdown 管理工具",
    link: "https://www.renfei.org/snippets-lab/",
    icon: IconSnippetsLab,
    category: "效率工具",
    updated: "2022-12-12",
    charge: "买断",
    size: "50.5MB",
    chip: [
      "AppleChip",
    ],
    tags: [
      "代码片段",
      "Markdown",
    ],
  }, {
    name: "Rectangle Pro",
    intro: "使用键盘快捷键来移动/调整窗口大小",
    link: "https://rectangleapp.com/pro",
    icon: IconRectanglePro,
    category: "系统增强",
    updated: "2022-12-11",
    charge: "免费10天+买断",
    chip: [
      "AppleChip"
    ],
    size: "14.7MB",
    tags: [
      "窗口调整"
    ]
  }, {
    name: "HapiGo",
    intro: "多合一启动器，即时搜索、快速预览及直接启动",
    link: "https://hapigo.com/",
    icon: IconHapiGo,
    category: "效率工具",
    updated: "2022-12-11",
    charge: "免费+订阅",
    size: "31.8MB",
    chip: [
      "AppleChip"
    ],
    tags: [
      "启动器",
      "剪贴板",
      "翻译"
    ]
  }, {
    name: "HyperSwitch",
    intro: "还原 Windows 窗口切换",
    link: "https://bahoom.com/hyperswitch",
    icon: IconHyperSwitch,
    category: "系统增强",
    updated: "2022-12-11",
    charge: "免费",
    size: "2.2 MB",
    chip: [
      "AppleChip"
    ],
    tags: [
      "窗口切换"
    ]
  }, {
    name: "Karabiner Elements",
    intro: "键盘/鼠标改键工具",
    link: "https://karabiner-elements.pqrs.org/",
    icon: IconKarbinerElements,
    category: "系统增强",
    updated: "2022-12-11",
    charge: "免费",
    size: "20.7 MB",
    chip: [
      "AppleChip"
    ],
    tags: [
      "改键"
    ]
  }, {
    name: "MacCopier",
    intro: "自动复制短信验证码到剪贴板",
    link: "https://github.com/DreamSaddle/MacCopier",
    icon: IconMacCopier,
    category: "系统增强",
    updated: "2022-12-11",
    charge: "免费开源",
    size: "20.7 MB",
    chip: [
      "AppleChip"
    ],
    tags: [
      "改键"
    ]
  }, {
    name: "图压",
    intro: "简单易用的图片压缩软件",
    link: "https://tuya.xinxiao.tech/",
    icon: IconTuYa,
    category: "效率工具",
    updated: "2022-12-11",
    charge: "免费开源",
    size: "75.1MB",
    chip: [
      "AppleChip",
      "Windows"
    ],
    tags: [
      "图片压缩"
    ]
  }, {
    name: "Android 文件传输",
    intro: "在 Mac 电脑和 Android 设备之间浏览和传输文件",
    link: "https://tuya.xinxiao.tech/",
    icon: IconUsbfistman,
    category: "系统增强",
    updated: "2022-12-11",
    charge: "免费",
    size: "3.7 MB",
    chip: [
      "AppleChip"
    ],
    tags: [
      "文件传输"
    ]
  }, {
    name: "MenubarX",
    intro: "Mac 菜单栏浏览器，可以在菜单栏固定任何网页",
    link: "https://menubarx.app/",
    icon: IconMenuBarX,
    category: "效率工具",
    updated: "2022-12-11",
    charge: "免费+买断",
    size: "8 MB",
    chip: [
      "AppleChip"
    ],
    tags: [
      "浏览器",
      "菜单栏增强"
    ]
  }, {
    name: "OpenEmu",
    intro: "多合一掌机/街机模拟器，包括但不限于 GBA/NDS/FC/PSP/……",
    link: "https://openemu.org/",
    icon: IconOpenEmu,
    category: "游戏工具",
    updated: "2022-12-11",
    charge: "免费开源",
    size: "32MB",
    chip: [
      "AppleChip"
    ],
    tags: [
      "游戏机模拟器"
    ]
  }, {
    name: "Shottr",
    intro: "屏幕截图工具，支持取色/贴图/标注/测量/OCR/无痕打码/滚动截图……",
    link: "https://shottr.cc/",
    icon: IconShottr,
    category: "系统增强",
    updated: "2022-12-11",
    charge: "免费",
    size: "1.3MB",
    chip: [
      "AppleChip"
    ],
    tags: [
      "屏幕截图",
      "图片打码",
      "OCR"
    ]
  },
];
</script>

<AppStore :pageInfo="pageInfo" :apps="apps" />
