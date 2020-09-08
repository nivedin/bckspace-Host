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
    document.documentElement.style.transition = "all 1s ease";
    document.documentElement.scrollTop = 0;
});



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



///////table sorting//////
const tableRows = document.querySelectorAll('.tableSneaker');
let sortBtn = document.querySelector(".sortBtn");

sortBtn.addEventListener("click", () => {

    tableRows.forEach(tableRow => {
        let numberOfSortRow = tableRows.length;
        let sortNumber = tableRow.getAttribute("data-sort");
        for (let i = 0; i < numberOfSortRow; i++) {

        }

    })


});
///////table sorting//////



//////////alert popUp//////////
let itemRows = document.querySelectorAll(".itemRow");
let popUpContainer = document.querySelector(".createAlertPopup");
let popUpContainerClose = document.querySelector(".popUpcloseIcon");

itemRows.forEach(itemRow => {
    itemRow.addEventListener("click", (e) => {
        let clickedItem = e.target;
        if (clickedItem.classList.contains("itemRow")) {
            let clickedSneakerName = clickedItem.querySelector(".sneakerName").innerText;
            // console.log(clickedSneakerName);
            popUpContainer.classList.remove("alertPopUpClose");
            let popUpSneakerName = popUpContainer.querySelector(".sneakerNamePopUp");
            popUpSneakerName.innerHTML = `<b>${clickedSneakerName}</b>`;
            console.log(popUpSneakerName.innerText);
            popUpContainerClose.addEventListener("click", () => {
                popUpContainer.classList.add("alertPopUpClose");

            })
        } else {
            ""
        }

    })
})
//////////alert popUp//////////