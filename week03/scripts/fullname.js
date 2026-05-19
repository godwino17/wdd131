let firstName = "Antonia";
let lastName = "Francesca";

// Normal function ✅
function fullNameee(first, last) {
    fName = `${first} ${last}`;
    return fName;
}

// Anonymous Function ✅
const fullNamee = function (first, last) {
    fName = `${first} ${last}`;
    return fName;
}

// Arrow function ✅
const fullName = (first, last) => `${first} ${last}`;

let name = document.querySelector("#fullname");
name.textContent = fullName(firstName, lastName);