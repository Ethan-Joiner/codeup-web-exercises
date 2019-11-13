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
        .then(response => {
            let user1 = response.json().then((user) => {
                let first = user.find(function(e) {
                    if (e.type === "PushEvent") {
                        return e
                    }});
                        console.log(first.created_at);
                return first.created_at
            });
            // console.log(user1);
        });

}

getDate(`Ethan-Joiner`);