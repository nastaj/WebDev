// Lecture: Modules
// Importing module
// import { addToCart, totalPrice as price, tq } from './shoppingCart.js';
// console.log(shoppingCost);
// addToCart('bread', 5);
// console.log(price, tq);

// console.log('Importing module');

// import * as ShoppingCart from './shoppingCart.js';
// ShoppingCart.addToCart('bread', 5);
// console.log(ShoppingCart.totalPrice);

// import add from './shoppingCart.js';
// add('pizza', 2);
// import { Item } from './shoppingCart.js';
// const oranges = new Item('orange', 0.99, 10);
// oranges.logDescription();

// Lecture: Top-level await
// console.log('Start fetching');
// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await res.json();
// console.log(data);
// console.log('Something');

// const getLastPost = async function () {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//   const data = await res.json();
//   console.log(data);

//   return { title: data.at(-1).title, text: data.at(-1).body };
// };

// const lastPost = getLastPost();
// console.log(lastPost);

// Not very clean
// lastPost.then(last => console.log(last));

// const lastPost2 = await getLastPost();
// console.log(lastPost2);

// Lecture: Module Pattern (Legacy)
// const ShoppingCart2 = (function () {
//   const cart = [];
//   const shoppingCost = 10;
//   const totalPrice = 237;
//   const totalQuantity = 23;

//   const addToCart = function (product, quantity) {
//     cart.push({ product, quantity });
//     console.log(`${quantity} ${product} added to cart`);
//   };

//   const orderStock = function (product, quantity) {
//     console.log(`${quantity} ${product} ordered from supplier`);
//   };

//   return {
//     addToCart,
//     cart,
//     totalPrice,
//     totalQuantity,
//   };
// })();

// ShoppingCart2.addToCart('apple', 4);
// ShoppingCart2.addToCart('pizza', 2);

// Lecture: CommonJS Modules

// // Export
// export.addToCart = function (product, quantity) {
//         cart.push({ product, quantity });
//         console.log(`${quantity} ${product} added to cart`);
//       };

// // Import
// const {addToCart} = require('./shoppingCart.js')

// Lecture: Introduction to NPM
import cloneDeep from './node_modules/lodash-es/cloneDeep.js';

const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 5 },
  ],
  user: { loggedIn: true },
};
// const stateClone = Object.assign({}, state);
state.user.loggedIn = false;
// console.log(stateClone);

const stateDeepClone = cloneDeep(state);
console.log(stateDeepClone);
