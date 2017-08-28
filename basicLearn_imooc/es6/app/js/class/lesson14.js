//不同的数据结构，通过for...of..这种统一的形式，来达到读取不同数据结构的一个目标，但是背后的
//iterator接口是不一样的
{
    let arr=['hello','world'];
    let map=arr[Symbol.iterator]();  //数据可以直接调用iterator这个接口，这个接口数组内部已经实现，"()"表示这个方法的执行
    console.log(map.next());
    console.log(map.next());
    console.log(map.next());
}

{
    //object没有实现iterator接口，需要自己实现
    let obj={
        "start":[1,3,2],
        "end":[7,9,8],
        [Symbol.iterator](){
            let self=this;
            let index=0;
            let arr=self.start.concat(self.end);
            let len=arr.length;
            return {
                next(){
                    if(index<len){
                        return {
                            value:arr[index++],
                            done:false
                        }
                    }else{
                        return{
                            value:arr[index++],
                            done:true
                        }
                    }
                }
            }
        }
    };

    for(let key of obj){
        console.log(key);
    }

}

{
    let arr=['hello','world'];
    for(let value of arr){
        console.log(value);
    }
}