function openNav() {
    document.getElementById("mySidenav").style.width = "400px";
}

/* Set the width of the side navigation to 0 */


function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

let searchBtns = document.querySelectorAll(".search");
let searchModal = document.querySelector(".searchModal");

searchBtns.forEach(searchBtn => {
    searchBtn.addEventListener("click", () => {
        searchModal.classList.add("openModal");

    })
})


searchModal.addEventListener("click", (e) => {
    if (e.target.classList.contains("searchModal")) {
        searchModal.classList.remove("openModal");
    }
    if (e.target.classList.contains("searchMainContainer")) {
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

let mobileHeader = document.querySelector(".moblileHeader");
let desktopHeader = document.querySelector(".desktopHeader");

if (window.innerWidth > 700) {
    window.addEventListener("scroll", (e) => {
        let windowTop = window.scrollY;

        if (windowTop >= 350) {

            mobileHeader.style.display = "none";
            desktopHeader.style.display = "block";

        } else {
            mobileHeader.style.display = "block";
            desktopHeader.style.display = "none";
        }
    })
} else {
    mobileHeader.style.display = "block";
    desktopHeader.style.display = "none";
}