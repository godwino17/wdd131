const year = new Date().getFullYear();
const month = new Date().getMonth() + 1;
const dayOfTheMonth = new Date().getDate();
const hours = new Date().getHours();
const minutes = new Date().getMinutes();
const seconds = new Date().getSeconds();

document.querySelector("#year").textContent = year;
document.querySelector("#lastupdated").textContent = `Last Updated: ${month}/${dayOfTheMonth}/${year} ${hours}:${minutes}:${seconds}`;

const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];


let select = document.querySelector("select");

for (product of products) { 
    let productName = product.name;

    let option = document.createElement("option");

    option.value = productName;

    // Capitalize the first letter of the product name be displaying
    option.textContent = `${productName.charAt(0).toUpperCase()}${productName.slice(1)}`;
    if (select) {
        select.append(option);
    }
}


const reviewPage = document.querySelector("#reviewPage"); // This is the Review page as a whole

if (reviewPage) {
    let numberOfReview = JSON.parse(localStorage.getItem("numberOfReview")) || 0;
    numberOfReview++;
    localStorage.setItem("numberOfReview", JSON.stringify(numberOfReview));
}
