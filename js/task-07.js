const inputRef = document.querySelector('#font-size-control');
const span = document.querySelector('#text');

inputRef.addEventListener('input', onInputChange);

function onInputChange(event) {
  span.style.fontSize = event.currentTarget.value + 'px';

  console.log(event);
}
