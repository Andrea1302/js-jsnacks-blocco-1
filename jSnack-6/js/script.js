// 6 - Genera un array di 50 numeri random. Nell’array non devono esserci doppioni.



// 1.generare un numero e aggiungerlo all arrNum
// 2. generare un altro numero e confrontare se è già presente nell array..
//      2.1 se è presente non lo inserisco
//      2.2 se non è presente lo inserisco
// 3. continuare così fino a quando arrNum.lenght è = 50

// Array vuoto 
const arrNum = [];
console.log(arrNum.length);

// while ( arrNum.length !== 50 ) {
//     let numero = Math.floor(Math.random()*100+ 1) ;

//     let duplicato = false;
//     for(let i=0; i < arrNum.length; i++) {
//         if (arrNum[i] === numero) {
//             duplicato = true;
//         }
//     }
//     if (!duplicato){
//         arrNum.push(numero);
//     }
// }
// console.log(arrNum);

// oppure 

while ( arrNum.length !== 50 ) {
    let numero = Math.floor(Math.random()*100+ 1) ;

    let duplicato = arrNum.includes(numero)

    if ( duplicato === false ) {
        arrNum.push(numero)
    }


}
console.log(arrNum);