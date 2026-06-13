const year = new Date().getFullYear();
const month = new Date().getMonth() + 1;
const dayOfTheMonth = new Date().getDate();
const hours = new Date().getHours();
const minutes = new Date().getMinutes();
const seconds = new Date().getSeconds();

document.querySelector("#year").textContent = year;
document.querySelector("#lastupdated").textContent = `Last Updated: ${month}/${dayOfTheMonth}/${year} ${hours}:${minutes}:${seconds}`;


const navBtn = document.querySelector("#menu");
const navTable = document.querySelector(".nav-table");

navBtn.addEventListener("click", () => {
    navTable.classList.toggle("show");
    navBtn.classList.toggle("show");
});



let customerName = document.querySelector("#name");
let customerNumber = document.querySelector("#number");
let customerEmail = document.querySelector("#email");

const submitBtn = document.querySelector("#submit");
const contactPage = document.querySelector(".contacts");

if (contactPage) {
    submitBtn.addEventListener("click", () => {
        if (customerName.value !== "" && customerNumber.value !== "" && customerEmail.value !== "") {
            localStorage.setItem("name", customerName.value);
            localStorage.setItem("number", customerNumber.value);
            localStorage.setItem("email", customerEmail.value);
        }
    });
}

