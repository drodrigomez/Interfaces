const id = document.getElementById.bind(document);
const log = console.log;
const er = console.error;
const URL_API = 'https://dog.ceo/api/breed/hound/images/random/150';
const main = id("main");
const tooggleTheme = id("tooggle-theme");
const tooggleIcon = id("tooggle-icon");
const tooggleText = id("tooggle-text");

// fetch(URL_API)
//     .then(answer => answer.json())
//     .then(data => {
//         data.message.forEach(element => {
//             main.innerHTML += `<img class="images" src="${element}">`;
//         });
//     })
// .catch(error => log(error))


const fetchData = async () => {
    try {
        const ans = await fetch(URL_API);
        const data = await ans.json();
        data.message.forEach(element => {
            main.innerHTML += `<img class="images" src="${element}">`;
        });
    } catch (error) {
        er(error);
    }
}

fetchData()

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