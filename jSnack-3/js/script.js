// 3 - Il software deve chiedere per 10 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.

// Creo stringa vuota 
let numeri = [];


// Aggiungo per ogni prompt il numero scelto nella stringa 
console.log(numeri);
for ( let i = 0; i < 10 ; i++) {
    numeriInseriti = parseInt(prompt("Inserisci un numero"));
    numeri.push(numeriInseriti)
}
// Faccio la somma 
let somma = 0;
for ( let i = 0 ; i < numeri.length ; i++){
    
    somma += numeri[i];
    
}
console.log("la somma dei numeri inseriti è: ", somma);



// Vedo i numeri inseriti 
console.log("i numeri inseriti precedentemente sono : ",numeri);

