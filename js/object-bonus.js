function filterNumbers(x) {
    var newArray = x.filter(n => typeof n === "number" && !isNaN(n));
    newArray.sort(function(a, b) {
        return a - b;
    });
    return newArray;
}

console.log(filterNumbers([1, true, "four", 3, 5, 2]));