---
tags:
  - typescript
  - json
---

# TypeScript 项目中使用 import 导入 JSON 文件

## 项目结构

**目录结构**

```
.
├── assets
│   └── config.json  // 要导入的 json 配置文件
├── package.json
├── src
│   └── index.ts     // 导入到当前 ts 文件中使用
└── tsconfig.json    // typescript 配置文件
```

**JSON 文件**

```json
// assets/config.json

{
  "name": "demo-ts-import-json",
  "type": "ts",
  "desc": "TypeScript 项目中使用 import 导入 JSON 文件"
}
```

**TypeScript 文件**

```javascript
// src/index.ts

import {} from "assets/config.json";
import config1 from "assets/config.json";
import * as config2 from "assets/config.json";

// 全部报错：找不到模块“assets/config.json”。请考虑使用 "--resolveJsonModule" 导入带 ".json" 扩展的模块。ts(2732)
```

一般情况下，我们在 TypeScript 文件中是不能直接使用 `import` 导入 JSON 文件的。

## 解决方案

打开 `tsconfig.json` 增加 `resolveJsonModule` 选项，启用导入 JSON 文件功能：

```json
{
  "compilerOptions": {
    // ……
    "baseUrl": "./", // 设置基本路径
    "resolveJsonModule": true // 启用导入 JSON 文件功能
  }
}
```

回到 `index.ts` 文件中，使用 `import` 导入 `config.json` 文件：

```javascript
import config from "assets/config.json";          // 全部导入
import { name, desc } from "assets/config.json";  // 按需导入

console.log(config.name); // "demo-ts-import-json"
console.log(desc);        // "TypeScript 项目中使用 import 导入 JSON 文件"
```
