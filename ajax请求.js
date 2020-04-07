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