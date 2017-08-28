{
    //声明
    let a1=Symbol();
    let a2=Symbol();
    console.log(a1===a2);

    let a3=Symbol.for('a3');
    let a4=Symbol.for('a3');
    console.log(a3===a4);
}

{
    let a1=Symbol.for('abc');
    let obj={
        [a1]:'123',
        'abc':345,
        'c':456
    };
    console.log('obj',obj);

    //用let of是取不到以symbol为key的值，下面只取到了非symbol为key值的值
    for(let [key,value] of Object.entries(obj)){
        console.log('let of',key,value);
    }

    //可以取到以symbol为key的值
    Object.getOwnPropertySymbols(obj).forEach(function(item){
       console.log(obj[item]);
    });

    //可以取到object中所有的key和key所对应的值，包括symbol为key值得值
    Reflect.ownKeys(obj).forEach(function(item){
       console.log('ownkeys',item,obj[item]);
    });

}