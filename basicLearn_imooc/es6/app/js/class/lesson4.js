
// Unicode表示方法
{
    console.log('a',`\u0061`);

    //当编码大于0xFFFF,就会按多个字符处理，这里的20BB7大于0xFFFF
    console.log('s',`\u20BB7`);
    console.log('s',`\u{20BB7}`);

    let s='𠮷';
}


{
    let s='𠮷';
    console.log("length", s.length);
    console.log("0", s.charAt(0));
    console.log("1", s.charAt(1));
    console.log("at0", s.charCodeAt(0));  //ES5的输出码值
    console.log("at1", s.charCodeAt(1));  //ES5的输出码值


    let s1="𠮷a";
    console.log("length",s1.length);
    console.log("code0", s1.codePointAt(0));
    console.log("code0", s1.codePointAt(0).toString(16));
    console.log("code1",s1.codePointAt(1));
    console.log("code2",s1.codePointAt(2));
}

{
    console.log(String.fromCharCode("0x20bb7"));  //ES5无法处理大于0xFFFF的unicode字符
    console.log(String.fromCodePoint("0x20bb7"));  //ES6可以处理大于0xFFFF的unicode字符
}

{
    let str=`\u{20bb7}abc`;
    for(let i=0;i<str.length;i++){
        console.log('es5',str[i]);
    }

    for(let code of str){
        console.log('es6---',code);
    }
}


{
    let str="string";

    //检测字符串是否包含“r”字符
    console.log("includes",str.includes("r"));
    console.log("includes",str.includes("c"));

    //判断字符串是否以“str”开始的
    console.log("start",str.startsWith('str'));

    //判断字符串是否以“g”结束的
    console.log("end",str.endsWith('g'));
}


{
    //字符串复制功能
    let str="abc";
    console.log(str.repeat(2));
}

{
    //模板字符串
    let name="list";
    let info="hello world";
    let m=`i am ${name},${info}`;
    console.log(m);
}


{
    //向前补白
    console.log('1'.padStart(2,"0"));
    console.log('1'.padEnd(2,"0"));
}

{
    //标签模板,处理多语言转换
    let user={
        name:'list',
        info:'hello world'
    };

    console.log(abc`i am ${user.name},${user.info}`);
    function abc(s,v1,v2){
        console.log(s,v1,v2);
        return s+v1+v2;
    }
}

{
    console.log(String.raw`Hi\n${1+2}`);  //"\n"换行符未起作用，进行了转义
    console.log(`Hi\n${1+2}`);  //"\n"换行符起作用，未进行了转义
}