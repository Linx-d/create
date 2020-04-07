//需要请求数据  本地发送AJAX 参数: url; 数据; 成功的函数; 失败的函数
function localAjax(url, content, success, error) { 
	var url_head = "http://192.168.0.180:8081/api"; //http 本地
	var local_url = url_head + url;
	$.ajax({
		url: local_url,
		data: JSON.stringify(content),
		type: "post",
		dataType: "json",
		contentType: "application/json",
		success,
		error
	});
}
//不需要请求数据  本地发送AJAX 参数: url; 成功的函数; 失败的函数
function localAjaxN(url, success, error) { 
	var url_head = "http://192.168.0.180:8081/api"; //http 本地
	var local_url = url_head + url;
	$.ajax({
		url: local_url,
		type: "post",
		dataType: "json",
		success,
		error
	});
}

//需要请求数据  服务器发送AJAX 参数: url; 数据; 成功的函数; 失败的函数
function serverAjax(url, content, success, error) { //本地发送AJAX 参数: url; 数据
	var server_head = "http://127.0.0.1:8888/api"; //http  服务器
	var local_url = url_head + url;
	$.ajax({
		url: local_url,
		data: JSON.stringify(content),
		type: "post",
		dataType: "json",
		contentType: "application/json",
		success,
		error
	});
}

//不需要请求数据  服务器发送AJAX 参数: url; 数据; 成功的函数; 失败的函数
function serverAjaxN(url, success, error) { //本地发送AJAX 参数: url; 数据
	var server_head = "http://127.0.0.1:8888/api"; //http  服务器
	var local_url = url_head + url;
	$.ajax({
		url: local_url,
		type: "post",
		dataType: "json",
		success,
		error
	});
}