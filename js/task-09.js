function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Scrieți un script care schimbă culorile de fundal al elementului <body>, prin stiluri inline,
//  atunci când se face click pe button.change-color și afișați valoarea culorii în span.color.
// Pentru a genera o culoare aleatorie, folosiți getRandomHexColor.

const body = document.querySelector('body');
const  btn = document.querySelector('.change-color');
const color = document.querySelector('.color');
const hadlerColor = () => {
  const randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor;
  color.textContent = randomColor;
}

btn.addEventListener('click', hadlerColor);