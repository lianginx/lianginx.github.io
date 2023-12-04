---
tags:
  - indexedDB
  - javascript
  - typescript
  - nodejs
---

# indexedDB

## 简介

Dexie.js 是一款流行的客户端 JavaScript 库，它提供了一个简单而优雅的 API，用于操作 indexedDB，一种强大的基于浏览器的数据库系统。使用 Dexie.js，您可以轻松存储和检索数据，而无需直接处理 indexedDB 的复杂性。

本教程将介绍使用 Dexie.js 的基础知识，包括安装、创建数据库实例、定义对象存储区和索引、向数据库添加数据、更新数据、查询数据和删除数据。

如果你想先了解 indexedDB 基础可以学习 [IndexedDB 中文教程](https://www.tangshuang.net/3735.html)，这篇文章详细介绍了 IndexedDB 的基础知识和原生 API 使用方法，非常推荐！

## 安装

您可以使用 npm 或 yarn 安装 Dexie.js：

```bash
npm install dexie
```

```bash
yarn add dexie
```

## 快速开始

### JavaScript

```js
// 导入
const Dexie = require('dexie')

// 创建并连接数据库实例
const db = new Dexie('myDatabase')

// 指定版本，创建对象仓库和索引
db.version(1).stores({
  friends: 'name, age', // 第一个索引将被作为主键
})

// 增加
db.friends.add({
  name: 'Liang',
  age: 18,
})

// 更新
db.friends.put({
  name: 'Liang', // 当主键存在时，将更新数据，不存在则创建
  age: 24,
})

// 查询
db.friends
  .get('Liang')
  .then((item) => {
    console.log(item?.age)
  })

// 删除
db.friends.delete('Liang')
```

### TypeScript

>此方法来自 [官方文档 > TypeScript](https://dexie.org/docs/Typescript)

在 TypeScript 中，当你定义了 `friends` 对象仓库后，并不能直接像在 JavaScrip 中一样直接操作对象仓库进行增删改查：

```js
db.friends.add({ // 报错：类型 “Dexie” 上不存在属性 “friends”
  name: 'Liang',
  age: 18
})
```

因为 TypeScript 无法检测到隐式定义的对象，此时可以使用 `Dexie.table()` 方法解决：

```ts
db.table('friends').add({
  name: 'Liang',
  age: 18
})
```

但是，这不仅麻烦，而且丢失了 TypeScript 特性：智能代码补全和类型安全校验。

此时，可以通过扩展一个 `Dexie` 子类，并在子类中定义其运行时才存在 `Table` 属性：

```ts
// 导入
import Dexie from 'dexie'

// 定义 friends 类型接口
interface IFriends {
  name: string
  age: number
}

class HappyDB extends Dexie {
  // 声明 friends 对象并指定其类型接口
  friends!: Dexie.Table<IFriends>

  constructor(databaseName: string) {
    super(databaseName)
    this.version(1).stores({
      friends: 'name, age',
    })
  }
}
```

> `!` 是 TypeScript 中的非空断言操作符，用于告诉编译器当前变量肯定是非空的，从而避免出现空值异常。

>`super()` 是在子类构造函数中调用其父类构造函数的关键字，用于实现继承。当子类调用 `super()` 时，它会执行父类的构造函数，以便对父类的属性和方法进行初始化。

现在你只需要像上面 JavaScrip 中一样使用它：

```ts
const db = new HappyDB('HappyDatabase')

db.version(1).stores({
  friends: 'name, age',
})

// ……
```

### Node.js

当你在 Node.js 环境中使用 Dexie.js 的时候，会提示缺少 indexedDB API：

>DexieError [DatabaseClosedError]: MissingAPIError 缺少 IndexedDB API。请访问 https://tinyurl.com/y2uuvskb 。

这是因为 indexedDB 是前端浏览器中的本地数据库，挂载在 window 上的全局对象，在 Node.js 中是没有的这个数据库和 API 的。

在 Dexie.js 报错信息提示的官方文档中，提供了解决方案：

- [将 Dexie 与 fakeIndexedDB 一起使用](https://github.com/dumbmatter/fakeIndexedDB#with-dexie-and-other-indexeddb-api-wrappers)
- [将 Dexie 与 IndexedDBShim 一起使用](https://github.com/indexeddbshim/IndexedDBShim#node-set-up)

`fakeIndexedDB` 是通过纯 JS 内存实现的 IndexedDB API，它的主要用途是在 Node.js 中测试依赖 IndexedDB 的代码。

`IndexedDBShim` 是一个可以在所有桌面和移动浏览器以及 Node.js 中使用的 indexedDB API。