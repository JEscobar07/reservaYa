/*
Clan: Clan Gates
Grupo: Charlie
Fecha: 16/05/2024
*/

// Import our custom CSS
import "../scss/styles.scss";
import {indexMySpace, deleteMySpace} from "./operations.js"

const URLUsers = `http://localhost:3000/users`;
const URLSpaces = `http://localhost:3000/spaces`;
const articleMySpace = document.querySelector("#mySpace-cards")
const navBar = document.querySelector("navbar")

await indexMySpace(URLSpaces,articleMySpace)

articleMySpace.addEventListener('click', async (event) => {
    if(event.target.classList.contains("section1-a")){
        const id = event.target.getAttribute("data-id")
        await deleteMySpace(URLSpaces,id)
        await indexMySpace(URLSpaces,articleMySpace)
    }
})

// navBar.addEventListener('click',(event) => {
//     if(event.target.classList.contains("nav-link")){
//         window.location.href = "../pages/dashboard.html"
//     }
// })


