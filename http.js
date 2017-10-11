var http=require('http');
var querystring=require('querystring');
var postData=querystring.stringify({
  "content":'一起期待下一期的课程',
  "cid":348,
});
var options={
  hostname:'www.imooc.com',
  port:80,
  path:'/course/docomment',
  method:'POST',
  headers:{},
};
var req=http.request(options,function (res) {
  console.log(res);
  res.on('data',function (chunk) {
    console.log(chunk);
  });
  res.on('end',function () {
    console.log('success');
  });
});
req.on('error',function (e) {
  console.log(e.message);
});
req.write(postData);
req.end();