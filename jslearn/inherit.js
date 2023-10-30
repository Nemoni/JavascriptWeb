let o1 = {
    a: 1,
    b: 'hello',
}

let o2 = {
    c: 3,
    __proto__: o1,
}

console.log(o2.__proto__)
console.log(o1.x = 'world')
console.log(o2.__proto__)

let of1 = {
    name: 'of1',
    sayHi(){
        console.log('Hi ' + this.name)
    }
}
of1.sayHi()

let of2 = {
    name: 'of2',
    __proto__: of1,
}

of2.sayHi() // this指向of2，而不是其原型对象of1

function Box(name) {
    this.name = name
}

console.log(Box.prototype)

Box.prototype.getName = function () {
    return this.name
}

console.log(Box.prototype)

let boxes = [new Box('box1'), new Box('box2'), new Box('box3')]
console.log(boxes[1].getName())

let obj = { a: 1 }
console.log(Object.getPrototypeOf(obj))
console.log(obj.__proto__)


let arrowFunc = () => {
    console.log('arrow function')
}

console.log(arrowFunc.prototype)

function Person(){
    let a = 1;
}

console.log(Person.prototype.constructor)
console.log(Person.prototype)

let a = 1;
console.log(a.__proto__)