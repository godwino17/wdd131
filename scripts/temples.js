// getting and setting the year
const year = new Date().getFullYear();
const yearElement = document.querySelector("#year");
yearElement.textContent = year;

// getting and setting last updated time
const month = new Date().getMonth() + 1;
const dayOfTheMonth = new Date().getDate();
const hours = new Date().getHours();
const minutes = new Date().getMinutes();
const seconds = new Date().getSeconds();
const lastUpdated = document.querySelector("#lastupdated");
lastUpdated.textContent = `Last Updated: ${month}/${dayOfTheMonth}/${year} ${hours}:${minutes}:${seconds}`;


const btn = document.querySelector("#menu");
const nav = document.querySelector(".navigation");

btn.addEventListener("click", () => {
    nav.classList.toggle("show");
    btn.classList.toggle("show");
});