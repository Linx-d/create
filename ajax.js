            //为地图标注之外 注册事件
            map.addEventListener('click', function(e) {
                //console.log('ok');
                //$('.userInfo').removeClass('userInfo_show');
                if(e.overlay){
                    //alert('您点击的是覆盖物：'+e.overlay.toString());
                    /*--------------获取用户最新位置信息 get_locationInfo-------------*/
                    console.log(e.overlay);

/*
id: 15
gmtCreate: "2020-04-02 10:10:32"
gmtModified: "2020-04-02 17:26:39"
name: "李五"
tel: "13695862541"
sex: "男"
age: "22"
address: "重庆市北碚区"
wxUserId: null
__proto__: Object
code: 0
msg: "操作成功！"
count: 0
*/
                    $("#get_locationInfo").on("click", function() {
                        //console.log(marker);
                        console.log(e.overlay.userId);
                        //e.overlay.userId = '';
                        $.ajax({
                            url: "http://192.168.0.180:8081/api/user/getUserById?userId="+parseInt(e.overlay.userId),
                            //url: "http://127.0.0.1:8888/deviceData/listUserLocation", //本地
                            //data: JSON.stringify(obj),
                            dataType: "json", //内容类型
                            type: "post",  //请求类型
                            // contentType: "application/json",
                            success: function(data) {
                                console.log(data);
                                //$("#name").innerText = data[0].name;
                                //$("#b_name").innerText = data[0].name; 别名
                                //$("#sex").innerText = data[0].sex;
                                //$("#age").innerText = data[0].age;
                                $('#name')[0].innerText = data.data.name;
                                $('#age')[0].innerText = data.data.age;
                                $('#sex')[0].innerText = data.data.sex;
                            },
                            error: function(data) {
                                alert('error');
                            }
                        });
                        /*在线 温度*/
                        $.ajax({
                            url: "http://192.168.0.180:8081/api/device/getDeviceInfoByUserId?userId="+parseInt(e.overlay.userId),

                            //url: "http://127.0.0.1:8888/deviceData/listUserLocation", //本地
                            //data: JSON.stringify(obj),
                            dataType: "json", //内容类型
                            type: "post",  //请求类型
                            // contentType: "application/json",
                            success: function(data) {
                                //$("#name").innerText = data[0].name;
                                //$("#b_name").innerText = data[0].name; 别名
                                //$("#sex").innerText = data[0].sex;
                                //$("#age").innerText = data[0].age;
                                $('#temperature')[0].innerText = data.data.temperature;
                                if(data.data.online) {
                                    $('#online')[0].innerText = '在线';
                                }else {
                                    $('#online')[0].innerText = '不在线';
                                }
                                
                            },
                            error: function(data) {
                                alert('error');
                            }
                        });

                        /*告警*/
                        var deviceId = {};
                                        
                        deviceId["userId"] = parseInt(e.overlay.userId);
                                
                        
                        $.ajax({
                            url: "http://192.168.0.180:8081/api/alarm/getAlarmByUserId",
                            //url: "http://127.0.0.1:8888/deviceData/listUserLocation", //本地
                            data: JSON.stringify(deviceId),
                            dataType: "json", //内容类型
                            type: "post",  //请求类型
                            contentType: "application/json",
                            success: function(data) {
                                //$("#name").innerText = data[0].name;
                                //$("#b_name").innerText = data[0].name; 别名
                                //$("#sex").innerText = data[0].sex;
                                //$("#age").innerText = data[0].age;
                                
                                $('#tnumber')[0].innerText = data.data.tnumber;
                                
                                $('#pnumber')[0].innerText = data.data.pnumber || 0;
                            },
                            error: function(data) {
                                alert('error');
                            }
                        });

                        /* 历史数据温度*/
                        var deviceId = {};
                                        
                        deviceId["userId"] = parseInt(e.overlay.userId);
                                
                        
                        $.ajax({
                            url: "http://192.168.0.180:8081/api/deviceData/listUserLocationById?page=1&limit=10",
                            //url: "http://127.0.0.1:8888/deviceData/listUserLocation", //本地
                            data: JSON.stringify(deviceId),
                            dataType: "json", //内容类型
                            type: "post",  //请求类型
                            contentType: "application/json",
                            success: function(data) {
                                tm_history = data.data;
                                console.log(tm_history);
                            },
                            error: function(data) {
                                alert('error');
                            }
                        });
                    });

                }else{
                    //alert('您点击的是地图');
                    $('.userInfo').removeClass('userInfo_show');
                }  
            });