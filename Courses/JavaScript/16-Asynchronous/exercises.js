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
const promise1 = new Promise(resolve => {
  setTimeout(() => {
    resolve(10);
  }, 3000);
});

const promise2 = new Promise(resolve => {
  setTimeout(() => {
    resolve(20);
  }, 5000);
});

Promise.all([promise1, promise2]).then(values => {
  const sum = values.reduce((val, acc) => acc + val, 0);
  console.log(sum);
});
