const id = document.getElementById.bind(document);
const log = console.log;
const er = console.error;
const URL_API = 'https://dog.ceo/api/breed/hound/images';
const main = id("main");
const tooggleTheme = id("tooggle-theme");
const tooggleIcon = id("tooggle-icon");
const tooggleText = id("tooggle-text");

fetch(URL_API)
    .then(answer => answer.json())
    .then(data => {
        for (let index = 0; index < 150; index++) {
            main.innerHTML += `<img class="images" src="${data.message[index]}">`;
        }
    })
.catch(error => log(error))

tooggleTheme.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    if (tooggleIcon.src.includes("dark.svg")) {
        tooggleIcon.src = "img/light.svg";
        tooggleText.textContent = "Activar Light";
    } else {
        tooggleIcon.src = "img/dark.svg";
        tooggleText.textContent = "Activar Dark";
    }
})