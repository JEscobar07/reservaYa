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

//Function for indexMySpace

export async function indexMySpace(URLSpaces, articleMySpace) {
    const response = await fetch(URLSpaces)
    const data = await response.json()
    articleMySpace.innerHTML = ``
    for (let index = 0; index < data.length; index++) {
        articleMySpace.innerHTML += `
        <div class="card section1-art1-div2-div1 rounded-5">
            <img src="../../public/img/cooworking.webp" class="card-img-top rounded-5" alt="...">
            <div class="card-body d-flex flex-column justify-content-center align-items-center ">
                <h5 class="card-title">${data[index].spaceType}</h5>
                <p class="card-text pt-3"><strong>Dirección:</strong>${data[index].adress} ${data[index].adress} </p>
                <p class="card-text"><strong> Aforo máximo:</strong> ${data[index].maximumCapacity}</p>
                <a data-id=${data[index].id} href="#" class="btn btn-primary rounded-pill section1-a" data>Editar o <br>Eliminar</a>
            </div>
        </div>
        `
    }
}

export async function deleteMySpace(URLSpaces, id) {
    await fetch(`${URLSpaces}/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    }
    )
}



