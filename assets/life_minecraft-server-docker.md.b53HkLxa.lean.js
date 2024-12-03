import{_ as a,c as i,P as s,o as t}from"./chunks/framework.Bq6Kl9c_.js";const d=JSON.parse('{"title":"使用 Docker 搭建 Minecraft 服务端","description":"","frontmatter":{"tags":["minecraft","docker"]},"headers":[],"relativePath":"life/minecraft-server-docker.md","filePath":"life/minecraft-server-docker.md","lastUpdated":1701662868000}'),r={name:"life/minecraft-server-docker.md"};function n(h,e,l,p,k,o){return t(),i("div",null,e[0]||(e[0]=[s(`<h1 id="使用-docker-搭建-minecraft-服务端" tabindex="-1">使用 Docker 搭建 Minecraft 服务端 <a class="header-anchor" href="#使用-docker-搭建-minecraft-服务端" aria-label="Permalink to &quot;使用 Docker 搭建 Minecraft 服务端&quot;">​</a></h1><h2 id="下载客户端启动器" tabindex="-1">下载客户端启动器 <a class="header-anchor" href="#下载客户端启动器" aria-label="Permalink to &quot;下载客户端启动器&quot;">​</a></h2><p>下载 <a href="https://hmcl.huangyuhui.net/download" target="_blank" rel="noreferrer">Hello Minecraft! Launcher</a>，简称 HMCL。</p><p>HMCL 是一个免费、开源的 Minecraft 启动器，允许玩家方便快捷地安装、管理、运行游戏。</p><div class="tip custom-block"><p class="custom-block-title">提示</p><p>客户端游戏版本需要与服务端保持一致才能连接至服务端。</p></div><h2 id="部署-docker-服务端镜像" tabindex="-1">部署 Docker 服务端镜像 <a class="header-anchor" href="#部署-docker-服务端镜像" aria-label="Permalink to &quot;部署 Docker 服务端镜像&quot;">​</a></h2><blockquote><p>文档：<a href="https://github.com/itzg/docker-minecraft-server" target="_blank" rel="noreferrer">https://github.com/itzg/docker-minecraft-server</a></p></blockquote><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># -e ONLINE_MODE=FALSE 关闭正版验证</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -d</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -it</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 25565</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">:25565</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --name</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mc</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -e</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ONLINE_MODE=FALSE</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -e</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> EULA=TRUE</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> itzg/minecraft-server</span></span></code></pre></div><h2 id="server-properties-游戏服务器配置" tabindex="-1">server.properties 游戏服务器配置 <a class="header-anchor" href="#server-properties-游戏服务器配置" aria-label="Permalink to &quot;server.properties 游戏服务器配置&quot;">​</a></h2><blockquote><p>Wiki：<a href="https://minecraft.fandom.com/zh/wiki/Server.properties" target="_blank" rel="noreferrer">https://minecraft.fandom.com/zh/wiki/Server.properties</a></p></blockquote><h2 id="进入-minecraft-服务器控制台" tabindex="-1">进入 Minecraft 服务器控制台 <a class="header-anchor" href="#进入-minecraft-服务器控制台" aria-label="Permalink to &quot;进入 Minecraft 服务器控制台&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> exec</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -i</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mc</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rcon-cli</span></span></code></pre></div>`,12)]))}const F=a(r,[["render",n]]);export{d as __pageData,F as default};
