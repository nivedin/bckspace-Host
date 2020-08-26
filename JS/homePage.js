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


AOS.init();


// if (window.innerWidth < 768) {
//     var swiper = new Swiper('.swiper-container', {
//         slidesPerView: 1,
//         spaceBetween: 10,
//         navigation: {
//             nextEl: '.swiper-button-next',
//             prevEl: '.swiper-button-prev',
//         },

//     });

// } else {
//     var swiper = new Swiper('.swiper-container', {
//         slidesPerView: 3,
//         spaceBetween: 10,
//         navigation: {
//             nextEl: '.swiper-button-next',
//             prevEl: '.swiper-button-prev',
//         },

//     });
// }



new Glider(document.querySelector('.glider'), {
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

let toTopBtn = document.querySelector(".yoUpBtn");

toTopBtn.addEventListener("click", () => {
    var body = $("html, body");
    body.stop().animate({
        scrollTop: 0
    }, 500, 'swing', function () {});
})

// function call() {

// }