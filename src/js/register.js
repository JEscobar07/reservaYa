/*
Clan: Clan Gates
Grupo: Charlie
Fecha: 16/05/2024
*/

// Import our custom CSS
import "../scss/styles.scss";

// import library for json-server
import i18next from 'i18next';
import Backend from 'i18next-http-backend'

// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";

// variables to extract information
const header = document.querySelector("header")
const form = document.querySelector("section")
const footer = document.querySelector("footer");

// inserting data into body
header.innerHTML = `
<nav class="container navbar navbar-expand-lg fixed-top mt-2 rounded-pill">
<div class="container-fluid px-4">
    <a href="./index.html" class="nav__a">
        <img src="../../public/img/logoReservaYa.webp" class="img-fluid w-75 float-start logo__img"
            alt="logo of the site" />
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar"
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel">
        <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Menú</h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas"
                aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">

            <ul class="navbar-nav flex-grow-1 justify-content-end">
                <li class="nav-item">
                    <a href="../../index.html" class="rounded-pill nav__a-btn">Home</a>
                </li>
            </ul>
        </div>
    </div>
</div>
</nav>
`

form.innerHTML = `
<form class="d-flex flex-column align-items-center container-sm" method="get">
<h1 class="text-center pb-3 section-register-form-h1">Registro</h1>
<div class="d-flex flex-wrap justify-content-around m-3">
    <div class="mb-3 section-register-div">
        <input type="email" class="form-control rounded-pill section-register-input p-4 fs-3"
            id="email-register" placeholder="Email">
    </div>
    <div class="mb-3 section-register-div ">
        <input type="text" class="form-control rounded-pill p-4 fs-3 section-register-input"
            id="phone-register" placeholder="Phone">
    </div>

    <div class="mb-3 section-register-div section-register-input3">
        <input type="password" class="form-control rounded-pill p-4 fs-3 section-register-input"
            id="password-register" placeholder="Password">
    </div>
</div>
<div class="d-flex justify-content-center container-sm">
    <button type="submit"
        class="btn btn-primary rounded-pill pt-3 pb-3 section-register-botton container">Registrarme</button>
</div>
</form>
`

footer.innerHTML = `
    <div class="footerr">
        <p>© 2024 Reserva Tu Espacio. Todos los derechos reservados.</p>
    </div>
    `