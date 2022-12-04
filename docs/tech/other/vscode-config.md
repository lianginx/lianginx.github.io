---
tags:
  - vscode
---

# Visual Studio Code 环境配置

此文章旨在安装后快速配置出相对顺手的 Visual Studio Code 使用环境。

## 如何进入设置

进入设置有两种方式：

1. 按下快捷键 `command + ,` 进入可视化设置界面。
2. 按下快捷键 `command + shift + p` 输入 `settings json`，选择 `首选项：打开设置 (json)` 进入设置的 JSON 文件，或输入 `settings ui` 选择 `首选项：打开设置（ui）` 进入可视化设置界面。

在可视化设置界面顶部有搜索框，可以快速检索需要的设置项（大部分功能都有中文说明，所以支持中文关键字搜索）；

在 JSON 文件中，使用 `command + f` 文本搜索功能检索。

## 推荐设置

- `file.autoSave` - 开启自动保存。
  - `afterDelay` - 文档修改一秒钟后自动保存。
  - `onFocusChange` - 编辑器失去焦点时自动保存。
- `editor.guides.bracketPairs` - 开启彩色括号匹配。
- `editor.snippetSuggestions` - 选择 `top` 将代码片段置于代码提示首位。
- `editor.renderWhitespace` - 显示文档中的空白字符（空格/制表符）。
  - `boundary` - 显示除了字词中单个空格外的所有空白字符。
  - `all` - 显示所有空白字符。
- `editor.cursorSmoothCaretAnimation` - 启用平滑插入动画，开启后在编辑器中输入文字或移动光标会有很舒服的动画。
- `minimap.Enabled` - 禁用滚动条缩略图。
- `window.autoDetectColorScheme` - 开启根据系统主题自动切换浅色／深色主题。
  - `workbench.preferredDarkColor` - 设置深色模式主题。
  - `themeWorkbench.preferredLightColorTheme` - 设置浅色模式主题。
- `markdown.experimental.validate.enabled` - 开启 Markdown 引用链接有效性校验，链接失效时有下划曲线显示。
- `markdown.experimental.editor.pasteLinks.enabled` & `editor.experimental.pasteActions.enabled` - 开启这两个选项时，复制文件粘贴到 Markdown 自动插入为链接／图片语法格式。

### macOS 配置

- `workbench.action.openEditorAtIndex` - 配置切换标签页快捷键，默认为 `control + 1/2/3/……`，这与系统自带的切换桌面快捷键冲突，默认 `⌘ + 1/2/3/……` 是窗口分栏（没什么用），建议把切换标签页快捷键改成 `⌘`，更符合使用习惯。

## 字体

- `editor.fontFamily` - 输入字体名称设置显示的字体系列，需要电脑已安装对应字体，推荐几款免费开源的字体：
  - [霞鹜文楷](https://github.com/lxgw/LxgwWenKai) - 非常漂亮的开源中文字体，有等宽和非等宽两种字体格式。
  - [Fira Code](https://github.com/tonsky/FiraCode) - 优秀的连字英文字体，对程序员的使用场景做了非常多优化。
- `editor.fontLigatures` - 设置是否开启字体的连字功能，[了解什么是连字](https://zhuanlan.zhihu.com/p/28134371)。
