---
tags:
  - git
  - commit
  - npm
  - lint
---

# Commitlint 使用指南

## 简介

Commitlint 是一个用于检查 Git 提交信息的工具，通过检查提交信息是否符合规范，以提高代码库的可读性和维护性。

- 提供了一套规范化的检查规则，且支持自定义规则
- 与 Git 钩子集成，在创建提交时自动检查提交信息是否符合规范

## 安装

### 1. 安装并创建配置文件

```bash
# 安装 commitlint 和 commitlint 配置
npm install -D commitlint-cli commitlint-config-conventional
# 创建配置文件
echo "import '@commitlint/config-conventional'\n\nexport default {\n  extends: ['@commitlint/config-conventional'],\n}" > commitlint.config.js
```

::: details 检查最新提交

检查当前当前仓库最后一次提交记录是否符合规范，如果检查未通过，会提示错误信息。

```bash
npx commitlint --from HEAD~1 --to HEAD --verbose
# ✔   found 0 problems, 0 warnings
```
:::

### 2. 配置 git hooks

```bash
# 安装 husky
npm install -D husky
# 激活 git hooks
npx husky install
# 添加 commit-msg 钩子
npx husky add .husky/commit-msg  'npx --no -- commitlint --edit ${1}'
```

::: details 测试 Git Hooks

可以通过简单地提交来测试该钩子，如果配置正常，您应该会看到提交失败的提示。

```bash
git commit -m "foo: 这条提交将会失败"
```
:::

### 3. 配置 script prepare 

在 package.json 中增加 prepare 脚本，用于在安装依赖时自动安装 husky。

```json
{
  "scripts": {
    "prepare": "husky install"
    // other...
  }
}
```

## 使用

### 提交格式

> 注：`?` 表示可选，不输入 `scope` 时可省略圆括号。

```
type(scope?): subject
body?
footer?
```

### type

用于说明 commit 的类别，只允许使用下列值：

- build: 对项目构建系统或外部依赖项的更改。例如，修改构建脚本、配置文件等。
- chore: 非业务性的任务和更改。通常用于修改构建过程、辅助工具的代码，或者进行一些不涉及用户功能的工作。
- ci: 对持续集成 (Continuous Integration) 配置文件和脚本的更改。
- docs: 文档变更，包括但不限于 README 文件、文档生成器或注释的变更。
- feat: 新功能的添加。通常伴随着用户功能或其他明显的变更。
- fix: 修复 bug。
- perf: 改进性能的代码更改。
- refactor: 代码重构，不是修复 bug 也不是添加新功能的代码更改。
- revert: 撤销先前的提交。
- style: 与代码风格相关的更改，例如空格、格式化等，而不涉及功能性代码更改。
- test: 添加或修改测试。

### body & footer

`body` 用于提供更详细的说明，可以分成多行。

`footer` 用于提供一些与提交信息不直接相关的信息，可以分成多行。

```
feat: 防止请求竞争

引入一个请求ID和对最新请求的引用。忽略除最新请求外的所有传入响应。

移除用于解决竞争问题但现在已过时的超时机制。

参考：#123
```

### 重大修改

当仓库产生比较重大的修改时，例如删除了某个 API，或者改变了大量的 API，可以通过一下两种方式来表示：

#### type!

在提交信息的 `type` 后面添加 `!` 符号，表示该提交是重大更改。

```
feat!: 新增了新的 API，移除了旧的 API
```

`type` 可以是可选枚举值的任意一个。

#### BREAKING CHANGE

在提交信息的 `body` 中添加 `BREAKING CHANGE`，表示该提交是重大更改。

```
feat: 新增了新的 API

BREAKING CHANGE: 移除了旧的 API
```
