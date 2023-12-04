---
tags:
  - nuxt3
  - echarts
---

# Nuxt 3 如何使用 ECharts 图表

> 参考： [Vue Echarts Nuxt3]( https://stackblitz.com/edit/github-unqktr )

## 安装依赖

```bash
yarn add echarts vue-echarts
```

## 通用/服务端渲染

如果项目使用通用/服务端 [渲染模式](https://nuxt.com.cn/docs/guide/concepts/rendering)（Nuxt 3 默认渲染模式），修改 `nuxt.config.ts` 配置文件，使用 [Babel](https://www.babeljs.cn/docs/) 转译 `echarts` 依赖项，未使用服务端渲染不用转译。

```ts
export default defineNuxtConfig({
  // ……
  build: {
    transpile: [/echarts/],
  },
})
```

另外，在使用图表组件时也须将组件放在 [`<ClientOnly>`](https://nuxt.com.cn/docs/api/components/client-only#clientonly) 标签中使用：

```html
<ClientOnly>
  <VChart :option="option"/>
</ClientOnly>
```

## 开始使用

以下是在 Nuxt 3 服务端渲染项目中，封装的一个饼图组件示例：

```vue
<script setup>
import { ref } from 'vue'

// 引入 vue-echarts 组件
import VChart, { THEME_KEY } from 'vue-echarts'

// 引入 echarts 核心模块，核心模块提供了 echarts 使用必须要的接口。
import { use } from 'echarts/core'
// 引入 CanvasRenderer 或者 SVGRenderer 是，这必须的一步
import { CanvasRenderer } from 'echarts/renderers'
// 引入饼图
import { PieChart } from 'echarts/charts'
// 按需引入组件
import {
  LegendComponent,
  TitleComponent,
  TooltipComponent,
} from 'echarts/components'

// 注册引入的组件
use([
  CanvasRenderer,
  PieChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
])

// 设置黑暗模式主题
provide(THEME_KEY, 'dark')

// 图表数据
const option = ref({
  title: {
    text: 'Traffic Sources',
    left: 'center',
  },
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b} : {c} ({d}%)',
  },
  legend: {
    orient: 'vertical',
    left: 'left',
    data: ['Direct', 'Email', 'Ad Networks', 'Video Ads', 'Search Engines'],
  },
  series: [
    {
      name: 'Traffic Sources',
      type: 'pie',
      radius: '55%',
      center: ['50%', '60%'],
      data: [
        { value: 335, name: 'Direct' },
        { value: 310, name: 'Email' },
        { value: 234, name: 'Ad Networks' },
        { value: 135, name: 'Video Ads' },
        { value: 1548, name: 'Search Engines' },
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)',
        },
      },
    },
  ],
})
</script>

<template>
  <div>
    <!-- 客户端组件 -->
    <ClientOnly fallback-tag="div" fallback="Loading comments...">
      <VChart class="chart" :option="option" />
    </ClientOnly>
  </div>
</template>

<style scoped>
.chart {
  height: 100vh;
}
</style>
```

## 相关链接

### ECharts

- [API 文档](https://echarts.apache.org/zh/option.html)
- [全部图表示例](https://echarts.apache.org/examples/zh/index)
- [配置项手册](https://echarts.apache.org/zh/option.html)
- [扩展下载](https://echarts.apache.org/zh/download-extension.html)
- [主题下载](https://echarts.apache.org/zh/download-theme.html)

### Vue-ECharts

- [使用文档](https://github.com/ecomfe/vue-echarts)
- [全部示例](https://vue-echarts.dev/)
