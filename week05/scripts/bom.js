// select element from the DOM
const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

// Wait for button clicks
button.addEventListener("click", function () {
    // Check if the user entered something
    if (input.value != "") {
        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList();
        input.value = "";
        input.focus();
    }
});

function displayList(item) {
    // Create list item and give it the value of the input
    let li = document.createElement("li");
    li.textContent = item; // note the use of the displayList parameter 'item'

    // Create a delete button and add a click event listener
    let delButton = document.createElement("button");
    delButton.textContent = "❌";

    delButton.classList.add("delete"); // this reference the CSS rule .delete{width: fit-content} to siz the delete button.

    // Add the button to the list item
    li.append(delButton);

    // OUTPUT: Finally display the completed list item to the to the unordered list
    list.append(li);

    delButton.addEventListener("click", function () {
        list.removeChild(li);
        deleteChapter(li.textContent); // Note this new function that is needed to remove the chapter from the array & localstorage.
        input.focus(); // Set the focus to the input.
    });
}


let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {
    displayList(chapter);
});


function setChapterList() {
    localStorage.setItem("myFavBOMList", JSON.stringify(chaptersArray));
}

function getChapterList() {
    return JSON.parse(localStorage.getItem("myFavBOMList"));
}

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter((item) => item !== chapter);
    setChapterList();
}