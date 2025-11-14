import type { DefaultTheme } from 'vitepress'

const navs: DefaultTheme.NavItem[] = [
  { text: '首页', link: '/' },
  { text: '技术分享', link: '/tech/' },
  { text: '日常经验', link: '/life/gout-hua-guideline' },
  {
    text: '工具箱',
    items: [
      { text: 'Homebrew Search', link: 'https://brew.in-x.cc/', target: '_blank' },
      { text: 'Crontab Guru', link: 'https://crontab.in-x.cc/', target: '_blank' },
    ],
  },
]

export default navs
