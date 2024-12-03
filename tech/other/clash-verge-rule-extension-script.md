---
tags:
  - clash
---

# Clash Verge 全局扩展脚本

此脚本用于扩展 Clash Verge 的订阅规则，便于用户自定义规则，在订阅文件生成后自动合并自己的规则集。

通过该脚本，可以灵活地添加直连规则（如指定域名、IP 地址段、域名后缀或关键词）并将其优先于订阅的默认规则。

## 使用说明

复制脚本，粘贴到 Clash Verge 的 `订阅` -> `全局扩展脚本` 中保存。

将你需要直连的域名、IP、域名后缀或域名关键词添加到对应的分组中，保存后立即生效。

```js
// [!code focus:19]
// 直连 + 完整域名
const directDomain = []

// 直连 + IPv4
const directIPv4 = []

// 直连 + IPv6
const directIPv6 = []

// 直连 + 域名后缀
const directDomainSuffix = [
  'in-x.cc',
  't.co',
  'element-plus.org',
]

// 直连 + 域名关键词
const directDomainKeyword = []

// 无需关注以下脚本内容
function main(config, profileName) {
  config.rules = mergeRules(config.rules)
  return config
}

function mergeRules(rules) {
  return [
    ...directDomain.map(url => rule('DOMAIN', url)),
    ...directIPv4.map(url => rule('IP-CIDR', url)),
    ...directIPv6.map(url => rule('IP-CIDR6', url)),
    ...directDomainSuffix.map(url => rule('DOMAIN-SUFFIX', url)),
    ...directDomainKeyword.map(url => rule('DOMAIN-KEYWORD', url)),
    ...rules
  ]
}

function rule(type, url, action = 'DIRECT') {
  return `${type},${url},${action}`
}
```
