"use strict";

while(true) {
    var num = prompt("Give me an odd number between 1 and 50");
    if (num % 2 !==0 && num <=50 && num >= 1) {
        break;
    }
}
console.log("Skipping the number " + num);

for (var a = 1; a <=50; a += 2) {
    if (a === parseInt(num)){
        console.log("Skipping the number " + num);
        continue;
    }
    console.log(a)
}