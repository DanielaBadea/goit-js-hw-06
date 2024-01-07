const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// Scrieți un script care pentru fiecare element al matricei ingredients:

// Va crea un element <li> separat. Asigurați-vă că folosiți metoda document.createElement().
// Adăugați numele ingredientului ca conținut text.
// Adăugați clasa item la element.
// Apoi va insera toate elementele <li> dintr-o singură operație în lista ul#ingredients.

const list = document.querySelector("#ingredients");
ingredients.forEach(ingredient => {
  // Rezolvare pct.1 
  const ingredientsList = document.createElement('li');
  // Rezolvare pct.2
  ingredientsList.textContent = ingredient;
  // Rezolvare pct.3
  ingredientsList.classList.add('item');
  // console.log(ingredientsList.classList);
  console.log(ingredientsList);
    // Rezolvare pct.4
  list.append(ingredientsList);
});


// sau 

// const list = document.querySelector("#ingredients");
// for (const ingredient of ingredients) {
//   const item = document.createElement("li");
//   item.classList.add("item");
//   item.textContent = ingredient;
//   list.append(item);
//   console.log(item);
// }

