const btnBurger = document.getElementById("btnBurger") ;
const burgerMenu = document.querySelector(".burger-menu-ul");

btnBurger.addEventListener("click", () => {
    console.log("btnBurger was clicked");

    burgerMenu.classList.toggle("active");
});




