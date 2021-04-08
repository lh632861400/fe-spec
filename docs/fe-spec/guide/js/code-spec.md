---
title: 代码规范
group:
  title: js规范
  
---

代码规范
--------------
JavaScript 是一种客户端脚本语言，这里列出了编写 JavaScript时需要遵守的规则。
### 类型
基本类型
- 字符串
- 数值
- 布尔类型
- null
- undefined

`const foo = 1let bar = foobar = 9console.log(foo, bar) // 1, 9`

复杂类型
- object
- array
- function

`
const foo = [1, 2, 3]const bar = foobar[0] = 9console.log(foo[0], bar[0]) // 9, 9`

### 引用
const 和 let 都是块级作用域，var 是函数级作用域
对所有引用都使用 const，不要使用 `var`
```js
// bad
var a = 1
var b = 2

// good
const a = 1
const b = 2
如果引用是可变动的，则使用 let
// bad
var count = 1
if (count < 10) {  
  count += 1
}

// good
let count = 1
if (count < 10) {  
  count += 1
}
```

### 对象
请使用字面量值创建对象
```js
// bad
const a = new Object{}

// good
const a = {}
```
- 别使用保留字作为对象的键值，这样在 IE8 下不会运行
```js
// badconst a = {  default: {},  // default 是保留字  common: {}}// goodconst a = {  defaults: {},  common: {}}
```
- 请使用对象方法的简写方式
```js
// badconst item = {  value: 1,  addValue: function (val) {    return item.value + val  }}// goodconst item = {  value: 1,  addValue(val) {    return item.value + val  }}
```
请使用对象属性值的简写方式
```js
const job = 'FrontEnd'// badconst item = {  job: job}// goodconst item = {  job}
```
对象属性值的简写方式要和声明式的方式分组
```js
const job = 'FrontEnd'const department = 'JDC'// badconst item = {  sex: 'male',  job,  age: 25,  department}// goodconst item = {  job,  department,  sex: 'male',  age: 25}
```

用字面量创建对象；
- 不允许使用保留字；
- 使用可读的同义词替换保留字
- 使用ES6对象属性简写
- 使用Object.keys(obj)\Object.values(obj)来遍历对象属性和值

// 字面量创建对象
```js
let human = {
    x: 1,
    
    // class -> klass 保留字替换
    klass: Animal
}

// 属性简写
let username = 'June';
let password = 'helloworld';
let user = {
    username,
    password
};
```
### 数组
请使用字面量值创建数组
```
// badconst items = new Array()// goodconst items = []
```
向数组中添加元素时，请使用 push 方法
```
const items = []// baditems[items.length] = 'test'// gooditems.push('test')
```
使用拓展运算符 ... 复制数组
```
// badconst items = []const itemsCopy = []const len = items.lengthlet i// badfor (i = 0; i < len; i++) {  itemsCopy[i] = items[i]}// gooditemsCopy = [...items]
```
使用数组的 map 等方法时，请使用 return 声明，如果是单一声明语句的情况，可省略 return
```
// good[1, 2, 3].map(x => {  const y = x + 1  return x * y})// good[1, 2, 3].map(x => x + 1)// badconst flat = {}[[0, 1], [2, 3], [4, 5]].reduce((memo, item, index) => {  const flatten = memo.concat(item)  flat[index] = flatten})// goodconst flat = {}[[0, 1], [2, 3], [4, 5]].reduce((memo, item, index) => {  const flatten = memo.concat(item)  flat[index] = flatten  return flatten})// badinbox.filter((msg) => {  const { subject, author } = msg  if (subject === 'Mockingbird') {    return author === 'Harper Lee'  } else {    return false  }})// goodinbox.filter((msg) => {  const { subject, author } = msg  if (subject === 'Mockingbird') {    return author === 'Harper Lee'  }  return false})
```
用字面量创建数组；
使用扩展运算符进行数组转换或数组复制；
使用解构获取和操作数组元素；
 使用map\filter\forEach\reduce来遍历；
使用find\findIndex\includes来检索；
使用concat\slice\splice\copyWithin来截切和拼接数组；
使用push\pop\shift\unshift来执行队列方法

// 字面量创建数组
```
let arr = [1, 2, 3, 4, 5];
```
// 扩展运算符，数组复制
```
let arrSpec = [...arr];
```
// 解构获取数组元素内容
```
let [x, ...other] = arr;
```
解构赋值
当需要使用对象的多个属性时，请使用解构赋值
```
// badfunction getFullName (user) {  const firstName = user.firstName  const lastName = user.lastName  return `${firstName} ${lastName}`}// goodfunction getFullName (user) {  const { firstName, lastName } = user  return `${firstName} ${lastName}`}// betterfunction getFullName ({ firstName, lastName }) {  return `${firstName} ${lastName}`}
```
当需要使用数组的多个值时，请同样使用解构赋值
```
const arr = [1, 2, 3, 4]// badconst first = arr[0]const second = arr[1]// goodconst [first, second] = arr
```
函数需要回传多个值时，请使用对象的解构，而不是数组的解构
```
// badfunction doSomething () {  return [top, right, bottom, left]}// 如果是数组解构，那么在调用时就需要考虑数据的顺序const [top, xx, xxx, left] = doSomething()// goodfunction doSomething () {  return { top, right, bottom, left }}// 此时不需要考虑数据的顺序const { top, left } = doSomething()
```
### 字符串
字符串统一使用单引号的形式 ''
```
// badconst department = "JDC"// goodconst department = 'JDC'
字符串太长的时候，请不要使用字符串连接符换行 \，而是使用 +
const str = '凹凸实验室 凹凸实验室 凹凸实验室' +  '凹凸实验室 凹凸实验室 凹凸实验室' +  '凹凸实验室 凹凸实验室'
程序化生成字符串时，请使用模板字符串
const test = 'test'// badconst str = ['a', 'b', test].join()// badconst str = 'a' + 'b' + test// goodconst str = `ab${test}`
```
### 函数
请使用函数声明，而不是函数表达式
```
// badconst foo = function () {  // do something}// goodfunction foo () {  // do something}
```
不要在非函数代码块中声明函数
```
// badif (isUse) {  function test () {    // do something  }}// goodlet testif (isUse) {  test = () => {    // do something  }}
```
不要使用 arguments，可以选择使用 ...
arguments 只是一个类数组，而 ... 是一个真正的数组
```
// badfunction test () {  const args = Array.prototype.slice.call(arguments)  return args.join('')}// goodfunction test (...args) {  return args.join('')}
```
不要更改函数参数的值
```
// badfunction test (opts) {  opts = opts || {}}// goodfunction test (opts = {}) {  // ...}
```
### 原型
使用 class，避免直接操作 prototype
```
// badfunction Queue (contents = []) {  this._queue = [..contents]}Queue.prototype.pop = function () {  const value = this._queue[0]  this._queue.splice(0, 1)  return value}// goodclass Queue {  constructor (contents = []) {    this._queue = [...contents]  }  pop () {    const value = this._queue[0]    this._queue.splice(0, 1)    return value  }}
```
模块
使用标准的 ES6 模块语法 import 和 export
// badconst util = require('./util')module.exports = util// goodimport Util from './util'export default Util// betterimport { Util } from './util'export default Util
// badimport * as Util from './util'// goodimport Util from './util'
迭代器
不要使用 iterators
```
const numbers = [1, 2, 3, 4, 5]// badlet sum = 0for (let num of numbers) {  sum += num}// goodlet sum = 0numbers.forEach(num => sum += num)// betterconst sum = numbers.reduce((total, num) => total + num, 0)
```
使用 . 来访问对象属性
```
const joke = {  name: 'haha',  age: 28}// badconst name = joke['name']// goodconst name = joke.name
```
变量声明
声明变量时，请使用 const、let 关键字，如果没有写关键字，变量就会暴露在全局上下文中，这样很可能会和现有变量冲突，另外，也很难明确该变量的作用域是什么。这里推荐使用 const 来声明变量，我们需要避免全局命名空间的污染。
```
// baddemo = new Demo()// goodconst demo = new Demo()
```
将所有的 const 和 let 分组
```
// badlet aconst blet cconst dlet e// goodconst bconst dlet alet clet e
```
Hoisting
var 存在变量提升的情况，即 var 声明会被提升至该作用域的顶部，但是他们的赋值并不会。而 const 和 let 并不存在这种情况，他们被赋予了 Temporal Dead Zones, TDZ
```
function example () {  console.log(notDefined)   // => throws a ReferenceError}function example () {  console.log(declareButNotAssigned)  // => undefined  var declaredButNotAssigned = true}function example () {  let declaredButNotAssigned  console.log(declaredButNotAssigned)   // => undefined  declaredButNotAssigned = true}function example () {  console.log(declaredButNotAssigned)   // => throws a ReferenceError  console.log(typeof declaredButNotAssigned)  // => throws a ReferenceError  const declaredButNotAssigned = true}
```
匿名函数的变量名会提升，但函数内容不会
```
function example () {  console.log(anonymous)  // => undefined  anonymous()  var anonymous = function () {    console.log('test')  }}
命名的函数表达式的变量名会被提升，但函数名和函数函数内容并不会
function example() {  console.log(named)  // => undefined  named()   // => TypeError named is not a function  superPower()  // => ReferenceError superPower is not defined  var named = function superPower () {    console.log('Flying')  }}function example() {  console.log(named)  // => undefined  named()   // => TypeError named is not a function  var named = function named () {    console.log('named')  }}
```
在非空文件中，存在拖尾换行是一个常见的 UNIX 风格，它的好处是可以方便在串联和追加文件时不会打断 Shell 的提示。在日常的项目中，保留拖尾换行的好处是，可以减少版本控制时的代码冲突。
```
不推荐
function func () {  // do something}
推荐
function func () {  // do something}  // 此处是新的一行
```
可以通过 .editorconfig 添加 EOL
函数调用
为了避免语法错误，团队约定在函数调用时，禁止使用空格
```
不推荐
fn ()fn()
推荐
fn()
```
缩进
代码保持一致的缩进，是作为工程师的职业素养。但缩进用两个空格，还是四个空格，是用 Tab 还是空格呢？这样的争论太多了，也得不出答案。本规范结合了市面上优秀的开源项目，姑且约定使用 空格 来缩进，而且缩进使用两个空格。
那是不是不能使用 Tab 进行缩进了？我们可以通过配置 .editorconfig ，将 Tab 自动转换为空格。
团队约定对象字面量的键和值之间不能存在空格，且要求对象字面量的冒号和值之间存在一个空格
```
不推荐
var obj = { 'foo' : 'haha' }
推荐
var obj = { 'foo': 'haha' }
```

 原则上表达式都必须以分号作为结尾，具体包括:

变量声明
表达式
return
throw
break
continue
do-while
闭包

标准特性
为了代码的可移植性和兼容性，我们应该最大化的使用标准方法，例如优先使用 string.charAt(3) 而不是 string[3]
```
eval()
```
由于 eval 方法比较 evil，所以我们约定禁止使用该方法
```
with() {}
```
由于 with 方法会产生神奇的作用域，所以我们也是禁止使用该方法的
for-in 循环
推荐使用 for in 语法，但是在对对象进行操作时，容易忘了检测 hasOwnProperty(key)，所以我们启用了 ESLint 的 guard-for-in 选项
对数组进行 for in 的时候，顺序是不固定的
循环以及条件判断

能使用对象、数组、字符串所拥有的默认遍历函数解决的问题，尽量不要使用循环以及条件判断语句；
对于超过3个以上的if - else if - else语句，使用switch case来替代；
避免出现死循环
```
let arr = [1, 2, 3];
for (let i = 0; i < arr.length; i++) {
    console.log(i);
}
// 可以直接使用数组默认遍历方法
arr.forEach((item) => {console.log(item)})；

if (color === 'green') {
    ...    
} else if (color === 'red') {
    ...
} else if (color === 'blue') {
    ...
}

// 可以写成
switch(color) {
    case 'green':
        ...
        break;
    case 'red'
        ...
        break;
    case 'blue':
        ...
        break;
    ...
}
```
ES6模块

 使用export和import导出和引入模块
 export default命令来导出默认模块
import ... as 来对模块进行重命名


Map与Set

 使用Map来管理键为对象的字典；
 使用Set来做集合相关的操作


Async与Await

该特性是ES7定义的相关规范，目前babel转码器已经支持将其转为co模块运行。大部分前端的异步任务都有对应的Promise封装模式，配合async与await可以更好的处理逻辑之间的回调关系与错误处理，建议大家多使用它们来管理异步调用api。某些默认不提供Promise封装的接口，也可以通过手动封装接口返回Promise对象来使用该特性。
```
import $ from 'jquery'

function async api() {
    try {
        let res = await $.ajax({
            url: '...',
            type: 'POST',
            ...
        });
        console.log(res);
    } catch(e) {
        console.log(e);
    }
}
```
修改内置对象的原型
不要修改内置对象，如 Object 和 Array
