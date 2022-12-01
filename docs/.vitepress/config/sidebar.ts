import { DefaultTheme } from "vitepress";

export default [
  {
    text: "文章介绍",
    items: [{ text: "README", link: "/article/" }],
  },
  {
    text: "前端相关",
    collapsible: true,
    items: [
      {
        text: "JavaScript 遍历数组的方法",
        link: "/article/js-traversal-array.md",
      },
      {
        text: "YAML 入门教程",
        link: "/article/yaml.md",
      },
      {
        text: "NPM 配置文件 .npmrc",
        link: "/article/npmrc.md",
      },
      {
        text: "ClashX 局域网连接 Allow LAN",
        link: "/article/clashx-allow-lan.md",
      },
      {
        text: "Electron 打包网站项目",
        link: "/article/electron-builder.md",
      },
      {
        text: "Vue3 + Vite + Tailwind CSS",
        link: "/article/tailwindcss-vue3-vite.md",
      },
      {
        text: "TypeScript 项目中使用 import 导入 JSON 文件",
        link: "/article/ts-import-json.md",
      },
      {
        text: "VS Code 图床扩展 PicGo 配置",
        link: "/article/vscode-picgo.md",
      },
      {
        text: "VS Code 扩展收集",
        link: "/article/vscode-extensions.md",
      },
      {
        text: "Github 远程库连接超时解决方案",
        link: "/article/github-timeout.md",
      },
      {
        text: ".gitignore 文件不生效的解决方案",
        link: "/article/gitignore-invalid.md",
      },
      {
        text: "代码编辑器和正则表达式",
        link: "/article/editor-and-regular.md",
      },
      {
        text: "英语单词后缀 -er",
        link: "/article/er.md",
      },
      {
        text: "廖雪峰 GitHub 教程笔记",
        link: "/article/github.md",
      },
      {
        text: "macOS 常用浏览器使用说明",
        link: "/article/browser-instructions.md",
      },
      {
        text: "【视频笔记】租房防骗避坑指南",
        link: "/article/renting-guide.md",
      },
      {
        text: "Markdown 入门手册",
        link: "/article/markdown.md",
      },
    ],
  },
  {
    text: "生活分享",
    collapsible: true,
    items: [
      { text: "Keychron K2 键盘使用说明", link: "/article/keychron-k2.md" },
    ],
  },
] as DefaultTheme.Sidebar;
