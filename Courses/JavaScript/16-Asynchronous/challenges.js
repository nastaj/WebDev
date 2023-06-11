const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
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
};

const getCountryNeighbours = function (neighbours) {
  neighbours.forEach(neighbour =>
    fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`)
      .then(response => response.json())
      .then(data => renderCountry(...data, 'neighbour'))
  );
};

const whereAmI = function (lat, lng) {
  fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
    .then(response => {
      console.log(response);

      if (!response.ok) {
        renderError('Country not found! Try again.');
      }

      return response.json();
    })
    .then(data => {
      console.log(data);

      if (data.city === 'Throttled! See geocode.xyz/pricing') {
        const errorMsg = 'Throttled! Try again soon.';
        renderError(errorMsg);
        throw new Error(errorMsg);
      }

      if (data.error)
        throw new Error(`${data.error.description} (${data.error.code})`);

      console.log(`You are in ${data.city}, ${data.country}.`);
      return fetch(`https://restcountries.com/v3.1/name/${data.country}`);
    })
    .then(response => response.json())
    .then(([data]) => {
      renderCountry(data);
      const neighbours = data.borders;
      getCountryNeighbours(neighbours);
    })
    .catch(err => console.log(err.message))
    .finally(() => (countriesContainer.style.opacity = 1));
};

// whereAmI(52.508, 13.381);
// whereAmI(19.037, 72.873);
// whereAmI(-33.933, 18.474);

btn.addEventListener('click', () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(pos => {
      const { latitude, longitude } = pos.coords;
      whereAmI(latitude, longitude);
    });
  }
});
