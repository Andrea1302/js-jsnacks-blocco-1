// 5 - Crea un array vuoto.
// Chiedi per 6 volte all’utente di inserire un numero,
// se è dispari inseriscilo nell’array.



// Creo un array vuoto 
const Numeri = []

// Chiedo all utente di inserire un numero per 6 volte 
for (let i = 0 ; i < 6; i++) {
    let NumeroInserito = parseInt(prompt("Inserisci un numero"));
    console.log("i numeri inseriti precedentemente sono ",NumeroInserito);
    // Se il numero scelto dall utente è dispari lo inserisco nell array 
    if ( NumeroInserito % 2 ){
        Numeri.push(NumeroInserito);
    }
}


console.log("l array avrà solo i numeri dispari e quindi ",Numeri);
