# 小程序

小程序是一种全新的连接用户与服务的方式，它可以在微信内被便捷地获取和传播，同事具有出色的使用体验。

## 小程序技术点

- 并不是HTML5/CSS3技术实现
- 抛弃了webView
- 采用了JavaScriptCore动态解析

### 开放的API

- 视图容器：视图（view），滚动视图，swiper
- 基础内容：图标，文本，进度条
- 表单组件：按钮，表单等等
- 操作反馈：导航
- 媒体组件：音频，图片，视频
- 地图，画布，文件操作能力
- 网络：上传下载能力，websocket
- 数据：数据缓存
- 位置：获取位置，查看位置
- 设备：网络状态，系统信息，重力感应，罗盘
- 界面：设置导航条，导航，动画，绘图等等
- 开放接口：登录，包括签名加密，用户信息，微信支付，模板消息

## App总体组成

### App

- 三个文件必须在项目目录
- app.js (必须) 处理全局逻辑
- app.json (必须) 公共配置
- app.wxss（可选）公共样式表

### Page

- 4个文件必须同名
- xxx.js（必选）页面逻辑
- xxx.wxml（必选）页面视图
- xxx.wxss（可选）页面样式表
- xxx.json（必选）公共配置



~~~
xxx.wxml WXML(WeXin Markup Language) =~ HTML
xxx.wxss WXSS(WeiXin Style Sheet) =~ Css\
微信页面WXML+WXSS =~ HTML+CSS
~~~

## 逻辑层和渲染层的交互

- 逻辑层

~~~
//index.js
Page({
	data: {
		msg: "param"
	}
});
~~~

- 渲染层

~~~
//index.wxml
<view class="container">
    <text class="text-label">
        {{ msg }}
    </text>
</view>
~~~

## weUI使用

使用
企业微信开发者如果需要使用 WeUI for Work，可以采用如下两种方式：

1）官方CDN 方式直接加载 CSS

https://res.wx.qq.com/open/libs/weui/1.1.2/weui-for-work.css

https://res.wx.qq.com/open/libs/weui/1.1.2/weui-for-work.min.css

2）Less 源码自行编译集成到项目中

自行编译代码的方式请访问WeUI for Work 的GitHub下载编译，该项目将定期与WeUI 保持同步。

注：除了加载的 CSS 文件不一样，使用 WeUI for Work 与使用 WeUI 无 HTML 结构上的变化。企业微信开发者如果早前使用的是 WeUI v1.x 版本，更换相关 CSS 文件为 WeUI for Work 的样式文件即可无缝切换到适配企业微信的风格界面。

常见问题
WeUI for Work 与 WeUI 的区别？
WeUI for Work 基于 WeUI 而来，WeUI 侧重于微信客户端内置网页的使用场景；而WeUI for Work 侧重于企业微信客户端内置网页的使用场景。WeUI for Work 相对于WeUI ，在 CSS 样式上跟随企业微信客户端风格微调，但开发者使用的 HTML 结构无须任何改动。



## 数据绑定

### 条件渲染

wx:if="{{ condition }}" 来判断是否需要渲染该代码块：

~~~
<block wx:if="true">
    <view>view1</view>
    <view>view2</view>
</block>
~~~

wx:if 懒渲染 Lazy Render  一般初始化时候判断
hidden/display:none 渲染 但是不显示 频繁切换使用

- Page函数
  - Page里面Data属性
  - setData函数进行刷新界面数据
  - 不能通过this.data={text: "hello"}这样来改变

### 列表渲染

- wx:for/foreach

~~~\
<view wx:for="{{items}}">
    {{index}}:{{item.message}}
</view>
~~~

- wx:for-index-item

~~~
<view wx:for="{{array}}" wx:for-index="idx" wx:for-item="itemName">
	{{idx}}:{{itemName.message}}
</view>
~~~





## view组件和flexbox弹性盒子

CSS3在布局方面做了非常大的改进，使得我们对块级元素的布局排列变得十分灵活，适应性非常强，其强大的伸缩性，在响应式开中可以发挥极大的作用。

主轴：Flex容器的主轴主要用来配置Flex项目，默认是水平方向

侧轴：与主轴垂直的轴称作侧轴，默认是垂直方向的

方向：默认主轴从左向右，侧轴默认从上到下

主轴和侧轴并不是固定不变的，通过flex-direction可以互换。

![1498441839910](media/1498441839910.png)



Flex布局的语法规范经过几年发生了很大的变化，也给Flexbox的使用带来一定的局限性，因为语法规范版本众多，浏览器支持不一致，致使Flexbox布局使用不多

**2、各属性详解******

1.flex子项目在主轴的缩放比例，不指定flex属性，则不参与伸缩分配

min-width  最小值      min-width: 280px  最小宽度  不能小于 280

max-width: 1280px  最大宽度  不能大于 1280

2.flex-direction调整主轴方向（默认为水平方向）

flex-direction: column 垂直排列

flex-direction: row  水平排列

http://m.ctrip.com/html5/   携程网手机端地址

3、justify-content调整主轴对齐（水平对齐）

子盒子如何在父盒子里面水平对齐

| 值            | 描述                                             | 白话文                                         |
| ------------- | ------------------------------------------------ | ---------------------------------------------- |
| flex-start    | 默认值。项目位于容器的开头。                     | 让子元素从父容器的开头开始排序但是盒子顺序不变 |
| flex-end      | 项目位于容器的结尾。                             | 让子元素从父容器的后面开始排序但是盒子顺序不变 |
| center        | 项目位于容器的中心。                             | 让子元素在父容器中间显示                       |
| space-between | 项目位于各行之间留有空白的容器内。               | 左右的盒子贴近父盒子，中间的平均分布空白间距   |
| space-around  | 项目位于各行之前、之间、之后都留有空白的容器内。 | 相当于给每个盒子添加了左右margin外边距         |

4、align-items调整侧轴对齐（垂直对齐）

子盒子如何在父盒子里面垂直对齐（单行）

| 值         | 描述                           | 白话文                                                |
| ---------- | ------------------------------ | ----------------------------------------------------- |
| stretch    | 默认值。项目被拉伸以适应容器。 | 让子元素的高度拉伸适用父容器（子元素不给高度的前提下) |
| center     | 项目位于容器的中心。           | 垂直居中                                              |
| flex-start | 项目位于容器的开头。           | 垂直对齐开始位置 上对齐                               |
| flex-end   | 项目位于容器的结尾。           | 垂直对齐结束位置 底对齐                               |
|            |                                |                                                       |

5、flex-wrap控制是否换行

当我们子盒子内容宽度多于父盒子的时候如何处理

| 值           | 描述                                                         |
| ------------ | ------------------------------------------------------------ |
| nowrap       | 默认值。规定灵活的项目不拆行或不拆列。  不换行，则 收缩（压缩） 显示  强制一行内显示 |
| wrap         | 规定灵活的项目在必要的时候拆行或拆列。                       |
| wrap-reverse | 规定灵活的项目在必要的时候拆行或拆列，但是以相反的顺序。     |
|              |                                                              |
|              |                                                              |

6、flex-flow是flex-direction、flex-wrap的简写形式

~~~css
flex-flow: flex-direction  flex-wrap;  
~~~



白话记：    flex-flow: 排列方向   换不换行; 

两个中间用空格

例如：

~~~css
display: flex;
/* flex-direction: row;
flex-wrap: wrap;   这两句话等价于下面的这句话*/
flex-flow: column wrap;  /* 两者的综合 */
~~~



7、align-content堆栈（由flex-wrap产生的独立行）多行垂直对齐方式齐

align-content是针对flex容器里面多轴(多行)的情况,align-items是针对一行的情况进行排列。

必须对父元素设置自由盒属性display:flex;，并且设置排列方式为横向排列flex-direction:row;并且设置换行，flex-wrap:wrap;这样这个属性的设置才会起作用。

| 值            | 描述                                             | 测试 |
| ------------- | ------------------------------------------------ | ---- |
| stretch       | 默认值。项目被拉伸以适应容器。                   |      |
| center        | 项目位于容器的中心。                             |      |
| flex-start    | 项目位于容器的开头。                             |      |
| flex-end      | 项目位于容器的结尾。                             |      |
| space-between | 项目位于各行之间留有空白的容器内。               |      |
| space-around  | 项目位于各行之前、之间、之后都留有空白的容器内。 |      |

8、order控制子项目的排列顺序，正序方式排序，从小到大

用css 来控制盒子的前后顺序。  用order 就可以

用整数值来定义排列顺序，数值小的排在前面。可以为负值。 默认值是 0

~~~css
order: 1;
~~~