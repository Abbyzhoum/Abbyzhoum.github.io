# Stellar 紫色主题博客源码

- Hexo 8.1.2 + Stellar 2.0.0，版本由 package-lock.json 锁定。
- 自定义配色：`_config.stellar.yml`；阅读样式：`source/custom-purple.css`。
- `source/_posts` 包含 16 篇文章。15 篇历史文章从旧发布页恢复正文 HTML，保留原网址、标题、日期和标签；402 文章使用 Markdown。
- 历史文章的原始 Markdown 不在旧仓库内，因此恢复后的历史正文以 HTML 嵌入 Markdown，避免有损逆转换。

## 构建与发布

在本目录运行：

```sh
npm ci
npm run build
```

项目内安装 Node 22，不修改系统 Node。构建将生成文件复制到仓库根目录，保留原静态资源；GitHub Pages 仍使用 master 根目录，现有域名不变。发布时请在新分支提交并发起 PR，不直接推送 master。

本地预览：`npm run preview`。

## 已知历史问题

旧文章 `vi-useful-expressions-md` 引用的 `/images/vi.png` 和 `/images/vi1.png` 在旧仓库中已缺失，本次不伪造图片。旧的自定义文章锚点在新主题下可能改变；文章级网址保持不变。

`migrate.cjs` 是一次性恢复脚本，不应在后续构建时重复执行。
