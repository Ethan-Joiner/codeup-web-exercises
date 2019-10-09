"use strict";

console.log("Hello from external Javascript");

alert("Welcome to my Website!");

var color = prompt("What is your favorite color?");

alert("Great, " + color + " is my favorite color too!");


// Testing some requirements //
function pay() {
    var mermaidDays = parseInt(prompt("How many days did you rent 'The little Mermaid' for?"));
    console.log("Mermaid days: " + mermaidDays);

    while (isNaN(mermaidDays)){
       mermaidDays = parseInt(prompt("You must enter a number"));
       console.log("while loop mermaid :" + mermaidDays);
    }

    var brotherDays = parseInt(prompt("How many days did you rent 'Brother Bear' for?"));




    if (isNaN(brotherDays)) {
        parseInt(prompt("Brother bear: You must enter a number"));

    var herculesDays = parseInt(prompt("How many days did you rent 'Hercules' for?"));
    var cost = parseInt(prompt("How much do they cost a day?"));
    var totalCost = cost * herculesDays + (cost * mermaidDays) + (cost * brotherDays);

    } else {

        alert("Your total cost is $" + totalCost);
        console.log(typeof totalCost);
        return totalCost;
    }
}
console.log(pay());

// Number 3 Part 1 //
// function pay() {
//     var mermaidDays = parseInt(prompt("How many days did you rent 'The little Mermaid' for?"));
//     var brotherDays = parseInt(prompt("How many days did you rent 'Brother Bear' for?"));
//     var herculesDays = parseInt(prompt("How many days did you rent 'Hercules' for?"));
//     var cost = parseInt(prompt("How much do they cost a day?"));
//
//     var totalCost = cost * herculesDays + (cost * mermaidDays) + (cost * brotherDays);
//     alert("Your total cost is $" + totalCost);
//     console.log(typeof totalCost);
//     return totalCost;
// }
// console.log(pay());

// Number 3 Part 2//

function weeklyPay() {
    var googRate = parseInt(prompt("How much does Google pay an hour?"));
    var amazonRate = parseInt(prompt("How much does Amazon pay an hour?"));
    var fbRate = parseInt(prompt("How much does Facebook pay an hour?"));
    var googHours = parseInt(prompt("How many hours at Google?"));
    var amazonHours = parseInt(prompt("How many hours at Amazon?"));
    var fbHours = parseInt(prompt("How many hours at Facebook?"));
    var totalPay = googRate * googHours + amazonRate * amazonHours + fbRate * fbHours;
    alert("Your total payment for the week is $" + totalPay);
    console.log(typeof totalPay);
    // This log has to be used inside of the function due to setting variables within it//
    return totalPay;
}
console.log(weeklyPay());

// Number 3 Part 3 //

function canEnroll() {
    var notFull = confirm("If the class has room for you, click okay. Otherwise click cancel");
    var noConflict = confirm("If there is no scheduling conflict, click okay. Otherwise click cancel");
    if (notFull === true && noConflict === true) {
        alert("Congratulations on completing your enrollment!");
        return true;
    } else {
        alert("Unfortunately you cannot enroll at this time.");
        return false;
    }
}
console.log(canEnroll());

// Number 3 Part 4 //

function offer() {
    var itemsNumber = prompt("How many items did you buy?");
    var premium = confirm("Are you a premium member?");
    var valid = confirm("Is the date on the offer valid?");
    if ((itemsNumber > 2 || premium === true) && valid === true) {
        alert("Enjoy your discounted price!");
        return true
    } else {
        alert("That offer is not valid");
        return false
    }

    //return (items > 2 || isPremium === true) && notExpired === true;
}
console.log(offer());


  // Previous Attempt. The function was being run 3 times due to 3 logs

// function offers(items,isPremium,notExpired) {
//     var itemsNumber = prompt("How many items did you buy?");
//     var premium = confirm("Are you a premium member?");
//     var valid = confirm("Is the date on the offer valid?");
//     if ((itemsNumber > 2 || premium === true) && valid === true) {
//         alert("Enjoy your discounted price!")
//         return true
//     } else {
//         alert("That offer is not valid");
//         return false
//     }
//
//     //return (items > 2 || isPremium === true) && notExpired === true;
// }
// console.log(offer(3,false,true));
// console.log(offer(1,true,true));
// // console.log(offer(3,false,false));




