const navEl = document.querySelector('#categories');
console.log(navEl);
const navItemsEl = navEl.children;
console.log('navItemsEl', navItemsEl);
const res = navItemsEl.length;
console.log('Number of categories: ', res);
const itemTitleEl = document.querySelector('h2');
console.log(itemTitleEl.textContent);
