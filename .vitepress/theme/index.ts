import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import PhotoWall from './components/PhotoWall.vue'
import TagGroup from './components/TagGroup.vue'
import Layout from './Layout.vue'
import './style.css'

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    app
      .component('TagGroup', TagGroup)
      .component('PhotoWall', PhotoWall)
  },
} satisfies Theme
