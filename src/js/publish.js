/*
Clan: Clan Gates
Grupo: Charlie
Fecha: 16/05/2024
*/

// Import our custom CSS
import "../scss/styles.scss";
import "../scss/publish.scss"

// import library for json-server
import i18next from 'i18next';
import Backend from 'i18next-http-backend'

// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";

import { getUrlSpaces } from "./urlData";

const userOnline = localStorage.getItem("userOnline")
const userObject = JSON.parse(userOnline);
const userOnlineId = userObject.id;

// variables to extract information
const header = document.querySelector("header")
const sectionForm = document.querySelector("section")
const footer = document.querySelector("footer");
let btnMySpace = ""

// inserting data into body

header.innerHTML = `
    <nav class="container navbar navbar-expand-lg fixed-top mt-2 rounded-pill">
        <div class="container-fluid px-4">
            <a href="/" class="nav__a">
                <img src="../../public/img/logoReservaYa.webp" class="img-fluid w-75 float-start logo__img"
                    alt="logo of the site" />
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Menú</h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                <ul class="navbar-nav flex-grow-1 justify-content-end">
                    <li class="nav-item d-flex gap-4  ">
                        <button type="button" class="rounded-pill nav__a-btn text-center btn-mySpace">Mis espacios</button>
                    </li>
                </ul>
            </div>
        </div>
        </div>
    </nav>
`
sectionForm.innerHTML = `
    <form id="form" class="d-flex flex-column align-items-center">
        <h2 class="display-5 text-center form-section__title fw-bold pb-3">
            Crear Espacio
        </h2>
        <div class="d-flex flex-column align-items-center gap-4 publish-div1 px-2 container">
            <input type="text" id="photo" placeholder="URL de la Foto" class="form-control rounded-pill p-4 fs-3 "/>
            <input type="text" id="spaceType" placeholder="Tipo de espacio, Ej: Salón de eventos" class="form-control rounded-pill p-4 fs-3 "/>
            <input type="number" id="peopleMax" placeholder="Máximo de personas, Ej: 150" class="form-control rounded-pill p-4 fs-3"/>
            <input type="text" id="adress" placeholder="Dirección" class="form-control rounded-pill p-4 fs-3 "/>
            <input type="text" id="city" placeholder="Ciudad/Municipio" class="form-control rounded-pill p-4 fs-3 "/>
            <input type="text" id="department" placeholder="Departamento" class="form-control rounded-pill p-4 fs-3 "/>
            <button type="submit" class="btn btn-primary rounded-pill w-100 p-2 fs-2 btn-form-publish">Enviar</button>
        </div>
    </form>
`
footer.innerHTML = `
    <div class="footerr">
        <p>© 2024 Reserva Tu Espacio. Todos los derechos reservados.</p>
    </div>
`

//Listening to events
btnMySpace = document.querySelector(".btn-mySpace")
btnMySpace.addEventListener('click',() =>{
    window.location.href = "./mySpace.html"
})

const form = document.querySelector('#form')
const photo = document.querySelector('#photo')
const peopleMax = document.querySelector('#peopleMax')
const adress = document.querySelector('#adress')
const city = document.querySelector('#city')
const department = document.querySelector('#department')
const spaceType = document.querySelector('#spaceType')
const URL = getUrlSpaces()

form.addEventListener('submit', async (e) => {

    e.preventDefault();
    await create(spaceType,photo, peopleMax,adress,city,department,userOnlineId)
    // window.location.href = "./mySpace.html"

});

async function 
create(spaceType,photo, peopleMax,adress,city,department,userOnlineId) {
    //ACA DEBEMOS PROGRAMAR LA PETICION PARA CREAR UNA CATEGORIA

    const newSpace = {
        spaceType: spaceType.value,
        adress: adress.value,
        city: city.value,
        department: department.value,
        maximumCapacity: peopleMax.value,
        photos: photo.value,
        idOwner: userOnlineId
    }

    await fetch(`${URL}`, {
        method: 'POST',
        body: JSON.stringify(newSpace),
        headers: {
            'Content-Type': 'application/json'
        }
    })
}