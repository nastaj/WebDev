// PROMISES
// 1.
// console.log('Program started');
// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('Program complete');
//   }, 3000);
// });
// console.log(myPromise);
// console.log('Program pending...');
// myPromise.then(value => console.log(value));

// 2.
// console.log('Program started');

// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('Program complete');
//   }, 3000);

//   setTimeout(() => {
//     reject('Program failure');
//   }, 2000);
// });

// console.log('Program in progress...');

// myPromise
//   .then(resolve => {
//     console.log(resolve);
//   })
//   .catch(reject => console.log(reject));

// 3.
// console.log('Program started');

// const myPromise = new Promise(resolve => {
//   setTimeout(() => {
//     resolve();
//   }, 3000);
// });

// console.log(myPromise);

// myPromise
//   .then(() => {
//     console.log('Step 1 Complete');
//     return new Promise(resolve => {
//       setTimeout(() => {
//         resolve();
//       }, 3000);
//     });
//   })
//   .then(() => {
//     console.log('Step 2 Complete');
//   });

// 4.
// console.log('Program started');

// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve({
//       data: 'Hello, friend!',
//       error: null,
//     });
//   }, 5000);
// });

// console.log('Promise pending...');
// console.log(myPromise);

// myPromise
//   .then(value => {
//     console.log(value);
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve('First promise chain complete!');
//       }, 2000);
//     });
//   })
//   .then(value => console.log(value));

// myPromise
//   .then(value => {
//     console.log(value);
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve('Second promise chain complete!');
//       }, 10000);
//     });
//   })
//   .then(value => console.log(value));

// 5.
// const promise1 = new Promise(resolve => {
//   setTimeout(() => {
//     resolve(10);
//   }, 3000);
// });

// const promise2 = new Promise(resolve => {
//   setTimeout(() => {
//     resolve(20);
//   }, 5000);
// });

// Promise.all([promise1, promise2]).then(values => {
//   const sum = values.reduce((val, acc) => acc + val, 0);
//   console.log(sum);
// });

// ASYNC/AWAIT
// 1.
// const fetchPokemon = async function () {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve({
//         data: {
//           name: 'Pikachu',
//           power: 20,
//         },
//       });
//       reject(new Error('Danger, danger!'));
//     }, 2000);
//   });
// };

// console.log('Program starting...');

// const getPokemon = async function () {
//   try {
//     const data = await fetchPokemon();
//     console.log(data);
//     console.log('Program complete!');
//   } catch (err) {
//     console.error(err);
//   }
// };
// getPokemon();

// 2.
// const fetchUser = async () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve({ data: { user: 'Monkey', admin: true } });
//     }, 1000);
//   });
// };

// const login = user => {
//   user.admin
//     ? console.log('Successfully logged in!')
//     : console.log('Failed to log in, please try again');
// };

// console.log('Program starting...');

// const getUser = async () => {
//   try {
//     const user = await fetchUser();
//     login(user.data);
//     console.log('Program complete!');
//   } catch (err) {
//     console.error(err);
//   }
// };

// getUser();

// 3.
// const fetchFast = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('Fast Done!');
//     }, 2000);
//   });
// };

// const fetchSlow = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('Slow Done');
//     }, 6000);
//   });
// };

// console.log('Program starting...');

// const fetchBoth = async () => {
//   try {
//     const fast = await fetchFast();
//     console.log(fast);
//     const slow = await fetchSlow();
//     console.log(slow);
//   } catch (err) {
//     console.error(err);
//   }
// };

// fetchBoth();

// 4.
const goGetCandies = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ candy: 'sour keys', quantity: 10 });
    }, 2000);
  });
};

const sellCandies = candy => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const price = 25 * candy.quantity;
      resolve(price);
    }, 3000);
  });
};

const buyCandies = async () => {
  try {
    const candy = await goGetCandies();
    const price = await sellCandies(candy);
    console.log(price);
  } catch (err) {
    console.error(err);
  }
};
buyCandies();

goGetCandies()
  .then(candy => sellCandies(candy))
  .then(price => console.log(price));
