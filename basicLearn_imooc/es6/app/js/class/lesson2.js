//数组解构赋值
{
    let a, b,reset;
    [a,b] = [1,2];
    console.log(a,b);
}

{
    let a, b,reset;
    [a,b,...reset] = [1,2,3,4,5,6,7];
    console.log(a,b,reset);
}


//对象解构赋值
{
    let a,b;
    ({a,b} = {a:1,b:2});
    console.log(a,b);
}

//设置默认值
{
    let a, b, c,reset;
//    [a,b,c] = [1,2];  //c没有配对成功，为undefined
    [a,b,c=3] = [1,2];  //c为默认值3
    console.log(a,b,c);
}

//使用场景1
//结构赋值实现变量交换,不用设置中间变量存储了。
{
    let a= 1;
    let b=2;
    [a,b] = [b,a];
    console.log(a,b);
}

//使用场景2
{
    function f(){
        return [1,2];
    }
    let a,b;
    [a,b] = f();
    console.log(a,b);
}


//使用场景3
//选择自己所想要的值
{
    function f(){
        return [1,2,3,4,5,6];
    }
    let a,b;
    [a,,,b] = f();
    console.log(a,b);
}

//使用场景4
//只选择第一个值，其他的值以数组的形式返回
{
    function f(){
        return [1,2,3,4,5,6,7];
    }
    let a,b;
    [a,...b] = f();
    console.log(a,b);
}

//混合使用场景3、4
{
    function f(){
        return [1,2,3,4,5,6,7];
    }
    let a,b;
    [a, ,...b] = f();
    console.log(a,b);
}

//对象解构赋值
{
    let o={p:42,q:true};
    let {p,q}=o;
    console.log(p,q);
}

//默认值
{
    let {a=10,b=5} = {a:3};
    console.log(a,b);
}

//对象解构赋值场景
{
    let metaData = {
        title:"abc",
        test:[{
            title:"test",
            desc:"description"
        }]
    };

    let {title:esTitle,test:[{title:cnTitle}]}=metaData;
    console.log(esTitle,cnTitle);
}