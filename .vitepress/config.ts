import markdownItTextualUml from 'markdown-it-textual-uml'
import { defineConfig } from 'vitepress'
import { RssPlugin } from 'vitepress-plugin-rss'

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
  vite: {
    plugins: [RssPlugin({
      title: 'Liang\'s Blog',
      baseUrl: 'https://blog.in-x.cc',
      author: { name: 'Liang', email: 'liang@in-x.cc' },
      copyright: 'Copyright © 2022 Liang',
    })],
  },
})
