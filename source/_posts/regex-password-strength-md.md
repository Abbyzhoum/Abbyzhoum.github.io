---
layout: '[layout]'
title: 密码强度：前后字符不相同，不出现连续的字母、数字（有点特殊的需求）
date: 2019-07-05 13:10:16
tags:
- 密码
---

### 整理了一下关于密码强度的正则表达式

1. 前后字符不相同 :

```
for (var a = 0; a < inputWord.length -1; a++) {
      if(inputWord.charAt(a) === inputWord.charAt(a+1)) {
        if(条件){
          执行某项操作
        }
      }
    }

```

2. 不出现连续的字母、数字 :

```
  for (var j = 0; j < inputWord.length-2; j++) {
      if(inputWord.charAt(j)-inputWord.charAt(j+1) === 1 && inputWord.charAt(j+1)-inputWord.charAt(j+2) ===1 ) {
        if(条件){
          执行某项操作
         }
    			return false
        }
        
    	if(inputWord.charAt(j+2)-inputWord.charAt(j+1) === 1 && inputWord.charAt(j+1)-inputWord.charAt(j) ===1 ) {
         if(条件){
          执行某项操作
         }
    		 	return false
    	}
    }
```

3. 包含数字和大小写字母、非字母字符 :
```
'^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{' + minNum + ',' + maxNum + '}'
```

4. 包含数字和大小写字母、非字母字符 :
```
'/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{'+ minNum + ','+ maxNum +'}$/'
```

5. 特殊字符，如键盘上的32个字符
```
^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[\x21-\x7e]*$   
```

