{
    console.log(0b111110111);  //用“0b”或者“0B”表示二进制
    console.log(0o767);  //用“0o”或者“0O”表示二进制
}

{
    console.log("15",Number.isFinite(15));
    console.log("NaN",Number.isFinite(NaN));  //NaN是非数字标志的符号
    console.log("1/0",Number.isFinite("true"/0));
}

{
    //判断是否不是数字
    console.log("NaN",Number.isNaN(NaN));
    console.log("0",Number.isNaN(0));
}

{
    //判断是否是整数
    console.log("25",Number.isInteger(25));
    console.log("25.0",Number.isInteger(25.0));
    console.log("25.1",Number.isInteger(25.1));
}

{
   console.log(Number.MAX_SAFE_INTEGER);  //输出数值最大的上限
   console.log(Number.MIN_SAFE_INTEGER);  //输出数值最小的下限
   console.log(Number.isSafeInteger(10));  //判断数值是否在有效安全范围内
    console.log(Number.isSafeInteger("a"));  //返回false，因为是字符串
}

{
    //取小数的整数部分
    console.log("4.12",Math.trunc(4.12));
    console.log("4.86",Math.trunc(4.86));
}

{
    //判断数值是正数、负数，还是0
    console.log("-5",Math.sign(-5));
    console.log("5",Math.sign(5));
    console.log("0",Math.sign(0));
    console.log("50",Math.sign("50"));  //此处将字符串“50”通过Number对象转成了数字
    console.log("a",Math.sign("a"));  //此处将字符串“a”不能通过Number对象转成了数字，输出值是NaN
}

{
    //立方根
    console.log("-1",Math.cbrt(-1))
    console.log("8",Math.cbrt(8))
}

//还增加了三角函数、对数的方法