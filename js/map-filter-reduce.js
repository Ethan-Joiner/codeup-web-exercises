"use strict";

const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

let three = users.filter(user => user.languages.length > 2);
console.log(three);

let email = users.map(user => user.email);
console.log(email);

let totalYears = users.reduce(((a,b) => a + b.yearsOfExperience), 0);
console.log(totalYears);

let average = totalYears / users.length;
console.log(average);

let longestEmail = users.reduce(((a,b) => {
    if (a.length < b.email.length) {
        a = b.email;
    }
    return a
}),' ');
console.log(longestEmail);

// let nameString = users.reduce(((a,b) => {
//     a.push(b.name);
//     console.log(a);
//     console.log(b.name);
//     // return `${a} ${b.name},`
// }),[]);
// console.log(nameString);
//
// let names = users.map(user => user.name);
// console.log(names);

let instructors = users.reduce(((str, user) => {
    return `${str},${user.name}`
}), "Your instructors are: ") + ".";
console.log(instructors);

let listOfLanguages = Array.from(users.reduce((accumulator, user) => {
    user.languages.forEach(language => accumulator.add(language));
    return accumulator
}, new Set()));
console.log(listOfLanguages);

// const listOfLanguages = Array.from(users.reduce((accumulator,user) => {
//     user.languages.forEach(language => accumulator.add(language));
//     return accumulator;
// }, new Set()));