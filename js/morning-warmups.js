function sumOf(x, y) {
    return x + y;
}
console.log(sumOf(2, 2));

function triangleArea(a, b, c){
    var half = (a+b+c)/2;
    var area = Math.sqrt(half * (half-a) * (half-b) * (half-c));
    return area;
}
console.log(triangleArea(5, 6, 7));

function sayHi() {
    return "Hi"
}
console.log(sayHi());

function sayHelloName(name) {
    return "Hello, " + name + "."
}
console.log(sayHelloName());

function firstElement(arr) {
    return arr[0];
}
console.log(firstElement([1,2,3,4]));

function eqtriangleArea(x) {
    return ((Math.sqrt(3) / 4) * (x * x))
}
console.log(eqtriangleArea(2));

function concatenate(x, y, z) {
    return x + y + z;
}
console.log(concatenate("test ", "test ", "test"));

function upperCase(x) {
    return x.toUpperCase();
}
console.log(upperCase("dog"));

function circleArea(x) {
    return Math.PI * ((x / 2) * (x / 2));
}
console.log(circleArea(3));

function circle(x) {
    return (Math.PI / 4) * (x * x);
}
console.log(circle(3));

function quadPerimeter(a,b,c,d) {
    return (a + b + c + d);
}
console.log(quadPerimeter(1,2,3,4));

function positiveEven(x) {
    return x > 0 && x % 2 === 0;
}
console.log(positiveEven(2));
console.log(positiveEven(3));
console.log(positiveEven(-2));

function overFive() {
    var number = parseInt(prompt("What is your favorite number?"));
    return number > 5;
}

console.log(overFive());

function helloStranger(x = "stranger") {
    return "Hello there, " + x + "."
}
var prompted = prompt("Input a name")
alert(helloStranger());
