document.addEventListener("DOMContentLoaded", () => {
  let mobile_btn = document.querySelector(".navbar__mobile-btn");
  let mobile_menu = document.querySelector(".menu-mobile");

  //Función mostrar-ocultar menu
  const showHiddenMenu = () => {
    let show = document.querySelector(".menu-mobile--show");

    if (show) {
      mobile_menu.classList.remove("menu-mobile--show");
    } else {
      mobile_menu.classList.add("menu-mobile--show");
    }
  };

  mobile_btn.addEventListener("click", showHiddenMenu);

  window.addEventListener("resize", () => {
    let window_width = parseInt(document.body.clientWidth);

    if (window_width >= 1200) {
      mobile_menu.classList.remove("menu-mobile--show");
    }
  });

  let btn_close = document.querySelector(".menu-mobile__close");

  btn_close.addEventListener("click", showHiddenMenu);

  let arrowIcons = document.querySelectorAll(".menu-mobile__icon-small");

  arrowIcons.forEach((icon) => {
    icon.addEventListener("click", (event) => {

      event.preventDefault();

      let submenu = icon.parentElement.nextElementSibling;

      if (submenu.style.display === "block") {
        submenu.style.display = "none";
      } else {
        submenu.style.display = "block";
      }
    });
  });
});
