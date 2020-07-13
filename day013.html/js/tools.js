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