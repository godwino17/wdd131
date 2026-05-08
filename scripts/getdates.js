const year = new Date().getFullYear();

document.getElementById("currentyear").innerHTML = year;

const month= new Date().getMonth() + 1;
const date= new Date().getDate();
const hour= new Date().getHours();
const minute= new Date().getMinutes();
const seconds= new Date().getSeconds();

const footerP = `Last Modification: ${month}/${date}/${year} ${hour}:${minute}:${seconds}`;

document.getElementById("lastmodified").innerHTML = footerP;
