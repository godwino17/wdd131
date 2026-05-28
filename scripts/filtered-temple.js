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

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        alt: "Aba, Nigeria Temple",
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti, Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        alt: "Manti, Utah Temple",
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson, Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        alt: "Payson, Utah Temple",
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo, Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        alt: "Yigo, Guam Temple",
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        alt: "Washington D.C Temple",
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima, Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        alt: "Lima Peru Temple",
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City, Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        alt: "Mexico City Temple",
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    // Add more temple objects here...
    {
        templeName: "Benin City, Nigeria",
        location: "Benin City, Nigeria",
        dedicated: "2025, May, 24",
        area: 30700,
        alt: "Benin City Temple",
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/benin-city-nigeria-temple/benin-city-nigeria-temple-58575-main.jpg"
    },
    {
        templeName: "Lagos, Nigeria",
        location: "Lagos, Nigeria",
        dedicated: "2025, May, 10",
        area: 19800,
        alt: "Lagos Nigeria Temple",
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/lagos-nigeria-temple/lagos-nigeria-temple-58577-main.jpg"
    },
    {
        templeName: "Rexburg Idaho",
        location: "Rexburg, Idaho",
        dedicated: "2005, July, 30",
        area: 57504,
        alt: "Rexburg Idaho Temple",
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/rexburg-idaho-temple/rexburg-idaho-temple-62899-main.jpg"
    }
];



let templeCard = "";

for (const temple of temples) {
    templeCard += `
        <figure>
            <figcaption>${temple.templeName}</figcaption>
            <p>Location: <span class="data">${temple.location}</span></p>
            <p>Dedicated: <span class="data">${temple.dedicated}</span></p>
            <p>Size: <span class="data">${temple.area} sq ft</span></p>
            <img src="${temple.imageUrl}" alt="${temple.alt}" loading="lazy">
        </figure>`;
}

// All Temples
if (document.querySelector(".container")) {
    document.querySelector(".container").innerHTML = templeCard;
}


let oldTemple = "";
let newTemple = "";
let smallTemple = "";
let largeTemple = "";

for (const temple of temples) {
    let date = temple.dedicated;
    let dates = date.split(",");
    let yearD = Number(dates[0]);

    let size = temple.area;

    if (yearD < 1900) {
        oldTemple += `
        <figure>
            <figcaption>${temple.templeName}</figcaption>
            <p>Location: <span class="data">${temple.location}</span></p>
            <p>Dedicated: <span class="data">${temple.dedicated}</span></p>
            <p>Size: <span class="data">${temple.area} sq ft</span></p>
            <img src="${temple.imageUrl}" alt="${temple.alt}" loading="lazy">
        </figure>`;
    }

    if (yearD > 2000) {
        newTemple += `
        <figure>
            <figcaption>${temple.templeName}</figcaption>
            <p>Location: <span class="data">${temple.location}</span></p>
            <p>Dedicated: <span class="data">${temple.dedicated}</span></p>
            <p>Size: <span class="data">${temple.area} sq ft</span></p>
            <img src="${temple.imageUrl}" alt="${temple.alt}" loading="lazy">
        </figure>`;
    }

    if (size > 90000) {
        largeTemple += `
        <figure>
            <figcaption>${temple.templeName}</figcaption>
            <p>Location: <span class="data">${temple.location}</span></p>
            <p>Dedicated: <span class="data">${temple.dedicated}</span></p>
            <p>Size: <span class="data">${temple.area} sq ft</span></p>
            <img src="${temple.imageUrl}" alt="${temple.alt}" loading="lazy">
        </figure>`;
    }

    if (size < 10000) {
        smallTemple += `
        <figure>
            <figcaption>${temple.templeName}</figcaption>
            <p>Location: <span class="data">${temple.location}</span></p>
            <p>Dedicated: <span class="data">${temple.dedicated}</span></p>
            <p>Size: <span class="data">${temple.area} sq ft</span></p>
            <img src="${temple.imageUrl}" alt="${temple.alt}" loading="lazy">
        </figure>`;
    }

}

// Oldest Temples
if (document.querySelector(".old")) {
    document.querySelector(".old").innerHTML = oldTemple;
}

// Newest Temples
if (document.querySelector(".new")) {
    document.querySelector(".new").innerHTML = newTemple;
}

// Largest temples
if (document.querySelector(".large")) {
    document.querySelector(".large").innerHTML = largeTemple;
}


// Smallest Temples
if (document.querySelector(".small")) {
    document.querySelector(".small").innerHTML = smallTemple;
}