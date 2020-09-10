---
title: 代码规范
order: 1
group:
  path: /css
  title: css规范
---

代码规范
------------------

### 编码规范
CSS样式表是一个序列通用字符集，传输和存储过程中，这些字符必须由支持 US-ASCII（例如 UTF-8, ISO 8859-x, SHIFT JIS 等）字符编码方式编译文档内嵌样式表编码

```When a style sheet is embedded in another document, such as in the STYLE element or “style” attribute of HTML, the style sheet shares the character encoding of the whole document.
当样式出现在其它文档，如 HTML 的 STYLE 标签或标签属性 “style”，样式的编码由文档的决定。
文档外链样式表编码
When a style sheet resides in a separate file, user agents must observe the following priorities when determining a style sheet’s character encoding (from highest priority to lowest):
An HTTP “charset” parameter in a “Content-Type” field (or similar parameters in other protocols)
BOM and/or @charset
or other metadata from the linking mechanism (if any)
charset of referring style sheet or document (if any)
Assume UTF-8
文档外链样式表的编码可以由以下各项按照由高到低的优先级顺序决定：
HTTP “Content-Type” 字段参数 “charset”（或其它协议相似的参数）
BOM（byte-order mark）和（或）@charset
Link 中的元数据设置（如果有的话）
引用样式表字符集或文档编码（如果有的话）
假定为 UTF-8 编码
样式表编码
Authors using an @charset rule must place the rule at the very beginning of the style sheet, preceded by no characters. (If a byte order mark is appropriate for the encoding used, it may precede the @charset rule.)
@charset must be written literally, i.e., the 10 characters ‘@charset “‘ (lowercase, no backslash escapes), followed by the encoding name, followed by ‘“;’.
@charset规则一定要在样式文件的第一行首个字符位置开始，否则的话就会有机会让 BOM 设置生效（如果有设置 BOM 的话）而优于 @charset 作为样式表的编码
@charset ""; 一定要写上，并且用小写字母，不能出现转义符
```

#### 团队约定
样式文件必须写上 @charset 规则，并且一定要在样式文件的第一行首个字符位置开始写，编码名用 “UTF-8”
字符 @charset “”; 都用小写字母，不能出现转义符，编码名允许大小混写
考虑到在使用“UTF-8”编码情况下 BOM 对代码的污染和编码显示的问题，在可控范围下，坚决不使用 BOM。（更多关于 BOM 可参考 BOM的介绍 和 「带 BOM 的 UTF-8」和「无 BOM 的 UTF-8」有什么区别？ ）

#### 推荐：
`@charset "UTF-8";.jdc{}`
#### 不推荐：
`
/** * @desc File Info * @author Author Name * @date 2015-10-10 */ /* @charset规则不在文件首行首个字符开始 */@charset "UTF-8";.jdc{}`

`@CHARSET "UTF-8";/* @charset规则没有用小写 */.jdc{}
/* 无@charset规则 */.jdc{}`
更多关于样式编码：[CSS style sheet representation](http://www.w3.org/TR/2011/REC-CSS2-20110607/syndata.html#charset)
