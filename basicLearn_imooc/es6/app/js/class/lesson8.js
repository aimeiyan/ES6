//ES6对于对象object的简洁写法
{
    let o= 1;
    let p=2;

    let ES5={
        o:o,
        p:p
    };

    let ES6={
        o,
        p
    };

    console.log(ES5,ES6);


    let es5_method={
        hello:function(){
            console.log("hello");
        }
    };

    let es6_method={
        hello(){
            console.log('hello');
        }
    };

    console.log(es5_method.hello(),es6_method.hello());
}

//属性表达式
{
    let a="b";
    let es5_obj={
        a:'c'
    };
    let es6_obj={
        [a]:'c'
    };
    console.log(es5_obj,es6_obj);
}

//新增API
{
    //Object.is() 与 “===”的作用是一样的
    console.log('字符串',Object.is('abc','abc'),'abc'==='abc');
    console.log('数组',Object.is([],[]),[]===[]);
}

{
    //拷贝,是浅拷贝：引用类型，拷贝引用地址，而不是把所有的值拷贝，
    //只拷贝自身的属性，而不会拷贝继承的属性，不能拷贝这个对象中不可枚举的属性
    console.log('拷贝',Object.assign({a:'a'},{b:'b'}))
}

{
    let test={k:123,o:456};
    for(let [key,value] of Object.entries(test)){
        console.log([key,value]);
    }
}

{
    //扩展运算符

}