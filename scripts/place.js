const year = new Date().getFullYear();
const month = new Date().getMonth() + 1;
const dayOfTheMonth = new Date().getDate();
const hours = new Date().getHours();
const minutes = new Date().getMinutes();
const seconds = new Date().getSeconds();

document.querySelector("#year").textContent = year;
document.querySelector("#lastupdated").textContent = `Last Updated: ${month}/${dayOfTheMonth}/${year} ${hours}:${minutes}:${seconds}`;



const tA = 31; // Temperature
const v = 5; // wind speed 

function calculateWindChill(t, v)
{
    return  `${(13.12 + 0.6215 * t - 11.37 * v ** 0.16 + 0.3965 * t * v ** 0.16).toFixed(1)} ℃`;
}

if (tA <= 10 && v > 4.8)
{
    document.querySelector("#calWindChill").textContent = calculateWindChill(tA, v);
}

else {
    document.querySelector("#calWindChill").textContent = "N/A";
}
