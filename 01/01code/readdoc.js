var fs = require('fs');
fs.readFile('./data/hell.txt',function(error,data){
    // console.log(data);
    // console.log(data.toString());
    // console.log(error);
    // console.log(data);
    if(error){
        console.log('失败了');
    }else{
        console.log(data.toString());;
    }
})