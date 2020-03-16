# 小米商城pc

#### 代码目录
#### 代码规范
js命名应遵循 简洁、语义化 的原则

一、变量
&emsp;&emsp;命名方法：小驼峰式命名法
&emsp;&emsp;命名规范：前缀为--形容词
&emsp;&emsp;例如：
&emsp;&emsp;&emsp;&emsp;```let maxCount = 10```

二、常量
&emsp;&emsp;命名方法：名词全部大写
&emsp;&emsp;命名规范：前缀为--动词，使用大写字母和下划线来组合命名，下划线用来分割单词
&emsp;&emsp;例如：
&emsp;&emsp;&emsp;&emsp;```const MAX_COUNT = 10```

三、函数 & 方法
&emsp;&emsp;命名方法：小驼峰式命名法
&emsp;&emsp;命名规范：前缀为--动词 
&emsp;&emsp;例如：
&emsp;&emsp;&emsp;&emsp;can -- 判断是否可执行某个动作
&emsp;&emsp;&emsp;&emsp;has -- 判断是否含义某个值
&emsp;&emsp;&emsp;&emsp;is -- 判断是否为某个值
&emsp;&emsp;&emsp;&emsp;get -- 获取某个值
&emsp;&emsp;&emsp;&emsp;set -- 设置某个值
&emsp;&emsp;&emsp;&emsp;load -- 加载某些数据

&emsp;&emsp;&emsp;&emsp;```是否可阅读function canRead() {}```
&emsp;&emsp;&emsp;&emsp;```获取名称function getName() {}```

四、类 & 构造函数
&emsp;&emsp;命名方法：大写驼峰式命名法, 首字母大写
&emsp;&emsp;命名规范：前缀为--名称 
&emsp;&emsp;例如：
&emsp;&emsp;&emsp;&emsp;can -- 判断是否可执行某个动作
&emsp;&emsp;&emsp;&emsp;has -- 判断是否含义某个值
&emsp;&emsp;&emsp;&emsp;is -- 判断是否为某个值
&emsp;&emsp;&emsp;&emsp;get -- 获取某个值
&emsp;&emsp;&emsp;&emsp;set -- 设置某个值
&emsp;&emsp;&emsp;&emsp;load -- 加载某些数据

```class Persion {
  constructor(name) {
   ...
  }
}
```

五、类的成员
&emsp;&emsp;命名方法：
&emsp;&emsp;&emsp;&emsp;公共属性和方法:
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;跟变量和函数命名一样
&emsp;&emsp;&emsp;&emsp;私有属性和方法:
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;前缀为下划线_后面跟公共属性和方法一样的命名方式

&emsp;&emsp;命名规范：前缀为--名称 
&emsp;&emsp;例如：
&emsp;&emsp;&emsp;&emsp;can -- 判断是否可执行某个动作
&emsp;&emsp;&emsp;&emsp;has -- 判断是否含义某个值
&emsp;&emsp;&emsp;&emsp;is -- 判断是否为某个值
&emsp;&emsp;&emsp;&emsp;get -- 获取某个值
&emsp;&emsp;&emsp;&emsp;set -- 设置某个值
&emsp;&emsp;&emsp;&emsp;load -- 加载某些数据

```js
class Person {
  constructor() { }

  // 私有方法
  _name() {}
  // 公共方法
  getName() {
    return this._name;
  }
  // 公共方法
  setName(name) {
    this._name = name;
  }
}
```

六、注释规范
```js
// 设置标题
setTitle()
```
多行注释
```js
/*
 * 代码执行到这里后会调用setTitle()函数
 * setTitle()：设置title的值
 */
setTitle();
```
函数 & 方法注释
```js
/**
 * 函数说明
 * @关键字
 * @param {参数类型} 描述信息 | 描述参数
 * @return {参数类型} 描述信息 | 描述返回值
 * @author 某某某 时间
 **/
```
七、其他
代码缩进2个空格
代码格式规范准备ESint的语法
CSS命名
```
  类别 + 能/分类
  .titleBar-news{ }   /*新闻标题栏*/
  .titleBar-product{ }  *产品标题栏*/
```

