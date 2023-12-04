import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import Doc from './layouts/Doc.vue'
import './style.css'

export default {
  extends: DefaultTheme,
  Layout: Doc,
} satisfies Theme
