document.addEventListener("DOMContentLoaded", ()=> {
    let navbar = document.querySelector(".header__container");

    window.addEventListener("scroll", () => {
        let scroll = window.scrollY;

        if(scroll > 120 ){
            navbar.classList.add("header__container--fixed");
        }else {
            navbar.classList.remove("header__container--fixed");
        }
    });
})