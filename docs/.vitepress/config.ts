import { defineConfig } from "vitepress";
import nav from "./nav";
import socialLinks from "./socialLinks";
import sidebar from "./sidebar";

export default defineConfig({
  base: "/vitepress",
  lang: "zh-CN",
  title: "Liang INX",
  description: "描述",
  // titleTemplate: "标题模板",
  appearance: true, // true | false | "dark"
  lastUpdated: true, // 显示更新时间（Git 提交时间）
  themeConfig: {
    // logo: "/favicon.ico",
    nav,
    socialLinks,
    sidebar,
  },
});
