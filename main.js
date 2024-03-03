import { url_categories, url_products, options_products } from "./apis";
import { Category } from "./classes/Category";
import { Product } from "./classes/Product";
import "./style.css";

const selector = document.querySelector("#select-categories");
const cardContainer = document.querySelector(".card_container");

const createOptionTag = (category) => {
  let option = document.createElement("option");
  let categoryClass = new Category(category.CatName, category.CategoryValue);
  option.textContent = categoryClass.catName;
  option.value = categoryClass.catValue;
  selector.appendChild(option);
};

const getCategories = async () => {
  const responseCategories = await fetch(url_categories);
  const dataCategories = await responseCategories.json();
  dataCategories.forEach((category) => {
    createOptionTag(category);
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
    createCard(product);
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

const createCard = (product) => {
  const cardDiv = document.createElement("div");
  const textDiv = document.createElement("div");
  const p_product_name = document.createElement("p");
  p_product_name.textContent = product.name;
  const span_product_price = document.createElement("span");
  span_product_price.textContent = product.price;
  cardDiv.className = "card";
  textDiv.className = "card_text";
  const img = document.createElement("img");
  img.src = product.imgUrl;
  img.alt = " Image not found";
  cardDiv.appendChild(img);
  textDiv.appendChild(p_product_name);
  textDiv.appendChild(span_product_price);
  cardDiv.appendChild(textDiv);
  cardContainer.appendChild(cardDiv);
};
