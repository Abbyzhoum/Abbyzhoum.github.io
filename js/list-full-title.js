/* 侧边栏「最近更新」/「文档树」标题全文提示
 * 背景：主题 collection 组件把条目本身渲染为 <a class="ui-collection__item">，
 * 标题用 txt-ellipsis() 单行截断 —— 232px 侧栏下约半数标题被截断
 * （CDP 实测 textW 329.5 vs rectW 178，溢出 151.5px）。
 * 主题其实已给 <a> 写了 title 属性（原生 tooltip），但原生提示有 1~2s 延迟、
 * 无法样式化、触屏无效。这里补一个即时跟随的悬浮气泡作为增强。
 * 方案：把完整文本写入 data-full-title，由 custom-purple.css 的 ::after 渲染；
 * 未溢出的条目不写属性，气泡自然不出现。
 */
(function () {
  // 判断标题是否真的被截断。
  // 不能用 scrollWidth > clientWidth：两者都是整数（四舍五入），178 vs 178 会掩盖
  // 真实的 23.5px 溢出（CDP 实测）。改用 Range 量文本真实宽度与元素 rect 宽度比较。
  function isTruncated(title) {
    if (!title || !title.firstChild) return false;
    var rectW = title.getBoundingClientRect().width;
    if (!rectW) return false;
    var range = document.createRange();
    range.selectNodeContents(title);
    var textW = range.getBoundingClientRect().width;
    return textW - rectW > 1;
  }

  function apply() {
    var widgets = document.querySelectorAll('.recent-widget, .doc-tree-widget');
    if (!widgets.length) return 0;
    var marked = 0;
    widgets.forEach(function (widget) {
      // 条目自身就是 <a class="ui-collection__item">（不是内含 <a>）
      widget.querySelectorAll('.ui-collection__item').forEach(function (item) {
        var title = item.querySelector('.ui-collection__title');
        if (!title) return;
        var full = (title.textContent || '').replace(/\s+/g, ' ').trim();
        if (!full) return;
        if (item.tagName === 'A' && !item.hasAttribute('title')) item.setAttribute('title', full);
        // 只有真的被截断才挂气泡，避免短标题也弹提示
        if (isTruncated(title)) {
          item.setAttribute('data-full-title', full);
          marked++;
        } else {
          item.removeAttribute('data-full-title');
        }
      });
    });
    return marked;
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', apply);
  } else {
    apply();
  }
  // 字体加载完成后宽度会变，重新判定一次
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(apply);
  }
  window.addEventListener('load', apply);
  window.addEventListener('resize', function () {
    window.clearTimeout(window.__fullTitleTimer);
    window.__fullTitleTimer = window.setTimeout(apply, 200);
  });
})();
