function openNav() {
    if (window.innerWidth < 700) {
        document.getElementById("mySidenav").style.width = "80%";
    } else {
        document.getElementById("mySidenav").style.width = "400px";
    }

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



let showMoreBtn = document.querySelector(".showMoreBtn");
let showMoreContent = document.querySelector(".showMoreContent");



showMoreBtn.addEventListener("click", () => {

    showMoreContent.style.display = "block";
    showMoreContent.style.animation = "showMoreAnim 1s ease forwards"
    showMoreBtn.style.display = "none";
});

//////////////////catalogue functions//////////////////
let catalogueImages = document.querySelectorAll(".itemImage");
let catalogueItems = document.querySelectorAll(".catalogueItem");
let catalogueItemHoverBg = document.querySelector(".catalogueItemHoverBg");

catalogueItems.forEach(catalogueItem => {
    catalogueItem.addEventListener("mouseover", function (e) {

        catalogueItems.forEach(currentCatalogueItem => {
            if (currentCatalogueItem.classList.contains("catalogueItemActive")) {
                currentCatalogueItem.querySelector(".currentGlider").style.display = "none";
                currentCatalogueItem.querySelector(".itemImage img").style.display = "block";
                currentCatalogueItem.querySelector(".catalogueClickedActive").style.display = "none";
                document.body.addEventListener("mouseover", (e) => {
                    if ((e.target).classList.contains("catalogueItemHoverBg")) {
                        catalogueItemHoverBg.style.opacity = 0;
                        catalogueItemHoverBg.style.pointerEvents = "none";
                        currentCatalogueItem.querySelector(".currentGlider").style.display = "none";
                        currentCatalogueItem.querySelector(".itemImage img").style.display = "block";
                        currentCatalogueItem.querySelector(".catalogueClickedActive").style.display = "none";
                        currentCatalogueItem.classList.remove("catalogueItemActive");
                    } else {
                        ""
                    }

                })
            } else {
                ""
            }
            currentCatalogueItem.classList.remove("catalogueItemActive");

        });




        this.classList.add("catalogueItemActive");
        catalogueItemHoverBg.style.opacity = 1;
        catalogueItemHoverBg.style.pointerEvents = "all";
        let currentCatalogueName = this.getAttribute("data-name");
        this.querySelector(".currentGlider").style.display = "block";
        this.querySelector(".itemImage img").style.display = "none";
        /////////add new div////////
        this.querySelector(".catalogueClickedActive").style.display = "block";
        this.querySelector(".tempCardDiv p").innerHTML = `${currentCatalogueName}`;
        /////////add new div////////
    })
})
//////////////////catalogue functions//////////////////


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