---
title: 代码风格
group:
  path: /html
  title: html规范
---

HTML代码大小写
----------------

HTML标签名、类名、标签属性和大部分属性值统一用小写

推荐：
```<div class="demo"></div>```

不推荐：
```
<div class="DEMO"></div>	
<DIV CLASS="DEMO"></DIV>
```

HTML文本、CDATA、JavaScript、meta标签某些属性等内容可大小写混合

```
<!-- 优先使用 IE 最新版本和 Chrome Frame --><meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/><!-- HTML文本内容 --><h1>I AM WHAT I AM </h1><!-- JavaScript 内容 --><script type="text/javascript">	var demoName = 'demoName';	...</script>	<!-- CDATA 内容 --><script type="text/javascript"><![CDATA[...]]></script>
```

类型属性
不需要为 CSS、JS 指定类型属性，HTML5 中默认已包含

推荐：

`````<link rel="stylesheet" href="" ><script src=""></script>`````

不推荐：

```<link rel="stylesheet" type="text/css" href="" ><script type="text/javascript" src="" ></script>```

元素属性

元素属性值使用双引号语法
元素属性值可以写上的都写上
使用中划线做分隔符

推荐：
```<input type="text">	<input type="radio" name="name" checked="checked" >```

不推荐：
```<input type=text>	<input type='text'>	<input type="radio" name="name" checked >```

更多关于元素属性：#Attributes


特殊字符引用
```In certain cases described in other sections, text may be mixed with character references. These can be used to escape characters that couldn’t otherwise legally be included in text.
文本可以和字符引用混合出现。这种方法可以用来转义在文本中不能合法出现的字符。
```
在 HTML 中不能使用小于号 “<” 和大于号 “>”特殊字符，浏览器会将它们作为标签解析，若要正确显示，在 HTML 源代码中使用字符实体

推荐：
```<a href="#">more&gt;&gt;</a>```

不推荐：
```<a href="#">more>></a>```
更多关于符号引用：#Character references

代码缩进

统一使用二个空格进行代码缩进，使得各编辑器表现一致（各编辑器有相关配置）

```<div class="jdc">    <a href="#"></a></div>```

纯数字输入框

使用 type="tel" 而不是 type="number"
```<input type="tel">```

代码嵌套
元素嵌套规范，每个块状元素独立一行，内联元素可选

推荐：
`<div>    <h1></h1>    <p></p></div>	<p><span></span><span></span></p>`

不推荐：
`<div>    <h1></h1><p></p></div>	<p>     <span></span>    <span></span></p>`
段落元素与标题元素只能嵌套内联元素
推荐：
`<h1><span></span></h1><p><span></span><span></span></p>`
不推荐：
`<h1><div></div></h1><p><div></div><div></div></p>`

Viewport

针对移动设备，需指定页面的viewport，下面的代码提供统一的viewport设置

```<meta name="viewport" content="initial-scale=1.0,maximum-scale=1.0,user-scalable=0" />```


IE兼容模式

IE支持使用兼容性标签来指定使用什么版本的IE来渲染页面。如果不是特殊需要，通常通过edge mode来通知IE使用最新的兼容模式

```<meta http-equiv="X-UA-Compatible" content="IE=Edge" />```

指定渲染内核

对于多核浏览器可以指定渲染内核

```<meta name="renderer" content="ie-stand">```
