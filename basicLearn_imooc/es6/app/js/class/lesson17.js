//export let A=123;
//
//export function test(){
//    console.log('test');
//}
//
//export class Hello{
//    test(){
//        console.log('class');
//    }
//}


//用此种方法导出，最好
let A=123;
let test=function(){
    console.log('test');
};

class Hello{
    test(){
        console.log('class');
    }
}

export default{
    A,
    test,
    Hello
}