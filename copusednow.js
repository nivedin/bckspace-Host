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
    bckspaceLogUser.style.animation =
      "bckspaceLogUserAnimCome 0.4s ease forwards";
    thebckName.style.animation = "bckspaceLogUserAnimCome 0.4s ease forwards";
    bckspaceLogUser.style.display = "none";
    thebckName.style.display = "block";
  } else {
    bckspaceLogUser.style.animation =
      "bckspaceLogUserAnimGo 0.4s ease forwards";
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
});
////////navHamclicked//////////

let searchBtns = document.querySelectorAll(".search");
let searchModal = document.querySelector(".searchModal");
let scearchCloseIcon = document.querySelector(".scearchCloseIcon");

searchBtns.forEach((searchBtn) => {
  searchBtn.addEventListener("click", () => {
    searchModal.classList.add("openModal");
  });
});

scearchCloseIcon.addEventListener("click", () => {
  searchModal.classList.remove("openModal");
});

AOS.init();

//////////palce & sell btn clicked/////////
let placeBtn = document.querySelector(".placeAsk");
let sellBtn = document.querySelector(".sellNow");

let placeAskContainer = document.querySelector(".placeAskClicked");
let sellNowBtnContainer = document.querySelector(".sellNowBtnClicked");

placeBtn.addEventListener("click", () => {
  placeAskContainer.classList.remove("noDisplay");
  sellNowBtnContainer.classList.add("noDisplay");
  placeBtn.classList.add("activeBtnClicked");
  sellBtn.classList.remove("activeBtnClicked");
});

sellBtn.addEventListener("click", () => {
  placeAskContainer.classList.add("noDisplay");
  sellNowBtnContainer.classList.remove("noDisplay");
  placeBtn.classList.remove("activeBtnClicked");
  sellBtn.classList.add("activeBtnClicked");
});

//////////palce & sell btn clicked/////////
