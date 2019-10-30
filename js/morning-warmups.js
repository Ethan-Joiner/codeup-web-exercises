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

// function helloStranger(x = "stranger") {
//     return "Hello there, " + x + "."
// }
// var prompted = prompt("Input a name");
// alert(helloStranger());


// Write a function that accepts an array and returns the length of that array
function lengthOfArray(x) {
    return x.length;
}

console.log(lengthOfArray([1, 2, 3, 4]));
console.log(lengthOfArray([2, 1, 6, 3, 4]));

function quotient(x, y) {
    if (typeof x === "number" && typeof y === "number") {
        return (x / y);
    } else {
        return false;
    }
}

console.log(quotient(5, "1"));
console.log(quotient(5, 1));


// Function that accepts an array that has a length of 5 and console log each element
function fiveArray(x) {
    console.log(x[0]);
    console.log(x[1]);
    console.log(x[2]);
    console.log(x[3]);
    console.log(x[4]);
}

console.log(fiveArray([1, 2, 3, 4, 5]));

function isStringEight(x) {
    return (typeof x === "string" && x.length >= 8);
}

console.log(isStringEight(null));
console.log(isStringEight(NaN));
console.log(isStringEight("diphtheria"));
console.log(isStringEight(500000000));



function count(x) {
    for (i = 1; i <= x; i++) {
        console.log(i)
    }
}
count(20);

function roundedDown(x) {
    if (typeof parseFloat(x) === "number" && !isNaN(x)) {
        return Math.floor(x);
    } else {
        return false;
    }
}

console.log(roundedDown(3.14));


function createPersonObject(x, y) {
    var personObject = {
        name: x,
        age: y
    };
    return personObject
}

console.log(createPersonObject("ethan", 29));

function fizzbuzz() {
    for (var i = 1; i <= 100; i++) {
        if (i % 15 === 0) {
            console.log("FizzBuzz")
        } else if (i % 3 === 0) {
            console.log("Fizz")
        } else if (i % 5 ===0) {
            console.log("Buzz")
        } else {
            console.log(i)
        }
    }
}

fizzbuzz();

function return5(x) {
    if (x === "five") {
        return 5;
    }
}

console.log(return5(true));
console.log(return5(5));
console.log(return5("five"));

var shoppingCarts = [
    {
        apples: 8,
        bananas: 2,
        oranges: 4,
        grapes: 24
    }, {
        apples: 3,
        bananas: 6,
        oranges: 8,
        grapes: 12
    } , {
        apples: 0,
        bananas: 12,
        oranges: 0,
        grapes: 0
    } , {
        apples: 4,
        bananas: 0,
        oranges: 12,
        grapes: 10
    }
];
 var mostOranges = function(carts) {
     var mostCart = carts[0];
     carts.forEach(function(cart) {
         if (cart.oranges > mostCart.oranges) {
             mostCart = cart;
         }
     });
         return mostCart
 };
console.log(mostOranges(shoppingCarts));



var hamsters = [
    {
        name: "Hamtaro",
        heightInMM: 86,
        fur: ['orange', 'white'],
        gender: "male",
        dateOfBirth: "August 6"
    } , {
        name: "Bijou",
        heightInMM: 75,
        fur: ['white'],
        gender: "female",
        dateOfBirth: "July 10"
    } , {
        name: "Oxnard",
        heightInMM: 100,
        fur: ['grey', 'white'],
        gender: "male",
        dateOfBirth: "May 3"
    } , {
        name: "Boss",
        heightInMM: 120,
        fur: ['brown', 'white'],
        gender: "male",
        dateOfBirth: "Spetember 21"
    } , {
        name: "Snoozer",
        heightInMM: 85,
        fur: ['brown', 'white', "pink"],
        gender: "male",
        dateOfBirth: "January 14"
    }
];

function hamsterSort(x) {
   return x.sort((a,b) => a.heightInMM - b.heightInMM)
}

console.log(hamsterSort());




