function showMultiplicationTable(x) {
    for (var multiple = 1; multiple <= 10; multiple++) {
        console.log(x + " x " + multiple + " = " + x * multiple);
    }
}
showMultiplicationTable(6);

// for (var i = 1; i <= 10; i++){
//     var n = Math.floor(Math.random() * 180) + 20;
//     if (n % 2 === 0) {
//         console.log(n + " is even")
//     } else {
//         console.log(n + " is odd")
//     }
// }

for (var k = 1; k < 10; k++) {
    var str = "";
    for (var y = 1; y <= k; y++) {
        str += k;
    }
    console.log(str);
}

for (var num = 100; num >= 5; num -= 5) {
    console.log(num);
}