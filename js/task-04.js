const counterSub = document.querySelector('[data-action="decrement"]');
const counterAdd = document.querySelector('[data-action="increment"]');
const spanRef = document.querySelector('#value');

let counterValue = 0;
counterSub.addEventListener('click', onDecrement);
counterAdd.addEventListener('click', onIncrement);

function onDecrement() {
  counterValue -= 1;
  spanRef.textContent = counterValue;
}

function onIncrement() {
  counterValue += 1;
  spanRef.textContent = counterValue;
}
