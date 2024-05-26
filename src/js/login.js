import { getUrlUsers } from "./urlData";

(function () {
    const userOnline = localStorage.getItem("userOnlinne")

if (userOnline !== null) {
    window.location.href = "./src/pages/dashboard.html"
}
})()

const URL = getUrlUsers();

const form = document.querySelector("#login-form");
const email = document.querySelector("#email");
const password = document.querySelector("#password");

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