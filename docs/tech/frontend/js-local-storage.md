---
tags:
  - localStorage
  - sessionStorage
---

# 本地存储：localStorage 和 sessionStorage 的差异

## 简介

本地存储是一种在浏览器端存储数据的技术，它允许在不需要服务器支持的情况下，将数据保存在用户的本地浏览器中。

localStorage 和 sessionStorage 是 HTML5 引入的两个新API，它们都提供了在客户端存储数据的方式。他们都是基于键值对存储，可以用于在客户端存储字符串、数字、对象等类型的数据，与 Cookie 不同，它们不会被上传到服务端。

然而，两者之间还存在一些差异，主要在以下几个方面：

1. 存储时效性：localStorage 存储的数据没有过期时间，除非用户手动清除浏览器缓存或者使用代码删除；而 sessionStorage 存储的数据在当前会话结束后就会被清除。

2. 存储大小限制：两者都有存储大小限制，一般为5MB左右，但具体大小限制可能因浏览器而异。

3. 数据共享性：localStorage 保存在本地浏览器中当前域名的作用域下，同域名不同的页面或标签页都可以访问到，而 sessionStorage 只在当前页面或标签页中有效。

![localstorage-sessionstorage-scope.excalidraw](/img/localstorage-sessionstorage-scope.excalidraw.png)

## 如何使用

使用 localStorage 和 sessionStorage 非常简单且一致，只需要通过 JavaScript 的 localStorage 和 sessionStorage 对象调用相应的方法即可。

### 存储数据

```js
// 存储数据到 localStorage
localStorage.setItem('key', 'value');

// 存储数据到 sessionStorage
sessionStorage.setItem('key', 'value');
```

### 获取数据

```js
// 从 localStorage 中获取数据
const valueFromLocalStorage = localStorage.getItem('key');

// 从 sessionStorage 中获取数据
const valueFromSessionStorage = sessionStorage.getItem('key');
```

### 删除数据

```js
// 从 localStorage 中删除指定的键值对
localStorage.removeItem('key');

// 从 sessionStorage 中删除指定的键值对
sessionStorage.removeItem('key');
```

## 应用场景

### 1. 记住用户登录状态

在用户登录成功后，可以使用 localStorage 或 sessionStorage 存储 token 或其他标识符，以便在用户下次访问时自动登录。

使用 localStorage 可以长期存储用户信息，即使浏览器关闭也不会丢失。而 sessionStorage 存储的数据只在当前会话中有效，当浏览器关闭后就会被清除。

### 2. 缓存数据

对于一些经常需要获取的数据，可以使用 localStorage 进行缓存，以便加快网站或应用程序的加载速度。例如，在一个电商网站中，可以使用 localStorage 存储用户的购物车信息、收货地址等常用数据，从而避免每次重新加载页面时都需要从服务器获取这些数据，提高用户体验。

### 3. 记住用户偏好设置

在用户进行一些个性化设置后，可以使用 localStorage 存储这些偏好设置，以便在下次访问时自动应用。例如，在一个新闻网站中，用户可以选择自己感兴趣的新闻分类，并将其存储到 localStorage 中，从而下次访问时直接显示用户所感兴趣的内容。

### 4. 存储表单数据

当用户填写表单时，可以使用 sessionStorage 存储表单数据，以便在用户重新加载页面或回退时恢复表单数据。而在需要长期存储数据的情况下，可以使用 localStorage。

localStorage 和 sessionStorage 都是 HTML5 中新增的本地存储方案，它们都可以在客户端保存键值对数据，并且可以被同源页面共享访问。但是它们之间还是有一些差异的。

## 总结

本文主要介绍了本地存储方案中的 localStorage 和 sessionStorage，它们的差异和使用场景。

两者相似又具有差异性的特性，是现代web开发中不可或缺的一部分，使得我们可以在业务中灵活运用它们来高效存取用户数据，提升用户体验。