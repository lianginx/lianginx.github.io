---
tags:
  - yaml
  - json
---

# YAML 入门教程

YAML 是一种数据序列化语言，用于方便的读写配置文件，属于 JSON 的超集。

YAML 语言规则如下：

- 大小写敏感
- 键值之间（冒号后）必须有至少一个空格
- 使用空格缩进表示层级关系，不允许使用制表符
- 缩进的空格数目不重要，只要相同层级的元素左侧对齐即可
- 文件使用 `.yaml` 或 `.yml` 后缀结尾
- 使用 `#` 表示注释

:::tip 在线工具
使用 [JS-YAML 在线解析工具](https://nodeca.github.io/js-yaml/) 在线测试语法，将 YAML 转为 JavaScript 对象。
:::

## 入门

YAML 可以完全替代 JSON 用来储存简单复杂各种数据结构：

### 对象

```yaml
name: Tom
age: 18
```

```yaml
{name: Tom, age: 18}
```

↓ 等同于 JSON ↓

```json
{
  "name": "Tom",
  "age": 18
}
```

### 数组

```yaml
games:
  - lol
  - ow2
  - wow
```

```yaml
games: [lol, ow2, wow]
```

↓ 等同于 ↓

```json
{
  "games": ["lol", "ow2", "wow"]
}
```

### 纯量

纯量是最基本的、不可再分的值，即基本的数据类型：

- 字符串
- 整数
- 浮点数
- 布尔值
- Null
- 日期
- 时间

```yaml
# 单行字符串
name: Liang
description: 'Hello, World!'

# 双引号不会对特殊字符转义
# { "s1":"内容\\n字符串", "s2":"内容\n字符串" }
s1: '内容\n字符串'
s2: "内容\n字符串"

# 字符串换行会转换成 1 个空格
# { "address":"Shanghai, China" }
address: Shanghai,
  China
```

```yaml
# 保留换行符
# { "say":"I!\nAM!\nIRON MAN!\n" }
say: |
  I!
  AM!
  IRON MAN!

# 忽略文中换行，保留末尾换行
# { "talk":"Good morning! everyone!\n" }
talk: >
  Good morning!
  everyone!

# + 保留末尾换行，- 删除末尾换行
# { "p1":"Tom\n", "p2":"Jerry\n", "p3":"Spike" }
p1: |
  Tom
p2: |+
  Jerry
p3: |-
  Spike

# 插入 HTML 标记
# { "html":"<p style=\"color: red\">\n  line.\n</p>\n" }
html: |
  <p style="color: red">
    line.
  </p>
```

```yaml
# 整数/浮点数
age: 18
height: 1.72

# 布尔值
live: true # TRUE/True
sleep: false # FALSE/False

# Null
girlFriend: null
wife: ~

# 日期/时间（ISO 8601 格式）
date: 2022-11-24
datetime: 2022-11-24T16:20:03.721Z
```

## 复杂结构

JSON 可以实现的数据结构 YAML 都可以，且可以增加注释，对非开发人员更友好：

```yaml
name: Liang
languages:
  - JavaScript
  - CSS
  - HTML
  - C#
address: 中国 上海
description: |
  大家好！
  我是练习时长两年半的个人练习生！
  Music！
friends:
  - name: Kiriya
    address: 中国 四川
    description: 术术拉拉邦邦越共探头.gif
  - name: Li Zhenwang
    address: 中国 广东
    description: 资深闲鱼慈善家
```

```json
{
  "name": "Liang",
  "languages": ["JavaScript", "CSS", "HTML", "C#"],
  "address": "中国 上海",
  "description": "大家好！\n我是练习时长两年半的个人练习生！\nMusic！\n",
  "friends": [
    {
      "name": "Kiriya",
      "address": "中国 四川",
      "description": "术术拉拉邦邦越共探头.gif"
    },
    {
      "name": "Li Zhenwang",
      "address": "中国 广东",
      "description": "资深闲鱼慈善家"
    }
  ]
}
```

## 参考文档

- [菜鸟教程](https://www.runoob.com/w3cnote/yaml-intro.html)
- [YAML 语言教程](https://www.ruanyifeng.com/blog/2016/07/yaml.html)
- [YAML 备忘清单](https://wangchujiang.com/reference/docs/yaml.html)
