import { url_categories, url_products, options_products } from "./apis";
import { createCard, createOptionTag } from "./helpers/domHelper";
import { parseToProductClass } from "./helpers/promiseHelper";

import "./style.css";

const selector = document.querySelector("#select-categories");
const cardContainer = document.querySelector(".card_container");

const getCategories = async () => {
  try {
    const responseCategories = await fetch(url_categories);
    const dataCategories = await responseCategories.json();
    dataCategories.forEach((category) => {
      createOptionTag(selector, category);
    });
  } catch (error) {
    console.error(new Error(error));
  }
};

selector.addEventListener("change", async (event) => {
  try {
    cardContainer.textContent = "";
    const responseProducts = await fetch(
      url_products + event.target.value,
      options_products
    );
    const dataProducts = await responseProducts.json();
    const products = await parseToProductClass(dataProducts.results);
    products.forEach((product) => {
      createCard(cardContainer, product);
    });
  } catch (error) {
    console.error(new Error(error));
  }
});

getCategories();
