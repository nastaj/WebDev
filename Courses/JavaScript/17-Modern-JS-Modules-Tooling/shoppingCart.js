// Exporting module
// console.log('Exporting module');

// Blocking code
// console.log('Start fetching users');
// await fetch('https://jsonplaceholder.typicode.com/users');
// console.log('Finish fetching users');

const shoppingCost = 10;
const cart = [];

export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
};

const totalPrice = 237;
const totalQuantity = 23;

export { totalPrice, totalQuantity as tq };

export default function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
}

export const Item = class {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

  logDescription() {
    console.log(
      `${this.name}, costing ${this.price}, with quantity of ${this.quantity}`
    );
  }
};
