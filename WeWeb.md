# weWeb

# Develop

jf edited this page on 7 Apr 2016 · [2 revisions](https://github.com/Tencent/weui/wiki/Develop/_history)

### 开发

```
git clone https://github.com/weui/weui.git
cd weui
npm install
npm start
```

运行`npm start`命令，会监听`src`目录下所有文件的变更，并且默认会在`8080`端口启动服务器，然后在浏览器打开 `http://localhost:8080/example`。

powered by wechat UI Team

## 使用nvm管理node安装和使用

### 背景

计划使用IDEA导入weui前端框架启动，分为weui.js-master和weui-master两个，之前自己安装了nodejs最新版本，可以启动weui.js-master，但是启动weui-master的时候，报错ReferenceError: primordials is not defined，因为这个项目用的gulp, 最高只能用nodejs 的v8版本，所以之后直接使用nvm来安装和管理使用node版本。

### 前期工作

因为之前安装过新版本的node和npm等工具，所以先卸载node，清理环境变量。
之前使用 npm 下载安装过 angular cli，vue-cli，webpack 等，删除相关文件夹C:\Users\Administrator\AppData\Roaming\npm
C:\Users\Administrator\AppData\Roaming\npm-cache
下载nvm安装包https://github.com/coreybutler/nvm-windows/releases

### Node和npm环境变量配置

[https://zhuanlan.zhihu.com/p/86241466]

[node环境变量配置](https://zhuanlan.zhihu.com/p/86241466)

### 安装nvm

解压后直接运行安装文件，我选择的是自己常用的盘，好找和管理
但是安装路径不能有 空格和汉字

之后选择使用node版本的文件夹，我选择和nvm文件夹同级

安装成功后，会自动添加环境变量
NVM_HOME 值：当前nvm.exe所在目录
NVM_SYMLINK 值：node快捷方式所在目录

PATH 值：%NVM_HOME%;%NVM_SYMLINK%;

此时打开cmd，运行nvm指令可查看是否安装成功


安装node
直接使用nvm命令即可安装node，首先安装最新的，发现说只支持32位的，那就找官网最新是什么版本咯，找到12.12.0

直接使用指令安装12.12.0版本的，安装成功

我还安装了8和10版本，安装成功后，nvm ls显示安装的所有版本node

在nvm文件夹里会有安装的node文件夹，安装node成功后，会自动安装npm


使用nvm ls命令可以查看安装的node版本，常用命令：

nvm --version // 查看nvm版本
nvm install latest // 下载最新的 node 版本
nvm ls-remote // 查看远程已经存在的版本（可能会很慢，请耐心等待）
nvm install v8.9.0 // 下载指定版本nodejs
nvm install v8.9.0 32 // 默认是64位，32位需指定
nvm current // 当前使用版本
nvm use 8.9.1 // 使用指定版本
nvm list // 查看已经安装的nodejs版本
node --version // 查看nodejs版本
使用nvm use 版本号，即可设置当前使用哪个版本的node

但是这里报错，原因是当时这个Program Files，有空格。
切记 nvm的安装路径 ：不要有汉字，不要有空格。不，应该要有良好的习惯那就是

任何的软件的安转路径都
不要有汉字
不要有空格
重装后，再次使用即可。指定使用node版本后，看是否显示出nodejs的快捷方式。

如果显示出来，则此时使用得就是该版本的nodejs。

日后可通过该命令切换nodejs版本，使用哪个版本，nodejs快捷方式就会指向哪个版本。

（注意：如果操作系统为32位的，使用nvm use [版本号] 命令时，后面要加上32。也就是nvm use [nodejs版本号] 32）

可以启动使用了。



### 跨域问题

需要运行本地服务器才能正常预览的。
执行下面的操作

~~~
npm install && npm run start
~~~


如果你只是想本地看效果，而不是改动调试的话，那直接打开dist目录下的文件就可以了，src下都是未打包编译的源文件.



# 开发记录

## 遇到的问题

- 使用组件例如button或者有反馈页时

~~~
为父元素添加类名：js_item 以及 data-id="组件名"

<a href="javascript:" class="weui-btn weui-btn_primary js_item" data-id="list">页面主操作</a>
~~~

- 页面跳转

需要在dist目录下的example中有对应的html文件。同时这个文件也需要导入相应js文件和css文件。建议直接从打包好的index.html 拷贝再更改里面的内容。

- data-id=“自定义页面名”

需要在当前html文件下定义script标签嵌套  id=“自定义页面名” 

~~~javascript
<!-----------------自定义 template  start------------------>
    <script type="text/html" id="tpl_userForm">
        <div class="page">
            <!--页面结构-->
        </div>
        <script type="text/javascript">
            $(function(){
                //这里写jq脚本
            });
        </script>
</script>
<!-----------------自定义 template  end------------------>
~~~



## 注意

img的src和a链接的href 如果要执行内联脚本，本地路径。需要在dist文件下具有相应的文件或者图片。



## 百度地图开发实例

### 百度地图使用介绍

- [百度地图百度地图开放平台](http://lbsyun.baidu.com/index.php?title=jspopular/guide/getkey)

使用百度地图做开发的例子比比皆是，使用百度地图API，可以在百度地图上绘制所需要的信息，比如画旗标，画边界，画路况等，实现成功定制地图。

- 前期准备

1. 引入文件

~~~javascript
<script type="text/javascript" src="http://api.map.baidu.com/api?v=2.0&ak=您的密钥"></script>
~~~



2. 点我申请秘钥](http://lbsyun.baidu.com/apiconsole/key)

建议使用最新的符合HTML5规范的文档声明



3. 创建地图容器元素，以及创建地图实例

~~~
<div id="container">

</div>
~~~



4. 创建地图实例

~~~javascript
var map = new BMap.Map("container");
~~~

注意：

①在调用此构造函数时应确保容器元素已经添加到地图上。

②命名空间 API使用BMap作为命名空间，所有类均在该命名空间之下，比如：BMap.Map、BMap.Control、BMap.Overlay。



5. 设置中心坐标

设置中心点坐标
这里我们使用BMap命名空间下的Point类来创建一个坐标点。Point类描述了一个地理坐标点，其中116.404表示经度，39.915表示纬度。（为天安门坐标）



~~~javascript
var point = new BMap.Point(116.404, 39.915); 
~~~



注意：在使用百度地图JavaScript API服务时，需使用百度BD09坐标，如使用其他坐标（ WGS84、GCJ02）进行展示，需先将其他坐标转换为BD09，详细说明请参考坐标转换说明，请勿使用非官方的转换方法！！！



6. 地图初始化，同时设置地图展示级别

在创建地图实例后，我们需要对其进行初始化，BMap.Map.centerAndZoom()方法要求设置中心点坐标和地图级别。 地图必须经过初始化才可以执行其他操作。

```
map.centerAndZoom(point, 15);  
```

至此，我们就快速创建了一张以天安门为中心的地图~



- 总结

有时候在引用



```javascript
<script type="text/javascript" src="http://api.map.baidu.com/api?v=2.0&ak=您的密钥"></script>
```



的时候会报错，不接受http方式的引用，这时候只需要把地址换成https协议就可以了：

```
<script type="text/javascript" src="https://api.map.baidu.com/api?v=2.0&ak=您的密钥"></script>
```

### 百度地图中申请密钥时Referer白名单写什么

就写个英文半角得*就可以了。

应用AK：

~~~JavaScript
EG4ercSC4ZmBIhIcBvyoj65q12m2fy00
<script type="text/javascript" src="//api.map.baidu.com/api?v=2.0&ak=EG4ercSC4ZmBIhIcBvyoj65q12m2fy00"></script>
~~~

地图源代码：

~~~
<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta name="viewport" content="initial-scale=1.0, user-scalable=no" />
	<style type="text/css">
	body, html,#allmap {width: 100%;height: 100%;overflow: hidden;margin:0;font-family:"微软雅黑";}
	</style>
	<script type="text/javascript" src="//api.map.baidu.com/api?v=2.0&ak=您的密钥"></script>
	<title>地图展示</title>
</head>
<body>
	<div id="allmap"></div>
</body>
</html>
<script type="text/javascript">
	// 百度地图API功能
	var map = new BMap.Map("allmap");    // 创建Map实例
	map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);  // 初始化地图,设置中心点坐标和地图级别
	//地图级别越大放大倍数越大
	//添加地图类型控件
	map.addControl(new BMap.MapTypeControl({
		mapTypes:[
            BMAP_NORMAL_MAP,
            BMAP_HYBRID_MAP
        ]}));	  
	map.setCurrentCity("北京");          // 设置地图显示的城市 此项是必须设置的
	map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
</script>
~~~

重庆如泰科技经纬度：29.8256638000,106.5305940300

天安门经纬度：116.404, 39.915



# [百度Echart简介及在html上的嵌入步骤]()

### ECharts简介

[ECharts](http://echarts.baidu.com/index.html)是由百度商业前端数据可视化团队研发的图表库，可以流畅的运行在 PC 和移动设备上，兼容当前绝大部分浏览器（IE8/9/10/11，Chrome，Firefox，Safari等），底层依赖轻量级的 Canvas 类库 ZRender，提供直观，生动，可交互，可高度个性化定制的数据可视化图表。

ECharts 提供了非常丰富的图表类型，常规的折线图，柱状图，散点图，饼图，K线图，用于统计的盒形图，用于地理数据可视化的地图，热力图，线图，用于关系数据可视化的关系图，treemap，多维数据可视化的平行坐标，还有用于 BI 的漏斗图，仪表盘，并且支持图与图之间的混搭，满足用户绝大部分用户分析数据时的图表制作需求。

### ECharts开发环境

ECharts是一款可视化开发库，底层用的是javascript封装，所以可以在网页HTML中嵌入ECharts代码显示数据图表。在网页中嵌入ECharts步骤如下：

1. [下载ECharts](https://www.echartsjs.com/zh/download.html)
从官网下载界面选择需要的版本下载，根据开发者功能和体积上的需求，官网提供了不同打包的下载
2.HTML引入 ECharts
因为ECharts底层是javascript，所以可以像javascript一样，直接嵌入到HTML中，如下：

```
<!DOCTYPE html>
<html>
<header>
    <meta charset="utf-8">
    <!-- 引入 ECharts 文件 -->
    <script src="echarts.js"></script>
</header>
</html>
```

3.绘制一个简单的图表
(1)在绘图前需要为 ECharts 准备一个具备高宽的 dom 容器。

```
<body>
    <!-- 为 ECharts 准备一个具备大小（宽高）的Dom -->
    <div id="main" style="width: 600px;height:400px;"></div>
</body>
```

(2)然后就可以通过 echarts.init 方法初始化一个 echarts 实例并通过 setOption 方法生成一个简单的柱状图，下面是完整代码

```
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>ECharts</title>
    <!-- 引入 echarts.js -->
    <script src="echarts.js"></script>
</head>
<body>
    <!-- 为ECharts准备一个具备大小（宽高）的Dom -->
    <div id="main" style="width: 600px;height:400px;"></div>
    <script type="text/javascript">
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('main'));

        // 指定图表的配置项和数据
        var option = {
            title: {
                text: 'ECharts 入门示例'
            },
            tooltip: {},
            legend: {
                data:['销量']
            },
            xAxis: {
                data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
    </script>
</body>
</html>
```

### Echarts

- 设置标线

~~~
markLine: {
    data: [
        { yAxis: 37.0 }  //设置标线
    ]
}
~~~

- X轴

~~~
xAxis: {
                            type: 'category',
                            boundaryGap: false,
                            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
                        }
~~~

- Y轴

~~~
yAxis: {
                            type: 'value',
                            axisLabel: {
                                formatter: '{value} °C' //Y坐标
                            }
                        },
~~~



## git记录



~~~
git commit -m "[]具体哪页--- 实现了什么功能"
注：具体哪页首字母大写。
例：
git  commit -m "[]Map--- map chart"
~~~



git push失败时，可能是权限问题，在.git文件下的config文件 修改

~~~
//url = http://lixin@192.168.0.222:3000/lixin/UTprevention.git 在192.168.之前加上用户名以及@

[remote "origin"]
	url = http://lixin@192.168.0.222:3000/lixin/UTprevention.git
	fetch = +refs/heads/*:refs/remotes/origin/*
[branch "master"]
	remote = origin
	merge = refs/heads/master
~~~



## 提交表单AJAX

提交地址：http:// + 192.168.0.180 + 端口号(:8081) + {{bendi}}/user/boundDevice 中的插值表达式后的内容({{}})

http://192.168.0.180:8081/user/boundDevice

提交方法：method: post;

设置header



表单提交

~~~
<form action="http://192.168.0.180:8081/user/boundDevice" method="post">
</form>
~~~

## postMan 使用

将后台拿过来的json文件导入到postman中，在collections中使用。

- Headers 中设置content-type
- Body中是json数据



**环境变量**

无线体温.postman_environment.json

**数据**

无线体温.postman_collection(3).json





# AJAX

## AJAX提交数据

### 有参数

~~~javascript
            var data = {
                        "imei":"12135456784",
                        "online":true,
                        "name":"李五",
                        "tel":"13695862541",
                        "sex":"男",
                        "age":"22",
                        "address":"重庆市北碚区"
                    };//必须为一个对象且要和接受的数据一一对应
            $.ajax({
                url: "http://192.168.0.180:8081/user/boundDevice",
                data: JSON.stringify(data), //转为json格式的数据
                //Origin: "http://192.168.0.180:8081",
                type: "post", //请求类型
                dataType: "json",  //内容类型
                contentType: "application/json",
                success: function(data) {
                    // data = jQuery.parseJSON(data);  //dataType指明了返回数据为json类型，故不需要再反序列化
                    console.log(data);
                    console.log('ok');
                },
                error: function(data) {
                    console.log($("input[name='name']").val());
                    console.log(data);
                    console.log('error');
                }
            });
~~~

### 无参数

var url_head = "http://192.168.0.180:8081/api"; //http 本地

var server_head = "http://127.0.0.1:8888/api"; //http  服务器

~~~javascript
$.ajax({
              url: "http://192.168.0.180:8081/api/device/getDeviceInfoByUserId?userId="+parseInt(userId),

              //url: "http://127.0.0.1:8888/deviceData/listUserLocation", //本地
              //data: JSON.stringify(obj),
              dataType: "json", //返回数据的类型
              type: "post",  //请求类型
              // contentType: "application/json", //请求数据的类型
              success: function(data) {
                  console.log(data);
              },
              error: function(data) {
                  alert('error');
              }
          });
~~~



## AJAX发送成功后自动跳转

~~~
只要在Ajax的success函数中加入这么一条：
    // ，登录验证通过，自动跳转到主页面
    window.location.href = "/student/dashboard";
只要服务器验证成功，前端的JS就会自动跳转到主页面
~~~



## 手机发送ajax失败

把ajax的url中的主机名改为服务端ip地址

[服务端地址](http://127.0.0.1:8888/api)

# [Nginx](https://www.cnblogs.com/jingmoxukong/p/5945200.html)

Xshell 6