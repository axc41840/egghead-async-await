const fetch = require("node-fetch");

function showGithubUser(handle) {
    const url = `https://api.github.com/users/${handle}`;
    fetch(url)
        .then(response => response.json())
        .then(user => {
            console.log(user.name);
            console.log(user.location);
        })
}

async function showGithubUserAsync(handle) {
    const url = `https://api.github.com/users/${handle}`;
    const response = await fetch(url);
    const user = await response.json();
    console.log(user.name);
    console.log(user.location);
}

//showGithubUser("axc41840");
showGithubUserAsync("axc41840");