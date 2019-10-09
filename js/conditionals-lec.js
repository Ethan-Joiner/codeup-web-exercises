"use strict";

console.log("hello from conditionals lec.js!");

// ================ REAL WORLD SCENARIO ================
// If a user is an admin,show a specific navbar 
// If weather is rainy, show rain icon
// If number of lives is 0, game is over


// ================ IF STATEMENT SYNTAX ================

// if(condition){
    // code here runs if condition evaluates to true
// }
    

// ================ IF STATEMENT EXAMPLES ================
//Together: Show a specific navbar if user is admin

//if (isAdmin) {
    //show a specific navbar
//}

//Together: Send a 20% off coupon if its users birthday

//if(isBirthday) {
    //send a 20% coupon
//}
//Together: Write an if statement that alerts "It's raining" if isRainy is true

// var isRaining = false;
//
// if(isRaining) {
//     alert("It's raining");
// }
//Together: Write an if statement that alerts the user whether or not they have enough money to buy a new item. Assume there are no hidden fees or taxes.

// var itemCost = 100;
// var currentBalance = 200;
//
// if (itemCost < currentBalance) {
//     alert("You have enough");
// }

//TODO: Write an if statement that alerts "Sorry, game over" if numberOfLives is 0
// function hasEnoughLives(lives) {
//     if (lives === 0) {
//         alert("Sorry, game over.");
//     }
// }

// console.log(hasEnoughLives(0));
//TODO: Write an if statement that alerts "It's snowing!" if weather is equal to "snowing"
// function isItSnowing(weather) {
//     if (weather === "snowing") {
//         alert("It's snowing!");
//     }
// }

// console.log(isItSnowing("snowing"));
//TODO: Write an if statement that alerts true if numberInput is greater than but not equal to 10
// function isGreaterThan(x) {
//     if (x > 10) {
//         alert("true");
//     }
// }
// console.log(isGreaterThan(11));


//TODO: EXTRA BONUS - Refactor each of the previous statements as functions.





// =============== IF / ELSE SYNTAX ================

// if(condition){
//     // code here runs if condition evaluates to true
// } else {
//     // code here runs if condition evaluates to false
// }
    
    

// =============== IF / ELSE STATEMENT EXAMPLES ================
//Together: Show a specific navbar if user is admin, else show a different navbar

// var isAdmin = false;
//
// if (isAdmin) {
//     alert("User is admin")
// } else {
//     alert("Regular user")
// }


//Together: Write an if statement that alerts "It's raining" if isRainy is true, else return "have a nice day!"

// var isRainy = true;
//
// if (isRainy) {
//     alert("It's raining");
// } else {
//     alert("Nope welcome to Texas");
// }


//TODO: Write an if statement that alerts "Sorry, game over" if numberOfLives is 0, else alert "Next Level!"
// function gameOver(numberOfLives) {
//     if (numberOfLives === 0) {
//         alert("Sorry, game over")
//     } else {
//         alert("Next level!")
//     }
//     return numberOfLives;
// }
// console.log(gameOver(1));
//TODO: Write an if statement that alerts "It's snowing!" if weather is equal to "snowing", else alert "Check back later for more details!"
// function isSnowing(x) {
//     if (x === true) {
//         alert("Its Snowing");
//     } else {
//         alert("Check back later for more details");
//     }
// }

// console.log(isSnowing(true));
//TODO: Write an if statement that alerts true if numberInput is greater than 10, else alert "the number is less than 10"
// function greaterThan(numberInput) {
//     if (numberInput > 10) {
//         alert("true");
//         return true;
//     } else {
//         alert("the number is less than 10");
//         return false;
//     }
// }
//
// console.log(greaterThan(8));
//TODO: Refactor todo#1 as a function named checkIfGameIsOver, that accepts numberOfLives and returns "Sorry, game over" if numberOfLives is 0, else return "Next Level!. 
// function checkIfGameIsOver(numberOfLives) {
//     if (numberOfLives ===0) {
//         alert("Sorry, game over");
//         return "sorry, game over";
//     } else {
//         alert("Next Level!");
//         return false;
//     }
// }
//
// console.log(checkIfGameIsOver(0));

//TODO: EXTRA BONUS - Refactor todo#2 from above as a function.

    
    
// SHOULD WE DELETE STUFF EXAMPLE

// var weShouldDeleteStuff = confirm('Are you sure you want to delete everything?');
//
// console.log("The value of the confirm is: " + weShouldDeleteStuff);
//
// if (weShouldDeleteStuff) {
//     // delete all the things...
//     alert("We are deleting everything...");
// } else {
//     alert("Operation Canceled!");
// }


//TODO: Write a confirm asking the user if they are 13 years of age or older. If they are, alert "You may proceed", if they are not, alert "Sorry, you are not able to proceed"
// function isOldEnough() {
//     var age = confirm("Are you at least 13 years of age?")
//     if (age) {
//         alert("You may proceed");
//         return age
//     } else {
//         alert("Sorry, you are not able to procss");
//         return age
//     }
// }
// console.log(isOldEnough());
// // ================ IF / ELSE IF / ELSE STATEMENT SYNTAX ===============
// if(condition1){
//     // code here runs if condition evaluates to true
// }else if (condition2){
//     // code here runs if condition1 is false *and* condition2 evaluates to true
// }else {
//     // code here gets executed if condition1 nor condition2 evaluate to true
// }

    

// =============== IF / ELSE IF/ELSE STATEMENT EXAMPLES ================
//Together: Write an if/else if/else statement that alerts "It's snowing!" if weather is equal to "snowing", alerts "It's raining" if weather is equal to "raining", alerts "have a nice day" for all other cases
// function howsTheWeather(weather) {
//
//     if (weather === "snowing") {
//         alert("It's snowing");
//         return "It's snowing";
//     } else if (weather === "raining") {
//         alert("It's raining");
//         return "It's raining";
//     } else if (weather === "sunny") {
//         alert("It's sunny");
//         return "It's sunny";
//     } else {
//         alert("Have a nice day");
//         return "Have a nice day";
//     }
// }
// console.log(howsTheWeather("raining"));

//Together: refactor the above statement as a function

// Together: PIZZA PREFERENCE EXAMPLE 

// var pizzaPreference = prompt("What kind of pizza do you like?");
// console.log("User pizza input: " + pizzaPreference);
//
// if (pizzaPreference === "pineapple and hot sauce") {
//     alert("What a coincidence, that's my favorite!");
// } else if (pizzaPreference === "cheese") {
//     alert("Just plain cheese? Okay...");
// }  else if (pizzaPreference === "ham"){
//     alert("Ham is easy to spell and awesome!");
// } else {
//     alert(pizzaPreference + " isn't my favorite, but let's order some!");
// }




//TODO: Write a function that accepts a string that is a traffic light color as an input. When this function is called, it should return a message informing the user what to do when approaching that color light at an intersection.
function whatToDo(color) {
    if (color === "red") {
        return "Stop";
    } else if (color === "yellow") {
        return "Slow down";
    } else if (color === "green") {
        return "Keep going";
    } else {
        return "Call the cops";
    }
}
console.log(whatToDo("red"));
console.log(whatToDo("yellow"));





// ================ NESTED STATEMENTS ===============
//Together: If user is under 15, they are not eligible for a learners permit, else they are. If they are eligible, check age. If they are 15 they are eligible for a learners permit, if they are 16 or older and have a permit, they are eligible for license, if they are 16 or older and do not have a permit, they are not eligble for a license. 

// var userAge = 16;
// var hasPermit = true;
//
// if(userAge < 15) {
//     alert("Sorry you're not eligible for a permit");
// } else {
//     if (userAge === 15) {
//         alert("You're old enough for a permit");
//     } else if (userAge >= 16 && hasPermit) {
//         alert("You're eligible for a license");
//     } else if (userAge >= 16 && !hasPermit) {
//         alert("You are of age but lack the permit");
//     }
// }





// ================ TERNARY STATEMENT ================

//Together: Regular way

// var message;
// var success = true;
//
// if (success) {
//     message = "Operation was successful.";
// } else {
//     message = "Oops, something went wrong.";
// }
// console.log(message);


// var success = true;
// var message = (success) ? "Operation was successful from tern." : "Oops, something went wrong from tern.";
// console.log(message)


//TODO: Refactor the following conditional as a ternary

// var weather = "sunny";
// var weatherMessage;

// if(weather === "rainy"){
//    weatherMessage = "It's raining!";
// } else {
//     weatherMessage = "Have a nice day!";
// }

//WRITE YOUR TERNARY STATEMENT HERE!
// var weather = "sunny";
// var weatherMessage = (weather === "rainy") ? "It's rainy!" : "Have a nice day!";
// console.log(weatherMessage);

// =============== SWITCH STATEMENT ================
//Together:

// var pizzaPreference = prompt("What kind of pizza do you like?");
//
// switch(pizzaPreference) {
//     case "pineapple and hot sauce":
//         alert("What a coincidence, that's my favorite!");
//         break;
//     case "cheese":
//         alert("Just plain cheese? Okay...");
//         break;
//     default:
//         alert(pizzaPreference + " isn't my favorite, but let's order some!");
//         break;
// }


//TODO: Write a switch statement that evaluates weather as the condition. Check for "rainy", "sunny", "snow", and a default case.
function weatherSwitch(weather) {
    switch(weather) {
        case "rainy":
            return "rainy";
        case "sunny":
            return "sunny";
        case "snow":
            return "snow";
        default:
            return "who knows";
    }
}

console.log(weatherSwitch("rainy"));
console.log(weatherSwitch("not good"));
//TODO: Rewrite the intersection function from earlier as a switch statement.
function intersection(color) {
    switch(color) {
        case "red":
            alert("Stop");
            return "Stop";
        case "yellow":
            alert("Slow down");
            return "Slow down";
        case "green":
            alert("Keep going");
            return "Keep going";
        default:
            alert("Are you sure you're at a light?");
            return "None";
    }
}

console.log(intersection("red"));
console.log(intersection("four"));

// ================ REVERSE ENGINEERING =================
// Visit each of these links, outline the steps required to achieve each of these demonstrations. You can write code or just write the logic steps that would achieve each output


// 1) https://mdn.github.io/learning-area/javascript/building-blocks/allowance-updater.html
// Default allowance variable set to $5. Make variable choresComplete. If choresComplete is true return allowance + 5. Else return default allowance.

// 2) https://mdn.github.io/learning-area/javascript/building-blocks/simple-else-if.html
//Set up switch statement so that depending on which case is selected from the menu, a different response will be given.

// 3) https://mdn.github.io/learning-area/javascript/building-blocks/simple-ternary.html
// If else to change color based on user choice.
