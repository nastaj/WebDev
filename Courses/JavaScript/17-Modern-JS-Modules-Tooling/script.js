// Importing module
// import { addToCart, totalPrice as price, tq } from './shoppingCart.js';
// console.log(shoppingCost);
// addToCart('bread', 5);
// console.log(price, tq);

console.log('Importing module');

// import * as ShoppingCart from './shoppingCart.js';
// ShoppingCart.addToCart('bread', 5);
// console.log(ShoppingCart.totalPrice);

import add from './shoppingCart.js';
add('pizza', 2);
