const btnRandom = document.querySelector('.randomize');
const colorEl = document.querySelector('.color-text');
const colorsArr = ['yellow', 'green', '#333', 'orange', 'rgb(234, 106, 305)'];

colorEl.textContent = 'background-color: #f4f4f4';

btnRandom.addEventListener('click', function () {
  const rollColor = Math.trunc(Math.random() * colorsArr.length);

  document.querySelector(
    'body'
  ).style.backgroundColor = `${colorsArr[rollColor]}`;

  colorEl.textContent = `background-color: ${colorsArr[rollColor]}`;
});
