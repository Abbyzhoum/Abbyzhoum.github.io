---
title: gitbash生存指南 之 git常用命令与oh-my-zsh常用缩写
date: '2019-03-15T12:11:31+08:00'
permalink: uncategorized/git-commom-cmds/
tags:
  - git
  - oh-my-zsh
---

<p><code>如果命令行可以解决的问题，就绝对不要用GUI工具。快点试用Git bash吧， 别再用TortoiseGit了。</code></p>
<h1 id="1-必会8个命令"><a href="#1-必会8个命令" class="headerlink" title="1. 必会8个命令"></a>1. 必会8个命令</h1><p>下面的操作都是经常使用的，有些只需要做一次，有些是经常操作的</p>
<p>git命令虽然多，但是经常使用的不超过8个。</p>
<table>
<thead>
<tr>
<th>命令</th>
<th>执行次数</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>git clone http://sdfjslf.git</code></td>
<td>每个项目只需要执行一次</td>
<td>//克隆一个项目 </td>
</tr>
<tr>
<td><code>git fetch origin round-2</code></td>
<td>每个分支只需要执行一次</td>
<td>//round-2分支在本地不存在，首先要创建一个分支</td>
</tr>
<tr>
<td><code>git checkout round-2</code></td>
<td>多次</td>
<td>// 切换到round-2分支</td>
</tr>
<tr>
<td><code>git branch --set-upstream-to=origin/round-2</code></td>
<td>每个分支只需要执行一次</td>
<td>// 将本地round-2分支关联远程round-2分支</td>
</tr>
<tr>
<td><code>git add -A</code></td>
<td>每次增加文件都要执行</td>
<td>// 在round-2下创建了一个文件, 使用-A可以添加所有文件到暂存区</td>
</tr>
<tr>
<td><code>git commit -am "我增加了一个文件"</code></td>
<td>每次提交都要执行</td>
<td>// commit</td>
</tr>
<tr>
<td><code>git push</code></td>
<td>每次推送都要执行</td>
<td>//最好是在push之前，使用git pull拉去远程代码到本地，否则有可能被拒绝</td>
</tr>
<tr>
<td><code>git pull</code></td>
<td>每次拉去都要执行</td>
<td>拉去远程分支代码到本地并合并到当前分支</td>
</tr>
</tbody>
</table>
<h1 id="2-常用的git命令"><a href="#2-常用的git命令" class="headerlink" title="2. 常用的git命令"></a>2. 常用的git命令</h1><p><code>假设你在master分支上</code></p>
<pre><code>// 将本地修改后的文件推送到本地仓库
git commit -am '修改了一个问题'

// 将本地仓库推送到远程仓库
git push</code></pre>
<h2 id="2-1-状态管理"><a href="#2-1-状态管理" class="headerlink" title="2.1. 状态管理"></a>2.1. 状态管理</h2><h3 id="2-1-1-状态查看"><a href="#2-1-1-状态查看" class="headerlink" title="2.1.1. 状态查看"></a>2.1.1. 状态查看</h3><p>查看当前仓库状态<br></p><pre><code>git status</code></pre><p></p>
<h2 id="2-2-分支管理"><a href="#2-2-分支管理" class="headerlink" title="2.2. 分支管理"></a>2.2. 分支管理</h2><h3 id="2-2-1-分支新建"><a href="#2-2-1-分支新建" class="headerlink" title="2.2.1. 分支新建"></a>2.2.1. 分支新建</h3><p>基于当前分支，创建test分支<br></p><pre><code>// 创建dev分支
git checkout dev

// 创建dev分支后，切换到dev分支
git checkout -b dev 

// 以某个commitId为起点创建分支
git checkout -b new-branch-name commit-id</code></pre><p></p>
<h3 id="2-2-2-分支查看"><a href="#2-2-2-分支查看" class="headerlink" title="2.2.2. 分支查看"></a>2.2.2. 分支查看</h3><p>查看远程分支： git branch -r</p>
<pre><code>// 查看本地分支
git branch

// 查看远程分支
git branch -r

// 查看所有分支
git branch -a</code></pre>
<h3 id="2-2-3-分支切换"><a href="#2-2-3-分支切换" class="headerlink" title="2.2.3. 分支切换"></a>2.2.3. 分支切换</h3><p>切换到某个分支: git checkout 0.10.7<br></p><pre><code>&gt; git checkout 0.10.7
Branch 0.10.7 set up to track remote branch 0.10.7 from origin.
Switched to a new branch '0.10.7'</code></pre><p></p>
<h3 id="2-2-4-分支合并"><a href="#2-2-4-分支合并" class="headerlink" title="2.2.4. 分支合并"></a>2.2.4. 分支合并</h3><p>将master分支合并到0.10.7分支: git merge<br></p><pre><code>&gt; git merge master
Merge made by the 'recursive' strategy.
 public/javascripts/app-qc.js      |  83 +++++++++++++++++++++++++--
 views/menu.html                   |   1 +
 views/qc-template-show-modal.html | 114 ++++++++++++++++++++++++++++++++++++++
 views/qc-template.html            |   7 ++-
 4 files changed, 198 insertions(+), 7 deletions(-)
 create mode 100644 views/qc-template-show-modal.html


// 有时候只想合并某次commit到当前分支，而不是合并整个分支，可以使用 cherry-pick 合并
git cherry-pick commmitId</code></pre><p></p>
<h3 id="2-2-5-分支删除"><a href="#2-2-5-分支删除" class="headerlink" title="2.2.5. 分支删除"></a>2.2.5. 分支删除</h3><pre><code>// 删除远程dev分支
git push --delete origin dev

// 删除本地dev分支
git branch -D dev</code></pre>
<h3 id="2-2-6-拉取本地不存在的远程分支"><a href="#2-2-6-拉取本地不存在的远程分支" class="headerlink" title="2.2.6. 拉取本地不存在的远程分支"></a>2.2.6. 拉取本地不存在的远程分支</h3><pre><code>// 假设现在在master分支， 我需要拉去远程的dev分支到本地，而本地没有dev分支

// 拉取远程分支到本地 git fetch orgin 远程分支名:本地分支名
git fetch origin dev:dev

// 切换到dev分支
git checkout dev

// 本地dev分支关联远程dev分支, 如果不把本地dev分支关联远程dev分支，则执行git pull和git push命令时会报错
git branch --set-upstream-to=origin/dev

// 然后你就可以在dev分支上编辑了</code></pre>
<h2 id="2-3-版本对比"><a href="#2-3-版本对比" class="headerlink" title="2.3. 版本对比"></a>2.3. 版本对比</h2><pre><code>// 查看尚未暂存的文件更新了哪些部分
git diff

// 查看某两个版本之间的差异
git diff commitID1 commitID2 

// 查看某两个版本的某个文件之间的差异
git diff commitID1:filename1 commitID2:filename2</code></pre>
<h2 id="2-4-日志查看"><a href="#2-4-日志查看" class="headerlink" title="2.4. 日志查看"></a>2.4. 日志查看</h2><pre><code>git log 
git short-log</code></pre>
<h2 id="2-5-撤销修改"><a href="#2-5-撤销修改" class="headerlink" title="2.5. 撤销修改"></a>2.5. 撤销修改</h2><h3 id="2-5-1-撤销处于修改状态的文件"><a href="#2-5-1-撤销处于修改状态的文件" class="headerlink" title="2.5.1. 撤销处于修改状态的文件"></a>2.5.1. 撤销处于修改状态的文件</h3><p>如果你修改了某个文件，但是还没有commit到本地仓库。<br></p><pre><code>git checkout -- somefile.js</code></pre><p></p>
<h2 id="2-5-丢弃所有未提交的改变"><a href="#2-5-丢弃所有未提交的改变" class="headerlink" title="2.5 丢弃所有未提交的改变"></a>2.5 丢弃所有未提交的改变</h2><p>git clean 用来删除未跟踪的新创建的文件或者文件夹</p>
<p><code>git checkout . &amp;&amp; git clean -xdf</code></p>
<p>git clean </p>
<ul>
<li><code>-x</code> 不读取gitignore中的忽略规则</li>
<li><code>-d</code> 删除所有未跟踪的文件和文件夹</li>
<li><code>-f</code> 强制</li>
</ul>
<h1 id="3-oh-my-zsh中常用的git缩写"><a href="#3-oh-my-zsh中常用的git缩写" class="headerlink" title="3. oh-my-zsh中常用的git缩写"></a>3. oh-my-zsh中常用的git缩写</h1><pre><code>alias ga='git add'
alias gb='git branch'
alias gba='git branch -a'
alias gbd='git branch -d'
alias gcam='git commit -a -m'
alias gcb='git checkout -b'
alias gco='git checkout'
alias gcm='git checkout master'
alias gcp='git cherry-pick'
alias gd='git diff'
alias gfo='git fetch origin'
alias ggpush='git push origin $(git_current_branch)'
alias ggsup='git branch --set-upstream-to=origin/$(git_current_branch)'
alias glgp='git log --stat -p'
alias gm='git merge'
alias gp='git push'
alias gst='git status'
alias gsta='git stash save'
alias gstp='git stash pop'
alias gl='git pull'
alias glg='git log --stat'
alias glgp='git log --stat -p'
alias glgga='git log --graph --decorate --all' // 图形化查看分支之间的发展关系</code></pre>
<p><a href="https://github.com/robbyrussell/oh-my-zsh/blob/master/plugins/git/git.plugin.zsh" target="_blank" rel="noopener">oh-my-zsh git命令缩写完整版</a></p>
<h1 id="4-参考文献"><a href="#4-参考文献" class="headerlink" title="4. 参考文献"></a>4. 参考文献</h1><ul>
<li><a href="https://git-scm.com/docs" target="_blank" rel="noopener">git 命令参考</a></li>
<li><a href="https://git-scm.com/book/zh/v2" target="_blank" rel="noopener">《Pro Git 中文版》</a></li>
<li><a href="https://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000" target="_blank" rel="noopener">廖雪峰 git教程</a></li>
<li><a href="https://backlog.com/git-tutorial/cn/" target="_blank" rel="noopener">猴子都能懂的GIT入门</a></li>
</ul>
