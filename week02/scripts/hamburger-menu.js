const hamButton = document.querySelector("#menu"); // Selects hamburger button
const navigation = document.querySelector(".navigation"); // Selects navigation list

hamButton.addEventListener("click", () => {
    navigation.classList.toggle("open"); // Toggles "open" class on nav
    hamButton.classList.toggle("open"); // Toggles "open" class on button
})

// When you click the hamburger button, it toggles the .open class.
// .open makes links visible (display: block) and changes the button icon from Ξ to ❌.