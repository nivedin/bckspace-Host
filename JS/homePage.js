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

////////navHamclicked//////////
let deskHam = document.querySelector(".deskNavBurger");
let noClickNav = document.querySelector(".noClick");
let clickNav = document.querySelector(".hamClicked");
let bckspaceLogUser = document.querySelector(".bckspaceLogUser");
let thebckName = document.querySelector(".navContainer2 .thebckName");

window.addEventListener("scroll", (e) => {
    let windowTop = window.scrollY;

    if (windowTop >= 350) {
        bckspaceLogUser.style.animation = "bckspaceLogUserAnimCome 0.4s ease forwards";
        thebckName.style.animation = "bckspaceLogUserAnimCome 0.4s ease forwards";
        bckspaceLogUser.style.display = "none";
        thebckName.style.display = "block";
    } else {
        bckspaceLogUser.style.animation = "bckspaceLogUserAnimGo 0.4s ease forwards";
        thebckName.style.animation = "bckspaceLogUserAnimGo 0.4s ease forwards";
        bckspaceLogUser.style.display = "block";
        thebckName.style.display = "none";
    }
});

deskHam.addEventListener("click", () => {
    noClickNav.classList.add("noDisplay");
    noClickNav.style.animation = "navDeskAnim 0.6s ease forwards";
    clickNav.style.animation = "navDeskAnim 0.6s ease forwards";
    clickNav.classList.remove("noDisplay");
    // window.addEventListener("scroll", () => {
    //     noClickNav.classList.remove("noDisplay");
    //     noClickNav.style.animation = "navDeskAnim 0.6s ease forwards";
    //     clickNav.style.animation = "navDeskAnim 0.6s ease forwards";
    //     clickNav.classList.add("noDisplay");
    // })

})
////////navHamclicked//////////


let searchBtns = document.querySelectorAll(".search");
let searchModal = document.querySelector(".searchModal");
let scearchCloseIcon = document.querySelector(".scearchCloseIcon");

searchBtns.forEach(searchBtn => {
    searchBtn.addEventListener("click", () => {
        searchModal.classList.add("openModal");

    })
})

scearchCloseIcon.addEventListener("click", () => {
    searchModal.classList.remove("openModal");
});


AOS.init();

new Glider(document.querySelector('.glider1'), {
    slidesToShow: 1,
    scrollLock: true,
    slidesToScroll: 1,
    dots: '#dots',
    draggable: true,
    arrows: {
        prev: '.glider-prev',
        next: '.glider-next'
    }
});

new Glider(document.querySelector('.glider2'), {
    // Mobile-first defaults
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    scrollLock: true,

    arrows: {
        prev: '.gliderPrev',
        next: '.gliderNext'
    },
    responsive: [{
        // screens greater than >= 775px
        breakpoint: 775,
        settings: {
            // Set to `auto` and provide item width to adjust to viewport
            slidesToShow: 'auto',
            slidesToScroll: 'auto',
            itemWidth: 150,
            duration: 0.25

        }
    }, {
        // screens greater than >= 1024px
        breakpoint: 800,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            itemWidth: 150,
            duration: 0.25
        }
    }]
});
new Glider(document.querySelector('.glider3'), {
    // Mobile-first defaults
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    scrollLock: true,

    arrows: {
        prev: '.glider3Prev',
        next: '.glider3Next'
    },
    responsive: [{
        // screens greater than >= 775px
        breakpoint: 775,
        settings: {
            // Set to `auto` and provide item width to adjust to viewport
            slidesToShow: 'auto',
            slidesToScroll: 'auto',
            itemWidth: 150,
            duration: 0.25

        }
    }, {
        // screens greater than >= 1024px
        breakpoint: 800,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            itemWidth: 150,
            duration: 0.25
        }
    }]
});




let toTopBtn = document.querySelector(".yoUpBtn");

toTopBtn.addEventListener("click", () => {
    document.documentElement.style.transition = "all 1s ease";
    document.documentElement.scrollTop = 0;
});

// let mobileHeader = document.querySelector(".moblileHeader");
// let desktopHeader = document.querySelector(".desktopHeader");

// if (window.innerWidth > 700) {
//     window.addEventListener("scroll", (e) => {
//         let windowTop = window.scrollY;

//         if (windowTop >= 350) {

//             mobileHeader.style.display = "none";
//             desktopHeader.style.display = "block";

//         } else {
//             mobileHeader.style.display = "block";
//             desktopHeader.style.display = "none";
//         }
//     })
// } else {
//     mobileHeader.style.display = "block";
//     desktopHeader.style.display = "none";
// }