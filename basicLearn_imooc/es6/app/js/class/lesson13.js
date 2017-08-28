//Promise是异步编程的解决方案，作用就是用来解决异步操作问题的
//什么是异步？答：函数A执行完再执行B，实现方式：回调、事件触发、Promise、Generator，其中Promise是区别于回调和事件触发两种方式的。
//Promise更适合处理异步编程
//Promise通过.then的方式一步一步的加载要执行的函数
{
    //基本定义
    let ajax=function(callback){
        console.log("执行");
        setTimeout(function(){
            callback&&callback.call();
        },1000);
    };

    ajax(function(){
        console.log("timeout1");
    })

}

{
    let ajax=function(){
        console.log('执行2');
        return new Promise(function(resolve,reject){
            setTimeout(function(){
                resolve();
            },1000)
        })
    };

    ajax().then(function(){
       console.log('promise','timeout2');
    });
}

{
    let ajax=function(){
        console.log('执行3');
        return new Promise(function(resolve,reject){
            setTimeout(function(){
                resolve()
            },1000);
        })
    };

    ajax().then(function(){
        console.log('promise','timeout3');
        return new Promise(function(resolve,reject){
            setTimeout(function(){
                resolve()
            },2000);
        });
    }).then(function(){
        console.log('timeout3');
    })
}

{
    let ajax=function(num){
        console.log('执行4');
        return new Promise(function(resolve,reject){
            if(num>5){
                resolve()
            }else{
                throw new Error('出错了')
            }
        })
    };

    ajax(6).then(function(){
        console.log("log",6);
    }).catch(function(err){
        console.log('catch',err);
    });

    ajax(3).then(function(){
       console.log("log",3);
    }).catch(function(err){
        console.log('catch',err);
    })
}

{
    //所有图片都加载完再添加到页面,可以用Promise.all方法
    function loadImg(src){
        return new Promise(function(resolve,reject){
            let img=document.createElement('img');
            img.src=src;
            img.onload=function(){
                resolve(img);
            };

            img.onerror=function(err){
                reject(err);
            };
        })
    }

    function showImgs(imgs){
        imgs.forEach(function(img){
            document.body.appendChild(img);
        })
    }

    Promise.all([   //数组中每一个元素都是promise对象，promise把所有的元素合成一个promise对象，之后在调用showImgs函数
        loadImg('https://www.baidu.com/img/bd_logo1.png'),
        loadImg('https://shared-https.ydstatic.com/dict/v2016/result/logo.png'),
        loadImg('https://img.alicdn.com/tps/TB1Q5DVNpXXXXbjXVXXXXXXXXXX-185-100.png'),
    ]).then(showImgs);

}

{
    //图片有多个来源，只要有一个加载完就现在该图片，不管其他图片，也无所谓显示哪张图片
    function loadImg(src){
        return new Promise(function(resolve,reject){
            let img=document.createElement('img');
            img.src=src;
            img.onload=function(){
                resolve(img);
            };

            img.onerror=function(err){
                reject(err);
            };
        })
    }

    function showImgs(img){
        let p=document.createElement("p");
        p.appendChild(img);
        document.body.appendChild(p);
    }


    Promise.race([   //数组中每一个元素都是promise对象，promise把所有的元素合成一个promise对象，之后在调用showImgs函数
        loadImg('https://www.baidu.com/img/bd_logo1.png'),
        loadImg('https://shared-https.ydstatic.com/dict/v2016/result/logo.png'),
        loadImg('https://img.alicdn.com/tps/TB1Q5DVNpXXXXbjXVXXXXXXXXXX-185-100.png'),
    ]).then(showImgs);

}