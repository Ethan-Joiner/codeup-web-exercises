function addUp(num) {
    let total = 0;
    for (let i = 1; i <= num; i++) {
        total += i;
    }
    return total;
}


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
