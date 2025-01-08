export const url_categories = "http://localhost:3000/categories";

const default_laguage_code = "es";
const default_contry_code = "es";
const default_limit_producrs = "8";

export const url_products = `https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list?country=${default_contry_code}&lang=${default_laguage_code}&currentpage=0&pagesize=${default_limit_producrs}&categories=`;
export const options_products = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "6185a78aa2mshb04ae8991085691p1d093bjsnae8623070f4a",
    "X-RapidAPI-Host": "apidojo-hm-hennes-mauritz-v1.p.rapidapi.com",
  },
};
