var http = require('http');

var fs = require('fs')

var server = http.createServer();


//Apache 服务器软件 端口号80  可以访问到www文件
//127.0.0.1:80/a.txt
//127.0.0.1:80/index.html
//127.0.0.1:80/apple/login.html

var wwwDir = 'C:/Users/又驭/Desktop/node.JS/www';
server.on('request', function (req, res) {
    var url = req.url;
    if (url === '/') {
        fs.readFile(wwwDir + '/index.html', function (err, data) {
            /*             if (err) {
                            res.end('404 Not Found.');
                        } else {
                        } */
            if (err) {
                //return 有两个作用
                //1 方法返回值
                //2 阻止代码继续往后执行
                return res.end('404 Not Found.');
            }
            res.end(data);
        })
    } else if (url === '/login.html') {
        fs.readFile(wwwDir + '/apple/login.html', function (err, data) {
            if (err) {
                return res.end('404 Not Found.');
            }
            res.end(data);
        })
    } else if (url === '/a.txt') {
        fs.readFile(wwwDir + '/a.txt', function(err, data) {
            if (err) { 
                res.setHeader('Content-Type', 'text/plain; charset=utf-8')
                return res.end('404 Not Found.');
            } else {res.setHeader('Content-Type', 'text/plain; charset=utf-8');
            res.end(data);}
        })
    }
})

server.listen(3000, function () {
    console.log('running');
})