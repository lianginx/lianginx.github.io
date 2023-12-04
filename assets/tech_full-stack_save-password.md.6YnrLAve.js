import{_ as s,c as a,o as i,R as t}from"./chunks/framework.GyVv69-t.js";const E=JSON.parse('{"title":"加密储存用户密码","description":"","frontmatter":{"tags":["Nuxt","Node.js","Password","Hash"]},"headers":[],"relativePath":"tech/full-stack/save-password.md","filePath":"tech/full-stack/save-password.md","lastUpdated":1701702333000}'),p={name:"tech/full-stack/save-password.md"},n=t(`<h1 id="加密储存用户密码" tabindex="-1">加密储存用户密码 <a class="header-anchor" href="#加密储存用户密码" aria-label="Permalink to &quot;加密储存用户密码&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">Nuxt 3 项目实例</p><p>这里提供了一个使用 Nuxt 3 开发的项目实例，你可以结合文章和项目实例来学习如何相对安全地存储用户密码。</p><p><a href="https://github.com/lianginx/password" target="_blank" rel="noreferrer">查看项目实例 —— lianginx/password</a></p></div><p>在设计登录注册系统时，存储用户密码的方式非常重要，因为这关系到用户数据的安全。以下是一些关于如何安全存储用户密码的建议：</p><ol><li><p><strong>不要明文存储密码</strong>：你绝对不应该在数据库中明文存储用户的密码。这是因为如果你的数据库被黑客攻击，那么用户的密码就会被直接暴露。</p></li><li><p><strong>使用哈希函数</strong>：你应该使用哈希函数来存储用户密码的哈希值，而不是密码本身。哈希函数可以将任意长度的输入转化为固定长度的输出，且具有单向性，即不能从哈希值反推出原始输入。</p></li><li><p><strong>使用盐值</strong>：为了防止彩虹表攻击，你应该为每个用户的密码添加一个随机的盐值，然后将密码和盐值一起进行哈希。盐值应该是足够长且随机的，以确保每个用户的盐值都是唯一的。</p></li><li><p><strong>使用强哈希函数</strong>：你应该使用被广泛认可的强哈希函数，如SHA-256，SHA-3，bcrypt，scrypt，Argon2 等。</p></li><li><p><strong>密码更新</strong>：如果用户更改了密码，你应该生成一个新的盐值，并使用新的盐值和新密码计算新的哈希值。</p></li><li><p><strong>使用多重哈希</strong>：为了增加黑客破解密码的难度，你可以对密码进行多次哈希。</p></li></ol><p>请注意，这些只是一些基本的建议，实际的密码存储策略可能需要根据你的具体需求和环境进行调整。在处理用户密码时，你应该始终遵循最佳的安全实践，并在可能的情况下，寻求专业的安全建议。</p><h2 id="密码储存、验证" tabindex="-1">密码储存、验证 <a class="header-anchor" href="#密码储存、验证" aria-label="Permalink to &quot;密码储存、验证&quot;">​</a></h2><p>当用户注册时，你会生成一个随机的盐值，然后将这个盐值和用户的密码一起进行哈希，得到哈希值。你需要在数据库中存储这个哈希值和对应的盐值。</p><p>当用户登录时，他们会提供他们的用户名和密码。你首先需要从数据库中获取与该用户名对应的盐值和哈希值。然后，你将这个盐值和用户提供的密码一起进行同样的哈希操作，得到一个新的哈希值。如果这个新的哈希值和数据库中存储的哈希值相同，那么密码就是正确的。</p><p>这是因为哈希函数是单向的，你不能从哈希值反推出原始的密码。但是，如果你有原始的密码和盐值，你可以通过同样的哈希操作得到同样的哈希值。所以，你需要保存盐值，以便你可以验证用户提供的密码是否正确。但请注意，你应该保护好盐值，不要让它们泄露。</p><h2 id="盐值的作用" tabindex="-1">盐值的作用 <a class="header-anchor" href="#盐值的作用" aria-label="Permalink to &quot;盐值的作用&quot;">​</a></h2><p>如果数据库被泄露，盐值也会被泄露。但是，即使在这种情况下，使用盐值仍然可以提高安全性。</p><p>盐值的主要目的是防止彩虹表攻击。彩虹表是一种预先计算好的哈希值到原始密码的映射表。如果没有使用盐值，攻击者可以使用彩虹表来查找哈希值对应的原始密码。但是，如果使用了盐值，即使两个用户的密码相同，由于盐值的随机性，他们的哈希值也会不同。这就意味着攻击者不能使用同一份彩虹表来攻击所有用户，他们必须为每个盐值单独生成一份彩虹表，这在计算上是不可行的。</p><p>此外，即使数据库被泄露，攻击者也无法直接获取到用户的密码。他们必须通过尝试大量的可能的密码，找到一个和盐值一起哈希后能够得到同样哈希值的密码，这通常需要大量的时间和计算资源。</p><p>总的来说，虽然使用盐值不能完全防止密码被破解，但它可以大大增加破解的难度，从而提高系统的安全性。当然，最好的做法是采取多种措施来保护用户数据，包括使用强密码，定期更换密码，使用二次验证等。</p><h2 id="node-js-生成盐值" tabindex="-1">Node.js 生成盐值 <a class="header-anchor" href="#node-js-生成盐值" aria-label="Permalink to &quot;Node.js 生成盐值&quot;">​</a></h2><p>在 Node.js 中，你可以使用 <code>crypto</code> 库来生成一个安全的随机盐值。以下是一个例子：</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> crypto</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;crypto&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 生成一个16字节的盐值</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> salt </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> crypto.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">randomBytes</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">16</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">toString</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;hex&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(salt);</span></span></code></pre></div><p>这段代码会生成一个 32 个字符长的十六进制字符串作为盐值。这个盐值是随机的，并且长度足够长，以确保每个用户的盐值都是唯一的。你可以将这个盐值和用户的密码一起进行哈希，然后将哈希值和盐值一起存储在数据库中。</p><p>当需要验证密码时，你可以使用同样的盐值和哈希函数来计算哈希值，然后将计算出的哈希值与存储在数据库中的哈希值进行比较。如果两个哈希值相同，那么密码就是正确的。</p><p>这样，即使数据库被泄露，攻击者也无法直接获取到用户的密码，因为他们需要知道原始的密码和盐值才能计算出正确的哈希值。这大大增加了攻击的难度，提高了系统的安全性。</p>`,20),e=[n];function l(h,r,o,k,d,c){return i(),a("div",null,e)}const u=s(p,[["render",l]]);export{E as __pageData,u as default};
