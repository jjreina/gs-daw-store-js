import { Category } from "./classes/Category";

export const createCard = (cardContainer, product) => {
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

export const createOptionTag = (selector, category) => {
  let option = document.createElement("option");
  let categoryClass = new Category(category.CatName, category.CategoryValue);
  option.textContent = categoryClass.catName;
  option.value = categoryClass.catValue;
  selector.appendChild(option);
};
