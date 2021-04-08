---
title: React代码与风格规范
group:
  title: React规范
  order: 5
---

每个文件只写一个组件，但是多个无状态组件可以放在单个文件中。

## 组件

2.1

【强制】有内部状态，方法或者是要对外暴露ref的组件，使用ES6 Class写法。
<pre>
// bad
const Listing = React.createClass({
  // ...
  render() {
    return <div>{this.state.hello}</div>;
  }
});
</pre>

<pre>
// good
class Listing extends React.Component {
  // ...
  render() {
    return <div>{this.state.hello}</div>;
  }
}
</pre>
2.2

【强制】没有内部状态，方法或者是无需对外暴露ref的组件，使用函数写法。
<pre>
// bad
class Listing extends React.Component {
  render() {
    return <div>{this.props.hello}</div>;
  }
}
</pre>

<pre>
// good
const Listing = ({ hello }) => (
  <div>{hello}</div>
);

PropTypes/DefaultProps
</pre>

### State

3.1

【强制】有内部状态，方法或者是要对外暴露ref的组件，使用ES7类静态属性提案写法。
<pre>
class Button extends Component {
  static propTypes = {
    size: React.PropTypes.oneOf(['large', 'normal', 'small']),
    shape: React.PropTypes.oneOf(['default', 'primary', 'ghost']),
    disabled: React.PropTypes.bool
  };

  static defaultProps = {
    size: 'normal',
    shape: 'default',
    disabled: false
  };

  render() {
    // ....
  }
}
</pre>
3.2

【强制】没有内部状态，方法或者无需对外暴露ref的组件，使用类静态属性写法。
<pre>
  const HelloMessage = ({ name }) => {
    return <div>Hello {name}</div>;
  };
  
  HelloMessage.propTypes = {
    name: React.PropTypes.string
  };
  
  HelloMessage.defaultProps = {
    name: 'vic'
  };
</pre>
3.3

【建议】PropTypes必须，如果采用typescript编写组件则不需要。

### 实例属性

4.1

【强制】使用ES7实例属性提案声明写法或者构造函数声明写法，后者适合需要进行一定计算后才能初始化state的情况。
<pre>
class Some extends Component {
  state = {
    foo: 'bar'
  };

  // ....
}

class Some extends Component {
  constructor(props) {
    super(props);
      this.state = {
        foo: 'bar'
      };
  }

  // ....
}
</pre>
4.2

【强制】不建议对this.state进行赋值。
</pre>
// bad
this.state.name = this.props.name.toUpperCase();

// good
this.setState({
  name: this.props.name.toUpperCase();
});
</pre>

### 命名

5.1

【强制】扩展名: React组件文件使用.jsx扩展名。?? 为啥一定要？

5.2

【强制】文件名: 文件名使用驼峰式命名，首字母大写，如ReservationCard.jsx。

5.3

【强制】引用命名: React组件名使用驼峰式命名，首字母大写，实例名也使用驼峰式命名，但首字母小写。
<pre>
// bad
import reservationCard from './ReservationCard';

// good
import ReservationCard from './ReservationCard';

// bad
const ReservationItem = <ReservationCard />;

// good
const reservationItem = <ReservationCard />;
</pre>

### 引号

6.1

【强制】对于JSX属性值总是使用双引号", 其他均使用单引号'。
<pre>
  // bad
  <Foo bar='bar' />
  
  // good
  <Foo bar="bar" />
  
  // bad
  <Foo style={{ left: "20px" }} />
  
  // good
  <Foo style={{ left: '20px' }} />
</pre>
### 空格

7.1

【建议】总是在自闭合的标签/>前加一个空格。
<pre>
// bad
<Foo/>

// very bad
<Foo                 />

// good
<Foo />
</pre>
7.2

【建议】不要在JSX{}引用括号里两边加空格。
<pre>
// bad
<Foo bar={ baz } />

// good
<Foo bar={baz} />
</pre>
7.3

【建议】不要在JSX props属性=两边加空格。
<pre>
// bad
<Hello name = {firstname} />;

// good
<Hello name={firstname} />;
</pre>


### 属性
8.1

【强制】JSX属性名总是使用驼峰式风格。
<pre>
// bad
<Foo UserName="hello" phone_number={12345678} />

// good
<Foo userName="hello" phoneNumber={12345678} />
</pre>
8.2

【建议】如果属性值为true, 可以直接省略。
<pre>
// bad
<Foo hidden={true} />

// good
<Foo hidden />
</pre>
8.3

【强制】数组中或者遍历中输出相同的React组件，属性key必需。
<pre>
// bad
[<Hello />, <Hello />, <Hello />];

data.map(x => <Hello>x</Hello>);

// good
[<Hello key="first" />, <Hello key="second" />, <Hello key="third" />];

data.map((x, i) => <Hello key={i}>x</Hello>);
</pre>
8.4

【强制】class以及for等关键字不允许作为属性名。
<pre>
// bad
<div class="hello">Hello World</div>;

// good
<div className="hello">Hello World</div>;
</pre>
8.5

【强制】属性名不允许重复声明。
<pre>
// bad
<Hello name="John" name="John" />;

// good
<Hello firstname="John" lastname="Doe" />;
</pre>
### Refs

9.1

【强制】总是在Refs里使用回调函数或者React.createRef()。
<pre>
// bad
<Foo
  ref="myRef"
/>

// good
<Foo
  ref={ref => { this.myRef = ref; }}
/>
</pre>
### 括号

10.1

【建议】将多行的JSX标签写在()里，单行可以省略()。
<pre>
// bad
render() {
  return <MyComponent className="long body" foo="bar">
     <MyChild />
  </MyComponent>;
}

// good
render() {
  return (
    <MyComponent className="long body" foo="bar">
      <MyChild />
    </MyComponent>
  );
}

// good
render() {
  const body = <div>hello</div>;
  return <MyComponent>{body}</MyComponent>;
</pre>
  
### 标签

11.1

 【强制】对于没有子元素的标签来说总是闭合的。
<pre>
// bad
<Foo className="stuff"></Foo>

// good
<Foo className="stuff" />

如果控件有多行属性，关闭标签要另起一行。 eslint: react/jsx-closing-bracket-location
</pre>
### 方法

12.1

 【强制】render方法必须有值返回。
<pre>
// bad
render() {
  (<div />);
}

// good
render() {
  return (<div />);
</pre>
12.2
【建议】按照以下顺序排序内部方法。

1. static methods and properties
2. lifecycle methods: displayName, propTypes, contextTypes, childContextTypes, mixins, statics,defaultProps, constructor, getDerivedStateFromProps, state, getChildContext, componentWillMount, componentDidMount, shouldComponentUpdate, componentWillUpdate, componentDidUpdate, componentWillUnmount (in this order).
3. custom methods
4. render method`
12.3

【建议】不要在componentDidMount以及componentDidUpdate中调用setState，除非是在绑定的回调函数中设置State。
<pre>
// bad
class Hello extends Component {
  componentDidMount() {
    this.setState({
      name: this.props.name.toUpperCase()
    });
  }
  render() {
    return <div>Hello {this.state.name}</div>;
  }
}

// good
class Hello extends Component {
  componentDidMount() {
    this.onMount(newName => {
      this.setState({
        name: newName
      });
    });
  }
  render() {
    return <div>Hello {this.state.name}</div>;
  }
}
</pre>
12.4

【建议】使用箭头函数来获取本地变量。
<pre>
function ItemList(props) {
  return (
    <ul>
      {props.items.map((item, index) => (
        <Item
          key={item.key}
          onClick={() => doSomethingWith(item.name, index)}
        />
      ))}
    </ul>
  );
}
</pre>
12.5

【建议】当在render()里使用事件处理方法时，提前在构造函数里把this绑定上去或者采用class field方法。
解释：为什么?在每次render过程中， 再调用bind都会新建一个新的函数，浪费资源。
<pre>
// bad
class extends React.Component {
  onClickDiv() {
    // do stuff
  }

  render() {
    return <div onClick={this.onClickDiv.bind(this)} />
  }
}

// good
class extends React.Component {
  constructor(props) {
    super(props);

    this.onClickDiv = this.onClickDiv.bind(this);
  }

  onClickDiv() {
    // do stuff
  }

  render() {
    return <div onClick={this.onClickDiv} />
  }
}
</pre>
12.6

【建议】在React模块中，不要给所谓的私有函数添加_前缀，本质上它并不是私有的。
解释：_下划线前缀在某些语言中通常被用来表示私有变量或者函数。但是不像其他的一些语言，在JS中没有原生支持所谓的私有变量，所有的变量函数都是共有的。尽管你的意图是使它私有化，在之前加上下划线并不会使这些变量私有化，并且所有的属性（包括有下划线前缀及没有前缀的）都应该被视为是共有的。了解更多详情请查看Issue #1024，和#490。
<pre>
// bad
React.createClass({
  _onClickSubmit() {
    // do stuff
  },

  // other stuff
});

// good
class extends React.Component {
  onClickSubmit() {
    // do stuff
  }

  // other stuff
}
</pre>
13. Declaration 声明模块
 【建议】不要使用 displayName 来命名React模块，而是使用引用来命名模块， 如 class 名称.
<pre>
// bad
export default React.createClass({
 displayName: 'ReservationCard',
 // stuff goes here
});

// good
export default class ReservationCard extends React.Component {
}
</pre>

参考资料

<a href="https://github.com/airbnb/javascript/master/react" target="_blank">Airbnb JavaScript Style Guide - React</a>

## 文件目录 （主要是src下）

<pre>
api // 存放api接口
assets  // 静态资源文件
    -- image // 图片资源
  -- css // css资源
  -- js // js资源
components // 公共组件
pages // 对应路由的页面组件
store.js    // 合并所有redux
redux 
    ---  xxxx.redux // 某个redux模块
        --- actionCreators.js 
      --- actionTypes.js
      --- index.js
      --- reducer.js
  ---  xxx.redux  // 某个redux模块
utils   // 封装的js方法
index.js // 入口文件
router // 路由文件
</pre>
