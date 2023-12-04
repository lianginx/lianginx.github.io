---
tags:
  - 算法
  - javascript
---

# 二分查找

## 简介

二分查找（Binary Search）是一种高效的搜索算法，用于在 **有序数组（或有序列表）** 中查找特定元素的位置。它将目标值与数组的中间元素进行比较，并根据比较结果缩小搜索范围，直到找到目标值或确定目标值不存在。

**二分查找的关键点是每次迭代都能将搜索范围缩小一半**，因此其时间复杂度为 `O(log n)` ，其中 n 是数组的长度。这使得二分查找成为处理大规模有序数据集的有效算法。

## 代码演示

二分查找的基本思想：

1. 首先，确定数组的左边界 `left` 和右边界 `right` ，通常初始时 `left = 0` ， `right = 数组长度 - 1` 。
2. 在每一次迭代中，计算中间元素的索引 `mid` ，使用 `floor` 函数将中间值可能的小数部分向下向下取整。
3. 将目标值与中间元素 `nums[mid]` 进行比较：
    - 如果 `nums[mid]` 等于目标值，表示找到了目标值，返回 `mid` 。
    - 如果 `nums[mid]` 大于目标值，表示目标值可能在左侧，更新查询边界 `right = mid - 1` 。
    - 如果 `nums[mid]` 小于目标值，表示目标值可能在右侧，更新查询边界 `left = mid + 1` 。
4. 重复执行步骤 2 和步骤 3，直到找到目标值或搜索范围为空（ `left > right` ），此时目标值不存在，返回 -1。

以下是 JavaScript 代码演示：

```js
function binarySearch(nums, target) {
  let left = 0
  let right = nums.length - 1

  while (left <= right) {
    const mid = Math.floor((left + right) / 2)

    if (nums[mid] === target)
      return mid
    else if (nums[mid] > target)
      right = mid - 1
    else
      left = mid + 1
  }

  return -1
}
```

## 进阶练习

[LeetCode - 搜索插入位置](https://leetcode.cn/problems/search-insert-position/)