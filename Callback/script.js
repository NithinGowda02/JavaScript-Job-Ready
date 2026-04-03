//CALLBACK

function hello() {
    console.log("hello world");
}
setTimeout(hello, 3000);

function sum(a, b){
    console.log(a + b);
}

function calculator(a, b, sum){
    sum(a, b);
}

let cal = calculator(2, 3, sum);
console.log(cal)