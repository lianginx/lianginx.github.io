// .vitepress/theme/index.js
import DefaultTheme from "vitepress/theme";
import Doc from "./layouts/Doc.vue";

export default {
  ...DefaultTheme,
  Layout: Doc,
};
