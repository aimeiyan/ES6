{
    let arr=Array.of(3,4,7,9,11);  //生成一个数组
    console.log("arr=",arr);

    let empty=Array.of();
    console.log("empty=",empty);   //输出“[]”空数组
}

{   //将集合转换成真正的数组
    let p=document.querySelectorAll("p");   //此处的p是一个集合，虽然可以遍历、计算length，但不是一个真正的数组，不可以forEach；
    let pArr=Array.from(p);   //将p集合转成一个真正的数组pArr
    console.log(pArr);
    pArr.forEach(function(item){
        console.log(item.textContent);
    });

    console.log(Array.from([1,3,5],function(item){
        return item*2;
    }))
}

{
    //将数组中的值全部换成相同的元素
    console.log('fill-7',[1,'a',undefined].fill(7));
    console.log('fill,pos',['a','b','c','d'].fill(7,1,3));  //"1"是起始位置，"3"终止位置，此处指1到3之间的数全部替换，包括“1”这个位置的元素，不包括“3”这个位置的元素
}

{
    for(let index of ["1","c","ks"].keys()){
        console.log('keys',index);
    }

    for(let value of ["1","c","ks"].values()){
        console.log('values',value);
    }

    for(let [index,value] of ["1","c","ks"].entries()){
    console.log('entries',index,value);
    }
}

{
    console.log([1,2,3,4,5,6].find(function(item){return item>3}));  //查找第一个符合条件的元素
    console.log([1,2,3,4,5,6].findIndex(function(item){return item>3}));  //查找第一个符合条件的元素的索引
}

{
    //查找是否包含某个元素
    console.log('includes number',[1,2,NaN].includes(1)); //输出true
    console.log('includes NaN',[1,2,NaN].includes(NaN));  //输出true
}