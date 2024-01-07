// Contorul este format dintr-un tag span și două butoane care, atunci când sunt apăsate, ar trebui să-și mărească sau scadă valoarea cu unu.
// Declarați o variabilă counterValue ce va stoca valoarea curentă a contorului și asignați-i valoarea 0 pentru început.
// Adăugați click handler pe butoane, în interiorul cărora vei mări sau micșora valoarea contorului.
// Actualizați interfața cu noua valoare a variabilei counterValue.

const value = document.querySelector('#value');
console.log(value);
let counterValue = 0;
const descrBtn = document.querySelector('button[data-action="decrement"]');
console.log(descrBtn);
const incrBtn = document.querySelector('button[data-action="increment"]');
console.log(incrBtn);
const handleClickIncr = () => {
    counterValue += 1;
    value.textContent = counterValue;
}

const handleClickDrscr = () => {
    // verificam daca este mai mare ca 0
    if(counterValue > 0){
        // aplicam descrementarea 
        counterValue -= 1;
        // setam contorului valoarea 
        value.textContent = counterValue;
    }
}
incrBtn.addEventListener('click', handleClickIncr);

// descrBtn.addEventListener('click', () => {
//     counterValue -= 1;
//     value.textContent = counterValue;
// }) primeste si valori negative, nu se incadreaza in [0, infinit]

descrBtn.addEventListener('click', handleClickDrscr);