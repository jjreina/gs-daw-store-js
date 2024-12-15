import { Product } from "../classes/Product";

const ERROR_MESSAGE = "is not ok";

export const parseToProductClass = (literalProductObject) => {
  return new Promise((resolve, reject) => {
    if (literalProductObject === null || literalProductObject === undefined) {
      reject(new Error(`${literalProductObject} ${ERROR_MESSAGE}`));
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
