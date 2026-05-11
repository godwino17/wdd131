// select element from the DOM
const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

// Wait for button clicks
button.addEventListener("click", function () {
    // Check if the user entered something
    if (input.value != "") {
        // Create list item and give it the value of the input
        const li = document.createElement("li");
        li.textContent = input.value;

        // Create a delete button and add a click event listener
        const delButton = document.createElement("button");
        delButton.textContent = "❌";

        delButton.addEventListener("click", function () {
            list.removeChild(li);
            input.focus();
        });
        
        // Add the button to the list item
        li.appendChild(delButton);

        // OUTPUT: Finally display the completed list item to the to the unordered list
        list.appendChild(li);

        // Clear the user input field
        input.value = "";
    }
    input.focus();
});
