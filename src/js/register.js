/*
Clan: Clan Gates
Grupo: Charlie
Fecha: 16/05/2024
*/

// Import our custom CSS
import "../scss/styles.scss";
import { getUrlUsers } from "./urlData";

// import library for json-server
import i18next from 'i18next';
import Backend from 'i18next-http-backend'

// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";

// variables to extract information
const header = document.querySelector("header")
const footer = document.querySelector("footer");
const form2 = document.querySelector("section"); //data insertion
const URL = getUrlUsers()


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

form2.innerHTML = `
<form class="d-flex flex-column align-items-center container-sm" id="register-form">
<h1 class="text-center pb-3 section-register-form-h1">Registro</h1>
<div class="d-flex flex-wrap justify-content-around m-3">
    <div class="mb-3 section-register-div">
        <input type="email" class="form-control rounded-pill section-register-input p-4 fs-3" required id="email-register" placeholder="Email">
    </div>
    <div class="mb-3 section-register-div ">
        <input type="text" class="form-control rounded-pill p-4 fs-3 section-register-input" required id="phone-register" placeholder="Phone">
    </div>

    <div class="mb-3 section-register-div section-register-input3">
        <input type="password" class="form-control rounded-pill p-4 fs-3 section-register-input" required id="password-register"
            placeholder="Password">
    </div>
</div>
<div class="d-flex justify-content-center container-sm">
    <button type="submit" class="btn btn-primary rounded-pill pt-3 pb-3 section-register-botton container">Registrarme</button>
</div>
</form>
`

footer.innerHTML = `
    <div class="footerr">
        <p>© 2024 Reserva Tu Espacio. Todos los derechos reservados.</p>
    </div>
`

const form = document.querySelector("#register-form"); //data manipulation
const email = document.querySelector("#email-register");
const phone = document.querySelector("#phone-register");
const password = document.querySelector("#password-register");

form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const emailChecking = await checkEmail(email);
    if (emailChecking === true) {
        alert("se guardó el usuario correctamente.")
        await registerUser(email, phone, password)
        window.location.href = "/";
    }else{
        alert("el email ya existe")
    }
});    


async function registerUser(email, phone, password) {
    const user = {
        email: email.value,
        phone: phone.value,
        password: password.value
    }

    await fetch(URL, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    })
}

async function checkEmail(email) {
    const response = await fetch(`${URL}?email=${email.value}`)
    const data = await response.json()

    if (data.length > 0) {
        return false
    } else {
        return true
    }
}
