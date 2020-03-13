function addUp(num) {
    let total = 0;
    for (let i = 1; i <= num; i++) {
        total += i;
    }
    return total;
}

// Take an array and remove all strings
function filterArray(arr) {
let arr2 = [];
arr.forEach(function(item) {
    if (typeof item!=="string") {
        arr2.push(item)
    }
    });
    return arr2;
}

// I need to work on promises
let promise = new Promise( (resolve) => {
    let animal = "cat";
    setTimeout(() => {
        // rework this
        if(animal === "dog") {
            resolve("It's a dog!")
        }
        // explain better
        if(animal !== "dog") {
            reject("It's not a dog!")
        }
    //    WHy Timeout?
    }, 1000)
});

// This is a function to take in a note and return it's enharmonic equal
function getEquivalent(note) {
switch (note) {
    case "Ab":
        return "G#";
    case "A#":
        return "Bb";
    case "Bb":
        return "A#";
    case "C#":
        return "Db";
    case "Db":
        return "C#";
    case "D#":
        return "Eb";
    case "Eb":
        return "D#";
    case "F#":
        return "Gb";
    case "Gb":
        return "F#";
    case "G#":
        return "Ab";
    }
}

//Create the function that takes an array with objects and returns the sum of people's budgets.

function getBudgets(arr) {
let total = 0;
arr.forEach(function(person) {
    total += person.budget;
});
    return total;
}

// Create a function that takes a string and returns a string in which each character is repeated once.
function doubleChar(str) {
let double = "";
for (let i = 0; i < str.length; i++){
    double += str.charAt(i);
    double += str.charAt(i);
}
return double;
}

//Given a number n, write a function that returns PI to n decimal places.
function myPi(n) {
let pi = Math.PI.toString();
let reduced = "";
for (let i = 0; i < n; i++){
    reduced += pi.charAt(i)
}
return parseInt(reduced);
}

