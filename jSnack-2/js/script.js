// 2- L’utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga.


// Chiedo all utente di inserire una parola e la salvo in una variabile
let parola1 = prompt("Inserisci una parola casuale");

// Chiedo all utente di inserire una seconda parola e la salvo in una variabile
let parola2 = prompt("Inserisci un' altra parola  casuale");

// Comparo la lunghezza delle due parole
if ( parola1.length > parola2.length  ) {

    console.log("la parola più corta è :",parola2);
    console.log("la parola più lunga è :",parola1);

} else if ( parola1.length === parola2.length) {
    console.log("le due parole sono lunghe uguali");
} else {
    console.log("la parola più corta è :",parola1);  
    console.log("la parola più lunga è :",parola2);
      
}

// Stampo la parola più lunga per prima e poi la seconda 