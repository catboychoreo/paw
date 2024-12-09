let hideButton = document.getElementById("hide")
let container = document.getElementById("left-contain")

hideButton.onclick = function() {
    container.classList.toggle("hidden")
}

let searchBar = document.getElementById("search")

searchBar.addEventListener("keypress", function(event) {
    if (event.key === "Enter"){
        event.preventDefault();
        document.getElementById("search-button").click();
    }
})