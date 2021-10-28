// 4 - In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

// Creo variabile degli invitati 
const Invitati = ["Franco", "Geltrude", "Pippo", "Giada", "Andrea", "Fernando","Lucia", "Lucrezia", "Paola", "Maria"];

// Chiedo all utente di inserire il suo nome 
const ilTuoNome = prompt("Quale è il tuo nome ? (inserisci solo la prima iniziale del nome in maiuscolo )");


// Creo variabile "trovato ( di partenza falsa )"
let trovato = 0 ;

// Ciclo 
for ( let i = 0 ;i < Invitati.length; i++ ) {

    if ( ilTuoNome === Invitati[i] ) {
        trovato = 1;
    }

}
if ( trovato === 1 ) {

    console.log("Puoi partecipare alla festa !");
} else {
    console.log("Non puoi partecipare alla festa");
}