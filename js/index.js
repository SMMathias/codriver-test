import renderCoDriver from "./render.js";

renderCoDriver();

console.log(renderCoDriver);

const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav-links");

burger.addEventListener("click", () => {
  nav.classList.toggle("active");
});
