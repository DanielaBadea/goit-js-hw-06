// Scrieți un script care, atunci când se introduce un text în input#name-input (evenimentul input), 
// înlocuiește valoarea lui span#name-output cu valoarea curentă din input#name-input. 
// Dacă input-ul este gol, în acel span se va afișa "Anonymous".

const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');
nameInput.addEventListener('change', setOutput );
// 
function setOutput (event) {
    const changeValue = event.currentTarget.value;
    if (changeValue === ''){
        nameOutput.textContent = 'Anonymous';
    } else {
        nameOutput.textContent = changeValue;
    }

    // puteam sa folosim operatorul ternar 
    // nameOutput.textContent = changeValue === '' ? 'Anonymous' : changeValue;
}
