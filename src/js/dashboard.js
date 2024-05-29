// autoejecutable function
(function () {
    const userOnline = localStorage.getItem("userOnline")

if (userOnline == null) {
    window.location.href = "/"
}
})()

// Import our custom CSS. Fancyapps Library
import { Fancybox } from "@fancyapps/ui";
import { getUrlSpaces } from "./urlData";


const cardsReservation = document.querySelector(".container__cards-reservations");
const URLSpaces = getUrlSpaces();

const btnLogout = document.querySelector("#btn-logout")
btnLogout.addEventListener("click", () => {
    localStorage.removeItem("userOnline")
    window.location.href = "/"
}) 

//Function for dashboard 
async function index() {
    const response = await fetch(`${URLSpaces}`)
    const data = await response.json()

    cardsReservation.innerHTML += ""
    data.forEach((element,i) => {
        cardsReservation.innerHTML += `
                <div class="card text-center my-5 rounded cards__reservation">
                    <div class="reservation__carousel-img mb-3" id="${i}">
                        <a data-fancybox data-src="${element.photos}">
                            <img src="${element.photos}" class="d-block w-100 rounded" alt="...">
                        </a>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title fs-2 mb-2">${element.spaceType}</h5>
                        <p class="card-text"><span class="fw-semibold">Dirección: </span>${element.adress}, ${element.city}, ${element.department}.</p>
                        <p class="card-text"><span class="fw-semibold">Aforo máximo: </span>${element.maximumCapacity} personas.</p>
                        <a data-id="${element.id}" class="rounded-pill nav__a-btn btn-reservation">Reservar</a>
                    </div>
                </div>
        `
    })
}
await index();

//Function for reservation
cardsReservation.addEventListener('click', (e) => {
    if (e.target.classList.contains("btn-reservation")) {
        const id = e.target.getAttribute('data-id')
        localStorage.setItem('spaceId', id);
        window.location.href = `./reservation.html`
    }
})