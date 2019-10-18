"use strict";
console.log("Welcome to Intro to Objects!");

var rubberDuck = {
    color: "yellow",
    role: "emotional support",
    name: "Cody"

};

console.log(rubberDuck);

console.log(rubberDuck);

var redCup = new Object();

redCup.color = "red";
redCup.role = "need help";
redCup.amount = 1;

console.log(redCup);
/*********************************************
*              INTRO TO OBJECTS
******************************************** */

/**
 * Objects are an unordered collection of related data in the form of
 * key:value pairs
 */


/*********************************************
 *              CREATING NEW OBJECTS
 ******************************************** */

/**
 * Objects can be created in JavaScript through the use of the 'new
 * Object()' constructor, or Object literal notation using curly braces.
 */

/**
 * TO DO TOGETHER: Create a new variable (of type Object) and call it
 * 'myPhone'. Use either the constructor or Object literal notation.
 */

// Initialize a new Object with "object literal notation (aka curly brackets"
var myPhone = {};
/**
 * TO DO: Create a new Object and call it 'myMac'. use either the
 * constructor or Object literal notation.
 */
var myMac = {};
/*********************************************
 *              PROPERTIES
 ******************************************** */

/**
 * TO DO TOGETHER: Using dot notation, assign these properties to your phone
 * Object: 'model', 'color', 'storage'. Console log your phone variable to
 * check that the information was stored properly.
 */

// MODEL = KEY IPHONE = VALUE
// Assign properties to myPhone
myPhone.model = "iphone";
myPhone.color = "black";
myPhone.storage = "few gigs";
console.log(myPhone);
/**
 * TO DO: Using dot notation, assign these properties to your Mac
 * Object: 'model', 'size', 'year', Console log the Object to check if the
 * information was stored properly
 */
myMac.model = "air";
myMac.size = "smol";
myMac.year = "2014";
console.log(myMac);
/**
 * TO DO TOGETHER: Assign a 'name' property to your phone. This should be of
 * type Object and store properties for the user's 'firstName' and
 * 'lastName'. Use console log to access the user's 'lastName'
 */

// myPhone.name = {
//     firstName: "Phillip",
//     lastName: "Fry"
// };

// create an Object property in my phone
myPhone.name = {};
myPhone.name.firstname = "Zapp";
myPhone.name.lastname = "Brannagan";

myPhone.apps = ["hearthstone", "slack", "FB"];
console.log(myPhone.apps[2]);
/**
 * TO DO: Using dot notation, assign a property called 'folders' that stores
 * an Array representing different folders in your system.
 */

myMac.folders = ["home", "codeup", "other"];


console.log(myMac);

function myApps() {
    console.log("These are my apps:");
    myMac.folders.forEach(function(folder){
        console.log(folder)
    })
}
/**
 * TO DO: Assign a 'login' property. This should be an object that stores
 * 'username','fakePassword' and 'email'
 */
myMac.login = {
    username: "Ethan",
    fakePassword: "1234",
    email: "ethan.joiner@gmail.com"
};

console.log(myMac);

// add users to mac

myMac.users = [
    {
        username : "ethan",
        id: 1
    }, {
        username: "carol",
        id: 2
    }, {
        username: "winner",
        id: 3
    }
];

console.log(myMac.users);
console.log(myMac.users[1].username);

myMac.users.forEach(function(user){
    console.log(user);
});
/*********************************************
 *                  METHODS
 ******************************************** */
console.log(myPhone);
/**
 * TO DO TOGETHER: We are going to add functionality to our phone Object.
 * Using the dot notation, add a method named 'call' that console logs the
 * message: "Dialing..."
 */

myPhone.call = function(){
    console.log("Dialing...")
};

console.log(myPhone.call);

/**
 * TO DO: Let's add functionality to our Mac Object. Create a method named
 * 'powerOn'. When called, this should display a console message that says
 * "Powering on..."
 */
myMac.powerOn = function(){
    console.log("Powering on...")
};

console.log(myMac.powerOn());
/**
 * TO DO TOGETHER: Let's add one more piece of functionality. Create a
 * method on the phone object that returns a message displaying the user's
 * firstName and lastName. Hint: use the 'this' keyword.
 */

myPhone.currentUser = function(){
    console.log("Current user" + this.name.firstname + "" + this.name.lastname)
};
/**
 * TO DO: One last thing. Let's add a 'currentUser' method that displays the
 * Mac user's 'username' and 'email'. Use the 'this' keyword to reference
 * the properties we created earlier.
 */
myMac.currentUser = function(){
    console.log("Current user is " + this.login.username + " and the email is " + this.login.email)
};

/*********************************************
 *                  NESTED VALUES
 ******************************************** */

/**
 * Because an Object is a collection of data and functionality, very often
 * we will see nested values. This can mean an Array of Objects containing
 * Arrays, Objects containing other Objects and so on.
 *
 * It is important to understand the shape of our data so that we can
 * navigate through it.
 */


/*********************************************
 *                  ARRAYS OF OBJECTS
 ******************************************** */

/**
 * If we have an Array of Objects, we can iterate through it to access each
 * Object element and pull the properties and methods that we need.
 */


var chooseYourFighter = [
    {
        name: {
            firstName: "Spongebob",
            lastName: "Squarepants"
        },
        weapon: "Spatula",
        attacks: ["Karate", "Bubbleblowing", "Jellyfishing"],
        catchPhrase: function (){
            return "I'm ready";
        }
    },
    {
        name: {
            firstName: "Patrick",
            lastName: "Star"
        },
        weapon: "Mayo",
        attacks: ["Rock hiding", "Secret Photo", "Wombology"],
        catchPhrase: function(){
            return "Hey spongebob";
        }
    },
    {
        name: {
            firstName: "Eugene",
            lastName: "Crabs"
        },
        weapon: "Karate",
        attacks: ["Take Money", "Tiny Violen", "Dance"],
        catchPhrase: function(){
            return "Money";
        }

    },
    {
        name: {
            firstName: "Squidward",
            lastName: "Tentacles"
        },
        weapon: "Clarinet",
        attacks: ["Bad music", "Nag", "SQUILLIAM"],
        catchPhrase: function(){
            return "*nasal noise*";
        }
    }
    ];

chooseYourFighter.forEach(function(fighter){
    console.log(fighter.name.firstName + ": " + fighter.catchPhrase());
    console.log(fighter.name.firstName + "'s attacks are: ");
    fighter.attacks.forEach(function(attack){
        console.log(attack);
    });
    console.log("---------");

});
