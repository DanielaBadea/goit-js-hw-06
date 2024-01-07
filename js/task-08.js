// Scrieți un script de control al formularului de login.
// Gestionarea trimiterii formularului form.login-form trebuie să fie în cadrul evenimentului submit.
// La trimiterea formularului, pagina nu trebuie să se reîncarce.
// Dacă formularul are câmpuri goale, afișați un alert care avertizează că toate câmpurile trebuie completate.
// Dacă utilizatorul a completat toate câmpurile și a trimis formularul, colectați valorile câmpului într-un obiect în care numele câmpului 
// va fi numele proprietății, iar valoarea câmpului va fi valoarea proprietății. Pentru a accesa elementele formularului, folosiți proprietatea elements.
// Afișați obiectul cu datele introduse în consolă și ștergeți valorile câmpurilor din formular, folosind metoda reset.

const form = document.querySelector('.login-form');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const {elements : {email, password} } = event.currentTarget;
    if (email.value === '' || password.value === ''){
        return console.log("Please fill in all the fields!");
    }
    console.log(`Email: ${email.value}, Password: ${password.value}`);

    const inputsObj = {
        email:email.value,
        password: password.value
    };

    console.log(inputsObj);

    event.currentTarget.reset();
     return inputsObj;

})

