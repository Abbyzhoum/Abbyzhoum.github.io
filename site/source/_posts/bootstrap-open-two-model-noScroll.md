---
title: bootstrap 嵌套模态框 二级模态框关闭导致一级模态框无法滚动
date: '2019-01-24T14:36:36+08:00'
permalink: uncategorized/bootstrap-open-two-model-noScroll/
tags:
  - bootstrap
---

<p>备注：</p>
<p><a href="https://v3.bootcss.com/javascript/#modals" target="_blank" rel="noopener">bootstrap 官网</a></p>
<p>官方文档解释 ：</p>
<blockquote>
<p>不支持同时打开多个模态框<br>    千万不要在一个模态框上重叠另一个模态框。要想同时支持多个模态框，需要自己写额外的代码来实现。</p>
</blockquote>
<p>解决方法：<br>  在主模态框上加属性：<code>style="overflow-y: auto;"</code></p>
<p>示例：<br>  </p><pre><code>&lt;div class="modal fade" tabindex="-1" role="dialog" data-backdrop="static" style="overflow-y: auto;"&gt;
  &lt;div class="modal-dialog modal-lg" role="document" style="width: 700px;"&gt;
      &lt;div class="modal-content"&gt;
          &lt;div class="modal-header"&gt;
              &lt;button type="button" class="close" data-dismiss="modal" aria-label="Close"&gt;&lt;span aria-hidden="true"&gt;&amp;times;&lt;/span&gt;&lt;/button&gt;</code></pre><p></p>
