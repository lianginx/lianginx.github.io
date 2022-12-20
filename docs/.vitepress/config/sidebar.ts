import { DefaultTheme } from "vitepress";
import bookSidebar from "../../book/category";

export default {
  "/tech/": tech(),
  "/life/": life(),
  "/book/": bookSidebar,
} as DefaultTheme.Sidebar;

function tech(): DefaultTheme.SidebarGroup[] {
  return [
    {
      text: "前言",
      items: [{ text: "README", link: "/tech/" }],
    },
    {
      text: "前端相关",
      collapsible: true,
      items: [
        {
          text: "JavaScript 遍历数组的方法",
          link: "/tech/frontend/js-traversal-array.md",
        },
        {
          text: "NPM 配置文件 .npmrc",
          link: "/tech/frontend/npmrc.md",
        },
        {
          text: "Electron 打包网站项目",
          link: "/tech/frontend/electron-builder.md",
        },
        {
          text: "Vue3 + Vite + Tailwind CSS",
          link: "/tech/frontend/tailwindcss-vue3-vite.md",
        },
        {
          text: "TypeScript 项目中使用 import 导入 JSON 文件",
          link: "/tech/frontend/ts-import-json.md",
        },
      ],
    },
    {
      text: "开发相关",
      collapsible: true,
      items: [
        {
          text: "YAML 入门教程",
          link: "/tech/dev/yaml.md",
        },

        {
          text: "Github 远程库连接超时解决方案",
          link: "/tech/dev/github-timeout.md",
        },
        {
          text: ".gitignore 文件不生效的解决方案",
          link: "/tech/dev/gitignore-invalid.md",
        },
        {
          text: "代码编辑器和正则表达式",
          link: "/tech/dev/editor-and-regular.md",
        },
        {
          text: "廖雪峰 GitHub 教程笔记",
          link: "/tech/dev/github.md",
        },
      ],
    },
    {
      text: "其他技术",
      collapsible: true,
      items: [
        {
          text: "Markdown 入门手册",
          link: "/tech/other/markdown.md",
        },
        {
          text: "Markdown 进阶技巧",
          link: "/tech/other/markdown-advanced.md",
        },
        {
          text: "VS Code 环境配置",
          link: "/tech/other/vscode-config.md",
        },
        {
          text: "VS Code 扩展收集",
          link: "/tech/other/vscode-extensions.md",
        },
        {
          text: "VS Code 图床扩展 PicGo 配置",
          link: "/tech/other/vscode-picgo.md",
        },
        {
          text: "macOS 常用浏览器使用说明",
          link: "/tech/other/browser-instructions.md",
        },
        {
          text: "ClashX 局域网连接 Allow LAN",
          link: "/tech/other/clashx-allow-lan.md",
        },
      ],
    },
  ];
}

function life(): DefaultTheme.SidebarGroup[] {
  return [
    {
      text: "前言",
      items: [{ text: "README", link: "/life/" }],
    },
    {
      text: "生活分享",
      collapsible: true,
      items: [
        {
          text: "使用 Docker 搭建 Minecraft 服务端",
          link: "/life/minecraft-server-docker.md",
        },
        {
          text: "英语单词后缀 -er",
          link: "/life/er.md",
        },
        {
          text: "【视频笔记】租房防骗避坑指南",
          link: "/life/renting-guide.md",
        },
        {
          text: "Keychron K2 键盘使用说明",
          link: "/life/keychron-k2.md",
        },
      ],
    },
    {
      text: "健康指南",
      collapsible: true,
      items: [
        { text: "高尿酸血症与痛风指南", link: "/life/gout-hua-guideline.md" },
      ],
    },
    {
      text: "沧海遗珠",
      collapsible: true,
      items: [
        {
          text: "网管",
          link: "/life/internet-cafe-administrator.md",
        },
        {
          text: "小张和小丽",
          link: "/life/xiaozhang-xiaoli.md",
        },
      ],
    },
  ];
}
