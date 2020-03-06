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

let promise = new Promise( (resolve) => {
    let animal = "cat"
    setTimeout(() => {
        if(animal === "dog") {
            resolve("It's a dog!")
        }
        if(animal !== "dog") {
            /* need something here, you might also need to pass
            something else besides the resolve callback */
        }
    }, 1000)
})