        // var timer; 全局声明
        /*         要执行的对象
                    --obj 
                   移动的速度
                   --speed 正右负左
                   执行动画的目标位置
                   --target
                   要执行动画的样式
                   --attr
                   回调函数 将会在动画完毕以后执行
                   --callback
                    */
                   function move(obj, attr, target, speed, callback) {
                    clearInterval(obj.timer); //清除上一次的定时器
        
                    //获取元素目前的位置
                    var current = parseInt(getStyle(obj, attr));
                    /* 
                    判断速度的正负值
                    如果时0向800移动，speed则为正
                    如果时800向0移动，speed则为负          
                     */
        
                    if (current > target) {
                        speed = -speed;
                    } //使上传的全为正
                    //向执行动画的对象中添加一个timer属性，用来保存自己的定时器标识
                    obj.timer = setInterval(function () {
                        var oldValue = parseInt(getStyle(obj, attr));
                        var newValue = oldValue + speed;
                        //判断newValue是否大于等于800
                        //从800向0移动
                        //向左移动需要判断newValue是否小于target
                        // 向右移动时判断newValue是否大于target
                        if ((speed < 0 && newValue < target) || (speed > 0 && newValue > target)) {
                            newValue = target;
                        }; //防止过界
                        //将新值设置为box1
                        obj.style[attr] = newValue + "px";//attr是变量 要用[]上传
                        //当元素移动到800px时 使其停止移动
                        if (newValue == target) {
                            //达到目标 关闭计时器
                              clearInterval(obj.timer);
                              //动画执行完毕 调用回调函数
                              callback && callback();
                                      } 
                    }, 30);
                }
        
                function getStyle(obj, name) {
                    if (window.getComputedStyle) {
                        return getComputedStyle(obj, null)[name];
                    } else {
                        return obj.currentStyle[name];
                    }
                }

                //定义一个函数 用来象一个元素添加指定的class属性值
        /* 
        参数：obj
          要添加的class属性的元素
          cn 要添加的class值
        */
        function addClass(obj,cn){
            if(!hasClass(obj, cn)){
                obj.className += " " +cn;
            }
           //点击按钮 会一直添加cn
        }
        //检查obj中是否含有cn

        /* 
        判断一个元素中是否含有指定的class属性值
        有返回true 没有则返回false
        */
        function hasClass(obj, cn){
            //判断obj中有没有cn class
            //创建一个正则表达式 来判断
            // var reg = /\bb2\b/;  写死了 没有操作性
            //创建一个构造函数保存
            var reg = new RegExp("\\b" +cn +"\\b");
            // alert(reg);
            return reg.test(obj.className);//没有返回值 就会是未定义
        }
        /* 
        删除一个元素中指定的class属性
        */

        function removeClass(obj, cn){
            //创建一个正则表达式
            var reg = new RegExp("\\b" +cn +"\\b");
            //删除class
            obj.className = obj.className.replace(reg, "");//用空串替换reg
        }
        /* 
        toggleClass可以用来切换一个类
        如果元素中具有该类，则删除
        如果元素中没有该类，则增加
        
        */

        function toggleClass(obj,cn){
            //判断obj中是否含有cn
            if(hasClass(obj, cn)){
                //有，删除
                removeClass(obj, cn);
            }else{
                addClass(obj, cn);
            }
        }