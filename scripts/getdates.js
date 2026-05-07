const year = new Date().getFullYear();

document.getElementById("currentyear").innerHTML = year;

const month= new Date().getMonth() + 1;
const day= new Date().getDay();
const hour= new Date().getHours();
const minute= new Date().getMinutes();
const seconds= new Date().getSeconds();

const footerP = `Last Modification: ${month}/${day}/${year} ${hour}:${minute}:${seconds}`;

document.getElementById("lastmodified").innerHTML = footerP;
