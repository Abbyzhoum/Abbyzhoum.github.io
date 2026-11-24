---
title: VI必备常用场景快捷操作
date: '2018-11-15T17:36:24+08:00'
permalink: uncategorized/vi-useful-expressions-md/
tags:
  - vi
---

<h1 id="1-【字符串替换】快速修改配置文件版本号"><a href="#1-【字符串替换】快速修改配置文件版本号" class="headerlink" title="1. 【字符串替换】快速修改配置文件版本号"></a>1. 【字符串替换】快速修改配置文件版本号</h1><p>语法：<code>%s/str1/str2/g</code> 将文件中所有的str1字符串替换成str2字符串。</p>
<p>示例：某个服务从43版本升级到44版本</p>
<pre><code>// vi某个配置文件， 进入vi命令模式，输入
:%s/43/44/g</code></pre>
<p>这样做的好处是不需要移动光标去查找，然后进入插入模式去修改版本，而是直接替换，这样比较快捷。</p>
<p>注意：<code>务必确认要被替换的字符串只有一个，否则可能造成误替换。</code></p>
<p>更多用法：</p>
<table>
<thead>
<tr>
<th>语法</th>
<th>功能</th>
<th>示例</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>:s/str1/str2/</code></td>
<td>替换当前行<code>第一个</code>str1为str2</td>
<td><code>:s/44/45</code></td>
</tr>
<tr>
<td><code>:s/str1/str2/g</code></td>
<td>替换当前行<code>所有的</code>str1为str2</td>
<td><code>:s/44/45/g</code></td>
</tr>
<tr>
<td><code>:%s/str1/str2/</code></td>
<td>替换每一行<code>第一个</code>str1为str2</td>
<td><code>:%s/44/45</code></td>
</tr>
<tr>
<td><code>:%s/str1/str2/g</code></td>
<td>替换每一行<code>所有的</code>str1为str2</td>
<td><code>:%s/44/45/g</code></td>
</tr>
</tbody>
</table>
<h1 id="2-光标移动"><a href="#2-光标移动" class="headerlink" title="2. 光标移动"></a>2. 光标移动</h1><p>注意：可配合 <code>:set nu</code>显示行号</p>
<table>
<thead>
<tr>
<th>语法</th>
<th>功能</th>
<th>示例</th>
</tr>
</thead>
<tbody>
<tr>
<td>G</td>
<td>移动到这个档案的最后一行(常用)</td>
<td></td>
</tr>
<tr>
<td>nG</td>
<td>n 为数字。移动到这个档案的第 n 行。</td>
<td>20G 则会移动到这个档案的第20行</td>
</tr>
<tr>
<td>gg</td>
<td>移动到这个档案的第一行</td>
<td></td>
</tr>
<tr>
<td><code>n&lt;Enter&gt;</code></td>
<td>n 为数字 光标向下移动 n 行</td>
<td><code>3&lt;Enter&gt;</code> 向下移动三行</td>
</tr>
</tbody>
</table>
<h1 id="3-vi快捷手册"><a href="#3-vi快捷手册" class="headerlink" title="3. vi快捷手册"></a>3. vi快捷手册</h1><p><img src="/images/vi.png" alt=""><br><img src="/images/vi1.png" alt=""></p>
