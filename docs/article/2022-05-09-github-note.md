---
layout:     post
title:      "廖雪峰 GitHub 教程笔记"
#subtitle:   ""
date:       2022-05-09 09:00:00
author:     "Liang"
catalog:    true
header-style:   text
#header-img: "img/post-bg/hello-world.jpg"
#header-mask:  1
tags:
    - github
    - git
    - note
---

💡 Git 是目前世界上最先进的分布式版本控制系统。

## 安装 Git

- 官网下载：[https://git-scm.com/downloads](https://git-scm.com/downloads)
- 镜像下载：[https://gitee.com/mirror-cn/git-for-windows](https://gitee.com/mirror-cn/git-for-windows)
- 官方文档（简体中文）：[https://git-scm.com/book/zh/v2](https://git-scm.com/book/zh/v2)

**推荐跳过上面安装 Git，直接安装 Visual Studio Code，自带 Git 且可以使用 Github 账号登录，提供可视化版本管理界面和全中文命令说明。**

### 配置仓库的全局用户名和邮箱

安装完成后，在开始菜单里找到“Git”->“Git Bash”，蹦出一个类似命令行窗口的东西，就说明 Git 安装成功！

然后还需要最后一步设置，在命令行输入：

```
$ git config --global user.name "Your Name"
$ git config --global user.email "email@example.com"
```

注意 `git config` 命令的 `--global` 参数，用了这个参数，表示你这台机器上所有的 Git 仓库都会使用这个配置，当然也可以对某个仓库指定不同的用户名和 Email 地址。

## 一、创建版本库（仓库/repository）

你可以简单理解成一个目录，这个目录里面的所有文件都可以被 Git 管理起来，每个文件的修改、删除，Git 都能跟踪，以便任何时刻都可以追踪历史，或者在将来某个时刻可以“还原”。

### 在 Git Bash 中使用代码创建一个空目录（推荐）

使用 Windows 系统，为了避免遇到各种莫名其妙的问题，请确保目录名（包括父目录）不包含中文。

### 将制定路径切换为工作目录

```
cd <folder path>
```

### 在当前工作路径创建文件夹

```
mkdir <folder name>
```

### 显示当前目录

```
pwd
```

### 将此目录变成 Git 仓库

千万不要手动修改这个目录里面的文件！

```
git init <folder path>
```

## 二、在版本库中添加文件

所有的版本控制系统，只能跟踪文本文件的改动，比如 TXT 文件，网页，所有的程序代码等等，Git 也不例外。

### 将文件添加到仓库

**注意：必须先将文件放入版本库的目录，否则 Git 找不到文件！**

```
git add <file_path>
```

### 将文件提交到仓库

为本次提交的说明，最好是有意义的，这样就能从历史记录里方便地找到改动记录。

```
git commit -m <message>
```

### 使用 Windows 的注意事项 重要

千万不要使用 Windows 自带的记事本编辑任何文本文件，建议用以下工具代替记事本。

- [Visual Studio Code](https://code.visualstudio.com/)

## 三、版本库/文件状态查看

### 查看仓库当前状态

```
git status <file_path>
```

### 查看文件修改内容

```
git diff <file_path>
```

## 四、版本切换

### 查看提交日志

显示从最近到最远的提交日志，可不加参数直接使用。

```
git log <file_path>
```

单行显示从最近到最远的提交日志。

```
git log --pretty=oneline <file_path>
```

### 查看命令历史

```
git refolg
```

### 切换到指定的版本

```
git reset --hard <commit_id>
```

### 退回到上一次提交的版本

```
git reset --hard HEAD^
```

## 五、工作区和暂存区

Git 和其他版本控制系统如 SVN 的一个不同之处就是有暂存区的概念。

### 工作区（Working Directory）

就是你在电脑里能看到的目录，比如前面用 `git init` 创建为版本库的文件夹就属于工作区。

### 暂存区（stage/index）

Git 的版本库里存了很多东西，其中最重要的就是称为 **stage**（或者叫 **index**）的暂存区。

### 版本库（Repository）

工作区有一个隐藏目录 `.git`，这个不算工作区，而是 Git 的版本库。

## 六、版本修改

每次修改，如果不用 `git add` 到暂存区，那就不会加入到 `commit` 中。

### 撤销修改

撤销工作区的改动，用版本库里的版本替换工作区的版本。

```
git checkout -- <file_name>
```

撤销已添加至暂存区的改动，如果已提交至版本库，可直接回退至提交前的版本。

```
git reset HEAD <file_name>
```

### 删除文件

删除一个文件，如果误删，只能用 **git checkout** 恢复文件到最新版本，你会丢失最近一次提交后你修改的内容。

```
git rm <file_name>
```

## 七、远程仓库

1. 创建 SSH Key 并连接 GitHub 如果用户目录下没有 .ssh 目录，则需要创建一个 SSH Key
2. 邮箱参数换成自己的邮箱，配置过程使用默认值，无需密码。
    
    ```
     ssh-keygen -t rsa -C "youremail@example.com"
    ```
    
3. 登陆 GitHub -> Settings -> SSH Key -> Add SSH Key，填上任意 Title，在 Key 文本框里粘贴 id_rsa.pub 文件的内容。
4. 创建远程库并同步或克隆登陆 GitHub -> 右上角 New Repository -> 填写 Repository Name -> 点击 Create repository，创建一个仓库。
5. 同步本地和远程库：

### 本地库关联远程库

```
git remote add origin <ssh_path>
```

关联远程库之后，第一次把 master 分支的所有内容推送至远程库，并把本地和远程的 master 分支关联。

```
git push -u origin mastergit push origin master
```

关联 master 分支后，**后续推送只需要简化语句即可。**

1. 从远程库克隆 Git 支持多种协议，包括 HTTPS，但通过 SSH 支持的原生 Git 协议速度最快。

### 从远程仓库克隆至当前工作目录

```
git clone <ssh_path>
```

## 八、分支管理

分支就是科幻电影里面的平行宇宙，别人继续在原来的分支工作，而你在自己的分支上干活，直到开发完毕后，再一次性合并到原来的分支上，这样既安全，又不影响别人工作。

### 创建/合并分支

Git 鼓励大量使用分支，这样更安全。

### 查看所有分支

参数 * 表示查看当前分支。

```
git branch
```

### 创建分支

```
git branch <branch_name>
```

### 切换分支

```
git checkout <branch_name>
```

### 创建并切换分支

- **b** 参数是 **git branch** 命令的简化。

```
git checkout -b <branch_name>
```

### 将指定分支合并至当前分支

```
git merge <branch_name>
```

### 将指定分支合并至当前分支（二）

- `-no-ff` 参数指用 **普通模式合并**，合并后有历史分支，可以看出来曾合并过，而 `fast forward` 模式则看不出来。

```
git merge --no-ff -m <message> <branch_name>
```

### 删除指定分支

```
git branch -d <branch_name>
```

### 强制删除未合并的指定分支

```
git branch -D <branch_name>
```

### 合并冲突

解决冲突当分支合出现冲突时，Git 会在文件上用不同的标记显示不同分支上的内容。

- <<<<<<< 指以下为当前分支的内容。
- ======= 作为不同分支内容的分隔符。
- 记指以下为合并至当前分支的内容。

### 查看分支合并图

```
git log --graph
```

### 分支管理策略

在实际开发中，我们应该按照几个基本原则进行分支管理。

- **master** 此分支应该非常稳定，仅用来发布新版本，平时不能再上面工作。
- **dev** 此分支是不稳定的，每个人都有自己的工作分支，时不时往 dev 分支上合并就可以了。
- **bug** 修复 Bug 时，我们会通过创建新的 Bug 分支进行修复，然后合并，最后删除； 当手头工作没有完成时，先把工作现场 `git stash` 一下，然后修复 Bug，修复后再 `git stash pop`，恢复现场。
- **feature** 每添加一个新功能，最好新建一个 Feature 分支，在上面开发，完成后合并，最后，删除该 Feature 分支。

### “储存”当前工作区。

```
git stash
```

### 恢复“储存”的工作区并删除

```
git stash pop
```

### 查看已“储存”的所有工作区

```
git stash list
```

### 恢复指定的工作区但不删除

不加参数直接使用为恢复第一个“储存”的工作区。

```
git stash apply <work_id>
```

## 九、多人协作

### 推送分支

### 查看远程库的信息

```
git remote
```

### 查看远程库更详细的信息

```
git remote -v
```

### 将指定分支上的所有本地提交推送到远程库

```
git push origin <branch_name>
```

### 抓取分支

如果 push 至远程库失败，抓取远程分支合并至本地，解决冲突后，重新推送；

### 抓取远程分支合并至本地

```
git pull
```

### 在本地创建和远程分支的对应分支

```
git checkout -b <origin_branch_name> <origin/branch_name>
```

### 创建本地和远程分支的链接关系

如果 `git pull` 提示 `no tracking information`，说明本地和远程分支的链接关系没有创建，使用此命令创建。

```
git branch --set-upstream-to=<origin/origin_branch_name> <branch_name>
```

### 哪些分支需要及时推送？

- **master**
主分支，因此要时刻与远程同步；
- **dev**
开发分支，团队所有成员都需要在上面工作，所以也需要与远程同步；
- **bug**
只用于在本地修复 bug，没必要推到远程，除非老板要看看你每周到底修复了几个 bug；
- **feature**
是否推到远程，取决于你是否和你的小伙伴合作在上面开发；

## 十、Rebase（变基）

Rebase 的目的是使得我们在查看历史提交的变化时更容易，因为分叉的提交需要三方对比；

### 把本地未 push 的分支提交历史整理成直线；

```
git rebase
```

## 十一、标签管理

标签是版本库的一个快照，和 commit 类似 IP 和域名的关系，方便查找和记忆；

发布一个版本时，我们通常先在版本库中打一个标签（tag），这样，就唯一确定了打标签时刻的版本；

### 创建标签

### 查看所有标签（按字母顺序排列）

```
git tag
```

### 为 HEAD 创建标签

```
git tag <tag_name>
```

### 为指定的 commit 创建标签

```
git tag <tag_name> <commit_id>
```

### 为 HEAD 创建带有说明信息的标签

```
git tag -a <tag_name> -m <mseeage>
```

### 为指定的 commit 创建带有说明信息的标签

```
git tag -a <tag_name> -m <mseeage> <commit_id>
```

### 查看指定标签的信息

```
git show <tag_name>
```

### 操作标签

### 删除指定标签

```
git tag -d <tag_name>
```

### 将指定标签推送至远程库

```
git push origin <tag_name>
```

### 将全部标签推送至远程库

```
git push origin -tags
```

### 删除指定的远程标签

在这之前要首先删除本地的指定标签；

```
git push origin :refs/tags/<tag_name>
```

## 十二、清除本地库的版本控制

很简单，打开本地库文件夹，显示被隐藏文件夹，删掉 `.git` 文件夹即可。