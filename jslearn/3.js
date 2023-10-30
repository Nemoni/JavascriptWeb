// debugger;
var globalVar = "I'm global"; // GO property

function outerFunc() {
    var outerVar = 'I am outer'; // AO property
    
    function innerFunc() {
        var innerVar = 'I am inner'; // AO property
        console.log(innerVar); // I am inner
        console.log(outerVar); // I am outer
        console.log(globalVar); // I'm global
    }
    
    innerFunc();
}

outerFunc();

let arr = [1, 2, 3, 4, 5];

arr.reduceRight((pre, cur, index)=>{
    console.log(pre, cur, index);
    return pre + cur;
})
