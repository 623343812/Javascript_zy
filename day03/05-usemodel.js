//安装 npm install art-template
//默认下载到node_modules目录中 不要改动

//1.安装 npm install art-template
//2.在需要使用的文件模块中加载 art-template
//使用require方法加载就可以了 install的名字是什么 则你require中的就是什么
//3.查文档，使用模板引擎的 API

var template = require('art-template')

var fs = require('fs')
// var tqlStr = `
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>
// <body>
//     <script src="node_modules/art-template/lib/template-web.js"></script>
//     <script type="text/template" id="tql">
//         <p>大家好,我是 {{ name }}</p>
//         <p>我今年 {{ age }} 岁了</p>
//         <p>我来自 {{ province }}</p>
//         <p>我喜欢: {{ each hobbies }} {{ $value }}  {{ /each }}</p>
//     </script>
// </body>
// </html>`

fs.readFile('./tql.html', function (err, data) {
    if (err) {
        return console.log('读取文件失败');
    }
    

    //data是2进制数据 模板引擎render只接收字符串 

    
    var ret = template.render(data.toString(), {
        name: 'Jack',
        age: 18,
        province: '江西',
        hobbies: [
            '写代码',
            '唱歌',
            '打游戏'
        ],
        title: '模板引擎'
})
console.log(ret);
})

// template('script 标签 id', {对象}) 错误



