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
    document.documentElement.style.transition = "all 1s ease";
    document.documentElement.scrollTop = 0;
});



let mobileHeader = document.querySelector(".moblileHeader");
let desktopHeader = document.querySelector(".desktopHeader");

if (window.innerWidth > 700) {

    window.addEventListener("scroll", (e) => {
        let windowTop = window.scrollY;

        if (windowTop >= 200) {
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
    window.addEventListener("scroll", (e) => {
        let windowTop = window.scrollY;

        if (windowTop >= 150) {
            mobileHeader.style.background = "rgba(0, 0, 0, 0.301)";

        } else {
            mobileHeader.style.background = "";
        }
    })
}


//////sales popUp/////////
let viewAllSalesLink = document.querySelector(".popUpOpenLink");
let popUpOpenContainer = document.querySelector(".allSalesPopUp");
let popUpCloseBtn = document.querySelector(".popUpCloseBtn");

viewAllSalesLink.addEventListener("click", () => {
    popUpOpenContainer.classList.remove("popUpSalesClose");
    popUpCloseBtn.addEventListener("click", () => {
        popUpOpenContainer.classList.add("popUpSalesClose");

    })

})

//////sales popUp/////////