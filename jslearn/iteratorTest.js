const range = {
    from: 1,
    to: 5,
    // 实现可迭代协议
    [Symbol.iterator]() {
        // 返回迭代器对象
        return {
            current: this.from,
            last: this.to,
            // 实现迭代器协议
            next() {
                if (this.current <= this.last) {
                    return { value: this.current++, done: false };
                } else {
                    return { done: true };
                }
            }
        };
    }
};

// 使用 for...of 循环
for (let value of range) {
    console.log(value); // 打印 1 到 5
}
