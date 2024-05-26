import { getUrlUsers } from "./urlData";

const form = document.querySelector("#register-form");
const email = document.querySelector("#email-register");
const phone = document.querySelector("#phone-register");
const password = document.querySelector("#password-register");

const URL = getUrlUsers()


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
        // .then(response => response.json())
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