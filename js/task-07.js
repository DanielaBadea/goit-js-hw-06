// Scrieți un script care răspunde la modificarea valorii din input#font-size-control (evenimentul input) și 
// modifică stilurile inline al span#text prin actualizarea proprietății font-size. Ca rezultat, 
// atunci când glisați scrollbar-ul, dimensiunea textului se va schimba.

const fontSizeControl = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

const changeFont = () => {
    text.style.fontSize = fontSizeControl.value + 'px';
    // se adauga unitatea px pentru a specifica unitatea de masura a dimensiunii fontului 
}

fontSizeControl.addEventListener('input', changeFont);