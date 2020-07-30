/* var foo = 'bbb';
exports.foo = 'hello';
// console.log(exports);
exports.add = function(x,y){
    return x + y;
};
function add(x,y){
    return x - y;
}
exports.age = 18; */

exports.readFile = function(path){
    console.log('文件路径',path);
}