// Scrieți un script care, atunci când focalizarea este pierdută de pe un input (evenimentul blur), verifică dacă numărul de caractere introduse este corect.
// Numărul de caractere admis trebuie specificat în atributul data-length.
// Dacă este introdus numărul corect de caractere, atunci border-ul devine verde, în caz contrar - roșu.
// Pentru a adăuga stilurile necesare, utilizați clasele CSS valid și invalid pe care le-am adăugat deja la fișierele sursă ale acestui exercițiu.

const validationInput = document.querySelector('#validation-input');
// function handler () {
//     // primul pas pentru a face comparatia trebuie sa extragem valoarea atributului
//     // si sa o convertim intr-un numar intreg pentru a determina lungimea textului 
//     const maxCharInput = parseInt(validationInput.getAttribute('data-length'));
//     console.log(maxCharInput);
//     const inputLength = validationInput.value.length;
//     if (inputLength === maxCharInput){
//         validationInput.classList.remove('invalid');
//         validationInput.classList.add('valid');
//     } else {
//         validationInput.classList.add('invalid');
//         validationInput.classList.remove('valid');
//     }
// }

// sau cu Namver(val) - ne permite sa convertim automat o valoare intr-un numar 
// dataset - o folosim sa obtinem valoarea unui data-attribute 

const handler = (event) => {
    if (event.currentTarget.value.length === Number(validationInput.dataset.length)) {
        validationInput.classList.add("valid");
        validationInput.classList.remove("invalid");
    } else {
        validationInput.classList.add("invalid");
        validationInput.classList.remove("valid");
    }
    console.log(event.currentTarget);
};

validationInput.addEventListener('blur', handler);