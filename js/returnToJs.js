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