import type { DefaultTheme } from 'vitepress'

const navs: DefaultTheme.NavItem[] = [
  { text: '首页 HOME', link: '/' },
  { text: '技术 TECH', link: '/tech/' },
  { text: '日常 LIFE', link: '/life/gout-hua-guideline' },
  {
    text: '工具 TOOL',
    items: [
      { text: 'Homebrew Search', link: 'https://brew.in-x.cc/', target: '_blank' },
      { text: 'Crontab Guru', link: 'https://crontab.in-x.cc/', target: '_blank' },
    ],
  },
]

export default navs
