//import 'babel-polyfill';
//import './class/lesson17';

import {A,test,Hello} from './class/lesson17';

console.log(A,test,Hello);

function test(){
    let a=1;
//    let a=2;
    for(let i=1;i<3;i++){
        console.log("i="+i);
    }
    console.log("a="+a);
//    console.log("i="+i);  //not defined
}

//test();

function last(){
    const PI=3.14;
//    PI=5;  //const声明为数值类型，不可再修改

    const k={
        a:1
    };
    k.b=2; //const声明为引用类型，是指针，可修改
    console.log(PI,k);
}

//last();

//class Test{
//    constructor() {
//        this.a = 'hello world';
//    }
//}
//
//let test = new Test();
//document.body.innerHTML = test.a;