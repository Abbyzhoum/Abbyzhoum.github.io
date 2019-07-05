---
layout: '[layout]'
title: Array的方法总结
date: 2018-12-17 15:28:42
tags:
- Array
- js
---

### Array的特有方法

#### 1. Array.find()         
方法返回数组中满足提供的测试函数的第一个元素的值。否则返回 undefined。
```
var queueId = this.queues.find(function (elem) {
            return elem.code === code
     }).id
```

#### 2.map() 
方法创建一个新数组，其结果是该数组中的每个元素都调用一个提供的函数后返回的结果.
```
'queue_nos': this.skills.map(function (item) {
return item + '@' + self.domain
})
```

#### 3.forEach()
 方法对数组的每个元素执行一次提供的函数。
```
res.forEach((item) => {
    this.skills.push(item.skill)
})
this.skills = _.uniq(this.skills)
console.log(this.skills)
```

#### 4.filter() 
方法创建一个新数组, 其包含通过所提供函数实现的测试的所有元素。
```
self.activities = res.filter(function (item) {
    return item.outboundType !== 3
})
```


#### 5.every() 
方法测试数组的所有元素是否都通过了指定函数的测试。
```
function isBelowThreshold(currentValue) {
  return currentValue < 40;
}

var array1 = [1, 30, 39, 29, 10, 13];

console.log(array1.every(isBelowThreshold));
// expected output: true
```

#### 6.Array.from() 
方法从一个类似数组或可迭代对象中创建一个新的数组实例。
```
console.log(Array.from('foo'));
// expected output: Array ["f", "o", "o"]

console.log(Array.from([1, 2, 3], x => x + x));
// expected output: Array [2, 4, 6]
```

#### 7.includes() 
方法用来判断一个数组是否包含一个指定的值，根据情况，如果包含则返回 true，否则返回false。
```
if (self.query.search === '') {
item.show = true
} else {
item.show = searchQuery.includes(self.query.search)
}
```

#### 8.some() 
方法测试数组中的某些元素是否通过由提供的函数实现的测试。
```
var array = [1, 2, 3, 4, 5];

var even = function(element) {
  // checks whether an element is even
  return element % 2 === 0;
};

console.log(array.some(even));
// expected output: true
```


#### 9.join() 
方法将一个数组（或一个类数组对象）的所有元素连接成一个字符串并返回这个字符串。
```
var elements = ['Fire', 'Wind', 'Rain'];                //join() 方法，不会改变数组

console.log(elements.join());
// expected output: Fire,Wind,Rain

console.log(elements.join(''));
// expected output: FireWindRain

console.log(elements.join('-'));
// expected output: Fire-Wind-Rain
```


#### 10.keys() 
方法返回一个包含数组中每个索引键的Array Iterator对象。    返回的是下标值
```
var array1 = ['a', 'b', 'c'];
var iterator = array1.keys(); 
  
for (let key of iterator) {
  console.log(key); // expected output: 0 1 2
}
```


#### 11.push() 
方法将一个或多个元素添加到数组的末尾，并返回新数组的长度。
```
var animals = ['pigs', 'goats', 'sheep'];

console.log(animals.push('cows'));
// expected output: 4

console.log(animals);
// expected output: Array ["pigs", "goats", "sheep", "cows"]
```


#### 12.pop()
方法从数组中删除最后一个元素，并返回该元素的值。此方法更改数组的长度。
```
var plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

console.log(plants.pop());
// expected output: "tomato"

console.log(plants);
// expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"]

plants.pop();
```


#### 13.reverse() 
方法将数组中元素的位置颠倒。        
第一个数组元素成为最后一个数组元素，最后一个数组元素成为第一个。
```
var array1 = ['one', 'two', 'three'];              
console.log(array1.reverse())            //  ["three", "two", "one"]              //返回的是改变后的数组
console.log(array1)                //   ["three", "two", "one"]
```


#### 14.shift() 
方法从数组中删除第一个元素，并返回该元素的值。此方法更改数组的长度。  从顶部|开头删除
```
var array1 = [1, 2, 3];                            //返回被删除的值，原数组相应的也会改变

var firstElement = array1.shift();

console.log(array1);            //  [2, 3]
console.log(firstElement);            // 1
```


#### 15.slice() 
方法返回一个从开始到结束（不包括结束）选择的数组的一部分浅拷贝到一个新数组对象。且原始数组不会被修改。
```
var animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];                //slice含头不含尾

console.log(animals.slice(2));        // ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));            // ["camel", "duck"]

console.log(animals.slice(1, 5));        // ["bison", "camel", "duck", "elephant"]
```


#### 16.splice() 
方法通过删除现有元素和/或添加新元素来更改一个数组的内容。
```
var months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// inserts at 1st index position
console.log(months);
// expected output: Array ['Jan', 'Feb', 'March', 'April', 'June']

months.splice(4, 1, 'May');
// replaces 1 element at 4th index
console.log(months);
// expected output: Array ['Jan', 'Feb', 'March', 'April', 'May']
```


#### 17.sort() 
方法用原地算法对数组的元素进行排序，并返回数组。排序不一定是稳定的。默认排序顺序是根据字符串Unicode码点。
```
var array1 = [1, 30, 4, 21];
array1.sort();
console.log(array1)            //   [1, 21, 30, 4]
```


#### 18.unshift() 
方法将一个或多个元素添加到数组的开头，并返回新数组的长度。
```
var array1 = [1, 2, 3];

console.log(array1.unshift(4, 5));            //    5

console.log(array1);                // [4, 5, 1, 2, 3]
```







