---
tags:
  - electron
---

# 如何使用 Electron 打包网站项目

## 前置依赖项

- Node.js + NPM
- Git
- yarn（非必要）

## 项目打包流程

> **温馨提示**  
> 只能打包成你当前操作系统可执行的文件，Windows 会打包成 `exe` 文件，macOS 会打包成 `dmg/app`。

克隆 electron 官方示例项目：

```bash
git clone https://github.com/electron/electron-quick-start
```

在项目根目录创建 `.npmrc` 文件，将 NPM 源替换为淘宝源，防止安装 electron 时超时：

```ini
registry=https://registry.npmmirror.com
electron_mirror=https://npmmirror.com/mirrors/electron/
chromedriver_cdnurl=https://npmmirror.com/mirrors/chromedriver
```

初始化项目：

```bash
npm i
# or
yarn
```

安装第三方打包工具 `electron-builder`，打包更方便：

```bash
npm i -D electron-builder
# or
yarn add -D electron-builder
```

修改 `package.json` 文件，增加 `build` 命令:

```json
{
  "scripts": {
    "start": "electron .",
    "build": "electron-builder"
  }
}
```

运行 `yarn build` or `npm run build` 进行打包，打包后的可执行文件在项目根目录的 `/dist` 文件夹中。

## Electron 项目配置

### 设置项目默认主页

在根目录 `mian.js` 文件中找到当前行：

```js
mainWindow.loadFile('/index.html')
```

项目默认运行根目录下的 `/index.html` 文件，这里可以替换成 `loadURL` 默认打开一个链接：

```js
mainWindow.loadURL('https://www.baidu.com/')
```

### 设置窗口默认状态（窗口/全屏）

在根目录 `mian.js` 文件中找到当前代码段：

```js
const mainWindow = new BrowserWindow({
  width: 800,
  height: 600,
  webPreferences: {
    preload: path.join(__dirname, 'preload.js'),
  },
})
```

项目默认以 `800x600` 像素的窗口模式打开，这里可以修改成默认全屏运行：

```js
const mainWindow = new BrowserWindow({ show: false, autoHideMenuBar: true })
mainWindow.fullScreen = true
mainWindow.show()
```
