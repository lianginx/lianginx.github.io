import markdownItTextualUml from 'markdown-it-textual-uml'
import { defineConfig } from 'vitepress'

import nav from './config/nav'
import sidebar from './config/sidebar'
import socialLinks from './config/socialLinks'

export default defineConfig({
  base: '/',
  srcDir: 'src',
  lang: 'zh-CN',
  title: 'Liang\'s Blog',
  description: 'Liang\'s Blog',
  appearance: true,
  lastUpdated: true,
  head: [['link', { rel: 'icon', href: 'favicon.ico' }]],
  themeConfig: {
    outline: 'deep',
    outlineTitle: '目录',
    lastUpdatedText: '更新时间',
    docFooter: { prev: '上一篇', next: '下一篇' },
    nav,
    socialLinks,
    sidebar,
    search: { provider: 'local' },
  },
  markdown: {
    config: (md) => {
      md.use(markdownItTextualUml)
    },
  },
})
