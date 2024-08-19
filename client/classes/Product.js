export class Product {
  #name;
  #price;
  #imgUrl;
  constructor(name, price) {
    this.#name = name;
    this.#price = price;
  }

  get name() {
    return this.#name;
  }

  get price() {
    return this.#price;
  }

  get imgUrl() {
    return this.#imgUrl;
  }

  set name(name) {
    this.#name = name;
  }

  set price(price) {
    this.#price = price;
  }

  set imgUrl(imgUrl) {
    this.#imgUrl = imgUrl;
  }
}
