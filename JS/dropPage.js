function openNav() {
    document.getElementById("mySidenav").style.width = "400px";
}

/* Set the width of the side navigation to 0 */


function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

let searchBtn = document.querySelector(".search");
let searchModal = document.querySelector(".searchModal");


searchBtn.addEventListener("click", () => {
    searchModal.classList.add("openModal");

})

searchModal.addEventListener("click", (e) => {
    if (e.target.classList.contains("searchModal")) {
        searchModal.classList.remove("openModal");
    }

})


let toTopBtn = document.querySelector(".yoUpBtn");

toTopBtn.addEventListener("click", () => {
    var body = $("html, body");
    body.stop().animate({
        scrollTop: 0
    }, 500, 'swing', function () {});
})



///////search function ///////////


let searchInput = document.querySelector("#searchInput");
let searchItems = document.querySelectorAll(".searchItem");
let searchItemsContainer = document.querySelector(".searchItemsContainer");

searchInput.addEventListener("input", (e) => {
    let searchValue = e.target.value.toLowerCase();
    let searchItemNumber = searchItems.length;

    for (let i = 0; i < searchItemNumber; i++) {
        let currentItemNumber = searchItems[i];
        let currentItemName = currentItemNumber.getAttribute("data-name");
        if (currentItemName.toLowerCase().includes(searchValue)) {
            searchItemsContainer.style.display = "block";
            searchItemsContainer.style.animation = "itemAnim 1s ease forwards";
            currentItemNumber.style.animation = "itemAnim 1s ease forwards";
            currentItemNumber.style.display = "";

        } else if (searchValue == "") {
            searchItemsContainer.style.display = "none";
            console.log(searchValue);

        } else {
            currentItemNumber.style.animation = "itemAnim 1s ease forwards";
            currentItemNumber.style.display = "none";
        }
    }



})
///////search function ///////////