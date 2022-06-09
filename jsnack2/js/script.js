//Chiedi un numero di 4 cifre all’utente nel prompt
//e calcola la somma di tutte le cifre che compongono il numero. 

// ASK THE USER A NUMBER 
const userNumber = (prompt ("Digita un numero di 4 cifre"));

let startNumber = 0;

// CALC THE FINAL NUMBER 
for (let i=0; i<userNumber.length; i++) {
    let singleNumber = parseInt(userNumber[i]);

    startNumber += singleNumber;
}

// OUTPUT RESULT
alert (`Il risultato della somma dei numeri inseriti è ${startNumber}`);


