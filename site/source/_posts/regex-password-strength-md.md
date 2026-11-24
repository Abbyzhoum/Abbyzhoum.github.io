---
title: 密码强度：前后字符不相同，不出现连续的字母、数字（有点特殊的需求）
date: '2019-07-05T13:10:16+08:00'
permalink: uncategorized/regex-password-strength-md/
tags:
  - 密码
---

<h3 id="整理了一下关于密码强度的正则表达式"><a href="#整理了一下关于密码强度的正则表达式" class="headerlink" title="整理了一下关于密码强度的正则表达式"></a>整理了一下关于密码强度的正则表达式</h3><ol>
<li>前后字符不相同 :</li>
</ol>
<pre><code>for (var a = 0; a &lt; inputWord.length -1; a++) {
      if(inputWord.charAt(a) === inputWord.charAt(a+1)) {
        if(条件){
          执行某项操作
        }
      }
    }</code></pre>
<ol start="2">
<li>不出现连续的字母、数字 :</li>
</ol>
<pre><code>for (var j = 0; j &lt; inputWord.length-2; j++) {
    if(inputWord.charAt(j)-inputWord.charAt(j+1) === 1 &amp;&amp; inputWord.charAt(j+1)-inputWord.charAt(j+2) ===1 ) {
      if(条件){
        执行某项操作
       }
  			return false
      }
      
  	if(inputWord.charAt(j+2)-inputWord.charAt(j+1) === 1 &amp;&amp; inputWord.charAt(j+1)-inputWord.charAt(j) ===1 ) {
       if(条件){
        执行某项操作
       }
  		 	return false
  	}
  }</code></pre>
<ol start="3">
<li><p>包含数字和大小写字母、非字母字符 :</p>
<pre><code>'^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&amp;])[A-Za-z\d$@$!%*?&amp;]{' + minNum + ',' + maxNum + '}'</code></pre>
</li>
<li><p>包含数字和大小写字母、非字母字符 :</p>
<pre><code>'/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{'+ minNum + ','+ maxNum +'}$/'</code></pre>
</li>
<li><p>特殊字符，如键盘上的32个字符</p>
<pre><code>^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[\x21-\x7e]*$</code></pre>
</li>
</ol>
