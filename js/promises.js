"use strict";

let numb;
function wait(num) {
    numb = num;
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, num * 1000)
    })
}

wait(2).then(() => console.log("You'll see this after " + numb + ' seconds.'));

function getDate(user) {
    fetch(`https://api.github.com/users/${user}/events`, {headers: {'Authorization': `token ${gitKey}`}})
        .then(response => response.json())
        .then(user => {user.find(e => {
                if (e.type === "PushEvent") {
                    console.log(e.created_at);
                    return e.created_at;
                    }})})
        .catch(error => console.error(error))
}

getDate(`Ethan-Joiner`);
getDate(`miguelgarcia210`);

