import { DefaultTheme } from "vitepress";
import { BookCategory } from "../.vitepress/types";

export default <DefaultTheme.Sidebar>[
  {
    text: "分类",
    items: [
      { text: "全部", link: "/book/" },
      ...Object.keys(BookCategory).map((v) => ({
        text: v,
        link: `/book/${v}.md`,
      })),
    ],
  },
];
