{
    let list=new Set();
    list.add(5);
    list.add(7);

    console.log('size',list.size);
}

{
    let arr=[1,2,3,4,5];
    let list=new Set(arr);
    console.log('size',list.size);
}

{   //相同的元素不会重复添加
    let list=new Set();
    list.add(1);
    list.add(2);
    list.add(1);

    console.log('list',list);


    //数组去重,注意数组内元素的数据类型要一致
    let arr2=[1,2,3,1,2];
    let list2=new Set(arr2);

    let arr3=[1,2,3,1,2,"2"];
    let list3=new Set(arr3);

    console.log("unique",list2);
    console.log("unique",list3);

}

{
    //Set的方法有“add”、“delete”、“clear”、“has”
    let arr=["add","delete","clear","has"];
    let list=new Set(arr);

    console.log("has",list.has("add"));
    console.log("delete",list.delete("add"),list);
    console.log("clear",list.clear(),list);
}

{
    //Set的遍历 let of
    let arr=["add","delete","clear","has"];
    let list=new Set(arr);

    for(let key of list.keys()){
        console.log('keys',key);
    }

    for(let value of list.values()){
        console.log("value",value);
    }

    for(let value of list){
        console.log("value",value);
    }

    for(let [key,value] of list.entries()){
        console.log("entries",key,value);
    }
}


//Set的遍历 forEach
{
    let arr=["add","delete","clear","has"];
    let list=new Set(arr);

    list.forEach(function(item){
        console.log("forEach 遍历",item);
    })
}


//WeakSet
//WeakSet的元素必须是对象，不能是其他类型，如数值、字符串、布尔值等，这也是和Set的不同之处。
//WeakSet没有size属性、没有clear方法，不支持遍历，支持“add”、“delete”、“has”方法，使用同Set。
//WeakSet中的对象都是弱引用，即它不会检测这个对象在其他地方是否被用过，这就意味着它不会跟垃圾回收机制挂钩上，
//即在WeakSet中添加一个对象，这个不是整个值拷贝过来，是地址的引用，而且WeakSet也不会检测，这个地址是否被垃圾回收站回收掉了。
{
    let weakList=new WeakSet();
    let arg={"a":"a"};
    weakList.add(arg);
    console.log('weakList',weakList);
}

{
    //map的key可以是任何数据类型
    let map=new Map();
    let arr=['123'];
    map.set(arr,456);  //map添加元素用set方法
    console.log('map',map,map.get(arr));
}

{
    let map=new Map([['a',123],['b',456]]);  //里面的数组要两个值，一个是key，一个是value
    console.log('map args',map);
    console.log('size',map.size);
    console.log('delete',map.delete("a"),map);
    console.log('delete',map.clear("a"),map);
}

{
    let weakmap=new WeakMap();
    let o={};
    weakmap.set(o,123);
    console.log(weakmap.get(o));
}

{
    //数据结构横向对比，增、查、改、删
    let map=new Map();
    let array=[];

    //增
    map.set('t',1);
    array.push({t:1});
    console.info("map-array",map,array);

    //查
    let map_exist=map.has('t');
    let array_exist=array.find(item => item.t);
    console.info("map-array",map_exist,array_exist);

    //改
    map.set('t',2);
    array.forEach(item=>item.t?item.t=2:"");
    console.info('map-array-modify',map,array);

    //删
    map.delete("t");
    let index=array.findIndex(item=>item.t);
    array.splice(index,1);
    console.info('map-array-empty',map,array);
}

{
    //set和array的对比
    let set=new Set();
    let set1=new Set();
    let item={"t":1};
    let array=[];

    //增

    set.add({"t":1});
    set1.add(item);
    array.push({"t":1});
    console.info("set-array",set,array);

    //查
    let set_exist=set.has({"t":1});
    let set_exist1=set1.has(item);
    let array_exist=array.find(item => item.t);
    console.info("set-array",set_exist,set_exist1,array_exist);

    //改
    set.forEach(item=>item.t?item.t=2:"");
    array.forEach(item=>item.t?item.t=2:"");
    console.info('set-array-modify',set,array);

    //删
    set.forEach(item=>item.t?set.delete(item):"");
    let index=array.findIndex(item=>item.t);
    array.splice(index,1);
    console.info('set-array-empty',set,array);
}

{
    //map、set、object对比，能使用map，不要使用数组，尤其是对于复杂的数据结构
    //如果对于数据要求比较高，也就是说保证数据的唯一性，考虑使用Set，放弃使用object和数组
    //即用数据结构的时候，优先考虑map、set，放弃object和array传统的数据结构
    let item={t:1};
    let map=new Map();
    let set=new Set();
    let obj={};

    //增
    map.set("t",1);
    set.add(item);
    obj["t"]=1;

    console.info('map-set-obj',map,set,obj);

    //查
    console.info({
        map_exist:map.has("t"),
        set_exist:set.has(item),  //set中item内容需要变量存储了
        obj_exist:"t" in obj
    });

    //改
    map.set('t',2);
    item.t=2;  //对于Set，只要给变存储变量的值即可
    obj['t']=2;
    console.info('map-set-obj-modify',map,set,obj);

    //删除
    map.delete("t");  //map的delete使用成本最低
    set.delete(item);
    delete obj['t'];
    console.info('map-set-obj-delete',map,set,obj);
}