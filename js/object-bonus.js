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

function washCars(x) {
    x.forEach(function(car) {
        car.isDirty = false
    });
    return x
}

console.log(washCars([
    {
        make: 'Volvo',
        color: 'red',
        year: 1996,
        isDirty: true
    },
    {
        make: 'Toyota',
        color: 'black',
        year: 2004,
        isDirty: false
    },
    {
        make: 'Ford',
        color: 'white',
        year: 2007,
        isDirty: true
    }
]));

function adminList(x) {
    var adminsArray = [];
    x.forEach(function(user) {
        if (user.isAdmin === true) {
            adminsArray += user.email + "\n"
        }
    });
    return adminsArray;
}

console.log(adminList([
    {
        isAdmin: true,
        email: 'user1@email.com'
    },
    {
        isAdmin: true,
        email: 'user2@email.com'
    },
    {
        isAdmin: false,
        email: 'user3@email.com'
    }
]));
