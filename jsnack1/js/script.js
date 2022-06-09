// Crea due tag div con due id diversi:
// un div avrà il testo colorato di rosso mentre l’altro di verde.
// Partendo da un array di numeri, stampiamo nell’id rosso i numeri dispari e
// in verde i numeri pari.

const numbers = ["2", "5", "8", "13", "24", "43"];

for(let i = 0; i < numbers.length; i++) {
    let thisNumber = parseInt (numbers[i]);

    if (i % 2 === 0) {
        document.getElementById ("green-txt").innerHTML += thisNumber + " ";
    } else {
        document.getElementById ("red-txt").innerHTML += thisNumber + " ";

    }
}

  