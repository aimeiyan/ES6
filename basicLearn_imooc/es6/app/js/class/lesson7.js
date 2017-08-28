//默认值
{
    function test(x,y="world"){  //默认值变量后面不能再有没有默认值的变量，即不能function test(x,y="world"，c)这样，除非写成“c=XXX”
        console.log('默认值',x,y);
    }

    test("hello");
    test("hello","kill");
}


//作用域，注意下面例子中x的取值
{
    let x="test";

    function test2(x,y=x){
        console.log(x,y);
    }

    test2("作用域","kill");  //输出kill、kill
    test2();   //输出undefined、undefined

    function test21(c,y = x){
        console.log("作用域",c,y);
    }

    test21("kill");
}

//rest参数
{
    function test3(...arg){  //不知道有多少个传参,"...arg"把离散的值变成数组
        console.log(...arg);
        for(let v of arg){
            console.log('rest',v);
        }
    }

    test3(1,2,3,4,'a');

}

//扩展运算符
{
       console.log(...[1,2,4])  //把数组转成离散的值;
       console.log("a",...[1,2,4])  //把数组转成离散的值;
}

//箭头函数，要根据自己的业务场景来用箭头函数，有些时候不适合用
{
    let arrow = v => v*2;
    console.log('arrow',arrow(3));

    let arrow2 = () => 5;
    console.log(arrow2);
}

//尾调用
{
    function tail(x){
        console.log('tail',x);
    }

    function fx(x){
        return tail(x);
    }

    fx(123);
}