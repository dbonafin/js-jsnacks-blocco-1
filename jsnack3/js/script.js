// Il software deve chiedere per 10 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.

let startNumber = 0;

// ASK THE USER A NUMBER FOR 10 TIMES
for (let i = 0; i < 10; i++ ) {
    const userNumber = parseInt (prompt ("Digita un numero"));
    
    // CHECK IF THE USER USES A VALID NUMBER
    // IF IT IS NOT VALID GET OUT OF THE CYCLE
    // IF IT IS VALID CALC THE FINAL NUMBER 
    if (isNaN(userNumber)) {
        alert("Non sono ammessi caratteri diversi dai numeri");
        break;
    } else {
        startNumber += userNumber;
    }
}

// OUTPUT RESULT
alert (`Il risultato della somma dei numeri inseriti è ${startNumber}`);
