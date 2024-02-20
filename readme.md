# 新年倒计时

* 实现了2套新年倒计时

## 1. 技术背景

* electron

* html、css、js

## 2. 第1套

* index.html、index.css、indexRender.js

* set.html、set.css、setRender.js

*其中 set 页面没做，本来想实现一个设置界面用于更换背景文件、背景音乐、爆炸音效、倒计时结束音效，后来想着直接替换文件也可以了，无需再做，目前只实现了electron创建新窗口的代码，有兴趣的读者可以把它完成。*

## 3. 第2套

* indexFirework.html、indexFirework.css、indexFireworkRender.js

*这套是拜读了很多优秀的开源代码后，选择基于canvas实现。*



以上两套代码，可以在main.js中选择不同的实现即可看效果。

```js
  // 第1套
  // mainWindow.loadFile('index.html')

  // 第2套
  // mainWindow.loadFile('indexFirework.html')
```
