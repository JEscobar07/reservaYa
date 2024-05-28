/*
Clan: Clan Gates
Grupo: Charlie
Fecha: 16/05/2024
*/

// Import our custom CSS
import "../scss/styles.scss";
import "../scss/publish.scss"
import "../js/alerts.js"
import { alert } from "./alerts.js";
import { alertNegative } from "./alerts.js";

// import library for json-server
import i18next from 'i18next';
import Backend from 'i18next-http-backend'

// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";

// variables to extract information
const header = document.querySelector("header")
const sectionForm = document.querySelector("section")
const footer = document.querySelector("footer");
let btnMySpace = ""

// inserting data into body
header.innerHTML = `
    <nav class="container navbar navbar-expand-lg fixed-top mt-2 rounded-pill">
        <div class="container-fluid px-4">
            <a href="./index.html" class="nav__a">
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
                        <button type="button" class="rounded-pill nav__a-btn text-center btn-mySpace">Reservar</button>
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
                    Nombre del espacio
                </h2>
                <div class="d-flex flex-column align-items-center gap-4 publish-div1 px-2 container">
                    <input type="date" placeholder="FechaReservar" class="form-control rounded-pill p-4 fs-3 " />
                    <input type="number" placeholder="Cant. personas disponibles"
                        class="form-control rounded-pill p-4 fs-3" />
                    <div class="w-100">
                        <select id="disabledSelect" class="form-select form-control rounded-pill p-4 fs-3">
                            <option value="selecciona">¿Que tipo de evento realizaras?</option>
                            <option>Cumpleaños</option>
                            <option>Despedida</option>
                            <option>Aniversario</option>
                            <option>Evento empresarial</option>
                            <option>Otros</option>
                        </select>
                    </div>
                    <button type="submit"
                        id="reservationn" class="btn btn-primary rounded-pill w-100 p-2 fs-2 btn-form-publish">Enviar</button>
                </div>
            </form>
`

footer.innerHTML = `
    <div class="section__footer">
        <p class="text-wrap fs-4">© 2024 Reserva Tu Espacio. Todos los derechos reservados.</p>
    </div>
    `

    const hola = document.getElementById("reservationn")

    // h.addEventListener("click", (event)=>{
    //     event.preventDefault()
    //     alert("hola")
    //     setTimeout(() => {
            
    //         window.location.href = event.target.href
    //     }, 3000);
    
    
    // })
    




//Listening to events
btnMySpace = document.querySelector(".btn-mySpace")
btnMySpace.addEventListener('click',(event) =>{
    window.location.href = "./dashboard.html"
})
