// 1 - L’utente inserisce due numeri in successione, con due prompt.
// Il software stampa il maggiore.

// Chiedo all utente di inserire il  primo numero. 
let numero1 = parseInt(prompt("Inserisci un numero"));

// Chiedo all utente di inserire il  secondo numero. 
let numero2 = parseInt(prompt("Inserisci un altro numero"));


// Comparo i numeri inseriti 
if ( numero1 > numero2) {
    console.log( "Il numero più alto è il primo inserito e quindi il : ", numero1 );
} else if ( numero1 === numero2 ) {
    console.log("Inserisci due numeri che non siano uguali !");
} else {
    console.log("Il numero più alto è il secondo inserito e quindi il :", numero2 );
}