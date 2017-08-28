//decorator修饰器是一个函数，修改行为，修改类的行为，只在类的范畴内有作用
//需要安装 babel-plugin-transform-decorators-legacy 插件
//需要修改.babelrc文件，添加： "plugins":["transform-decorators-legacy"]属性

{

    //定义修饰器（一个函数）
    let readonly=function(target,name,descriptor){
        descriptor.writable=false;
        return descriptor;
    };

    class Test{
        @readonly   //修饰器，把time方法变成只读，改变了类的修改行为
        time(){
            return '2017-03-11';
        }
    }

    let test=new Test();

//    test.time=function(){   //输出会报错，因为类的行为是只读，不能修改
//        console.log('reset time');
//    };

    console.log(test.time());

}

{
    let typename=function(target,name,descriptor){
        target.myname='hello';  //target指的是类Test，为Test定义了一个静态属性
    };

    @typename   //此处修饰器的作用貌似为Test类增加了一个属性“myname”
    class Test{

    }

    console.log('类修饰符',Test.myname);
}


//上面的修饰器都是自己写，其实有一个第三方的修饰器库：core-decorators;npm install core-decorators --save-dev
//或者引用其js文件，直接import引入，写@readonly就可以用了


{
    let log=(type)=>{
        return function(target,name,descriptor){
            let src_method=descriptor.value;
            descriptor.value= (...arg)=>{
                src_method.apply(target,arg);
                console.info(`log ${type}`);
            }
        }
    };

    class AD{
        @log('show')
        show(){
            console.info('ad is show');
        }

        @log('click')
        click(){
            console.info('ad is click');
        }
    };

    let ad=new AD();
    ad.show();
    ad.click();
}