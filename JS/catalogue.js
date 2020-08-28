function openNav() {
    if (window.innerWidth < 700) {
        document.getElementById("mySidenav").style.width = "80%";
    } else {
        document.getElementById("mySidenav").style.width = "400px";
    }

}
console.log(window.innerWidth);
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



let showMoreBtn = document.querySelector(".showMoreBtn");
let showMoreContent = document.querySelector(".showMoreContent");



showMoreBtn.addEventListener("click", () => {

    showMoreContent.style.display = "block";
    showMoreContent.style.animation = "showMoreAnim 1s ease forwards"
    showMoreBtn.style.display = "none";
});


let catalogueItemsClick = document.querySelectorAll(".itemImage");
// let carouselItems = document.querySelector(".glider-contain");

catalogueItemsClick.forEach(catalogueItemClick => {
    catalogueItemClick.addEventListener("click", (e) => {
        let clickedCatalougeImage = e.target;
        let clickedCatalougeItemImage = e.target.parentElement;
        let currentCarousel = clickedCatalougeItemImage.querySelector(".carousel");
        let currentCatalogueItem = e.target.parentElement.parentElement;
        let currentCatalogueName = currentCatalogueItem.getAttribute("data-name");
        // console.log(currentCatalogueName);
        // console.log(currentCatalogueItem);
        if (clickedCatalougeItemImage.classList.contains("itemImage")) {
            clickedCatalougeImage.style.display = "none";
            currentCarousel.classList.remove("currentGlider");
            currentCatalogueItem.classList.toggle("catalogueClickedActive");
            if (currentCatalogueItem.classList.contains("catalogueClickedActive")) {
                let newDiv = document.createElement("div");
                let newDivButton = document.createElement("button");
                newDivButton.innerHTML = "<span>view more</span>";
                newDiv.className = "tempCardDiv";
                newDiv.innerHTML = `<p>${currentCatalogueName}</p>`;
                currentCatalogueItem.appendChild(newDiv);
                newDiv.appendChild(newDivButton);

            } else {
                currentCatalogueItem.classList.remove("catalogueClickedActive");
                currentCatalogueItem.removeChild(currentCatalogueItem.querySelector(".tempCardDiv"));


            }
        } else {

        }

    })
})