function numberType() {
    // Javascript是动态类型，也就是类型定义了也可以改变
    let message = "hello"; // string
    message = 123456; // number
    console.log(message);
    // number(Infinity, -Infinity, NaN)
    let n = 123;
    n = 12.345;
    console.log(n);
    console.log(3.4e6); // 3.4 * 1000000
    console.log(120_000_000); // 120000000 语法糖
    // Infinity
    console.log(1 / 0); // Infinity
    console.log(Infinity - Infinity); // NaN
    console.log(-Infinity);
    // 二进制、八进制、十六进制
    console.log(0b1100);
    console.log(0o11);
    console.log(0xff);
    // 转字符串
    console.log(String(45));
    console.log(String(Infinity));
    console.log(String(NaN));
    let num = 123;
    console.log(num.toString());
    console.log(num.toString(2)); // 二进制
    console.log(122..toString()); // 将数字转成字符串
    console.log((32).toString()); // 与上面效果相同
    console.log(Infinity.toString()); // Infinity
    // 舍入
    console.log(Math.floor(3.1)); // 3 向下舍入
    console.log(Math.ceil(3.1)); // 4 向上舍入
    console.log(Math.round(3.1)); // 3 四舍五入
    console.log(Math.trunc(3.1)); // 3 去除小数部分
    num = 12.34;
    console.log(num.toFixed(2)); // 12.34 保留小数点后两位, 返回字符串，四舍五入
    console.log(+num.toFixed(1) + 3); // 15.3 +号将字符串转成数字
    console.log(Number(num.toFixed(1)) + 3); // 15.3 Number将字符串转成数字
    // 不精确的计算
    console.log(0.1 + 0.2); // 0.30000000000000004
    console.log(1.3.toFixed(20)); // 1.30000000000000004441
    console.log(9999999999999999); // 10000000000000000
    console.log((0.1 + 0.2).toFixed(2)); // 0.30 使用toFixed()方法进行四舍五入，解决精度问题
    console.log(Number.EPSILON);
    console.log(6.35.toFixed(1)); // 6.3 应该四舍五入，但该值内部是6.34999999999999964473，所以四舍五入后为6.3
    // NaN
    console.log("not a number" / 2); // NaN
    console.log(NaN === NaN); // false NaN和任何值都不相等，包括自己
    console.log(isNaN("not a number")); // true
    console.log(isNaN(NaN)); // true
    console.log(isNaN(123)); // false
    console.log(isNaN(Infinity)); // false
    console.log(Number(NaN) + 1); // NaN
    console.log(NaN**0); // 1 NaN的0次方为1
    console.log(Boolean(NaN)); // false
    console.log(isNaN("hello world")); // true isNaN() 函数会尝试将传入的参数转化为数字。如果转化失败，则返回 true，否则返回 false。
    console.log(Number.isNaN("hello world"));  // false Number.isNaN() 则进行严格的检查，只有当参数真的是 NaN 时才会返回 true
    console.log(isNaN('hello')); // true
    console.log(Number.isNaN('hello')); // false
    console.log(NaN.toString(2)); // NaN
    console.log(0.1);
    console.log(0.2);
    console.log(3.1+3.2);
    console.log(Number.EPSILON);
    console.log(1 + +'5'); // 6 +号将字符串转成数字
    console.log(1.01.toString(2));
    // BigInt
    console.log(typeof 1n); // bigint
    console.log(BigInt(123)); // 123n
    console.log(345n + 123n); // 468n
    // isNaN isFinite
    console.log(isNaN(NaN)); // true
    console.log(isNaN("str")); // true
    console.log(isFinite("15")); // true
    console.log(isFinite("str")); // false
    console.log(isFinite(Infinity)); // false
    // Object.is 除以下两种情况外，与===完全相同
    console.log(Object.is(NaN, NaN)); // true
    console.log(NaN === NaN); // false
    console.log(Object.is(0, -0)); // false
    console.log(0 === -0); // true
    // 类型转换 Number()、+、parseInt()、parseFloat()
    console.log(Number("123")); // 123
    console.log(Number("123z")); // NaN
    console.log(Number(true)); // 1
    console.log(+"346"); // 346
    console.log(+"323x"); // NaN
    // Number()和+的转换严格
    console.log(parseInt("100px")); // 100
    console.log(parseFloat("12.5em")); // 12.5 可以读取数字直到遇到不能转换为数字的字符为止，然后返回已经转换的部分
    console.log(parseInt("a123")); // NaN 如果第一个字符不能被转换成数字，parseInt会返回NaN
    console.log(parseInt("0xff", 16)); // 255 可以指定以几进制进行转换
}
