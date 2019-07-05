---
layout: '[layout]'
title: js事件类型一览表
date: 2018-11-30 16:57:55
tags:
- js
- event
---

### 1.存储事件
 > change      `用户改变域的内容`
   storage     `存储区域（localStorage或sessionStorage）时会触发该事件`

### 2.焦点事件
> onblur    `元素失去焦点  （不会冒泡）`
  onfocus   `元素获得焦点  （不会冒泡）`

### 3. websocket事件
> open          `WebSocket连接已建立`
  message    `通过WebSocket接收到一条消息`
  error          `WebSocket连接异常被关闭（比如有些数据无法发送）`
  close        ` WebSocket连接已关闭 `

### 3. 表单事件
> onsubmit      `提交按钮被点击`
  onreset        `重置按钮被点击`

### 3. 键盘事件
> onkeyup         `某个键盘的键被松开`
  onkeydown    `某个键盘的键被按下`
  onkeypress    `某个键盘的键被按下或按住`

### 3. 视图事件
> resize     `窗口或框架被调整尺寸`
  scroll     `窗口的滚动事件`

### 3. 鼠标事件
 > mouseenter         ` 鼠标进入某元素内`
   mousemove          `鼠标被移动`
   mouseover           `鼠标被移到某元素之上`
   mousedown         `某个鼠标按键被按下`
   mouseup             `某个鼠标按键被松开`
   mouseleave         `指针移出元素范围外（不冒泡）`
   mouseout            `鼠标从某元素移开`
   contextmenu       `右键点击`
   click                   `鼠标点击某个对象`
   select                `文本被选定`

### 3. 拖拽事件
>  dragstart         `用户开始拖动HTML元素或选中的文本`
   drag              ` 正在拖动元素或文本选区（在此过程中持续触发，每350ms触发一次）`
   dragend          `拖放操作结束 （松开鼠标按钮或按下Esc键`
   dragenter        `被拖动的元素或文本选区移入有效释放目标区`
   dragover       `被拖动的元素或文本选区正在有效释放目标上被拖动（在此过程中持续触发，每350ms触发一次）`
   dragleave       ` 被拖动的元素或文本选区移出有效释放目标区`
   drop              ` 元素在有效释放目标区上释放`

[具体参照MDN官网](https://developer.mozilla.org/zh-CN/docs/Web/Events)