var http = require('http');
//1创建 Server
var server = http.createServer();
//2.监听 request 请求事件 设置请求处理函数
server.on('request',function(request,response){
    console.log('收到请求了，请求路径是：'+ request.url);

/*     response.write('hello');
    response.write('world');
    response.end(); */
    //直接end的时候发送响应数据
    // response.end('hello nodejs');

    //1获取请求路径 2判断路径处理响应
    //request.url获取的是端口号之后的那一部分路径 也是说所有的url都是以/开头的

    var url = request.url;
    // // response.end(url);
    // if(url === '/'){
    //     response.end('index page');
    // }else if(url === '/login'){
    //     response.end('login page');
    // }else{
    //     response.end('404 Not Found.');
    // }
    if(url === '/products'){
        var products = [
            {
                name:'苹果X',
                price:1111
            },
            {
                name:'香蕉X',
                price:2222
            },
            {
                name:'李子X',
                price:3333
            },
        ]
        response.end(JSON.stringify(products));
    }
})
//3.绑定端口号 启动服务
server.listen(80,function(){
    console.log('服务器启动成功，可以访问了。。。');
})