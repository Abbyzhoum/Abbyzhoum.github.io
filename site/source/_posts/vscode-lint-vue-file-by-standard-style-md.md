---
title: 如何在vscode中用standard style 风格去验证 vue文件
date: '2018-11-15T18:03:37+08:00'
permalink: uncategorized/vscode-lint-vue-file-by-standard-style-md/
tags:
  - vue
  - vscode
  - standard style
---

<h1 id="1-JavaScript-Standard-Style简介"><a href="#1-JavaScript-Standard-Style简介" class="headerlink" title="1 JavaScript Standard Style简介"></a>1 JavaScript Standard Style简介</h1><p>本工具通过以下三种方式为你（及你的团队）节省大量时间：</p>
<ul>
<li>无须配置。 史上最便捷的统一代码风格的方式，轻松拥有。</li>
<li>自动代码格式化。 只需运行 standard –fix 从此和脏乱差的代码说再见。</li>
<li>提前发现风格及程序问题。 减少代码审查过程中反反复复的修改过程，节约时间。</li>
<li>无须犹豫。再也不用维护 .eslintrc, .jshintrc, or .jscsrc 。开箱即用。</li>
</ul>
<p>安装：<br></p><pre><code>npm i standard -g</code></pre><p></p>
<p>关于<a href="https://standardjs.com/readme-zhcn.html" target="_blank" rel="noopener">JavaScript 代码规范</a>, 你可以点击链接看一下。</p>
<h1 id="2-如何在vscode中用JavaScript-Standard-Style风格去验证-vue文件"><a href="#2-如何在vscode中用JavaScript-Standard-Style风格去验证-vue文件" class="headerlink" title="2 如何在vscode中用JavaScript Standard Style风格去验证 vue文件"></a>2 如何在vscode中用JavaScript Standard Style风格去验证 vue文件</h1><p>实际上<a href="https://marketplace.visualstudio.com/items?itemName=chenxsan.vscode-standardjs" target="_blank" rel="noopener">JavaScript Standard Style</a>有一个FAQ, 说明了如何使用。</p>
<p>但是有一点非常重要的作者没有提到，就是<code>eslint-plugin-html这个插件必须要安装3.x.x版本的</code>, 现在<code>eslint-plugin-html</code>, 已经升级到4.x版本，默认不写版本号安装的就是4.x版本的，所以会出现问题。<a href="https://github.com/BenoitZugmeyer/eslint-plugin-html/issues/60" target="_blank" rel="noopener">参考</a></p>
<blockquote>
<p>ESLint v4 is only supported by eslint-plugin-html v3, so you can’t use eslint-plugin-html v1.5.2 with it (I should add a warning about this when trying to use the plugin with an incompatible version on ESLint).</p>
</blockquote>
<blockquote>
<p>If you do not use ESLint v4, please provide more information (package.json, a gist to reproduce, …)</p>
</blockquote>
<pre><code>// FAQ
How to lint script tag in vue or html files?

You can lint them with eslint-plugin-html, just install it first, then enable linting for those file types in settings.json with:

 "standard.validate": [
     "javascript",
     "javascriptreact",
     "html"
 ],
 "standard.options": {
     "plugins": ["html"]
 },
 "files.associations": {
     "*.vue": "html"
 },
If you want to enable autoFix for the new languages, you should enable it yourself:

 "standard.validate": [
     "javascript",
     "javascriptreact",
     { "language": "html", "autoFix": true }
 ],
 "standard.options": {
     "plugins": ["html"]
 }</code></pre>
<h1 id="3-综上，-整理一下安装思路"><a href="#3-综上，-整理一下安装思路" class="headerlink" title="3 综上， 整理一下安装思路"></a>3 综上， 整理一下安装思路</h1><h2 id="3-1-需要安装哪些包？"><a href="#3-1-需要安装哪些包？" class="headerlink" title="3.1 需要安装哪些包？"></a>3.1 需要安装哪些包？</h2><ul>
<li><code>npm i -g standard</code></li>
<li><code>npm i -g eslint-plugin-html@3.2.2</code> 必须是3x版本</li>
<li><code>npm i -g eslint</code><br>以上三个包都是全局安装的，如果你想看看全局安装了哪些包可以用<code>npm list -g --depth=0</code>查看</li>
</ul>
<h2 id="3-2-vscode-config-如何写？"><a href="#3-2-vscode-config-如何写？" class="headerlink" title="3.2 vscode config 如何写？"></a>3.2 vscode config 如何写？</h2><pre><code>"standard.validate": [
  "javascript",
  "javascriptreact",
  {
    "language": "html",
    "autoFix": true
  }
],
"standard.options": {
  "plugin": ["html"]
},
"files.associations": {
  "*.vue": "html"
},</code></pre>
<h2 id="3-3-如何在保存文件时，自动使用standard格式化vue文件"><a href="#3-3-如何在保存文件时，自动使用standard格式化vue文件" class="headerlink" title="3.3 如何在保存文件时，自动使用standard格式化vue文件"></a>3.3 如何在保存文件时，自动使用standard格式化vue文件</h2><pre><code>"standard.autoFixOnSave": true</code></pre>
<h2 id="4-如果还不行怎么办？"><a href="#4-如果还不行怎么办？" class="headerlink" title="4. 如果还不行怎么办？"></a>4. 如果还不行怎么办？</h2><ol>
<li>重启一下vscode</li>
<li>重启一下电脑</li>
<li>在此文后追加评论</li>
</ol>
