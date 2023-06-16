// Challenge #1
// const btn = document.querySelector('.btn-country');
// const countriesContainer = document.querySelector('.countries');

// const renderError = function (msg) {
//   countriesContainer.insertAdjacentText('beforeend', msg);
// };

// const renderCountry = function (data, className = '') {
//   const languages = Object.values(data.languages);
//   const currencies = Object.values(data.currencies);

//   const html = `
//         <article class="country ${className}">
//         <img class="country__img" src="${data.flags.png}" />
//         <div class="country__data">
//           <h3 class="country__name">${data.name.official}</h3>
//           <h4 class="country__region">${data.region}</h4>
//           <p class="country__row"><span>👫</span>${(
//             +data.population / 1000000
//           ).toFixed(1)}M people</p>
//           <p class="country__row"><span>🗣️</span>${languages[0]}</p>
//           <p class="country__row"><span>💰</span>${currencies[0].name}</p>
//         </div>
//       </article>
//       `;

//   countriesContainer.insertAdjacentHTML('beforeend', html);
// };

// const getCountryNeighbours = function (neighbours) {
//   neighbours.forEach(neighbour =>
//     fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`)
//       .then(response => response.json())
//       .then(data => renderCountry(...data, 'neighbour'))
//   );
// };

// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };

// const whereAmI = function () {
//   getPosition()
//     .then(pos => {
//       const { latitude, longitude } = pos.coords;
//       return fetch(`https://geocode.xyz/${latitude},${longitude}?geoit=json`);
//     })
//     .then(response => {
//       if (!response.ok) {
//         renderError('Country not found! Try again.');
//       }

//       return response.json();
//     })
//     .then(data => {
//       if (data.city === 'Throttled! See geocode.xyz/pricing') {
//         const errorMsg = 'Throttled! Try again soon.';
//         renderError(errorMsg);
//         throw new Error(errorMsg);
//       }

//       if (data.error)
//         throw new Error(`${data.error.description} (${data.error.code})`);

//       console.log(`You are in ${data.city}, ${data.country}.`);
//       return fetch(`https://restcountries.com/v3.1/name/${data.country}`);
//     })
//     .then(response => response.json())
//     .then(([data]) => {
//       renderCountry(data);
//       const neighbours = data.borders;
//       getCountryNeighbours(neighbours);
//     })
//     .catch(err => console.log(err.message))
//     .finally(() => (countriesContainer.style.opacity = 1));
// };

// // whereAmI(52.508, 13.381);
// // whereAmI(19.037, 72.873);
// // whereAmI(-33.933, 18.474);

// btn.addEventListener('click', whereAmI);

// Challenge #2

const imagesContainer = document.querySelector('.images');

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

let currentImg;

const createImage = function (imgPath) {
  return new Promise((resolve, reject) => {
    const img = document.createElement('img');
    img.src = imgPath;
    currentImg = img;

    img.addEventListener('load', () => {
      imagesContainer.append(img);
      resolve(img);
    });

    img.addEventListener('error', () => {
      reject(new Error('Image load failed'));
    });
  });
};

// createImage('img/img-1.jpg')
//   .then(() => {
//     console.log('Image 1 loaded');
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//     return createImage('img/img-2.jpg');
//   })
//   .then(() => {
//     console.log('Image 2 loaded');
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//     return createImage('img/img-3.jpg');
//   })
//   .then(() => console.log('Image 3 loaded'))
//   .catch(err => console.error(err));

// Challenge #2
const loadNPause = async function () {
  try {
    await createImage('img/img-1.jpg');
    console.log('Image 1 loaded');
    await wait(2);
    currentImg.style.display = 'none';
    await createImage('img/img-2.jpg');
    console.log('Image 2 loaded');
    await wait(2);
    currentImg.style.display = 'none';
    await createImage('img/img-3.jpg');
    console.log('Image 3 loaded');
  } catch (err) {
    console.error(err);
  }
};

// loadNPause();

const imgArr = ['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg'];

const loadAll = async function (imgArr) {
  try {
    const imgs = imgArr.map(async img => await createImage(img));
    const imgsPromise = await Promise.all(imgs);
    imgsPromise.forEach(img => img.classList.add('parallel'));
  } catch (err) {
    console.log(err);
  }
};

loadAll(imgArr);
