import renderCoDriver from "./render.js";

renderCoDriver();

console.log(renderCoDriver);

document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");

  burger.addEventListener("click", () => {
    nav.classList.toggle("active");
  });

  // Pricing card hover highlight
  const pricingCards = document.querySelectorAll(".pricing-card");

  pricingCards.forEach((card) => {
    card.addEventListener("mouseover", () => {
      pricingCards.forEach((c) => c.classList.remove("active"));
      card.classList.add("active");
    });

    card.addEventListener("mouseout", () => {
      card.classList.remove("active");
      document.querySelector(".pricing-card-2").classList.add("active");
    });
  });
});

const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav-links");

burger.addEventListener("click", () => {
  nav.classList.toggle("active");
});
