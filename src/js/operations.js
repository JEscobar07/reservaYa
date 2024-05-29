//Function for dashboard 
export async function indexDashboard(URLSpaces, cardsReservation) {
    const response = await fetch(`${URLSpaces}`)
    const data = await response.json()
    cardsReservation.innerHTML = ""
    data.forEach(element => {
        cardsReservation.innerHTML += `
                <div class="card text-center my-5 rounded cards__reservation">
                    <div class="cards__reservation-img mb-3">
                        <div id="carouselExampleRide" class="carousel slide" data-bs-ride="true">
                            <div class="carousel-inner reservation__carousel-img">
                                <div class="carousel-item active" data-bs-interval="5000">
                                    <img src="${element.photos[0]}" class="d-block w-100 rounded " alt="...">
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide"
                                data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleRide"
                                data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title fs-2 mb-2">${element.spaceType}</h5>
                        <p class="card-text"><span class="fw-semibold">Dirección: </span>${element.adress}, ${element.city}, ${element.department}.</p>
                        <p class="card-text"><span class="fw-semibold">Aforo máximo: </span>${element.maximumCapacity} personas.</p>
                        <a href="./src/pages/login.html" data-id = "${element.id}" class="rounded-pill nav__a-btn">Reservar</a>
                    </div>
                </div>
        `
    })
}





