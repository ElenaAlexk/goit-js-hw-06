const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
  if (event.currentTarget.value.length === Number(inputRef.dataset.length)) {
    inputRef.classList.add('valid');
    inputRef.classList.remove('invalid');
  }

  if (event.currentTarget.value.length !== Number(inputRef.dataset.length)) {
    inputRef.classList.add('invalid');
  }

  if (event.currentTarget.value.length === 0) {
    inputRef.classList.remove('valid');
    inputRef.classList.remove('invalid');
  }
  //console.log(event);
}
