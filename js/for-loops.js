function showMultiplicationTable(x) {
    for (var multiple = 1; multiple <= 10; multiple++) {
        console.log(x + " x " + multiple + " = " + x * multiple);
    }
}
showMultiplicationTable(6);

for (var i = 1; i <= 10; i++){
    var n = Math.floor(Math.random() * 180) + 20;
    if (n % 2 === 0) {
        console.log(n + " is even")
    } else {
        console.log(n + " is odd")
    }
}