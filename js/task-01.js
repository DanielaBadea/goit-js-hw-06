// Scrieți un script care:

// 1.Va număra și afișa în consolă numărul total de categorii din ul#categories, adică elementele li.item.
// 2.Pentru fiecare element li.item din lista ul#categories, va găsi și afișa în consolă titlul elementului 
// (tag-ul <h2>) și numărul de elemente din acea categorie (toate elementele <li>).

// Rexolvare pct. 1

// const listCategories = document.querySelector('#categories');
// console.log(listCategories);

const numberItems = document.querySelectorAll('.item')
console.log(`Number of categories: ${numberItems.length}`);

// Rezolvare pct. 2 

numberItems.forEach(element => {
    const titleItems = element.querySelector('h2').textContent;
    console.log(`Category: ${titleItems}`);
    const numberTitleItems = element.querySelectorAll('li');
    console.log(`Elements: ${numberTitleItems.length}`);
});

// sau 

// const titles = document.querySelectorAll("h2").length;
// console.log("Number of categories:", titles);

// const items = document.querySelectorAll("li.item");
// for (const item of items) {
//     const category = item.firstElementChild.textContent;
//     const elements = item.querySelectorAll("li").length;
//     console.log(`Category: ${category} \n Elements: ${elements}`);
// }
