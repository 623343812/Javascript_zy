var fs = require('fs');

fs.readdir('C:/Users/又驭/Desktop/node.JS/www', function (err, files) {
   if (err) {
       return console.log('目录不存在');
   } 
   console.log(files);
})