import type { DefaultTheme } from 'vitepress'

const tech: DefaultTheme.SidebarItem[] = [
  {
    text: '导读',
    link: '/tech/',
  },
  {
    text: '全栈开发',
    base: '/tech/full-stack',
    items: [
      { text: '加密存储用户密码', link: '/save-password' },
      { text: 'JSON Web Token 鉴权', link: '/json-web-token' },
    ],
  },
  {
    text: '前端开发',
    base: '/tech/frontend',
    items: [
      { text: 'Commitlint 使用指南', link: '/commitlint' },
      { text: 'Dexie.js 入门教程', link: '/dexie-js-guide' },
      { text: '本地存储：localStorage 和 sessionStorage 的差异', link: '/js-local-storage' },
      { text: 'JavaScript 遍历数组的方法', link: '/js-traversal-array' },
      { text: 'NPM 配置文件 .npmrc', link: '/npmrc' },
      { text: 'Electron 打包网站项目', link: '/electron-builder' },
      { text: 'Vue3 + Vite + Tailwind CSS', link: '/tailwindcss-vue3-vite' },
      { text: 'TypeScript 项目中使用 import 导入 JSON 文件', link: '/ts-import-json' },
      { text: 'Nuxt 3 如何使用 ECharts 图表', link: '/nuxt3-use-echarts' },
    ],
  },
  {
    text: '开发相关',
    base: '/tech/dev',
    items: [
      { text: 'YAML 入门教程', link: '/yaml' },
      { text: 'Github 远程库连接超时解决方案', link: '/github-timeout' },
      { text: '.gitignore 文件不生效的解决方案', link: '/gitignore-invalid' },
      { text: '代码编辑器和正则表达式', link: '/editor-and-regular' },
      { text: '廖雪峰 GitHub 教程笔记', link: '/github' },
    ],
  },
  {
    text: '算法学习',
    base: '/tech/algorithm',
    items: [
      { text: '二分查找', link: '/binary-search' },
    ],
  },
  {
    text: '其他技术',
    base: '/tech/other',
    items: [
      { text: 'Markdown 入门手册', link: '/markdown' },
      { text: 'Markdown 进阶技巧', link: '/markdown-advanced' },
      { text: 'VS Code 环境配置', link: '/vscode-config' },
      { text: 'VS Code 扩展收集', link: '/vscode-extensions' },
      { text: 'VS Code 图床扩展 PicGo 配置', link: '/vscode-picgo' },
      { text: 'macOS 常用浏览器使用说明', link: '/browser-instructions' },
      { text: '远程主机不满足运行 VS Code 服务器的先决条件', link: '/vscode-remote-connection-failed' },
    ],
  },
]

const life: DefaultTheme.SidebarItem[] = [
  {
    text: '健康指南',
    items: [
      { text: '高尿酸血症与痛风指南', link: '/life/gout-hua-guideline' },
    ],
  },
  {
    text: 'Windows',
    items: [
      { text: 'NSSM 使用说明', link: '/life/nssm.md' },
    ],
  },
  {
    text: 'macOS',
    items: [
      { text: 'macOS 允许安装任何来源软件', link: '/life/mac-app-corruption-issue' },
      { text: 'Mac Dock Bar 易用性调整', link: '/life/mac-dock-bar' },
      { text: 'Homebrew 安装与使用', link: '/life/homebrew-guide' },
      { text: '快速查询 Mac 磁盘信息', link: '/life/mac-query-disk-info' },
    ],
  },
  {
    text: '生活分享',
    items: [
      { text: '使用 Docker 搭建 Minecraft 服务端', link: '/life/minecraft-server-docker' },
      { text: '英语单词后缀 -er', link: '/life/er' },
      { text: '【视频笔记】租房防骗避坑指南', link: '/life/renting-guide' },
      { text: 'Keychron K2 键盘使用说明', link: '/life/keychron-k2' },
      { text: '珂芝 K75 Lite 说明书', link: '/life/kzzi-k75-lite' },
    ],
  },
  {
    text: '美食笔记',
    items: [
      {
        text: '🍅番茄炖牛腩',
        link: '/life/stewed-beef-brisket-with-tomato',
      },
    ],
  },
  {
    text: '沧海遗珠',
    items: [
      {
        text: '网管',
        link: '/life/internet-cafe-administrator',
      },
      {
        text: '小张和小丽',
        link: '/life/xiaozhang-xiaoli',
      },
    ],
  },
]

export default {
  '/tech': tech,
  '/life': life,
}
