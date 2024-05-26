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

await indexMySpace(URLSpaces,articleMySpace)

articleMySpace.addEventListener('click', async (event) => {
    if(event.target.classList.contains("section1-a")){
        const id = event.target.getAttribute("data-id")
        await deleteMySpace(URLSpaces,id)
        await indexMySpace(URLSpaces,articleMySpace)
    }
})


