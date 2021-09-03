const id = document.getElementById.bind(document);
const log = console.log;
const er = console.error;
const URL_API = 'https://dog.ceo/api/breed/hound/images';
const main = id("main");

fetch(URL_API)
    .then(answer => answer.json())
    .then(data => {
        for (let index = 0; index < 50; index++) {
            main.innerHTML += `<img src="${data.message[index]}">`;
        }
    })
.catch(error => log(error))