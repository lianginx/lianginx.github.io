// 顶部导航

import { DefaultTheme } from "vitepress";

export default [
  { text: "首页 HOME", link: "/" },
  { text: "技术 TECH", link: "/tech/" },
  { text: "日常 LIFE", link: "/life/" },
  // { text: "关于我 ME", link: "/readme/about.md" },
  {
    text: "工具",
    items: [
      { text: "D-Utils", link: "http://server.in-x.cc/" },
      { text: "Tools 工具箱", link: "https://tools.in-x.cc/" },
    ],
  },
] as DefaultTheme.NavItem[];
