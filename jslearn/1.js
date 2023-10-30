const person = {
    name: 'Tom',
    age: 1,
    sayHi(str) {
        console.log('Hi ' + this.name + ' ' + str)
    },
    [Symbol.toPrimitive](hint) {
        console.log(hint)
        return hint === 'string' ? this.name : this.age
    },
    valueOf() {
        return this.age + 1
    },
    toString() {
        return this.age + 2
    }
}

console.log(person)
console.dir(person)
console.dir(Object)
console.log(Number(person))

/* Boolean五种转换情况是false，其它都是true */
console.log(`0: ${Boolean(0)}`)
console.log(`'': ${Boolean('')}`)
console.log(`NaN: ${Boolean(NaN)}`)
console.log(`null: ${Boolean(null)}`)
console.log(`undefined: ${Boolean(undefined)}`)
/* 空数组和空对象也是true */
console.log(`[]: ${Boolean([])}`)
console.log(`{}: ${Boolean({})}`)

console.log(null === null)
console.log(undefined === undefined)
console.log(null === undefined)
console.log(null == undefined)
console.log(null == false)
console.log(undefined == false)

console.log(2 == true)
console.log(NaN == NaN)
console.log(NaN != NaN)
console.log('----')
console.log(Object.is(NaN, NaN))