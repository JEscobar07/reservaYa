//Function for indexMySpace

export function header(tagHeader){
    tagHeader.innerHTML = `
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
                        <ul class="navbar-nav justify-content-end flex-grow-1 gap-4 pe-3">
                            <li class="nav-item">
                                <a class="nav-link rounded active fs-5" href="../pages/dashboard.html">Reservar</a>
                            </li>
                        </ul>
                        <ul class="navbar-nav flex-grow-1 justify-content-end">
                            <li class="nav-item d-flex gap-4  ">
                                <button type="button" class="rounded-pill nav__a-btn text-center btn-spacePublic">Publicar un
                                    espacio</button>
                                <a href="./src/pages/login.html" class="rounded-pill nav__a-btn">Logout</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    `
}

export async function indexMySpace(URLSpaces, articleMySpace) {
    const response = await fetch(URLSpaces)
    const data = await response.json()
    articleMySpace.innerHTML = ``
    for (let index = 0; index < data.length; index++) {
        articleMySpace.innerHTML += `
        <div class="card section1-art1-div2-div1 rounded-5">
            <img src="${data[index].photos[0]}" class="card-img-top rounded-5" alt="...">
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