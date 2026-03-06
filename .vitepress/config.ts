import type { DefaultTheme } from 'vitepress'
import markdownItTextualUml from 'markdown-it-textual-uml'
import { defineConfig } from 'vitepress'
import { RssPlugin } from 'vitepress-plugin-rss'

export default defineConfig({
  title: 'Liang\'s Blog',
  description: 'Liang\'s Blog',
  srcDir: 'src',
  lang: 'zh-CN',
  appearance: true,
  lastUpdated: true,
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  sitemap: { hostname: 'https://blog.in-x.cc' },
  markdown: {
    config: (md) => {
      // 启用 Textual UML
      md.use(markdownItTextualUml)
    },
  },
  vite: {
    plugins: [
      // RSS 生成
      RssPlugin({
        title: 'Liang\'s Blog',
        baseUrl: 'https://blog.in-x.cc',
        author: { name: 'Liang', email: 'liang@in-x.cc' },
        copyright: 'Copyright © 2022 Liang',
      }),
    ],
  },
  themeConfig: {
    outline: 'deep',
    outlineTitle: '目录',
    lastUpdatedText: '更新时间',
    docFooter: { prev: '上一篇', next: '下一篇' },
    search: { provider: 'local' },
    nav: nav(),
    socialLinks: [
      { icon: 'mastodon', link: 'https://elk.zone/m.cmx.im/@lianginx' },
      { icon: 'x', link: 'https://twitter.com/Niujunliang' },
      { icon: 'github', link: 'https://github.com/lianginx' },
    ],
    sidebar: {
      tech: { base: '/tech/', items: sidebarTech() },
      life: { base: '/life/', items: sidebarLife() },
    },
  },
})

function nav(): DefaultTheme.NavItem[] {
  return [
    { text: '首页', link: '/' },
    {
      text: '技术分享',
      link: '/tech/save-password',
      activeMatch: '/tech/',
    },
    {
      text: '日常经验',
      link: '/life/gout-hua-guideline',
      activeMatch: '/life/',
    },
    {
      text: '工具箱',
      items: [
        { text: 'Homebrew Search', link: 'https://brew.in-x.cc/', target: '_blank' },
        { text: 'Crontab Guru', link: 'https://crontab.in-x.cc/', target: '_blank' },
      ],
    },
  ]
}

function sidebarTech(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: '全栈开发',
      items: [
        { text: '加密存储用户密码', link: 'save-password' },
        { text: 'JSON Web Token 鉴权', link: 'json-web-token' },
      ],
    },
    {
      text: '前端开发',
      items: [
        { text: 'Commitlint 使用指南', link: 'commitlint' },
        { text: 'Dexie.js 入门教程', link: 'dexie-js-guide' },
        { text: '本地存储：localStorage 和 sessionStorage 的差异', link: 'js-local-storage' },
        { text: 'JavaScript 遍历数组的方法', link: 'js-traversal-array' },
        { text: 'NPM 配置文件 .npmrc', link: 'npmrc' },
        { text: 'Electron 打包网站项目', link: 'electron-builder' },
        { text: 'Vue3 + Vite + Tailwind CSS', link: 'tailwindcss-vue3-vite' },
        { text: 'TypeScript 项目中使用 import 导入 JSON 文件', link: 'ts-import-json' },
        { text: 'Nuxt 3 如何使用 ECharts 图表', link: 'nuxt3-use-echarts' },
      ],
    },
    {
      text: '算法学习',
      items: [
        { text: '二分查找', link: 'binary-search' },
      ],
    },
    {
      text: '其他技术',
      items: [
        { text: 'YAML 入门教程', link: 'yaml' },
        { text: 'Github 远程库连接超时解决方案', link: 'github-timeout' },
        { text: '.gitignore 文件不生效的解决方案', link: 'gitignore-invalid' },
        { text: '代码编辑器和正则表达式', link: 'editor-and-regular' },
        { text: '廖雪峰 GitHub 教程笔记', link: 'github' },
        { text: 'Markdown 入门手册', link: 'markdown' },
        { text: 'Markdown 进阶技巧', link: 'markdown-advanced' },
        { text: 'VS Code 环境配置', link: 'vscode-config' },
        { text: 'VS Code 扩展收集', link: 'vscode-extensions' },
        { text: 'VS Code 图床扩展 PicGo 配置', link: 'vscode-picgo' },
        { text: 'macOS 常用浏览器使用说明', link: 'browser-instructions' },
        { text: '远程主机不满足运行 VS Code 服务器的先决条件', link: 'vscode-remote-connection-failed' },
      ],
    },
  ]
}

function sidebarLife(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: '健康指南',
      items: [
        { text: '高尿酸血症与痛风指南', link: 'gout-hua-guideline' },
      ],
    },
    {
      text: 'Windows',
      items: [
        { text: 'NSSM 使用说明', link: 'nssm.md' },
      ],
    },
    {
      text: 'macOS',
      items: [
        { text: 'macOS 允许安装任何来源软件', link: 'mac-app-corruption-issue' },
        { text: 'Mac Dock Bar 易用性调整', link: 'mac-dock-bar' },
        { text: 'Homebrew 安装与使用', link: 'homebrew-guide' },
        { text: '快速查询 Mac 磁盘信息', link: 'mac-query-disk-info' },
        { text: 'macOS Launchd 入门', link: 'mac-launchd' },
      ],
    },
    {
      text: '生活分享',
      items: [
        { text: '使用 Docker 搭建 Minecraft 服务端', link: 'minecraft-server-docker' },
        { text: '英语单词后缀 -er', link: 'er' },
        { text: '【视频笔记】租房防骗避坑指南', link: 'renting-guide' },
        { text: 'Keychron K2 键盘使用说明', link: 'keychron-k2' },
        { text: '珂芝 K75 Lite 说明书', link: 'kzzi-k75-lite' },
      ],
    },
    {
      text: '美食笔记',
      items: [
        {
          text: '🍅番茄炖牛腩',
          link: 'stewed-beef-brisket-with-tomato',
        },
      ],
    },
    {
      text: '沧海遗珠',
      items: [
        {
          text: '网管',
          link: 'internet-cafe-administrator',
        },
        {
          text: '小张和小丽',
          link: 'xiaozhang-xiaoli',
        },
      ],
    },
  ]
}
