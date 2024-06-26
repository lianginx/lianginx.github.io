import { defineConfig } from 'vitepress'
import markdownItTextualUml from 'markdown-it-textual-uml'

import nav from './config/nav'
import socialLinks from './config/socialLinks'
import sidebar from './config/sidebar'

export default defineConfig({
  base: '/',
  lang: 'zh-CN',
  title: 'Liang INX',
  description: 'Liang\'s Blog',
  appearance: true,
  lastUpdated: true,
  head: [
    ['link', { rel: 'icon', href: 'favicon.ico' }],
    ['meta', { name: 'baidu-site-verification', content: 'codeva-J1JeqOLlFK' }], // 百度站长验证
  ],
  themeConfig: {
    outline: 'deep',
    outlineTitle: '目录',
    lastUpdatedText: '更新时间',
    docFooter: {
      prev: '上一页',
      next: '下一页',
    },
    editLink: {
      pattern:
        'https://github.com/lianginx/lianginx.github.io/edit/master/docs/:path',
      text: '在 GitHub 上编辑本章内容',
    },
    nav,
    socialLinks,
    sidebar,
  },
  markdown: {
    config: (md) => {
      md.use(markdownItTextualUml)
    },
  },
})
