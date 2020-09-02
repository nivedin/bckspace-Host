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


///shoe condition select////

let shoeSelectOption = document.querySelector(".custom-select");
let selectSize = document.querySelector(".selectSize");


shoeSelectOption.addEventListener("click", () => {
    let shoeOptionCondition = shoeSelectOption.value;
    console.log(shoeOptionCondition);

    if (shoeOptionCondition === "ds") {
        selectSize.classList.remove("noDisplay");

    } else {
        selectSize.classList.add("noDisplay")
    }

});


let sizeClicked = document.querySelector(".sizeClicked");
let sizeOptions = document.querySelectorAll(".sizeOption");

sizeOptions.forEach(sizeOption => {
    sizeOption.addEventListener("click", (e) => {
        let clickedShoeItem = e.target;
        let clickedShoeSize = clickedShoeItem.querySelector(".usSize").innerText;
        let clickedShoePrice = clickedShoeItem.querySelector(".sizeMoney").innerText;
        console.log(clickedShoeSize, clickedShoePrice);



    })
})

///shoe condition select////