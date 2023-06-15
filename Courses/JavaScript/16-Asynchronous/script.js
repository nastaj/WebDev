'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
};

const renderCountry = function (data, className = '') {
  const languages = Object.values(data.languages);
  const currencies = Object.values(data.currencies);

  const html = `
      <article class="country ${className}">
      <img class="country__img" src="${data.flags.png}" />
      <div class="country__data">
        <h3 class="country__name">${data.name.official}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(
          +data.population / 1000000
        ).toFixed(1)}M people</p>
        <p class="country__row"><span>🗣️</span>${languages[0]}</p>
        <p class="country__row"><span>💰</span>${currencies[0].name}</p>
      </div>
    </article>
    `;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const getCountryNeighbours = function (neighbours) {
  neighbours.forEach(neighbour =>
    fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`)
      .then(response => response.json())
      .then(data => renderCountry(...data, 'neighbour'))
  );
};

///////////////////////////////////////

// const getCountryData = function (country) {
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//   request.send();

//   request.addEventListener('load', function () {
//     // Parse the received JSON resource to an usable object
//     //  It also needs to be destructured as parsing returns an array of one object
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     const languages = Object.values(data.languages);
//     const currencies = Object.values(data.currencies);

//     const html = `
//       <article class="country">
//       <img class="country__img" src="${data.flags.png}" />
//       <div class="country__data">
//         <h3 class="country__name">${data.name.official}</h3>
//         <h4 class="country__region">${data.region}</h4>
//         <p class="country__row"><span>👫</span>${(
//           +data.population / 1000000
//         ).toFixed(1)}M people</p>
//         <p class="country__row"><span>🗣️</span>${languages[0]}</p>
//         <p class="country__row"><span>💰</span>${currencies[0].name}</p>
//       </div>
//     </article>
//     `;

//     countriesContainer.insertAdjacentHTML('beforeend', html);
//     countriesContainer.style.opacity = 1;
//   });
// };

// getCountryData('poland');
// getCountryData('ireland');
// getCountryData('usa');

// const getCountryAndNeighbour = function (country) {
//   // AJAX call country 1
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//   request.send();

//   request.addEventListener('load', function () {
//     // Parse the received JSON resource to an usable object
//     //  It also needs to be destructured as parsing returns an array of one object
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     // Render country 1
//     renderCountry(data);

//     // Get neighbouring countries
//     const neighbours = data?.borders;
//     neighbours.forEach(neighbour => {
//       // AJAX call each country
//       const request = new XMLHttpRequest();
//       request.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
//       request.send();

//       request.addEventListener('load', function () {
//         const [data2] = JSON.parse(this.responseText);

//         // Render countries
//         renderCountry(data2, 'neighbour');
//       });
//     });

// // AJAX call country 2
// const request2 = new XMLHttpRequest();
// request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
// request2.send();

// request2.addEventListener('load', function () {
//   const [data2] = JSON.parse(this.responseText);
//   console.log(data2);

//   // Render country 2
//   renderCountry(data2, 'neighbour');
// });
//   });
// };

// getCountryAndNeighbour('poland');

//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//   request.send();

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(function (response) {
//       console.log(response);
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//       renderCountry(data[0]);
//     });
// };

// const getJSON = function (url, errorMsg = 'Something went wrong') {
//   return fetch(url).then(response => {
//     if (!response.ok) {
//       throw new Error(`Country not found (${response.status})`);
//     }
//     return response.json();
//   });
// };

// const getCountryData = function (country) {
//   // Country 1
//   getJSON(`https://restcountries.com/v3.1/name/${country}`, 'Country not found')
//     .then(([data]) => {
//       renderCountry(data);
//       console.log(data);
//       const neighbours = data.borders;

//       // Neighbours (2)
//       getCountryNeighbours(neighbours);
//     })
//     .catch(err => {
//       console.error(`${err} 🤯🤯🤯`);
//       renderError(`Something went wrong 🤯 ${err.message}. Try again!`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// btn.addEventListener('click', function () {
//   getCountryData('poland');
// });

// Lecture: Event Loop in Practice
// console.log('Test start');
// setTimeout(() => console.log('0 sec timer'), 0);
// Promise.resolve('Resolved promise 1').then(res => console.log(res));

// Promise.resolve('Resolved promise 2').then(res => {
//   for (let i = 0; i < 1000000000; i++) {}
//   console.log(res);
// });

// console.log('Test end');

// Lecture: Building Promises
// const lotteryPromise = new Promise(function (resolve, reject) {
//   console.log('Lottery draw is happening 🔮');
//   setTimeout(function () {
//     if (Math.random() >= 0.5) {
//       resolve('You WIN 💰');
//     } else {
//       reject(new Error('You lost your money 💩'));
//     }
//   }, 2000);
// });

// lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

// // Promisifying setTimeout
// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };

// wait(2)
//   .then(() => {
//     console.log('I waited for 2 seconds');
//     return wait(1);
//   })
//   .then(() => console.log('I waited additional 1 second'));

// Lecture: Async/await

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const whereAmI = async function () {
  try {
    // Geolocation
    const pos = await getPosition();
    const { latitude, longitude } = pos.coords;

    // Reverse geocoding
    const resGeo = await fetch(
      `https://geocode.xyz/${latitude},${longitude}?geoit=json`
    );
    if (!resGeo.ok) throw new Error('Problem getting location data');

    const dataGeo = await resGeo.json();

    if (dataGeo.city === 'Throttled! See geocode.xyz/pricing')
      throw new Error('Too many requests. Try again later.');

    console.log(dataGeo);

    // Country data
    // fetch(`https://restcountries.com/v3.1/name/${country}`).then(res =>
    //   console.log(res)
    // );

    const response = await fetch(
      `https://restcountries.com/v3.1/name/${dataGeo.country}`
    );

    if (!response.ok) throw new Error('Problem getting country');

    const [data] = await response.json();
    renderCountry(data);
    console.log(data);
  } catch (err) {
    console.error(`${err} 🤯`);
    renderError(`🤯 ${err.message}`);
  }
};

whereAmI();
console.log('FIRST');

// try {
//   let y = 1;
//   const x = 2;
//   x = 3;
// } catch (err) {
//   alert(err);
// }
