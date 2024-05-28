/*
Clan: Clan Gates
Grupo: Charlie
Fecha: 16/05/2024
*/

// Import our custom CSS
import "../scss/styles.scss";
import { index,header,footer, deleteMySpace,searchMySpace} from "./mySpaceOperations.js";
import { getUrlSpaces } from "./urlData.js";

// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";

// variables to extract information

const tagheader = document.querySelector("header");
const articleMySpace = document.querySelector("#mySpace-cards");
const footerM = document.querySelector("footer");
const URLSpaces = getUrlSpaces();
let navBar = "";
let card = "";

// inserting data into body

header(tagheader);
navBar = document.querySelector(".navbar");
footer(footerM);
await index(URLSpaces, articleMySpace);


//Listening to events
articleMySpace.addEventListener("click", async (event) => {
  if (event.target.classList.contains("section1-delete")) {
    const id = event.target.getAttribute("data-id");
    await deleteMySpace(URLSpaces, id);
    await index(URLSpaces, articleMySpace);
  } else if (event.target.classList.contains("section1-warning")) {
    const id = event.target.getAttribute("data-id");
    card = await searchMySpace(URLSpaces,id)
    localStorage.setItem('card', JSON.stringify(card));
    window.location.href = "./publish.html";
  }
});

navBar.addEventListener("click", (event) => {
  if (event.target.classList.contains("btn-spacePublic")) {
    localStorage.removeItem("card");
    window.location.href = "./publish.html";
  }
});


