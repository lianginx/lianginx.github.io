---
tags:
  - javascript
---

# JavaScript 遍历数组的方法

## 汇总

| 函数                            | 简介                                                                                              | 返回值          |
| ------------------------------- | ------------------------------------------------------------------------------------------------- | --------------- |
| [for/for…of…](#for-for-of)      | 遍历数组                                                                                          |                 |
| [forEach](#foreach)             | 遍历数组，无返回值                                                                                | undefined       |
| [map](#map)                     | 遍历数组，返回一个由回调函数返回值组成的新数组                                                    | array           |
| [flatMap](#flatmap)             | 先将二维数组转换为一维数组并去除空项，然后再遍历数组，返回一个由回调函数返回值组成的新数组        | array           |
| [filter](#filter)               | 遍历数组，返回判断条件为 true 的元素组成的新数组                                                  | array           |
| [find](#find)                   | 遍历数组，返回判断条件为 true 的第一个元素，若没有则返回 undefined                                | any / undefined |
| [findLast](#findlast)           | 遍历数组，返回判断条件为 true 的最后一个元素，若没有则返回 undefined                              | any / undefined |
| [findIndex](#findindex)         | 遍历数组，返回判断条件为 true 的第一个元素的索引，若没有则返回 -1                                 | number          |
| [findLastIndex](#findlastindex) | 遍历数组，返回判断条件为 true 的最后一个元素的索引，若没有则返回 -1                               | number          |
| [reduce](#reduce)               | 默认从索引 1 开始遍历数组，每次执行时，将上一次回调函数执行结果作为参数传入，最后返回最终执行结果 | any             |
| [reduceRight](#reduceright)     | 同 reduce 函数，以从末尾向开头顺序遍历数组                                                        | any             |
| [some](#some)                   | 遍历数组，当条件判断为 true 时终止并返回 true，空数组则始终返回 false                             | bool            |
| [every](#every)                 | 遍历数组，当条件判断为 false 时终止并返回 fase，空数组则始终返回 true                             | bool            |

## for/for…of…

```js
// for

let str = ''

for (let i = 0; i < 9; i++)
  str = str + i

console.log(str) // "012345678"
```

```js
// for…of…

const arr = ['a', 'b', 'c']

for (const element of arr)
  console.log(element)

// "a"
// "b"
// "c"
```

## forEach

等同与 `for/for…of…`，无返回值。

```js
const array1 = ['a', 'b', 'c']

array1.forEach(element => console.log(element))

// "a"
// "b"
// "c"
```

## map

遍历数组并返回一个新数组，新数组由原数组中的每个元素都调用一次回调函数后的返回值组成。

```js
const array1 = [1, 4, 9, 16]

const map1 = array1.map(x => x * 2)

console.log(map1) // [2, 8, 18, 32]
```

## flatMap

先将二维数组转换为一维数组并去除空项，然后再遍历数组，返回一个由回调函数返回值组成的新数组。

```js
const arr1 = [1, 2, [3], [4, 5], 6, []]

const flattened = arr1.flatMap(num => num)

console.log(flattened) // [1, 2, 3, 4, 5, 6]
```

## filter

遍历数组，返回判断条件为 true 的元素组成的新数组，如果没有任何元素为 true，则返回空数组。

```js
const words = [
  'spray',
  'limit',
  'elite',
  'exuberant',
  'destruction',
  'present',
]

const result = words.filter(word => word.length > 6)

console.log(result) // ["exuberant", "destruction", "present"]
```

## find

遍历数组，返回判断条件为 true 的第一个元素，若没有则返回 undefined。

```js
const array1 = [5, 12, 8, 130, 44]

const found = array1.find(element => element > 10)

console.log(found) // 12
```

## findLast

遍历数组，返回判断条件为 true 的最后一个元素，若没有则返回 undefined。

```js
const array1 = [5, 12, 50, 130, 44]

const found = array1.findLast(element => element > 45)

console.log(found) // 130
```

## findIndex

遍历数组，返回判断条件为 true 的第一个元素的索引，若没有则返回 -1。

```js
const array1 = [5, 12, 8, 130, 44]

const index = array1.findIndex(element => element > 13)

console.log(index) // 3
```

## findLastIndex

遍历数组，返回判断条件为 true 的最后一个元素的索引，若没有则返回 -1。

```js
const array1 = [5, 12, 8, 130, 44]

const index = array1.findLastIndex(element => element > 45)

console.log(index) // 3
```

## reduce

函数：`array.reduce(callbackFn, initialValue?)`

未指定 `initialValue` 参数时，索引 0 的元素将作为初始值 `initialValue`，从索引 1 开始遍历数组，每次执行时，将上一次回调函数执行结果作为参数传入，最后返回最终执行结果 。

指定 `initialValue` 参数时，迭代器将从索引 0 开始，并将参数 `initialValue` 作为初始值传入回调函数。

```js
const array1 = [1, 2, 3, 4]

// 数组元素求和：0 + 1 + 2 + 3 + 4
const initialValue = 0
const sumWithInitial = array1.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  initialValue
)

console.log(sumWithInitial) // 10
```

## reduceRight

展示 `reduce` 与 `reduceRight` 之间的区别：

```js
const a = ['1', '2', '3', '4', '5']
const left = a.reduce((prev, cur) => {
  return prev + cur
})
const right = a.reduceRight((prev, cur) => {
  return prev + cur
})

console.log(left) // "12345"
console.log(right) // "54321"
```

## some

遍历数组，当条件判断为 true 时终止并返回 true，空数组则始终返回 false。

```js
const array = [1, 2, 3, 4, 5]

// 检查数组中是否有偶数
const isEven = array.some(element => element % 2 === 0)

console.log(isEven) // true
```

## every

遍历数组，当条件判断为 false 时终止并返回 fase，空数组则始终返回 true。

```js
const array1 = [1, 30, 39, 29, 10, 13]

const isBelow = array1.every(currentValue => currentValue < 40)

console.log(isBelow) // true
```
