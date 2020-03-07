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
    let animal = "cat"
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