function stringType() {
    // 引号
    let str1 = 'hello world';
    let str2 = "hello world"; // 单引号和双引号没有区别
    let str3 = `hello world`;
    console.log(str1, str2, str3);
    let name = 'zhangsan';
    console.log(`hello ${name}`); // 反引号可以使用${}插入变量
    console.log(`good
morning`); // 反引号可以换行
    // 特殊字符
    console.log('\u00A9'); // © UTF-16 编码
    console.log('\u{20331}'); //  𠌱 UTF-32 编码
    console.log('\u{1F60D}'); // 😍
    // 长度
    console.log('Hi\n'.length); // 3
    // 访问字符
    let str = 'Hello';
    console.log(str[0]); // H
    console.log('Hello'.charAt(1)); // e
    console.log(str[100]); // undefined 越界返回undefined
    console.log(str.charAt(100)) // '' 越界返回空字符串
    // 遍历
    for(let val of 'morning'){
        console.log(val);
    }
    // 不可变
    str = 'Hi';
    str[0] = 'h';
    console.log(str[0]); // H
    // 改变大小写
    console.log('Interface'.toUpperCase()); // INTERFACE
    console.log('Interface'.toLowerCase()); // interface
    // 查找子字符串
    // indexOf/lastIndexOf
    str = 'We are the world the people';
    console.log(str.indexOf('the')); // 7 返回第一次出现的位置
    console.log(str.lastIndexOf('the')); // 18 返回最后一次出现的位置
    console.log(str.indexOf('the', 10)); // 18 从第10个位置开始查找
    console.log(str.lastIndexOf('the', 10)); // 7 从第10个位置开始查找
    // includes
    console.log(str.includes('the')); // true
    console.log(str.includes('the', 10)); // true
    // startsWith/endsWith
    console.log(str.startsWith('We')); // true
    console.log(str.endsWith('people')); // true
    // 获取子字符串
    str = 'Hello world';
    console.log(str.slice(1, 3)); // el
    console.log(str.slice(-3, -1)); // rl
    console.log(str.substring(1, 3)); // el
    console.log(str.substr(1, 3)); // ell 3表示长度
    // 编码 UTF-16 一个字符16位，两个字节，长度为1， 一些特殊字符占四个字节，长度为2，代理对
    console.log(str.codePointAt(1)); // 101
    console.log(String.fromCodePoint(101)); // e
    console.log('\u0065'); // e 16进制
    console.log('x'.length);
    console.log('𝒳'.length); 
    // 变音符号
    console.log('A\u0307\u0323'); // A加上上点和下点
    // 代理对
    const symbol = "𝌆";
    console.log(symbol.codePointAt(0).toString(16)); // 119558
    console.log(symbol);
    console.log(symbol.length); // 2
    console.log(symbol.charAt(0)); // 乱码
    console.log(symbol.charAt(1)); // 乱码
    console.log(symbol.charCodeAt(0).toString(16)); // 55348
    console.log(symbol.charCodeAt(1).toString(16)); // 56606
    // padEnd
    console.log('hello Tom'.padEnd(15, '.'));
    str = new String('hello');
    console.log(str);

}
