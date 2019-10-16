// While Loop

var x = 2;
while (x < 65537) {
    console.log(x);
    x = x * 2;
}

// Do while loop
var allCones = Math.floor(Math.random() * 50) + 50;


do {
    var customerCones = Math.floor(Math.random() * 5) + 1;
    if ((allCones - customerCones) > 0) {
        allCones -= customerCones;
        console.log(customerCones + " cones sold")
    } else if (allCones < customerCones && allCones !== 0) {
        console.log("Cannot sell you " + customerCones + " I only have " + allCones)
    } else if (allCones - customerCones === 0) {
        console.log("Yay! I sold them all!");
        allCones -= customerCones;
        break;
    }
} while (allCones > 0); {

}
