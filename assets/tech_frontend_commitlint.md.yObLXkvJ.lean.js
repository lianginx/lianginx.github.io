import{_ as a,c as i,P as n,o as t}from"./chunks/framework.Bq6Kl9c_.js";const k=JSON.parse('{"title":"Commitlint 使用指南","description":"","frontmatter":{"tags":["git","commit","npm","lint"]},"headers":[],"relativePath":"tech/frontend/commitlint.md","filePath":"tech/frontend/commitlint.md","lastUpdated":1702961031000}'),e={name:"tech/frontend/commitlint.md"};function l(p,s,h,o,c,d){return t(),i("div",null,s[0]||(s[0]=[n(`<h1 id="commitlint-使用指南" tabindex="-1">Commitlint 使用指南 <a class="header-anchor" href="#commitlint-使用指南" aria-label="Permalink to &quot;Commitlint 使用指南&quot;">​</a></h1><h2 id="简介" tabindex="-1">简介 <a class="header-anchor" href="#简介" aria-label="Permalink to &quot;简介&quot;">​</a></h2><p>Commitlint 是一个用于检查 Git 提交信息的工具，通过检查提交信息是否符合规范，以提高代码库的可读性和维护性。</p><ul><li>提供了一套规范化的检查规则，且支持自定义规则</li><li>与 Git 钩子集成，在创建提交时自动检查提交信息是否符合规范</li></ul><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><h3 id="_1-安装并创建配置文件" tabindex="-1">1. 安装并创建配置文件 <a class="header-anchor" href="#_1-安装并创建配置文件" aria-label="Permalink to &quot;1. 安装并创建配置文件&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 安装 commitlint 和 commitlint 配置</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -D</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> commitlint-cli</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> commitlint-config-conventional</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 创建配置文件</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">echo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;import &#39;@commitlint/config-conventional&#39;\\n\\nexport default {\\n  extends: [&#39;@commitlint/config-conventional&#39;],\\n}&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> commitlint.config.js</span></span></code></pre></div><details class="details custom-block"><summary>检查最新提交</summary><p>检查当前当前仓库最后一次提交记录是否符合规范，如果检查未通过，会提示错误信息。</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npx</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> commitlint</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> HEAD~1</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --to</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> HEAD</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --verbose</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># ✔   found 0 problems, 0 warnings</span></span></code></pre></div></details><h3 id="_2-配置-git-hooks" tabindex="-1">2. 配置 git hooks <a class="header-anchor" href="#_2-配置-git-hooks" aria-label="Permalink to &quot;2. 配置 git hooks&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 安装 husky</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -D</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> husky</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 激活 git hooks</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npx</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> husky</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 添加 commit-msg 钩子</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npx</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> husky</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .husky/commit-msg</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &#39;npx --no -- commitlint --edit \${1}&#39;</span></span></code></pre></div><details class="details custom-block"><summary>测试 Git Hooks</summary><p>可以通过简单地提交来测试该钩子，如果配置正常，您应该会看到提交失败的提示。</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> commit</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -m</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;foo: 这条提交将会失败&quot;</span></span></code></pre></div></details><h3 id="_3-配置-script-prepare" tabindex="-1">3. 配置 script prepare <a class="header-anchor" href="#_3-配置-script-prepare" aria-label="Permalink to &quot;3. 配置 script prepare&quot;">​</a></h3><p>在 package.json 中增加 prepare 脚本，用于在安装依赖时自动安装 husky。</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;scripts&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;prepare&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;husky install&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // other...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h2><h3 id="提交格式" tabindex="-1">提交格式 <a class="header-anchor" href="#提交格式" aria-label="Permalink to &quot;提交格式&quot;">​</a></h3><blockquote><p>注：<code>?</code> 表示可选，不输入 <code>scope</code> 时可省略圆括号。</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>type(scope?): subject</span></span>
<span class="line"><span>body?</span></span>
<span class="line"><span>footer?</span></span></code></pre></div><h3 id="type" tabindex="-1">type <a class="header-anchor" href="#type" aria-label="Permalink to &quot;type&quot;">​</a></h3><p>用于说明 commit 的类别，只允许使用下列值：</p><ul><li>build: 对项目构建系统或外部依赖项的更改。例如，修改构建脚本、配置文件等。</li><li>chore: 非业务性的任务和更改。通常用于修改构建过程、辅助工具的代码，或者进行一些不涉及用户功能的工作。</li><li>ci: 对持续集成 (Continuous Integration) 配置文件和脚本的更改。</li><li>docs: 文档变更，包括但不限于 README 文件、文档生成器或注释的变更。</li><li>feat: 新功能的添加。通常伴随着用户功能或其他明显的变更。</li><li>fix: 修复 bug。</li><li>perf: 改进性能的代码更改。</li><li>refactor: 代码重构，不是修复 bug 也不是添加新功能的代码更改。</li><li>revert: 撤销先前的提交。</li><li>style: 与代码风格相关的更改，例如空格、格式化等，而不涉及功能性代码更改。</li><li>test: 添加或修改测试。</li></ul><h3 id="body-footer" tabindex="-1">body &amp; footer <a class="header-anchor" href="#body-footer" aria-label="Permalink to &quot;body &amp; footer&quot;">​</a></h3><p><code>body</code> 用于提供更详细的说明，可以分成多行。</p><p><code>footer</code> 用于提供一些与提交信息不直接相关的信息，可以分成多行。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>feat: 防止请求竞争</span></span>
<span class="line"><span></span></span>
<span class="line"><span>引入一个请求ID和对最新请求的引用。忽略除最新请求外的所有传入响应。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>移除用于解决竞争问题但现在已过时的超时机制。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>参考：#123</span></span></code></pre></div><h3 id="重大修改" tabindex="-1">重大修改 <a class="header-anchor" href="#重大修改" aria-label="Permalink to &quot;重大修改&quot;">​</a></h3><p>当仓库产生比较重大的修改时，例如删除了某个 API，或者改变了大量的 API，可以通过一下两种方式来表示：</p><h4 id="type-1" tabindex="-1">type! <a class="header-anchor" href="#type-1" aria-label="Permalink to &quot;type!&quot;">​</a></h4><p>在提交信息的 <code>type</code> 后面添加 <code>!</code> 符号，表示该提交是重大更改。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>feat!: 新增了新的 API，移除了旧的 API</span></span></code></pre></div><p><code>type</code> 可以是可选枚举值的任意一个。</p><h4 id="breaking-change" tabindex="-1">BREAKING CHANGE <a class="header-anchor" href="#breaking-change" aria-label="Permalink to &quot;BREAKING CHANGE&quot;">​</a></h4><p>在提交信息的 <code>body</code> 中添加 <code>BREAKING CHANGE</code>，表示该提交是重大更改。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>feat: 新增了新的 API</span></span>
<span class="line"><span></span></span>
<span class="line"><span>BREAKING CHANGE: 移除了旧的 API</span></span></code></pre></div>`,34)]))}const g=a(e,[["render",l]]);export{k as __pageData,g as default};
