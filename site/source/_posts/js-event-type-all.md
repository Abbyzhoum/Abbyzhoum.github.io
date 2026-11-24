---
title: js事件类型一览表
date: '2018-11-30T16:57:55+08:00'
permalink: uncategorized/js-event-type-all/
tags:
  - js
  - event
---

<h3 id="1-存储事件"><a href="#1-存储事件" class="headerlink" title="1.存储事件"></a>1.存储事件</h3><blockquote>
<p>change      <code>用户改变域的内容</code><br>   storage     <code>存储区域（localStorage或sessionStorage）时会触发该事件</code></p>
</blockquote>
<h3 id="2-焦点事件"><a href="#2-焦点事件" class="headerlink" title="2.焦点事件"></a>2.焦点事件</h3><blockquote>
<p>onblur    <code>元素失去焦点  （不会冒泡）</code><br>  onfocus   <code>元素获得焦点  （不会冒泡）</code></p>
</blockquote>
<h3 id="3-websocket事件"><a href="#3-websocket事件" class="headerlink" title="3. websocket事件"></a>3. websocket事件</h3><blockquote>
<p>open          <code>WebSocket连接已建立</code><br>  message    <code>通过WebSocket接收到一条消息</code><br>  error          <code>WebSocket连接异常被关闭（比如有些数据无法发送）</code><br>  close        <code>WebSocket连接已关闭</code></p>
</blockquote>
<h3 id="3-表单事件"><a href="#3-表单事件" class="headerlink" title="3. 表单事件"></a>3. 表单事件</h3><blockquote>
<p>onsubmit      <code>提交按钮被点击</code><br>  onreset        <code>重置按钮被点击</code></p>
</blockquote>
<h3 id="3-键盘事件"><a href="#3-键盘事件" class="headerlink" title="3. 键盘事件"></a>3. 键盘事件</h3><blockquote>
<p>onkeyup         <code>某个键盘的键被松开</code><br>  onkeydown    <code>某个键盘的键被按下</code><br>  onkeypress    <code>某个键盘的键被按下或按住</code></p>
</blockquote>
<h3 id="3-视图事件"><a href="#3-视图事件" class="headerlink" title="3. 视图事件"></a>3. 视图事件</h3><blockquote>
<p>resize     <code>窗口或框架被调整尺寸</code><br>  scroll     <code>窗口的滚动事件</code></p>
</blockquote>
<h3 id="3-鼠标事件"><a href="#3-鼠标事件" class="headerlink" title="3. 鼠标事件"></a>3. 鼠标事件</h3><blockquote>
<p>mouseenter         <code>鼠标进入某元素内</code><br>   mousemove          <code>鼠标被移动</code><br>   mouseover           <code>鼠标被移到某元素之上</code><br>   mousedown         <code>某个鼠标按键被按下</code><br>   mouseup             <code>某个鼠标按键被松开</code><br>   mouseleave         <code>指针移出元素范围外（不冒泡）</code><br>   mouseout            <code>鼠标从某元素移开</code><br>   contextmenu       <code>右键点击</code><br>   click                   <code>鼠标点击某个对象</code><br>   select                <code>文本被选定</code></p>
</blockquote>
<h3 id="3-拖拽事件"><a href="#3-拖拽事件" class="headerlink" title="3. 拖拽事件"></a>3. 拖拽事件</h3><blockquote>
<p> dragstart         <code>用户开始拖动HTML元素或选中的文本</code><br>   drag              <code>正在拖动元素或文本选区（在此过程中持续触发，每350ms触发一次）</code><br>   dragend          <code>拖放操作结束 （松开鼠标按钮或按下Esc键</code><br>   dragenter        <code>被拖动的元素或文本选区移入有效释放目标区</code><br>   dragover       <code>被拖动的元素或文本选区正在有效释放目标上被拖动（在此过程中持续触发，每350ms触发一次）</code><br>   dragleave       <code>被拖动的元素或文本选区移出有效释放目标区</code><br>   drop              <code>元素在有效释放目标区上释放</code></p>
</blockquote>
<p><a href="https://developer.mozilla.org/zh-CN/docs/Web/Events" target="_blank" rel="noopener">具体参照MDN官网</a></p>
