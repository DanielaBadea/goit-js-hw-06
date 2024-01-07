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
// Folosiți matricea de obiecte images, pentru a crea elementele <img> imbricate în <li>. Pentru a crea marcajul, vor fi de mare ajutor template strings și metoda insertAdjacentHTML().

// Toate elementele galeriei trebuie adăugate la DOM dintr-o singură operație.
// Adăugați un stil minim de poziționare a galeriei (flexbox sau grid) prin intermediul claselor CSS.

const listPhotos = document.querySelector('.gallery');
console.log(listPhotos);

images.forEach(element => {
  // console.log(element);
  const itemPhotos = document.createElement('li');
  // console.log(itemPhotos);
const atrPhotos = `<img src = "${element.url}" alt = "${element.alt}">`;
console.log(atrPhotos);
  itemPhotos.insertAdjacentHTML("beforeend", atrPhotos);
  listPhotos.append(itemPhotos);
  // pentru a putea prelucra in css trebuie sa adaugam clasa pe li 
  itemPhotos.classList.add('image');
  console.log(itemPhotos);
});

// sau 

// const list = document.querySelector(".gallery");
// const markup = images
//     .map((img) => `<img src=${img.url} alt=${img.alt} width = 30% height = auto>`)
//     .join("");
// list.insertAdjacentHTML("afterbegin", markup);

// console.log(list);
// console.log(markup);