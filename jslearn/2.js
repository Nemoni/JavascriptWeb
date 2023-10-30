// debugger;
// console.log(x);
if (!('x' in window)){
    // var x = 10;
    console.log(test);
    function test(){
        // var x = 10;
        console.log(this);
    }
    // console.log(this);
    test();
}
// console.log(x);
console.log(test1);
function test1(){
    console.log('test1');
}

console.log(a);
var a = 10;
console.log(this);
{
    console.log(this);
}

let classa = {a: 10, sayhi: function(){console.log(this)}};
classa.sayhi();