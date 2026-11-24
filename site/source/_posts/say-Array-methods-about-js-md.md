---
title: Array的方法总结
date: '2018-12-17T15:28:42+08:00'
permalink: uncategorized/say-Array-methods-about-js-md/
tags:
  - js
  - Array
---

<h3 id="Array的特有方法"><a href="#Array的特有方法" class="headerlink" title="Array的特有方法"></a>Array的特有方法</h3><h4 id="1-Array-find"><a href="#1-Array-find" class="headerlink" title="1. Array.find()"></a>1. Array.find()</h4><p>方法返回数组中满足提供的测试函数的第一个元素的值。否则返回 undefined。<br></p><pre><code>var queueId = this.queues.find(function (elem) {
            return elem.code === code
     }).id</code></pre><p></p>
<h4 id="2-map"><a href="#2-map" class="headerlink" title="2.map()"></a>2.map()</h4><p>方法创建一个新数组，其结果是该数组中的每个元素都调用一个提供的函数后返回的结果.<br></p><pre><code>'queue_nos': this.skills.map(function (item) {
return item + '@' + self.domain
})</code></pre><p></p>
<h4 id="3-forEach"><a href="#3-forEach" class="headerlink" title="3.forEach()"></a>3.forEach()</h4><p> 方法对数组的每个元素执行一次提供的函数。<br></p><pre><code>res.forEach((item) =&gt; {
    this.skills.push(item.skill)
})
this.skills = _.uniq(this.skills)
console.log(this.skills)</code></pre><p></p>
<h4 id="4-filter"><a href="#4-filter" class="headerlink" title="4.filter()"></a>4.filter()</h4><p>方法创建一个新数组, 其包含通过所提供函数实现的测试的所有元素。<br></p><pre><code>self.activities = res.filter(function (item) {
    return item.outboundType !== 3
})</code></pre><p></p>
<h4 id="5-every"><a href="#5-every" class="headerlink" title="5.every()"></a>5.every()</h4><p>方法测试数组的所有元素是否都通过了指定函数的测试。<br></p><pre><code>function isBelowThreshold(currentValue) {
  return currentValue &lt; 40;
}

var array1 = [1, 30, 39, 29, 10, 13];

console.log(array1.every(isBelowThreshold));
// expected output: true</code></pre><p></p>
<h4 id="6-Array-from"><a href="#6-Array-from" class="headerlink" title="6.Array.from()"></a>6.Array.from()</h4><p>方法从一个类似数组或可迭代对象中创建一个新的数组实例。<br></p><pre><code>console.log(Array.from('foo'));
// expected output: Array ["f", "o", "o"]

console.log(Array.from([1, 2, 3], x =&gt; x + x));
// expected output: Array [2, 4, 6]</code></pre><p></p>
<h4 id="7-includes"><a href="#7-includes" class="headerlink" title="7.includes()"></a>7.includes()</h4><p>方法用来判断一个数组是否包含一个指定的值，根据情况，如果包含则返回 true，否则返回false。<br></p><pre><code>if (self.query.search === '') {
item.show = true
} else {
item.show = searchQuery.includes(self.query.search)
}</code></pre><p></p>
<h4 id="8-some"><a href="#8-some" class="headerlink" title="8.some()"></a>8.some()</h4><p>方法测试数组中的某些元素是否通过由提供的函数实现的测试。<br></p><pre><code>var array = [1, 2, 3, 4, 5];

var even = function(element) {
  // checks whether an element is even
  return element % 2 === 0;
};

console.log(array.some(even));
// expected output: true</code></pre><p></p>
<h4 id="9-join"><a href="#9-join" class="headerlink" title="9.join()"></a>9.join()</h4><p>方法将一个数组（或一个类数组对象）的所有元素连接成一个字符串并返回这个字符串。<br></p><pre><code>var elements = ['Fire', 'Wind', 'Rain'];                //join() 方法，不会改变数组

console.log(elements.join());
// expected output: Fire,Wind,Rain

console.log(elements.join(''));
// expected output: FireWindRain

console.log(elements.join('-'));
// expected output: Fire-Wind-Rain</code></pre><p></p>
<h4 id="10-keys"><a href="#10-keys" class="headerlink" title="10.keys()"></a>10.keys()</h4><p>方法返回一个包含数组中每个索引键的Array Iterator对象。    返回的是下标值<br></p><pre><code>var array1 = ['a', 'b', 'c'];
var iterator = array1.keys(); 
  
for (let key of iterator) {
  console.log(key); // expected output: 0 1 2
}</code></pre><p></p>
<h4 id="11-push"><a href="#11-push" class="headerlink" title="11.push()"></a>11.push()</h4><p>方法将一个或多个元素添加到数组的末尾，并返回新数组的长度。<br></p><pre><code>var animals = ['pigs', 'goats', 'sheep'];

console.log(animals.push('cows'));
// expected output: 4

console.log(animals);
// expected output: Array ["pigs", "goats", "sheep", "cows"]</code></pre><p></p>
<h4 id="12-pop"><a href="#12-pop" class="headerlink" title="12.pop()"></a>12.pop()</h4><p>方法从数组中删除最后一个元素，并返回该元素的值。此方法更改数组的长度。<br></p><pre><code>var plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

console.log(plants.pop());
// expected output: "tomato"

console.log(plants);
// expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"]

plants.pop();</code></pre><p></p>
<h4 id="13-reverse"><a href="#13-reverse" class="headerlink" title="13.reverse()"></a>13.reverse()</h4><p>方法将数组中元素的位置颠倒。<br>第一个数组元素成为最后一个数组元素，最后一个数组元素成为第一个。<br></p><pre><code>var array1 = ['one', 'two', 'three'];              
console.log(array1.reverse())            //  ["three", "two", "one"]              //返回的是改变后的数组
console.log(array1)                //   ["three", "two", "one"]</code></pre><p></p>
<h4 id="14-shift"><a href="#14-shift" class="headerlink" title="14.shift()"></a>14.shift()</h4><p>方法从数组中删除第一个元素，并返回该元素的值。此方法更改数组的长度。  从顶部|开头删除<br></p><pre><code>var array1 = [1, 2, 3];                            //返回被删除的值，原数组相应的也会改变

var firstElement = array1.shift();

console.log(array1);            //  [2, 3]
console.log(firstElement);            // 1</code></pre><p></p>
<h4 id="15-slice"><a href="#15-slice" class="headerlink" title="15.slice()"></a>15.slice()</h4><p>方法返回一个从开始到结束（不包括结束）选择的数组的一部分浅拷贝到一个新数组对象。且原始数组不会被修改。<br></p><pre><code>var animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];                //slice含头不含尾

console.log(animals.slice(2));        // ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));            // ["camel", "duck"]

console.log(animals.slice(1, 5));        // ["bison", "camel", "duck", "elephant"]</code></pre><p></p>
<h4 id="16-splice"><a href="#16-splice" class="headerlink" title="16.splice()"></a>16.splice()</h4><p>方法通过删除现有元素和/或添加新元素来更改一个数组的内容。<br></p><pre><code>var months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// inserts at 1st index position
console.log(months);
// expected output: Array ['Jan', 'Feb', 'March', 'April', 'June']

months.splice(4, 1, 'May');
// replaces 1 element at 4th index
console.log(months);
// expected output: Array ['Jan', 'Feb', 'March', 'April', 'May']</code></pre><p></p>
<h4 id="17-sort"><a href="#17-sort" class="headerlink" title="17.sort()"></a>17.sort()</h4><p>方法用原地算法对数组的元素进行排序，并返回数组。排序不一定是稳定的。默认排序顺序是根据字符串Unicode码点。<br></p><pre><code>var array1 = [1, 30, 4, 21];
array1.sort();
console.log(array1)            //   [1, 21, 30, 4]</code></pre><p></p>
<h4 id="18-unshift"><a href="#18-unshift" class="headerlink" title="18.unshift()"></a>18.unshift()</h4><p>方法将一个或多个元素添加到数组的开头，并返回新数组的长度。<br></p><pre><code>var array1 = [1, 2, 3];

console.log(array1.unshift(4, 5));            //    5

console.log(array1);                // [4, 5, 1, 2, 3]</code></pre><p></p>
