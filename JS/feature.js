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

AOS.init();


////pagination/////
let paginationTabs = document.querySelectorAll(".mainPagination ul li");
let page1 = document.querySelector(".mainPage1");
let page2 = document.querySelector(".mainPage2");
let page3 = document.querySelector(".mainPage3");
let mainAllPages = document.querySelectorAll(".mainPage");
let pagination1 = document.querySelector(".pagination1");
let pagination2 = document.querySelector(".pagination2");
let pagination3 = document.querySelector(".pagination3");

var currentPage = 1;

function showPage1() {
    mainAllPages.forEach(mainAllPage => {
        mainAllPage.style.transition = "all 0.1s ease-in-out";
        mainAllPage.style.animation = "paginationAnim 0.4s linear forwards";
        mainAllPage.classList.add("noDisplay");
    })
    paginationTabs.forEach(paginationTab => {
        paginationTab.classList.remove("activePagination");
    });
    pagination1.classList.add("activePagination");
    page1.classList.remove("noDisplay");
    return currentPage = 1;

}

function showPage2() {
    mainAllPages.forEach(mainAllPage => {
        mainAllPage.style.transition = "all 0.1s ease-in-out";
        mainAllPage.style.animation = "paginationAnim 0.4s linear forwards";
        mainAllPage.classList.add("noDisplay");
    });
    paginationTabs.forEach(paginationTab => {
        paginationTab.classList.remove("activePagination");
    });
    pagination2.classList.add("activePagination");
    page2.classList.remove("noDisplay");
    return currentPage = 2;

}

function showPage3() {
    mainAllPages.forEach(mainAllPage => {
        mainAllPage.style.transition = "all 0.1s ease-in-out";
        mainAllPage.style.animation = "paginationAnim 0.4s linear forwards";
        mainAllPage.classList.add("noDisplay");
    });
    page3.classList.remove("noDisplay");
    paginationTabs.forEach(paginationTab => {
        paginationTab.classList.remove("activePagination");
    });
    pagination3.classList.add("activePagination");
    return currentPage = 3;

}

function showNextPage() {
    switch (currentPage) {
        case (currentPage = 1):
            showPage2();
            break;
        case (currentPage = 2):
            showPage3();
            break;
        case (currentPage = 3):
            showPage1();
            break;
        default:
            showPage1();
    }

}
////pagination/////

///////redirect-anotherpage////////////
let editorials = document.querySelectorAll(".editorial");

editorials.forEach(editorial => {
    editorial.addEventListener("click", () => {
        window.location = "editorialPage.html";

    })
})
///////redirect-anotherpage////////////