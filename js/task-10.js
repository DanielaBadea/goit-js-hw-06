function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Scrieți un script pentru crearea și ștergerea unei colecții de elemente. 
// Utilizatorul introduce numărul de elemente în input și dă click pe butonul Create, după care colecția este afișată în pagină. 
// Când se dă click pe butonul Destroy, colecția de elemente va fi ștearsă.
// Creați o funcție createBoxes(amount), care ia ca parametru un număr.
//  Funcția va crea atâtea <div>-uri câte sunt specificate în amount și le va adăuga la div#boxes.

// Dimensiunile primului <div> vor fi 30px(lungime) pe 30px (inaltime).
// Fiecare element, cu excepția primului, ar trebui să fie cu 10px mai lat și mai înalt decât cel anterior.
// Toate elementele trebuie să aibă o culoare de fundal aleatoare în format HEX. Folosiți funcția getRandomHexColor deja existentă pentru a obține o culoare.

const btnCreate = document.querySelector('[data-create]');
const btnDestroy = document.querySelector('[data-destroy]');
const sectionNumber = document.querySelector('#boxes');

function createBoxes(amount){
  const boxes = [];
  amount = Number(document.querySelector('input').value);
  for(let i=0; i< amount; i++){
    const box = document.createElement('div');
    box.style.width = `${30 + i * 10}px`;
    box.style.height = `${30 + i * 10}px`;
    box.style.backgroundColor = getRandomHexColor();
    box.classList.add('box-color');
    boxes.push(box);
    console.log(boxes);
  }
  // dc prop innerHTML este setata la un sir gol, atunci continutul elem va fi sters
sectionNumber.innerHTML = ''; 

boxes.forEach(elem => 
  sectionNumber.append(elem));
}

function removeBoxes () {
  sectionNumber.innerHTML = ''; 
}

btnCreate.addEventListener('click', createBoxes);
btnDestroy.addEventListener('click', removeBoxes);