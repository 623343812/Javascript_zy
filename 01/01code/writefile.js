var fs = require('fs');

/* $.ajax({
    success:function(data){

    }
}) */
//文件路径 文件内容 回调函数
//error
//文件写入成功 error就是错误对象
fs.writeFile('./data/你好.md','我是Node.js',function(error){
// console.log('文件写入成功');
// console.log(error);
if(error){
    console.log('失败');
}else{
    console.log('成功');
}
})