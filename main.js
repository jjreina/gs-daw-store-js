import { url_categories, url_products, options_products } from "./apis";
import { Category } from "./classes/Category";
import "./style.css";

const container = document.querySelector(".container");
const selector = document.querySelector("#select-categories");

const getCategories = async () => {
  const responseCategories = await fetch(url_categories);
  const dataCategories = await responseCategories.json();
  dataCategories.forEach((category) => {
    let option = document.createElement("option");
    let categoryClass = new Category(category.CatName, category.CategoryValue);
    option.textContent = categoryClass.catName;
    option.value = categoryClass.catValue;
    selector.appendChild(option);
  });
};

getCategories();
