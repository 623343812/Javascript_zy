function myModel(){
    //私有数据
    var msg = 'My atguigu';
    //操作数据的函数
    function doSomething(){
        console.log('dosomething()' + msg.toUpperCase());
    }
    function doOtherthing(){
        console.log('doOtherthing()' + msg.toLowerCase());
    }
    //向外暴露函数(给外部使用的方法)
    return {
        doSomething:doSomething,
        doOtherthing:doOtherthing

    };
}