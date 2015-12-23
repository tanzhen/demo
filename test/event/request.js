var http = require('http');
var querystring = require('querystring');

var postData = querystring.stringify({
	'content':'这是一条测试的小尾巴!',
	'mid':'8837'
});

var options = {
	hostname:'www.imooc.com',
	port:80,
	path:'/course/docomment',
	method:'POST',
	headers:{
		'Accept':'application/json, text/javascript, */*; q=0.01',
		'Accept-Encoding':'gzip, deflate',
		'Accept-Language':'zh-CN,zh;q=0.8',
		'Connection':'keep-alive',
		'Content-Length':postData.length,
		'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8',
		'Cookie':'imooc_uuid=5bb6df92-a36f-438d-a20a-e5a302aff103; loginstate=1; apsid=I5NDRkZjBlMzNkYTM2MzExYjc2OWUwNjkwZDEzNzUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjQ3MjM5AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1NjU2NjU4NzZAcXEuY29tAAAAAAAAAAAAAAAAAAAAADRlNmNiZTg1ODZiY2EwNDNjNzZjYzVkNWNjMmNmOWZiXKLVU1yi1VM%3DYm; PHPSESSID=rt4auh3slo27395dbr0jmttj45; cvde=55c3619d585ae-11; Hm_lvt_f0cfcccd7b1393990c78efdeebff3968=1438778655,1438863413,1438867962,1438868425; Hm_lpvt_f0cfcccd7b1393990c78efdeebff3968=1438870701',
		'Host':'www.imooc.com',
		'Origin':'http://www.imooc.com',
		'Referer':'http://www.imooc.com/video/8837',
		'User-Agent':'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.2357.130 Safari/537.36',
		'X-Requested-With':'XMLHttpRequest'
	}
};


var req = http.request(options,function  (res) {
		console.log('Status: '+res.statusCode);
		console.log('headers: '+JSON.stringify(res.headers));

		res.on('data',function  (chunk) {
			console.log(Buffer.isBuffer(chunk));
			console.log(typeof chunk);
		});

		res.on('end',function  () {
			console.log('评论完毕');
		});

		res.on('error',function(e){
			console.log('Error: '+e.message);
		});
});

req.write(postData);
req.end();