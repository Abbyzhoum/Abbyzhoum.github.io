---
title: 正则表达式小结
date: '2018-12-17T15:03:24+08:00'
permalink: uncategorized/regular-expression-js/
tags:
  - js
---

<p><code>备注：
\D是\d的非数字字符，等价于等价于[^0-9]，说明了大写字符是小写字符的反义非</code></p>
<h3 id="1-字符集"><a href="#1-字符集" class="headerlink" title="1.字符集"></a>1.字符集</h3><pre><code>一位数字: [0-9]
一位大写字母: [A-Z]
一位小写字母: [a-z]
一位字母: [A-Za-z]
一位数字或字母: [A-Za-z0-9]
一位汉字: [\u4e00-\u9fa5]
</code></pre><h3 id="2-预定义字符集"><a href="#2-预定义字符集" class="headerlink" title="2.预定义字符集"></a>2.预定义字符集</h3><pre><code>\d  一位数字 [0-9]
\w  一位字母，数字或下划线[A-Za-z0-9_]
\s   一位空字符: 空格，Tab…
 .    通配符 可代表一切字符
</code></pre><h3 id="3-正则表达式标志"><a href="#3-正则表达式标志" class="headerlink" title="3.正则表达式标志"></a>3.正则表达式标志</h3><pre><code>g    全局搜索。
i    不区分大小写搜索。
m    多行搜索。
y    执行“粘性”搜索,匹配从目标字符串的当前位置开始，可以使用y标志。
</code></pre><h3 id="4-使用正则表达式的方法"><a href="#4-使用正则表达式的方法" class="headerlink" title="4.使用正则表达式的方法"></a>4.使用正则表达式的方法</h3><pre><code>exec    一个在字符串中执行查找匹配的RegExp方法，它返回一个数组（未匹配到则返回null）。
test    一个在字符串中测试是否匹配的RegExp方法，它返回true或false。
match    一个在字符串中执行查找匹配的String方法，它返回一个数组或者在未匹配到时返回null。
search    一个在字符串中测试匹配的String方法，它返回匹配到的位置索引，或者在失败时返回-1。
replace    一个在字符串中执行查找匹配的String方法，并且使用替换字符串替换掉匹配到的子字符串。
split    一个使用正则表达式或者一个固定字符串分隔一个字符串，并将分隔后的子字符串存储到数组中的String方法。
</code></pre><p>5.正则表达式匹配规则<br>    </p><pre><code>具体请参考官网:https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions#special-questionmark</code></pre><p></p>
<table>
<thead>
<tr>
<th>字符</th>
<th>含义</th>
<th>举例</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>\</code></td>
<td>`转义字符,用于匹配一些保留的字符 [ ] ( ) { } . * + ? ^ $ \</td>
<td>/a*/ 代表会匹配 0 个或者多个 a`</td>
</tr>
<tr>
<td>^</td>
<td>从开始行开始匹配.</td>
<td>/^A/ 并不会匹配 “an A” 中的 ‘A’，但是会匹配 “An E” 中的 ‘A’</td>
</tr>
<tr>
<td>$</td>
<td>从末端开始匹配</td>
<td>/t$/ 并不会匹配 “eater” 中的 ‘t’，但是会匹配 “eat” 中的 ‘t’</td>
</tr>
<tr>
<td>*</td>
<td>匹配&gt;=0个重复的在*号之前的字符</td>
<td>/bo*/会匹配 “A ghost boooooed” 中的 ‘booooo’ 和 “A bird warbled” 中的 ‘b’，但是在 “A goat grunted” 中将不会匹配任何东西</td>
</tr>
<tr>
<td>+</td>
<td>匹配&gt;=1个重复的+号前的字符</td>
<td>/a+/匹配了在 “candy” 中的 ‘a’，和在 “caaaaaaandy” 中所有的 ‘a’</td>
</tr>
<tr>
<td>?</td>
<td>匹配前面一个表达式0次或者1次。等价于 {0,1}</td>
<td>/e?le?/ 匹配 “angel” 中的 ‘el’，和 “angle” 中的 ‘le’ 以及”oslo’ 中的’l’</td>
</tr>
<tr>
<td>.</td>
<td>匹配任意单个字符除了换行符</td>
<td>/.n/将会匹配 “nay, an apple is on the tree” 中的 ‘an’ 和 ‘on’，但是不会匹配 ‘nay’</td>
</tr>
<tr>
<td>{n,m}</td>
<td>n 和 m 都是整数。匹配前面的字符至少n次，最多m次。如果 n 或者 m 的值是0， 这个值被忽略</td>
<td>/a{1, 3}/ 并不匹配“cndy”中的任意字符，匹配“candy”中的a</td>
</tr>
<tr>
<td>\d</td>
<td>匹配一个数字。等价于[0-9]。</td>
<td>/\d/ 或者 /[0-9]/ 匹配”B2 is the suite number.”中的’2’</td>
</tr>
<tr>
<td>\D</td>
<td>匹配一个非数字字符。等价于[^0-9]。</td>
<td>/\D/ 或者 /[^0-9]/ 匹配”B2 is the suite number.”中的’B’ </td>
</tr>
<tr>
<td>\s</td>
<td>匹配一个空白字符，包括空格、制表符、换页符和换行符。</td>
<td>/\s\w*/ 匹配”foo bar.”中的’ bar’</td>
</tr>
<tr>
<td>\w</td>
<td>匹配一个单字字符（字母、数字或者下划线）。等价于[A-Za-z0-9_]。</td>
<td>/\w/ 匹配 “apple,” 中的 ‘a’，”$5.28,”中的 ‘5’ 和 “3D.” 中的 ‘3’</td>
</tr>
<tr>
<td>\n</td>
<td>它返回最后的第n个子捕获匹配的子字符串(捕获的数目以左括号计数)</td>
<td>/apple(,)\sorange\1/ 匹配”apple, orange, cherry, peach.”中的’apple, orange,’</td>
</tr>
<tr>
<td>[xyz]</td>
<td>字符集, 匹配与 xyz 完全相等的字符串</td>
<td>[abcd] 和[a-d]是一样的，”brisket”中得‘b’,也都匹配“city”中的‘c’</td>
</tr>
</tbody>
</table>
