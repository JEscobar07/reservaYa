/*
Clan: Clan Gates
Grupo: Charlie
Fecha: 16/05/2024
*/

// Import our custom CSS
import "../scss/styles.scss";
import {indexMySpace, deleteMySpace,header} from "./mySpaceOperations.js"
import {getUrlSpaces} from "./urlData.js"

// import library for json-server
import i18next from 'i18next';
import Backend from 'i18next-http-backend'

// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";

// variables to extract information
const URLSpaces = getUrlSpaces();
const tagheader = document.querySelector("header");
const articleMySpace = document.querySelector("#mySpace-cards")
let navBar = ""
const footer = document.querySelector("footer");


// inserting data into body
header(tagheader)
navBar = document.querySelector(".navbar")
await indexMySpace(URLSpaces,articleMySpace)

//Listening to events
articleMySpace.addEventListener('click', async (event) => {
    if(event.target.classList.contains("section1-a")){
        const id = event.target.getAttribute("data-id")
        await deleteMySpace(URLSpaces,id)
        await indexMySpace(URLSpaces,articleMySpace)
    }
})

navBar.addEventListener('click', (event) => {
    if(event.target.classList.contains("btn-spacePublic")){
        window.location.href = "./publish.html"
    }
})

footer.innerHTML = `
    <div class="footerr">
        <p>© 2024 Reserva Tu Espacio. Todos los derechos reservados.</p>
    </div>
    `;