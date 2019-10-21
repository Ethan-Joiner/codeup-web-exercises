function filterNumbers(x) {
    var newArray = x.filter(n => typeof n === "number" && !isNaN(n));
    newArray.sort(function(a, b) {
        return a - b;
    });
    return newArray;
}

console.log(filterNumbers([1, true, "four", 3, 5, 2]));

function getOlder(x) {
    x.forEach(function(dog) {
        dog.age += 1
    });
    return x;
}

console.log(getOlder([
    {
        name: "Chompers",
        breed: "Pug",
        age: 7
    },
    {
        name: "Freddy",
        breed: "Lab",
        age: 4
    },
    {
        name: "Mr. Pig",
        breed: "Mastif",
        age: 10
    }
]));

