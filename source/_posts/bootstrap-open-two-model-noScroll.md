---
layout: '[layout]'
title: bootstrap 嵌套模态框 二级模态框关闭导致一级模态框无法滚动
date: 2019-01-24 14:36:36
tags:
- bootstrap
---


备注：

[bootstrap 官网](https://v3.bootcss.com/javascript/#modals)

官方文档解释 ：

  > 不支持同时打开多个模态框
    千万不要在一个模态框上重叠另一个模态框。要想同时支持多个模态框，需要自己写额外的代码来实现。

解决方法：
  在主模态框上加属性：`style="overflow-y: auto;"`

示例：
  ```
  <div class="modal fade" tabindex="-1" role="dialog" data-backdrop="static" style="overflow-y: auto;">
    <div class="modal-dialog modal-lg" role="document" style="width: 700px;">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>

  ```