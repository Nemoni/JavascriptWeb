// var a = 1;
// // var b = 3;
// function fn(a){
//     console.log(a);
//     var a = 2;
//     function a(){}
//     console.log(a);
//     var b = 4;
//     console.log(b);
// }
// fn(a);
// console.log(a);
// console.log(b);

// var a = 1;
// let b = 4;

// {
//     var a = 3;
//     let b = 5;
//     console.log(a);
//     console.log(b);
// }

// console.log(a);
// console.log(b);

// console.log(fn);
// function fn() {
//     return 2;
// }
// console.log(fn1);
// {
//     console.log(fn1);
//     function fn1() {
//     }
//     fn1 = 3;
//     console.log(fn1);
// }
// console.log(fn1);

// console.log(fn);
// fn = 3;
// function fn() {
//     return 2;
// }
// console.log(fn);

// // function fn() {
// //     return 4;
// // }
// console.log(fn);
// var a = 1;
// function fn1(){return 1;};
// {
//     console.log(fn1);
//     function fn1(){return 2;};
//     var a = 3;
// }
// console.log(a);
// console.log(fn1);

// console.log(a);
// var a = 1;

// var x = 8;
// function fn (x, y=function(){x=2;}){
//     var x = 3;
//     console.log(x);
//     y();
//     console.log(x);
// }

// fn(5);
// console.log(x);
// debugger;
// function Fn (){

// }

// let f = new Fn();

// console.log(f);

//let Function = new Function();
// Function的prototype
// Function的__proto__
// debugger;

function Fn() {} // 相当于let Fn = new Function(); 
// Fn是一个函数也是一个对象，所以有函数拥有的prototype和对象拥有的__proto__
// Fn的prototype指向一个空的Object对象
// Fn的__proto__指向Function的prototype

let fn = new Fn(); // fn不再是一个函数，而是一个对象，所以没有prototype
// fn的__proto__指向Fn的prototype

// console.log(fn instanceof Object.prototype);
console.log(Object.prototype.__proto__);
console.log(fn.__proto__.__proto__)
console.log(fn.__proto__.__proto__.__proto__)

// let obj = new Object(); // obj是一个对象不是函数，所以没有prototype
// obj的__proto__指向Object的prototype

function Vehicle() {}
Vehicle.prototype.wheels = 4;

const car = new Vehicle();
console.log(car.hasOwnProperty("wheels")); // 输出是什么？
