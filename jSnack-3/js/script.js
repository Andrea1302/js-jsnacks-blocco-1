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
let somma = numeri[0] + numeri[1] + numeri[2] + numeri[3] + numeri[4] + numeri[5] + numeri[6] + numeri[7] + numeri[8] + numeri[9];


console.log("La somma dei tuoi numeri è :",somma);


// Vedo i numeri inseriti 
console.log("i numeri inseriti precedentemente sono : ",numeri);

