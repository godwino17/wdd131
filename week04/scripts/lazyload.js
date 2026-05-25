const year = new Date().getFullYear();
const month = new Date().getMonth() + 1;
const dayOfTheMonth = new Date().getDate();
const hours = new Date().getHours();
const minutes = new Date().getMinutes();
const seconds = new Date().getSeconds();

document.querySelector("#lastupdated").textContent = `Last Updated: ${month}/${dayOfTheMonth}/${year} ${hours}:${minutes}:${seconds}`;