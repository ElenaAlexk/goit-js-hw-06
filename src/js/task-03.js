const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
//const gallery = document.querySelector('.gallery');

//const createGallery = images => {
// return images.map(({ url, alt }) => {
// const item = document.createElement('li');
// item.insertAdjacentHTML('afterbegin', `<img src = "${url}" alt = "${alt}" width = "350"></img>`);
//return item;
//});
//};
//const imgListItems = createGallery(images);
//gallery.append(...imgListItems);
//console.log(gallery);

const gallery = document.querySelector('.gallery');
console.log(gallery);

const galleryMarkup = images.map(({ url, alt }) => `<li><img src="${url}" alt="${alt}" width = "300"></li>`).join('');

console.log(galleryMarkup);

gallery.insertAdjacentHTML('afterbegin', galleryMarkup);
