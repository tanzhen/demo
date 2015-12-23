var http = require('http');
var cheerio = require('cheerio');
var querystring = require('querystring');

var url ='http://www.zimuzu.tv/search/index?';

var searchInfo = querystring.stringify({
	'keyword':'黑名单'
});

function fiterChapters(html){
	var $ = cheerio.load(html);
	var chapters = $('.learnchapter');
	// [{}]

	var courseData = [];
	chapters.each(function(item){
		var chapter = $(this);
		var chapterTitle = chapter.find('strong').text();
		var videos = chapter.find('.video').children('li');
		console.log(videos);
	});
}

http.get(url+searchInfo,function(res){
	var html = '';
	res.on('data',function(data){
		html+=data;
	});
	res.on('end',function(){
		console.log(html);
	});
}).on('error',function(){
	console.log('获取数据出错！');
});