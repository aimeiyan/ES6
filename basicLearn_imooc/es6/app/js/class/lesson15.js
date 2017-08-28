//Generator作用：一种异步编程的解决方案，相比于Promise更高级一些

{
    //generator基本的定义方式
    let tell=function* (){  //一个generator函数，与普通函数区别是多了一个“*”
        yield 'a';
        yield 'b';
        return 'c';
    };

    let k=tell();
    console.log(k.next());  //调用第一个next执行第一个yield或者return
    console.log(k.next());  //调用第二个next执行第二个yield或者return
    console.log(k.next());  //调用第三个next执行第三个yield或者return
    console.log(k.next());  //调用第四个next执行第四个yield或者return
                            //有异步操作的过程

}

{   //用generator为obj实现iterator接口
    let obj={};
    obj[Symbol.iterator]=function* (){
        yield 1;
        yield 2;
        yield 3;
    };

    for (let value of obj){
        console.log('value',value);
    }
}

{
//    状态机
    let state=function *(){
        while(1){
            yield 'A',
            yield 'B',
            yield 'c'
        }
    };

    let status=state();
    console.log(status.next());
    console.log(status.next());
    console.log(status.next());
    console.log(status.next());
    console.log(status.next());
    console.log(status.next());
    console.log(status.next());
}

//尽量不要把数据存储于全局变量上，这样会影响性能
{
    let draw=function(count){
        console.info(`剩余${count}次`)
    };

    let residue=function*(count){
        while(count>0){
            count--;
            yield draw(count);
        }
    }

    let star=residue(5);
    let btn=document.createElement("button");
    btn.id="star";
    btn.textContent='抽奖';
    document.body.appendChild(btn);
    document.getElementById('star').addEventListener('click',function(){
        star.next();
    },false)

}

{
    //前端定时取得服务器状态的变化，方法：长轮询、websocket、generator

    //长轮询
    let ajax=function* (){
        yield new Promise(function(resolve,reject){
            setTimeout(function(){
//                resolve({code:1});  //返回“1”就一直轮询
                resolve({code:0});  //返回“0”只执行一次
            },200)
        })
    }

    let pull=function(){
        let generator=ajax();
        let step=generator.next();
        step.value.then(function(d){
            if(d.code!=0){
                setTimeout(function(){
                    console.info('wait');
                    pull();
                },1000)
            }else{
                console.info(d);
            }
        })
    };

    pull();

}