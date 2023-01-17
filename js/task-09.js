function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const span = document.querySelector('.color');
const button = document.querySelector('.change-color');
const body = document.querySelector('body');

button.addEventListener('click', onButtonClick);

function onButtonClick(event) {
  let color = getRandomHexColor();
  body.style.backgroundColor = color;

  span.textContent = color;
  console.log(event);
}
