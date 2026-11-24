---
title: 梳理了this的用法，并整理一下，供大家参考一下
date: '2018-11-15T17:39:10+08:00'
permalink: uncategorized/what-is-this-md/
tags:
  - js
---

<p>this使用机制复杂，在开发容易出问题的根本原因在于：this是在运行时绑定，而不是在编写时绑定，this实际值取决于函数调用时的上下文。this的绑定和函数声明的位置没有关系，只取决于函数的调用方式。在JavaScript中，当函数被调用时，会创建一个活动记录（执行时上下文），这个记录包含函数在何处调用、函数的调用方法和传入参数等信息，this会记录其中一个属性。判断this实际绑定值，关键在于分析函数实际调用的位置。</p>
<h2 id="1-说到this，就必须说到call-apply-bind-，先提前说一下"><a href="#1-说到this，就必须说到call-apply-bind-，先提前说一下" class="headerlink" title="1.说到this，就必须说到call(),apply(),bind()，先提前说一下"></a>1.说到this，就必须说到call(),apply(),bind()，先提前说一下</h2><p> 共同点: 都是替换函数中不想要的this为想要的对象<br> 何时: 只要一个函数调用时，其中的this不是想要的就可更换<br> 如何:</p>
<h3 id="①-call-apply"><a href="#①-call-apply" class="headerlink" title="①. call/apply"></a>①. call/apply</h3><p>   强行调用指定函数，并临时替换函数中的this为指定对象<br>   强调: 立刻执行，且仅执行一次<br>        执行时，临时替换时，执行后this恢复原样<br>   如何: 指定函数.call(替换this的对象, 参数值,…..)<br>    如果不传参，默认指向window<br>   call vs apply: 参数值列表<br>    call: 要求传入函数的参数值列表，必须分别传入<br>    apply: 要求传入函数的参数值列表，必须放在数组中整体传入.</p>
<h3 id="②-bind"><a href="#②-bind" class="headerlink" title="②. bind()"></a>②. bind()</h3><p>   什么是: 创建一个和原函数完全相同的函数，并永久绑定函数中的this为指定对象<br>   如何: var 新函数=原函数.bind(替换this的对象,参数值,…)<br>   基于原函数，创建一个新函数，并永久绑定this为指定对象call(),apply(),bind()</p>
<h2 id="2-this的绑定规则"><a href="#2-this的绑定规则" class="headerlink" title="2.this的绑定规则"></a>2.this的绑定规则</h2><h3 id="①-new绑定"><a href="#①-new绑定" class="headerlink" title="①.new绑定"></a>①.new绑定</h3><pre><code>在JavaScript中使用new调用函数会自动执行下面的操作：
（1）创建（或者说构造）一个全新的对象
（2）对新对象执行原型链接
（3）新对象会被绑定到函数的this
（4）如果函数没有返回其他对象，那么 new 表达式中的函数调用会自动返回这个新对象
</code></pre><p>代码块：</p>
<pre><code>function Book(name, author, isbn) {
    this.name = name;
    this.author = author;
    this.isbn = isbn;
}
let book = new Book("Zakas", "ES6", 12345);
console.log(book.name);  //  "Zakas"</code></pre>
<h3 id="②-隐式绑定："><a href="#②-隐式绑定：" class="headerlink" title="②.隐式绑定："></a>②.隐式绑定：</h3><pre><code>当对象内部包含一个指向函数的属性，并且在调用时通过这个属性间接引用函数（obj.prop()的形式），那么函数内的this会隐式指向这个对象
</code></pre><p>代码块：</p>
<pre><code>function foo() {
    console.log(this.a);
}

var obj = {
    a: 2,
    foo: foo
};
obj.foo();  //  2</code></pre>
<h3 id="③-显示绑定"><a href="#③-显示绑定" class="headerlink" title="③.显示绑定"></a>③.显示绑定</h3><pre><code>在某些情况下，我们希望函数内的this绑定在某些指定的对象上，这称为显示绑定。在JavaScript中可以使用call和apply为函数显示指定this绑定。call和apply的第一个参数是一个对象，这个对象会被绑定到this上：
</code></pre><p>代码块：</p>
<pre><code>function foo() {
    console.log(this.a);
}

var obj = {
　　a:2
};

foo.call(obj);  //  2
bind()显示绑定（硬绑定）
unction foo(something) {
    this.a = something;
}
var obj1 = {};
var bar = foo.bind(obj1);
bar(2);
console.log(obj1.a);  //  2</code></pre>
<h3 id="④-默认绑定："><a href="#④-默认绑定：" class="headerlink" title="④.默认绑定："></a>④.默认绑定：</h3><pre><code>当使用独立函数调用（func()形式），会发生默认绑定，可以把这条规则看成是无法使用其他规则时的默认规则。
</code></pre><p>代码块：</p>
 <pre><code>function foo() {
    console.log( this.a );
}
var a = 2;
foo();  //  2</code></pre>
<h2 id="3-绑定的优先级"><a href="#3-绑定的优先级" class="headerlink" title="3.绑定的优先级"></a>3.绑定的优先级</h2><h3 id="①-默认绑定的优先级最低，因为无法使用其他的绑定规则才会使用默认规则"><a href="#①-默认绑定的优先级最低，因为无法使用其他的绑定规则才会使用默认规则" class="headerlink" title="①.默认绑定的优先级最低，因为无法使用其他的绑定规则才会使用默认规则"></a>①.默认绑定的优先级最低，因为无法使用其他的绑定规则才会使用默认规则</h3><h3 id="②-显示绑定优先级高于隐式绑定"><a href="#②-显示绑定优先级高于隐式绑定" class="headerlink" title="②.显示绑定优先级高于隐式绑定"></a>②.显示绑定优先级高于隐式绑定</h3><p>代码块：</p>
<pre><code>function foo() {
    console.log(this.a);
}

var obj1 = {a: 2, foo: foo};
var obj2 = {a: 3, foo: foo};

obj1.foo();  //  2
obj1.foo.call(obj2);  //  3</code></pre>
<p>3：new绑定优先级高于隐式绑定<br>代码块：<br></p><pre><code>function foo(something) {
    this.a = something;
}

var obj1 = {
    foo: foo
};

var obj2 = {};

obj1.foo(2);
console.log(obj1.a);  //  2

obj1.foo.call(obj2, 3);
console.log(obj2.a);  //  3

var bar = new obj1.foo(4);
console.log(obj1.a);  //  2
console.log(bar.a);  //  4</code></pre><p></p>
<h1 id="4-总结"><a href="#4-总结" class="headerlink" title="4.总结"></a>4.总结</h1><p>如果要判断一个运行中函数的 this 绑定，就需要找到这个函数的直接调用位置。找到之后就可以顺序应用下面这四条规则来判断 this 的绑定对象。</p>
<h4 id="①-由-new-调用？绑定到新创建的对象。"><a href="#①-由-new-调用？绑定到新创建的对象。" class="headerlink" title="①. 由 new 调用？绑定到新创建的对象。"></a>①. 由 new 调用？绑定到新创建的对象。</h4><h4 id="②-由-call-或者-apply-（或者-bind-）调用？绑定到指定的对象。"><a href="#②-由-call-或者-apply-（或者-bind-）调用？绑定到指定的对象。" class="headerlink" title="②. 由 call 或者 apply （或者 bind ）调用？绑定到指定的对象。"></a>②. 由 call 或者 apply （或者 bind ）调用？绑定到指定的对象。</h4><h4 id="③-由上下文对象调用？绑定到那个上下文对象。"><a href="#③-由上下文对象调用？绑定到那个上下文对象。" class="headerlink" title="③. 由上下文对象调用？绑定到那个上下文对象。"></a>③. 由上下文对象调用？绑定到那个上下文对象。</h4><h4 id="④-默认：在严格模式下绑定到-undefined-，否则绑定到全局对象。"><a href="#④-默认：在严格模式下绑定到-undefined-，否则绑定到全局对象。" class="headerlink" title="④. 默认：在严格模式下绑定到 undefined ，否则绑定到全局对象。"></a>④. 默认：在严格模式下绑定到 undefined ，否则绑定到全局对象。</h4><p>自我测试代码块：<br></p><pre><code>    var myObject = {
    foo: "bar",
    func: function() {
        var self = this;
        var foo = "1"
        console.log("outer func: this.foo = " + this.foo);
        console.log("outer func: self.foo = " + self.foo);
      
        (function() {
            console.log("inner func: this.foo = " + this.foo);
            console.log("inner func: self.foo = " + self.foo);
        }());
    }
}

myObject.func()

console.log('----------')
var func = myObject.func
func()

console.log('----------')
func.call(myObject)</code></pre><p></p>
