const btnRandom = document.querySelector('.randomize');
const colorEl = document.querySelector('.color-text');
const hexArr = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
];

colorEl.textContent = 'background-color: #f4f4f4';

btnRandom.addEventListener('click', function () {
  let hexColorArr = [];
  let hexColor = '';

  for (i = 0; i < 6; i++) {
    let rollColor = Math.trunc(Math.random() * hexArr.length);
    let hexChar = hexArr[rollColor];
    hexColorArr.push(hexChar);
    hexColor += hexColorArr[i];
  }

  document.querySelector('body').style.backgroundColor = `#${hexColor}`;
  colorEl.textContent = `background-color: #${hexColor}`;
});
