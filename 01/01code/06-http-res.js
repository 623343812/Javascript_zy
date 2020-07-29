var http = require('http');

var server = http.createServer();

//request 请求事件处理函数 需要接收两个参数：
 //Request 请求对象   请求对象可以用来获取客户端的一些请求信息 例如请求路径
 //Response 响应对象 响应对象可以用来给客户端发送响应消息
server.on('request',function(request,response){
    // http://127.0.0.1:3000/ /
    // http://127.0.0.1:3000//a /a
    // http://127.0.0.1:3000/foo/b /foo/b
    console.log('收到客户端请求了,请求路径是:'+ request.url);

    //respone 有write方法 可以使用多次 要用end来结束响应
    response.write('hello');
    response.write(' nodejs');

    //告诉服务器结束响应
    response.end();

    //由于现在服务器还是非常的弱，无论是什么请求都只能响应 hello nodejs
    //我希望请求不同的路径的时候相应不同的结果
    // / index
    // /login 登录
    // /register 注册
    // /haha 哈哈哈
    
});

server.listen(3000,function(){
    console.log('服务器启动成功了, 可以通过 http://127.0.0.1:3000/ 来进行访问');
});