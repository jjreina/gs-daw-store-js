import { url_categories, url_products, options_products } from "./apis";
import { createCard, createOptionTag } from "./utils";
import { Product } from "./classes/Product";
import "./style.css";

const selector = document.querySelector("#select-categories");
const cardContainer = document.querySelector(".card_container");

const getCategories = async () => {
  const responseCategories = await fetch(url_categories);
  const dataCategories = await responseCategories.json();
  dataCategories.forEach((category) => {
    createOptionTag(selector, category);
  });
};

selector.addEventListener("change", async (event) => {
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
});

getCategories();

const ERROR_MESSAGE = "is not ok";

export const parseToProductClass = (literalProductObject) => {
  return new Promise((resolve, reject) => {
    if (literalProductObject === null || literalProductObject === undefined) {
      reject(`${literalProductObject} ${ERROR_MESSAGE}`);
    } else {
      let literalProductArray = literalProductObject.map((element) => {
        let product = new Product();
        product.name = element.name;
        product.price = element.price.formattedValue;
        product.imgUrl = element.images[0].baseUrl;
        return product;
      });
      resolve(literalProductArray);
    }
  });
};
