// Crea un array vuoto.
// Chiedi per 6 volte all’utente di inserire un numero,
// se è dispari inseriscilo nell’array.

// CREATE AN EMPTY ARRAY
const arrayNumbers = [];

// ASK THE USER A NUMBER FOR 6 TIMES
for (let i = 0; i < 6; i++) {
    const userNumber = parseInt (prompt ("Digita un numero"));

    // IF THE NUMBERS IS ODD, ADD IT TO THE ARRAY
    if (userNumber % 2 !== 0) {
        arrayNumbers.push(userNumber);
    } 
}

// OUTPUT RESULT 
console.log (arrayNumbers);