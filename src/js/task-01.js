const navUl = document.querySelector('#categories').children;
const navItemsEl = navUl.length;
console.log(`Number of categories: ${navItemsEl}`);

for (let elem of navUl) {
  let category = elem.firstElementChild.textContent;
  let itemsLength = elem.lastElementChild.children.length;
  console.log(`Category: ${category}`);
  console.log(`Elements: ${itemsLength}`);
}
