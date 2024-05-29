/*
Clan: Clan Gates
Grupo: Charlie
Fecha: 16/05/2024
*/

// Import our custom CSS
import "../scss/styles.scss";
import { index, header, footer, deleteMySpace, searchMySpace, } from "./mySpaceOperations.js";
import { getUrlReservations, getUrlSpaces, getUrlUsers } from "./urlData.js"

// import library for json-server
import i18next from 'i18next';
import Backend from 'i18next-http-backend'

// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";

// variables to extract information
const URLReservation = getUrlReservations();
const URLSpaces = getUrlSpaces();
const URLUsers = getUrlUsers();
const tagheader = document.querySelector("header");
const articleMySpace = document.querySelector("#mySpace-cards")
const footerM = document.querySelector("footer");
const tableReservation = document.querySelector("#tableReservation")
const userOnline = localStorage.getItem("userOnline")
const userObject = JSON.parse(userOnline);
const userOnlineId = userObject.id;
let navBar = "";
let card = "";

// inserting data into body
header(tagheader);
navBar = document.querySelector(".navbar");
footer(footerM);
await index(URLSpaces, articleMySpace);


//Listening to events
articleMySpace.addEventListener("click", async (event) => {
    if (event.target.classList.contains("section1-delete")) {
        const id = event.target.getAttribute("data-id");
        await deleteMySpace(URLSpaces, id);
        await index(URLSpaces, articleMySpace);
    } else if (event.target.classList.contains("section1-warning")) {
        const id = event.target.getAttribute("data-id");
        card = await searchMySpace(URLSpaces, id)
        localStorage.setItem('card', JSON.stringify(card));
        window.location.href = "./publish.html";
    }
});

navBar.addEventListener("click", (event) => {
    if (event.target.classList.contains("btn-spacePublic")) {
        localStorage.removeItem("card");
        window.location.href = "./publish.html";
    }
});

indexReservations()

navBar.addEventListener('click', (event) => {
    if (event.target.classList.contains("btn-spacePublic")) {
        window.location.href = "./publish.html"
    }
})

footer.innerHTML = `
    <div class="footerr">
        <p>© 2024 Reserva Tu Espacio. Todos los derechos reservados.</p>
    </div>
`;

async function indexReservations() {

    const response = await fetch(`${URLReservation}`)
    const data = await response.json()

    tableReservation.innerHTML += ""
    data.forEach((element, i) => {
        const user = getUsersReservation(element.idRequestingUser, URLUsers)
        const space = getSpaceReservation(element.idSpace, URLSpaces)
        user.then(result => {
            const userEmail = result.email;
            const userPhone = result.phone;
            space.then(result => {
                const spaceAddress = result.adress;
                const spaceCity = result.city;
                const spaceDepartment = result.department;
                const spaceIdOwner = result.idOwner;
                console.log("owner", i, " => ", spaceIdOwner);
                if (spaceIdOwner === userOnlineId) {
                    tableReservation.innerHTML += `
                                <tr>
                                <td>${element.actualDate}</td>
                                <td>${userEmail}</td>
                                <td>${userPhone}</td>
                                <td>${element.dateStart}</td>
                                <td>${element.dateEnd}</td>
                                <td>${spaceAddress}, ${spaceCity}, ${spaceDepartment}</td>
                            </tr>
                    `
                }
            });
        });
    })
}

// get booking users
async function getUsersReservation(idUserReservation, URLUsers) {
    const response = await fetch(`${URLUsers}`)
    const data = await response.json()
    let dataUser;

    data.forEach(element => {
        if (idUserReservation == element.id) {
            dataUser = {
                "email": element.email,
                "phone": element.phone
            }
        }
    });
    return dataUser;
}

//obtain booking slots
async function getSpaceReservation(idSpaceReservation, URLSpaces) {
    const response = await fetch(`${URLSpaces}`)
    const data = await response.json()
    let dataSpace;

    data.forEach(element => {
        if (idSpaceReservation == element.id) {
            dataSpace = {
                "adress": element.adress,
                "city": element.city,
                "department": element.department,
                "idOwner": element.idOwner
            }
        }
    });
    return dataSpace;
}

