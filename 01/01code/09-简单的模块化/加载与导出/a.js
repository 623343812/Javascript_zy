//require的两个作用
//1.加载并执行里面的代码  
//2.拿到加载文件模块导出的接口对象
var fs = require('fs');

var bExports = require('./b');
// console.log(bExports.add(10,20));
// console.log(bExports.age);
console.log(bExports.readFile('./a.js',));

fs.readFile('./a.js',function(err,data){
    if(err){
console.log('读取文件失败');
    }else{
        console.log(data.toString());
            }
})

