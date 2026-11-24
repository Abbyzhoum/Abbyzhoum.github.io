/* global hexo */
'use strict';

// 清洗文章列表摘要：旧文章正文是「HTML 标签包裹 Markdown 源码」，stripHTML 后会残留 ###、```、^[0-9]*$ 等。
// 这里在文章渲染完成后统一清洗 excerpt/content，使列表卡片摘要干净可读。
const { stripHTML } = require('hexo-util');

function cleanMarkdown(text) {
  if (!text) return '';
  let s = String(text);
  // 0) 摘要不应包含大段代码：先整体移除 <pre>…</pre> 块与围栏代码块
  //    （注意要在 stripHTML 之前做，否则标签被剥掉后代码文本会混入摘要）
  s = s.replace(/<pre[\s\S]*?<\/pre>/gi, ' ');
  s = s.replace(/```[\s\S]*?```/g, ' ');
  // 1) 去掉 HTML 标签
  s = stripHTML(s);
  // 3) 去掉行内代码反引号，保留内容
  s = s.replace(/`([^`]*)`/g, '$1');
  // 4) 去掉 Markdown 标题井号（行首 1~6 个 #）
  s = s.replace(/(^|\s)#{1,6}\s*/g, '$1');
  // 5) 去掉强调符号 * _ ~ 和删除线
  // 注意：技术文正文里 * 和 _ 常是字面量（正则 ^[0-9]*$、变量 input_word），
  // 只在「两侧都有成对标记」时才视为强调，避免误删内容。
  s = s.replace(/(\*\*|__)([^\s][^*_]*?[^\s]|[^\s])\1/g, '$2');
  s = s.replace(/(\*|_)([^*_\s][^*_]*?[^*_\s]|[^\s])\1/g, '$2');
  s = s.replace(/~~(.*?)~~/g, '$1');
  // 6) 去掉链接语法 [text](url) → text
  s = s.replace(/\[([^\]]*)\]\([^)]*\)/g, '$1');
  // 7) 去掉图片语法 ![alt](url)
  s = s.replace(/!\[[^\]]*\]\([^)]*\)/g, '');
  // 8) 去掉引用 >
  s = s.replace(/(^|\s)>\s?/g, '$1');
  // 9) 去掉无序列表符号 - * + 和有序列表 1. 2.
  s = s.replace(/(^|\s)[*+-]\s+/g, '$1');
  s = s.replace(/(^|\s)\d+\.\s+/g, '$1');
  // 10) 去掉水平线 --- *** ___
  s = s.replace(/(^|\s)(-{3,}|\*{3,}|_{3,})(\s|$)/g, ' ');
  // 11) 去掉 HTML 实体残留（保留 &amp; &lt; &gt; 语义，避免代码里的 < > 丢失）
  s = s.replace(/&[a-z#0-9]+;/gi, ' ');
  // 12) 合并空白
  s = s.replace(/\s+/g, ' ').trim();
  return s;
}

function truncate(s, n) {
  if (!s) return '';
  const str = String(s);
  if (str.length <= n) return str;
  const cut = str.slice(0, n);
  // 尽量在标点/空格处断句
  const m = cut.match(/^(.*[，。！？；、,.!?;])(\s|$)/);
  return (m ? m[1] : cut) + '…';
}

// 注意：必须在主题的 attachPageViewModel（priority 1000）之前执行。
// 主题 page-view-model.js 只读 data.excerpt，不读任何自定义字段，
// 因此 excerpt 为空时必须直接改写 data.excerpt 本身，否则主题会回退到
// stripHTML(content) 的原文，导致列表摘要残留 ###、``` 等 Markdown 符号。
hexo.extend.filter.register('after_post_render', function (data) {
  const maxLen = Number(
    hexo?.config?.theme_config?.article?.listing?.excerpt_length
  ) || 100;

  if (data.excerpt) {
    // 有显式 <!-- more -->：清洗后截断
    data.excerpt = truncate(cleanMarkdown(data.excerpt), maxLen);
  } else {
    // 无显式摘要：Hexo 会置 excerpt='' 且 more=content，
    // 此时用清洗后的正文生成摘要并写回 data.excerpt，主题即可直接取用。
    const source = data.more || data.content || '';
    const cleaned = truncate(cleanMarkdown(source), maxLen);
    if (cleaned) {
      data.excerpt = cleaned;
    }
  }
  // description 用于 SEO，同样清洗避免出现 ###
  if (data.description) {
    data.description = truncate(cleanMarkdown(data.description), 160);
  }
  return data;
}, 20);

// 兜底：为主题生成一个干净的摘要字段（若主题用 excerpt 字段，上面已处理）
hexo.extend.helper.register('clean_excerpt', function (post, len) {
  return truncate(cleanMarkdown(post?.excerpt || post?.content || ''), len || 100);
});
