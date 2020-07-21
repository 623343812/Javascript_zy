(function(){
        //私有数据
        var msg = 'My atguigu';
        //操作数据的函数
        function doSomething(){
            console.log('dosomething()' + msg.toUpperCase());
        }
        function doOtherthing(){
            console.log('doOtherthing()' + msg.toLowerCase());
        }
        //匿名函数自调用 把要暴露的东西添加为window属性
        //向外暴露对象(给外部使用的方法)
        window.myModel2 = {
            doSomething:doSomething,
            doOtherthing:doOtherthing
    
        }
})() 
(function(window){
        //私有数据
        var msg = 'My atguigu';
        //操作数据的函数
        function doSomething(){
            console.log('dosomething()' + msg.toUpperCase());
        }
        function doOtherthing(){
            console.log('doOtherthing()' + msg.toLowerCase());
        }
        //匿名函数自调用 把要暴露的东西添加为window属性
        //向外暴露对象(给外部使用的方法)
        window.myModel2 = {
            doSomething:doSomething,
            doOtherthing:doOtherthing
    
        }
})(window) 