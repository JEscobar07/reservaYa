/*
Clan: Clan Gates
Grupo: Charlie
Fecha: 16/05/2024
*/
//Autoejecutable function
(function () {
    const userOnline = localStorage.getItem("userOnlinne")

if (userOnline !== null) {
    window.location.href = "./src/pages/dashboard.html"
}
})()

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
const form2 = document.querySelector("section") //data insertion

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
<article class="d-flex justify-content-around p-5">
<div class="p-2 mx-3 ">
    <img src="../../public/img/imglogin.webp" class="img-login" alt="img-sect-login">
</div>
<div class="form-login p-2 mx-3 fs-5 fw-bold col-12 col-lg item-wrapper">
    <h3 class="display-5 text-center fw-bold">Login</h3>
    <a href="../pages/register.html" class="register-login text-center text-decoration-none">Registrarse</a>
    <form class="text-center" id="login-form">
        <div class="w-100 gap-3 form__container-split">
            <input type="email" placeholder="Email" id="email" class="input-login" />
            <input type="password" placeholder="Contraseña" id="password" class="input-login" />
        </div>
        <button type="submit" class="btn-section0006 mt-4 py-3 px-4 rounded-5 fs-5 fw-bold border-0"
            placeholder="">Ingresar                     
        </button>
    </form>
</div>
</article>
`

footer.innerHTML = `
    <div class="footerr">
        <p>© 2024 Reserva Tu Espacio. Todos los derechos reservados.</p>
    </div>
`

//data manipulation
const URL = getUrlUsers();
const form = document.querySelector("#login-form"); 
const email = document.querySelector("#email");
const password = document.querySelector("#password");

//Event for create and delete reservations
form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const user = await checkEmail(email)
    if (user === false) {
    }else{
        if (user.password === password.value) {
            localStorage.setItem('userOnline', JSON.stringify(user))
            window.location.href = "/"
            window.location.href = "./dashboard.html"
        }else{
            alert("Wrong password")
        }
    }
})

//Validation of repeat email
async function checkEmail(email) {
    const response = await fetch(`${URL}?email=${email.value}`)
    const data = await response.json()

    // repeated email verification
    if (data.length === 1) {
        return data[0]
    } else {
        return false
    }
}