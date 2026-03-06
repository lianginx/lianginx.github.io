---
tags:
  - markdown
  - html
---

# Markdown 高级技巧

:::tip 提示
学习基础语法请查看 [Markdown 入门手册](@/../markdown) 文档。
:::

这篇文档收集一些不常用但比较有趣的 Markdown 扩展技巧，以备不时之需。

## 下划线

方法一：使用 HTML 标签。

```html
<u>下划线</u>
```

<u>下划线</u>

方法二：使用 LaTeX 数学公式语法，使用时需开启 LaTeX 支持。

```latex
$\underline{下划线}$
```

$\underline{下划线}$

## 文本高亮

```markdown
==高亮内容==
```

==此语法不属于 Markdown 标准语法==，在某些地方可能不支持。

## 文本居中

```html
<center>Hello, World!</center>
```

<center>Hello, World!</center>

## 嵌入视频/页面

方法一：使用 html5 `vidio` 标签。

```html
<!-- mp4 格式 -->
<video id="video" controls="" preload="none" poster="封面">
      <source id="mp4" src="mp4 格式视频" type="video/mp4">
</videos>

<!-- webm 格式 -->
<video id="video" controls="" preload="none" poster="封面">
      <source id="webm" src="webm 格式视频" type="video/webm">
</videos>

<!-- ovg 格式 -->
<video id="video" controls="" preload="none" poster="封面">
      <source id="ogv" src="ogv 格式视频" type="video/ogv">
</videos>
```

方法二：使用 `iframe` 标签。

以哔哩哔哩分享嵌入式视频为例，下面是视频链接格式：

```markdown
https://player.bilibili.com/player.html?bvid=[视频BV号]
```

最终视频呈现效果如下：

```html
<iframe
  src="https://player.bilibili.com/player.html?bvid=BV1ur4y1D7AX"
  scrolling="no"
  border="0"
  frameborder="no"
  framespacing="0"
  allowfullscreen="true"
  width="100%"
  height="500"
>
</iframe>
```

<iframe
src="https://player.bilibili.com/player.html?bvid=BV1ur4y1D7AX"
scrolling="no"
border="0"
frameborder="no"
framespacing="0"
allowfullscreen="true"
width="100%"
height=500>
</iframe>
