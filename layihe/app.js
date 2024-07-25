// document.addEventListener("DOMContentLoaded", function() {
//     let mainDropdownButton = document.getElementById("mainDropdownButton");
//     let mainDropdownMenu = document.getElementById("mainDropdownMenu");
//     let mainButtonIcon = document.getElementById("mainButtonIcon");
//     let categoriesIcon = document.getElementById("categoriesIcon");
//     let subcategoryDropdownMenu = document.getElementById("subcategoryDropdownMenu");
//     let isMainMenuOpen = false;
//     let isSubMenuOpen = false;

//     mainDropdownButton.addEventListener("click", function(event) {
//         event.stopPropagation();

//         if (isSubMenuOpen) {
//             subcategoryDropdownMenu.classList.remove("showw");
//             isSubMenuOpen = false;
//             categoriesIcon.src = "photo/sag.png"; 
//         }

//         if (isMainMenuOpen) {
//             mainDropdownMenu.classList.remove("show");
//             mainButtonIcon.src = "photo/Icon.png";
//         } else {
//             mainDropdownMenu.classList.add("show");
//             mainButtonIcon.src = "photo/x.png";
//         }
//         isMainMenuOpen = !isMainMenuOpen;
//     });

//     categoriesIcon.addEventListener("click", function(event) {
//         event.stopPropagation();
//         if (isSubMenuOpen) {
//             subcategoryDropdownMenu.classList.remove("showw");
//             categoriesIcon.src = "photo/sag.png"; 
//         } else {
//             subcategoryDropdownMenu.classList.add("showw");
//             categoriesIcon.src = "photo/2pt-stroke.png";
//         }
//         isSubMenuOpen = !isSubMenuOpen;
//     });

//     window.addEventListener("click", function(event) {
//         if (!event.target.matches('#mainDropdownButton') && !event.target.matches('#mainButtonIcon') && !event.target.matches('#categoriesIcon')) {
//             if (mainDropdownMenu.classList.contains('show')) {
//                 mainDropdownMenu.classList.remove('show');
//                 mainButtonIcon.src = "photo/Icon.png";
//                 isMainMenuOpen = false;
//             }
//             if (subcategoryDropdownMenu.classList.contains('showw')) {
//                 subcategoryDropdownMenu.classList.remove('showw');
//                 isSubMenuOpen = false;
//             }
//             categoriesIcon.src = "photo/sag.png";
//         }
//     });
// });

document.addEventListener("DOMContentLoaded", function() {
    let mainDropdownButton = document.getElementById("mainDropdownButton");
    let mainDropdownMenu = document.getElementById("mainDropdownMenu");
    let mainButtonIcon = document.getElementById("mainButtonIcon");
    let categoriesIcon = document.getElementById("categoriesIcon");
    let subcategoryDropdownMenu = document.getElementById("subcategoryDropdownMenu");
    let menuLinks = document.querySelectorAll(".dropdown-content a");
    let categoryContainer = document.querySelector(".category-container");
    let isMainMenuOpen = false;
    let isSubMenuOpen = false;

    mainDropdownButton.addEventListener("click", function(event) {
        event.stopPropagation();

        if (isSubMenuOpen) {
            subcategoryDropdownMenu.classList.remove("showw");
            isSubMenuOpen = false;
            categoriesIcon.src = "photo/sag.png"; 
            categoryContainer.classList.remove("move-left");
        }

        if (isMainMenuOpen) {
            mainDropdownMenu.classList.remove("show");
            mainButtonIcon.src = "photo/Icon.png";
            menuLinks.forEach(link => link.classList.remove("move-left"));
        } else {
            mainDropdownMenu.classList.add("show");
            mainButtonIcon.src = "photo/x.png";
        }
        isMainMenuOpen = !isMainMenuOpen;
    });

    categoryContainer.addEventListener("mouseover", function(event) {
        event.stopPropagation();
        subcategoryDropdownMenu.classList.add("showw");
        categoriesIcon.src = "photo/2pt-stroke.png";
        menuLinks.forEach(link => link.classList.add("move-left"));
        categoryContainer.classList.add("move-left");
        isSubMenuOpen = true;
    });

    categoryContainer.addEventListener("mouseout", function(event) {
        if (!subcategoryDropdownMenu.contains(event.relatedTarget)) {
            subcategoryDropdownMenu.classList.remove("showw");
            categoriesIcon.src = "photo/sag.png";
            menuLinks.forEach(link => link.classList.remove("move-left"));
            categoryContainer.classList.remove("move-left");
            isSubMenuOpen = false;
        }
    });

    subcategoryDropdownMenu.addEventListener("mouseleave", function(event) {
        subcategoryDropdownMenu.classList.remove("showw");
        categoriesIcon.src = "photo/sag.png";
        menuLinks.forEach(link => link.classList.remove("move-left"));
        categoryContainer.classList.remove("move-left");
        isSubMenuOpen = false;
    });

    window.addEventListener("click", function(event) {
        if (!event.target.matches('#mainDropdownButton') && !event.target.matches('#mainButtonIcon') && !event.target.matches('#categoriesIcon')) {
            if (mainDropdownMenu.classList.contains('show')) {
                mainDropdownMenu.classList.remove('show');
                mainButtonIcon.src = "photo/Icon.png";
                isMainMenuOpen = false;
            }
            if (subcategoryDropdownMenu.classList.contains('showw')) {
                subcategoryDropdownMenu.classList.remove('showw');
                isSubMenuOpen = false;
            }
            categoriesIcon.src = "photo/sag.png";
            menuLinks.forEach(link => link.classList.remove("move-left"));
            categoryContainer.classList.remove("move-left");
        }
    });
});

