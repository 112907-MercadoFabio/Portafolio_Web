// Selecciones de hamburguesas Nav
const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");

// Seleccionar el Scroll
const scrollUp = document.querySelector(".scroll-up");

// Seleccionar nav links
const navLink = document.querySelectorAll(".nav-link");

// Función del Menu Hamburgesa
burger.addEventListener("click", () => {
  ul.classList.toggle("show");
});

// Cerrar el menú de hamburguesas cuando se hace clic en un enlace
navLink.forEach((link) =>
  link.addEventListener("click", () => {
    ul.classList.remove("show");
  })
);

// Desplazarse a la funcionalidad superior
scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});


