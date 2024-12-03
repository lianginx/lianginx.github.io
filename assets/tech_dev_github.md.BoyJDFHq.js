import{_ as s,c as i,P as t,o as e}from"./chunks/framework.Bq6Kl9c_.js";const g=JSON.parse('{"title":"廖雪峰 GitHub 教程笔记","description":"","frontmatter":{"tags":["github","git","note"]},"headers":[],"relativePath":"tech/dev/github.md","filePath":"tech/dev/github.md","lastUpdated":1701662868000}'),h={name:"tech/dev/github.md"};function l(n,a,p,o,d,r){return e(),i("div",null,a[0]||(a[0]=[t(`<h1 id="廖雪峰-github-教程笔记" tabindex="-1">廖雪峰 GitHub 教程笔记 <a class="header-anchor" href="#廖雪峰-github-教程笔记" aria-label="Permalink to &quot;廖雪峰 GitHub 教程笔记&quot;">​</a></h1><blockquote><p>Git 是目前世界主流的分布式版本控制系统。</p></blockquote><h2 id="安装-git" tabindex="-1">安装 Git <a class="header-anchor" href="#安装-git" aria-label="Permalink to &quot;安装 Git&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">相关链接</p><ul><li>官网：<a href="https://git-scm.com/downloads" target="_blank" rel="noreferrer">https://git-scm.com/downloads</a></li><li>镜像：<a href="https://gitee.com/mirror-cn/git-for-windows" target="_blank" rel="noreferrer">https://gitee.com/mirror-cn/git-for-windows</a></li><li>官方文档：<a href="https://git-scm.com/book/zh/v2" target="_blank" rel="noreferrer">https://git-scm.com/book/zh/v2</a></li></ul></div><p>推荐跳过上面安装 Git，直接安装 Visual Studio Code，自带 Git 且可以使用 Github 账号登录，提供可视化版本管理界面和全中文命令说明。</p><h3 id="配置仓库的全局用户名和邮箱" tabindex="-1">配置仓库的全局用户名和邮箱 <a class="header-anchor" href="#配置仓库的全局用户名和邮箱" aria-label="Permalink to &quot;配置仓库的全局用户名和邮箱&quot;">​</a></h3><p>安装完成后，在开始菜单里找到“Git”-&gt;“Git Bash”，蹦出一个类似命令行窗口的东西，就说明 Git 安装成功！</p><p>然后还需要最后一步设置，在命令行输入：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>$ git config --global user.name &quot;Your Name&quot;</span></span>
<span class="line"><span>$ git config --global user.email &quot;email@example.com&quot;</span></span></code></pre></div><p>注意 <code>git config</code> 命令的 <code>--global</code> 参数，用了这个参数，表示你这台机器上所有的 Git 仓库都会使用这个配置，当然也可以对某个仓库指定不同的用户名和 Email 地址。</p><h2 id="一、创建版本库-仓库-repository" tabindex="-1">一、创建版本库（仓库/repository） <a class="header-anchor" href="#一、创建版本库-仓库-repository" aria-label="Permalink to &quot;一、创建版本库（仓库/repository）&quot;">​</a></h2><p>你可以简单理解成一个目录，这个目录里面的所有文件都可以被 Git 管理起来，每个文件的修改、删除，Git 都能跟踪，以便任何时刻都可以追踪历史，或者在将来某个时刻可以“还原”。</p><h3 id="在-git-bash-中使用代码创建一个空目录-推荐" tabindex="-1">在 Git Bash 中使用代码创建一个空目录（推荐） <a class="header-anchor" href="#在-git-bash-中使用代码创建一个空目录-推荐" aria-label="Permalink to &quot;在 Git Bash 中使用代码创建一个空目录（推荐）&quot;">​</a></h3><p>使用 Windows 系统，为了避免遇到各种莫名其妙的问题，请确保目录名（包括父目录）不包含中文。</p><h3 id="将制定路径切换为工作目录" tabindex="-1">将制定路径切换为工作目录 <a class="header-anchor" href="#将制定路径切换为工作目录" aria-label="Permalink to &quot;将制定路径切换为工作目录&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>cd &lt;folder path&gt;</span></span></code></pre></div><h3 id="在当前工作路径创建文件夹" tabindex="-1">在当前工作路径创建文件夹 <a class="header-anchor" href="#在当前工作路径创建文件夹" aria-label="Permalink to &quot;在当前工作路径创建文件夹&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>mkdir &lt;folder name&gt;</span></span></code></pre></div><h3 id="显示当前目录" tabindex="-1">显示当前目录 <a class="header-anchor" href="#显示当前目录" aria-label="Permalink to &quot;显示当前目录&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>pwd</span></span></code></pre></div><h3 id="将此目录变成-git-仓库" tabindex="-1">将此目录变成 Git 仓库 <a class="header-anchor" href="#将此目录变成-git-仓库" aria-label="Permalink to &quot;将此目录变成 Git 仓库&quot;">​</a></h3><p>千万不要手动修改这个目录里面的文件！</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>git init &lt;folder path&gt;</span></span></code></pre></div><h2 id="二、在版本库中添加文件" tabindex="-1">二、在版本库中添加文件 <a class="header-anchor" href="#二、在版本库中添加文件" aria-label="Permalink to &quot;二、在版本库中添加文件&quot;">​</a></h2><p>所有的版本控制系统，只能跟踪文本文件的改动，比如 TXT 文件，网页，所有的程序代码等等，Git 也不例外。</p><h3 id="将文件添加到仓库" tabindex="-1">将文件添加到仓库 <a class="header-anchor" href="#将文件添加到仓库" aria-label="Permalink to &quot;将文件添加到仓库&quot;">​</a></h3><p><strong>注意：必须先将文件放入版本库的目录，否则 Git 找不到文件！</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>git add &lt;file_path&gt;</span></span></code></pre></div><h3 id="将文件提交到仓库" tabindex="-1">将文件提交到仓库 <a class="header-anchor" href="#将文件提交到仓库" aria-label="Permalink to &quot;将文件提交到仓库&quot;">​</a></h3><p>为本次提交的说明，最好是有意义的，这样就能从历史记录里方便地找到改动记录。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>git commit -m &lt;message&gt;</span></span></code></pre></div><h3 id="使用-windows-的注意事项-重要" tabindex="-1">使用 Windows 的注意事项 重要 <a class="header-anchor" href="#使用-windows-的注意事项-重要" aria-label="Permalink to &quot;使用 Windows 的注意事项 重要&quot;">​</a></h3><p>千万不要使用 Windows 自带的记事本编辑任何文本文件，建议用以下工具代替记事本。</p><ul><li><a href="https://code.visualstudio.com/" target="_blank" rel="noreferrer">Visual Studio Code</a></li></ul><h2 id="三、版本库-文件状态查看" tabindex="-1">三、版本库/文件状态查看 <a class="header-anchor" href="#三、版本库-文件状态查看" aria-label="Permalink to &quot;三、版本库/文件状态查看&quot;">​</a></h2><h3 id="查看仓库当前状态" tabindex="-1">查看仓库当前状态 <a class="header-anchor" href="#查看仓库当前状态" aria-label="Permalink to &quot;查看仓库当前状态&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>git status &lt;file_path&gt;</span></span></code></pre></div><h3 id="查看文件修改内容" tabindex="-1">查看文件修改内容 <a class="header-anchor" href="#查看文件修改内容" aria-label="Permalink to &quot;查看文件修改内容&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>git diff &lt;file_path&gt;</span></span></code></pre></div><h2 id="四、版本切换" tabindex="-1">四、版本切换 <a class="header-anchor" href="#四、版本切换" aria-label="Permalink to &quot;四、版本切换&quot;">​</a></h2><h3 id="查看提交日志" tabindex="-1">查看提交日志 <a class="header-anchor" href="#查看提交日志" aria-label="Permalink to &quot;查看提交日志&quot;">​</a></h3><p>显示从最近到最远的提交日志，可不加参数直接使用。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>git log &lt;file_path&gt;</span></span></code></pre></div><p>单行显示从最近到最远的提交日志。</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> log</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --pretty=oneline</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">file_pat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">h</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span></code></pre></div><h3 id="查看命令历史" tabindex="-1">查看命令历史 <a class="header-anchor" href="#查看命令历史" aria-label="Permalink to &quot;查看命令历史&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> refolg</span></span></code></pre></div><h3 id="切换到指定的版本" tabindex="-1">切换到指定的版本 <a class="header-anchor" href="#切换到指定的版本" aria-label="Permalink to &quot;切换到指定的版本&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> reset</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --hard</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">commit_i</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">d</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span></code></pre></div><h3 id="退回到上一次提交的版本" tabindex="-1">退回到上一次提交的版本 <a class="header-anchor" href="#退回到上一次提交的版本" aria-label="Permalink to &quot;退回到上一次提交的版本&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> reset</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --hard</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> HEAD^</span></span></code></pre></div><h2 id="五、工作区和暂存区" tabindex="-1">五、工作区和暂存区 <a class="header-anchor" href="#五、工作区和暂存区" aria-label="Permalink to &quot;五、工作区和暂存区&quot;">​</a></h2><p>Git 和其他版本控制系统如 SVN 的一个不同之处就是有暂存区的概念。</p><h3 id="工作区-working-directory" tabindex="-1">工作区（Working Directory） <a class="header-anchor" href="#工作区-working-directory" aria-label="Permalink to &quot;工作区（Working Directory）&quot;">​</a></h3><p>就是你在电脑里能看到的目录，比如前面用 <code>git init</code> 创建为版本库的文件夹就属于工作区。</p><h3 id="暂存区-stage-index" tabindex="-1">暂存区（stage/index） <a class="header-anchor" href="#暂存区-stage-index" aria-label="Permalink to &quot;暂存区（stage/index）&quot;">​</a></h3><p>Git 的版本库里存了很多东西，其中最重要的就是称为 <strong>stage</strong>（或者叫 <strong>index</strong>）的暂存区。</p><h3 id="版本库-repository" tabindex="-1">版本库（Repository） <a class="header-anchor" href="#版本库-repository" aria-label="Permalink to &quot;版本库（Repository）&quot;">​</a></h3><p>工作区有一个隐藏目录 <code>.git</code>，这个不算工作区，而是 Git 的版本库。</p><h2 id="六、版本修改" tabindex="-1">六、版本修改 <a class="header-anchor" href="#六、版本修改" aria-label="Permalink to &quot;六、版本修改&quot;">​</a></h2><p>每次修改，如果不用 <code>git add</code> 到暂存区，那就不会加入到 <code>commit</code> 中。</p><h3 id="撤销修改" tabindex="-1">撤销修改 <a class="header-anchor" href="#撤销修改" aria-label="Permalink to &quot;撤销修改&quot;">​</a></h3><p>撤销工作区的改动，用版本库里的版本替换工作区的版本。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>git checkout -- &lt;file_name&gt;</span></span></code></pre></div><p>撤销已添加至暂存区的改动，如果已提交至版本库，可直接回退至提交前的版本。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>git reset HEAD &lt;file_name&gt;</span></span></code></pre></div><h3 id="删除文件" tabindex="-1">删除文件 <a class="header-anchor" href="#删除文件" aria-label="Permalink to &quot;删除文件&quot;">​</a></h3><p>删除一个文件，如果误删，只能用 <strong>git checkout</strong> 恢复文件到最新版本，你会丢失最近一次提交后你修改的内容。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>git rm &lt;file_name&gt;</span></span></code></pre></div><h2 id="七、远程仓库" tabindex="-1">七、远程仓库 <a class="header-anchor" href="#七、远程仓库" aria-label="Permalink to &quot;七、远程仓库&quot;">​</a></h2><ol><li><p>创建 SSH Key 并连接 GitHub 如果用户目录下没有 .ssh 目录，则需要创建一个 SSH Key</p></li><li><p>邮箱参数换成自己的邮箱，配置过程使用默认值，无需密码。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span> ssh-keygen -t rsa -C &quot;youremail@example.com&quot;</span></span></code></pre></div></li><li><p>登陆 GitHub -&gt; Settings -&gt; SSH Key -&gt; Add SSH Key，填上任意 Title，在 Key 文本框里粘贴 id_rsa.pub 文件的内容。</p></li><li><p>创建远程库并同步或克隆登陆 GitHub -&gt; 右上角 New Repository -&gt; 填写 Repository Name -&gt; 点击 Create repository，创建一个仓库。</p></li><li><p>同步本地和远程库：</p></li></ol><h3 id="本地库关联远程库" tabindex="-1">本地库关联远程库 <a class="header-anchor" href="#本地库关联远程库" aria-label="Permalink to &quot;本地库关联远程库&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>git remote add origin &lt;ssh_path&gt;</span></span></code></pre></div><p>关联远程库之后，第一次把 master 分支的所有内容推送至远程库，并把本地和远程的 master 分支关联。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>git push -u origin mastergit push origin master</span></span></code></pre></div><p>关联 master 分支后，<strong>后续推送只需要简化语句即可。</strong></p><ol><li>从远程库克隆 Git 支持多种协议，包括 HTTPS，但通过 SSH 支持的原生 Git 协议速度最快。</li></ol><h3 id="从远程仓库克隆至当前工作目录" tabindex="-1">从远程仓库克隆至当前工作目录 <a class="header-anchor" href="#从远程仓库克隆至当前工作目录" aria-label="Permalink to &quot;从远程仓库克隆至当前工作目录&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>git clone &lt;ssh_path&gt;</span></span></code></pre></div><h2 id="八、分支管理" tabindex="-1">八、分支管理 <a class="header-anchor" href="#八、分支管理" aria-label="Permalink to &quot;八、分支管理&quot;">​</a></h2><p>分支就是科幻电影里面的平行宇宙，别人继续在原来的分支工作，而你在自己的分支上干活，直到开发完毕后，再一次性合并到原来的分支上，这样既安全，又不影响别人工作。</p><h3 id="创建-合并分支" tabindex="-1">创建/合并分支 <a class="header-anchor" href="#创建-合并分支" aria-label="Permalink to &quot;创建/合并分支&quot;">​</a></h3><p>Git 鼓励大量使用分支，这样更安全。</p><h3 id="查看所有分支" tabindex="-1">查看所有分支 <a class="header-anchor" href="#查看所有分支" aria-label="Permalink to &quot;查看所有分支&quot;">​</a></h3><p>参数 * 表示查看当前分支。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>git branch</span></span></code></pre></div><h3 id="创建分支" tabindex="-1">创建分支 <a class="header-anchor" href="#创建分支" aria-label="Permalink to &quot;创建分支&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>git branch &lt;branch_name&gt;</span></span></code></pre></div><h3 id="切换分支" tabindex="-1">切换分支 <a class="header-anchor" href="#切换分支" aria-label="Permalink to &quot;切换分支&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>git checkout &lt;branch_name&gt;</span></span></code></pre></div><h3 id="创建并切换分支" tabindex="-1">创建并切换分支 <a class="header-anchor" href="#创建并切换分支" aria-label="Permalink to &quot;创建并切换分支&quot;">​</a></h3><ul><li><strong>b</strong> 参数是 <strong>git branch</strong> 命令的简化。</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>git checkout -b &lt;branch_name&gt;</span></span></code></pre></div><h3 id="将指定分支合并至当前分支" tabindex="-1">将指定分支合并至当前分支 <a class="header-anchor" href="#将指定分支合并至当前分支" aria-label="Permalink to &quot;将指定分支合并至当前分支&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>git merge &lt;branch_name&gt;</span></span></code></pre></div><h3 id="将指定分支合并至当前分支-二" tabindex="-1">将指定分支合并至当前分支（二） <a class="header-anchor" href="#将指定分支合并至当前分支-二" aria-label="Permalink to &quot;将指定分支合并至当前分支（二）&quot;">​</a></h3><ul><li><code>-no-ff</code> 参数指用 <strong>普通模式合并</strong>，合并后有历史分支，可以看出来曾合并过，而 <code>fast forward</code> 模式则看不出来。</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>git merge --no-ff -m &lt;message&gt; &lt;branch_name&gt;</span></span></code></pre></div><h3 id="删除指定分支" tabindex="-1">删除指定分支 <a class="header-anchor" href="#删除指定分支" aria-label="Permalink to &quot;删除指定分支&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>git branch -d &lt;branch_name&gt;</span></span></code></pre></div><h3 id="强制删除未合并的指定分支" tabindex="-1">强制删除未合并的指定分支 <a class="header-anchor" href="#强制删除未合并的指定分支" aria-label="Permalink to &quot;强制删除未合并的指定分支&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>git branch -D &lt;branch_name&gt;</span></span></code></pre></div><h3 id="合并冲突" tabindex="-1">合并冲突 <a class="header-anchor" href="#合并冲突" aria-label="Permalink to &quot;合并冲突&quot;">​</a></h3><p>解决冲突当分支合出现冲突时，Git 会在文件上用不同的标记显示不同分支上的内容。</p><ul><li><code>&lt;&lt;&lt;&lt;&lt;&lt;&lt;</code> 指以下为当前分支的内容。</li><li><code>=======</code> 作为不同分支内容的分隔符。</li><li>记指以下为合并至当前分支的内容。</li></ul><h3 id="查看分支合并图" tabindex="-1">查看分支合并图 <a class="header-anchor" href="#查看分支合并图" aria-label="Permalink to &quot;查看分支合并图&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> log</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --graph</span></span></code></pre></div><h3 id="分支管理策略" tabindex="-1">分支管理策略 <a class="header-anchor" href="#分支管理策略" aria-label="Permalink to &quot;分支管理策略&quot;">​</a></h3><p>在实际开发中，我们应该按照几个基本原则进行分支管理。</p><ul><li><strong>master</strong> 此分支应该非常稳定，仅用来发布新版本，平时不能再上面工作。</li><li><strong>dev</strong> 此分支是不稳定的，每个人都有自己的工作分支，时不时往 dev 分支上合并就可以了。</li><li><strong>bug</strong> 修复 Bug 时，我们会通过创建新的 Bug 分支进行修复，然后合并，最后删除； 当手头工作没有完成时，先把工作现场 <code>git stash</code> 一下，然后修复 Bug，修复后再 <code>git stash pop</code>，恢复现场。</li><li><strong>feature</strong> 每添加一个新功能，最好新建一个 Feature 分支，在上面开发，完成后合并，最后，删除该 Feature 分支。</li></ul><h3 id="储存-当前工作区。" tabindex="-1">“储存”当前工作区。 <a class="header-anchor" href="#储存-当前工作区。" aria-label="Permalink to &quot;“储存”当前工作区。&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>git stash</span></span></code></pre></div><h3 id="恢复-储存-的工作区并删除" tabindex="-1">恢复“储存”的工作区并删除 <a class="header-anchor" href="#恢复-储存-的工作区并删除" aria-label="Permalink to &quot;恢复“储存”的工作区并删除&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>git stash pop</span></span></code></pre></div><h3 id="查看已-储存-的所有工作区" tabindex="-1">查看已“储存”的所有工作区 <a class="header-anchor" href="#查看已-储存-的所有工作区" aria-label="Permalink to &quot;查看已“储存”的所有工作区&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>git stash list</span></span></code></pre></div><h3 id="恢复指定的工作区但不删除" tabindex="-1">恢复指定的工作区但不删除 <a class="header-anchor" href="#恢复指定的工作区但不删除" aria-label="Permalink to &quot;恢复指定的工作区但不删除&quot;">​</a></h3><p>不加参数直接使用为恢复第一个“储存”的工作区。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>git stash apply &lt;work_id&gt;</span></span></code></pre></div><h2 id="九、多人协作" tabindex="-1">九、多人协作 <a class="header-anchor" href="#九、多人协作" aria-label="Permalink to &quot;九、多人协作&quot;">​</a></h2><h3 id="推送分支" tabindex="-1">推送分支 <a class="header-anchor" href="#推送分支" aria-label="Permalink to &quot;推送分支&quot;">​</a></h3><h3 id="查看远程库的信息" tabindex="-1">查看远程库的信息 <a class="header-anchor" href="#查看远程库的信息" aria-label="Permalink to &quot;查看远程库的信息&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> remote</span></span></code></pre></div><h3 id="查看远程库更详细的信息" tabindex="-1">查看远程库更详细的信息 <a class="header-anchor" href="#查看远程库更详细的信息" aria-label="Permalink to &quot;查看远程库更详细的信息&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> remote</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -v</span></span></code></pre></div><h3 id="将指定分支上的所有本地提交推送到远程库" tabindex="-1">将指定分支上的所有本地提交推送到远程库 <a class="header-anchor" href="#将指定分支上的所有本地提交推送到远程库" aria-label="Permalink to &quot;将指定分支上的所有本地提交推送到远程库&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> push</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> origin</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">branch_nam</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">e</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span></code></pre></div><h3 id="抓取分支" tabindex="-1">抓取分支 <a class="header-anchor" href="#抓取分支" aria-label="Permalink to &quot;抓取分支&quot;">​</a></h3><p>如果 push 至远程库失败，抓取远程分支合并至本地，解决冲突后，重新推送；</p><h3 id="抓取远程分支合并至本地" tabindex="-1">抓取远程分支合并至本地 <a class="header-anchor" href="#抓取远程分支合并至本地" aria-label="Permalink to &quot;抓取远程分支合并至本地&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pull</span></span></code></pre></div><h3 id="在本地创建和远程分支的对应分支" tabindex="-1">在本地创建和远程分支的对应分支 <a class="header-anchor" href="#在本地创建和远程分支的对应分支" aria-label="Permalink to &quot;在本地创建和远程分支的对应分支&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> checkout</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -b</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">origin_branch_nam</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">e</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">origin/branch_nam</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">e</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span></code></pre></div><h3 id="创建本地和远程分支的链接关系" tabindex="-1">创建本地和远程分支的链接关系 <a class="header-anchor" href="#创建本地和远程分支的链接关系" aria-label="Permalink to &quot;创建本地和远程分支的链接关系&quot;">​</a></h3><p>如果 <code>git pull</code> 提示 <code>no tracking information</code>，说明本地和远程分支的链接关系没有创建，使用此命令创建。</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> branch</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --set-upstream-to=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">origin/origin_branch_name</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">branch_nam</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">e</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span></code></pre></div><h3 id="哪些分支需要及时推送" tabindex="-1">哪些分支需要及时推送？ <a class="header-anchor" href="#哪些分支需要及时推送" aria-label="Permalink to &quot;哪些分支需要及时推送？&quot;">​</a></h3><ul><li><strong>master</strong> 主分支，因此要时刻与远程同步；</li><li><strong>dev</strong> 开发分支，团队所有成员都需要在上面工作，所以也需要与远程同步；</li><li><strong>bug</strong> 只用于在本地修复 bug，没必要推到远程，除非老板要看看你每周到底修复了几个 bug；</li><li><strong>feature</strong> 是否推到远程，取决于你是否和你的小伙伴合作在上面开发；</li></ul><h2 id="十、rebase-变基" tabindex="-1">十、Rebase（变基） <a class="header-anchor" href="#十、rebase-变基" aria-label="Permalink to &quot;十、Rebase（变基）&quot;">​</a></h2><p>Rebase 的目的是使得我们在查看历史提交的变化时更容易，因为分叉的提交需要三方对比；</p><h3 id="把本地未-push-的分支提交历史整理成直线" tabindex="-1">把本地未 push 的分支提交历史整理成直线； <a class="header-anchor" href="#把本地未-push-的分支提交历史整理成直线" aria-label="Permalink to &quot;把本地未 push 的分支提交历史整理成直线；&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rebase</span></span></code></pre></div><h2 id="十一、标签管理" tabindex="-1">十一、标签管理 <a class="header-anchor" href="#十一、标签管理" aria-label="Permalink to &quot;十一、标签管理&quot;">​</a></h2><p>标签是版本库的一个快照，和 commit 类似 IP 和域名的关系，方便查找和记忆；</p><p>发布一个版本时，我们通常先在版本库中打一个标签（tag），这样，就唯一确定了打标签时刻的版本；</p><h3 id="创建标签" tabindex="-1">创建标签 <a class="header-anchor" href="#创建标签" aria-label="Permalink to &quot;创建标签&quot;">​</a></h3><h3 id="查看所有标签-按字母顺序排列" tabindex="-1">查看所有标签（按字母顺序排列） <a class="header-anchor" href="#查看所有标签-按字母顺序排列" aria-label="Permalink to &quot;查看所有标签（按字母顺序排列）&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> tag</span></span></code></pre></div><h3 id="为-head-创建标签" tabindex="-1">为 HEAD 创建标签 <a class="header-anchor" href="#为-head-创建标签" aria-label="Permalink to &quot;为 HEAD 创建标签&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> tag</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">tag_nam</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">e</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span></code></pre></div><h3 id="为指定的-commit-创建标签" tabindex="-1">为指定的 commit 创建标签 <a class="header-anchor" href="#为指定的-commit-创建标签" aria-label="Permalink to &quot;为指定的 commit 创建标签&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> tag</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">tag_nam</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">e</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">commit_i</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">d</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span></code></pre></div><h3 id="为-head-创建带有说明信息的标签" tabindex="-1">为 HEAD 创建带有说明信息的标签 <a class="header-anchor" href="#为-head-创建带有说明信息的标签" aria-label="Permalink to &quot;为 HEAD 创建带有说明信息的标签&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> tag</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -a</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">tag_nam</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">e</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -m</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">mseeag</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">e</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span></code></pre></div><h3 id="为指定的-commit-创建带有说明信息的标签" tabindex="-1">为指定的 commit 创建带有说明信息的标签 <a class="header-anchor" href="#为指定的-commit-创建带有说明信息的标签" aria-label="Permalink to &quot;为指定的 commit 创建带有说明信息的标签&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> tag</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -a</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">tag_nam</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">e</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -m</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">mseeag</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">e</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">commit_i</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">d</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span></code></pre></div><h3 id="查看指定标签的信息" tabindex="-1">查看指定标签的信息 <a class="header-anchor" href="#查看指定标签的信息" aria-label="Permalink to &quot;查看指定标签的信息&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> show</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">tag_nam</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">e</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span></code></pre></div><h3 id="操作标签" tabindex="-1">操作标签 <a class="header-anchor" href="#操作标签" aria-label="Permalink to &quot;操作标签&quot;">​</a></h3><h3 id="删除指定标签" tabindex="-1">删除指定标签 <a class="header-anchor" href="#删除指定标签" aria-label="Permalink to &quot;删除指定标签&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> tag</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -d</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">tag_nam</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">e</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span></code></pre></div><h3 id="将指定标签推送至远程库" tabindex="-1">将指定标签推送至远程库 <a class="header-anchor" href="#将指定标签推送至远程库" aria-label="Permalink to &quot;将指定标签推送至远程库&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> push</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> origin</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">tag_nam</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">e</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span></code></pre></div><h3 id="将全部标签推送至远程库" tabindex="-1">将全部标签推送至远程库 <a class="header-anchor" href="#将全部标签推送至远程库" aria-label="Permalink to &quot;将全部标签推送至远程库&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> push</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> origin</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -tags</span></span></code></pre></div><h3 id="删除指定的远程标签" tabindex="-1">删除指定的远程标签 <a class="header-anchor" href="#删除指定的远程标签" aria-label="Permalink to &quot;删除指定的远程标签&quot;">​</a></h3><p>在这之前要首先删除本地的指定标签；</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> push</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> origin</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> :refs/tags/</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">tag_nam</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">e</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span></code></pre></div><h2 id="十二、清除本地库的版本控制" tabindex="-1">十二、清除本地库的版本控制 <a class="header-anchor" href="#十二、清除本地库的版本控制" aria-label="Permalink to &quot;十二、清除本地库的版本控制&quot;">​</a></h2><p>很简单，打开本地库文件夹，显示被隐藏文件夹，删掉 <code>.git</code> 文件夹即可。</p>`,170)]))}const k=s(h,[["render",l]]);export{g as __pageData,k as default};
