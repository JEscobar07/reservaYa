/*
Clan: Clan Gates
Grupo: Charlie
Fecha: 16/05/2024
*/

// Import our custom CSS
import "../scss/styles.scss";
import { indexMySpace, deleteMySpace, header } from "./mySpaceOperations.js";
import { getUrlSpaces } from "./urlData.js";

// import library for json-server
import i18next from "i18next";
import Backend from "i18next-http-backend";

// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";

// variables to extract information
const URLSpaces = getUrlSpaces();
const tagheader = document.querySelector("header");
const articleMySpace = document.querySelector("#mySpace-cards");
let navBar = "";
const footer = document.querySelector("footer");

// inserting data into body
header(tagheader);
navBar = document.querySelector(".navbar");
await indexMySpace(URLSpaces, articleMySpace);

//Listening to events
articleMySpace.addEventListener("click", async (event) => {
  if (event.target.classList.contains("section1-delete")) {
    const id = event.target.getAttribute("data-id");
    await deleteMySpace(URLSpaces, id);
    await indexMySpace(URLSpaces, articleMySpace);
  } else if (event.target.classList.contains("section1-warning")) {
    const id = event.target.getAttribute("data-id");
    await updateMySpace(URLSpaces, id, photo);
    window.location.href = "../pages/publish.html";
    //     <input type="text" id="" placeholder="URL de la Foto" class="form-control rounded-pill p-4 fs-3 "/>
    // <input type="text" id="" placeholder="Tipo de espacio, Ej: Salón de eventos" class="form-control rounded-pill p-4 fs-3 "/>
    // <input type="number" id="" placeholder="Máximo de personas, Ej: 150" class="form-control rounded-pill p-4 fs-3"/>
    // <input type="text" id="" placeholder="Dirección" class="form-control rounded-pill p-4 fs-3 "/>
    // <input type="text" id="city" placeholder="Ciudad/Municipio" class="form-control rounded-pill p-4 fs-3 "/>
    // <input type="text" id="department" placeholder="Departamento" class="form-control rounded-pill p-4 fs-3 "/>
    // <button type="submit" class="btn btn-primary rounded-pill w-100 p-2 fs-2 btn-form-publish">Enviar</button>
    let photo = document.querySelector("#photo");
    let typeSpace = document.querySelector("#spaceType");
    let peopleMax = document.querySelector("#peopleMax");
    let adress = document.querySelector("#spaceType");
    let city = document.querySelector("#city");
    let department = document.querySelector("#department");
    let formPublish = document.querySelector(".btn-form-publish");

  }
});

navBar.addEventListener("click", (event) => {
  if (event.target.classList.contains("btn-spacePublic")) {
    window.location.href = "./publish.html";
  }
});

footer.innerHTML = `
    <div class="footerr">
        <p>© 2024 Reserva Tu Espacio. Todos los derechos reservados.</p>
    </div>
`;
