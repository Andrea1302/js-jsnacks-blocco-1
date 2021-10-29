// 3 - Il software deve chiedere per 10 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.

// Creo variabile somma uguale a 0 
let somma = 0;
for ( let i = 0; i < 10 ; i++) {
    numeriInseriti = parseInt(prompt("Inserisci un numero"));
    console.log("il numero inserito è: ", numeriInseriti);
    somma += numeriInseriti;
}
// Faccio la somma 

console.log("la somma dei numeri inseriti è: ", somma);


