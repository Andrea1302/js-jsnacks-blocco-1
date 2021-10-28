// 6 - Genera un array di 50 numeri random. Nell’array non devono esserci doppioni.



// 1.generare un numero e aggiungerlo all arrNum
// 2. generare un altro numero e confrontare se è già presente nell array..
//      2.1 se è presente non lo inserisco
//      2.2 se non è presente lo inserisco
// 3. continuare così fino a quando arrNum.lenght è = 50

// Array vuoto 
const ArrNum = []

let i = 0
while ( ArrNum.length !== 10 ) {
    let Numeri = Math.floor(Math.random()*19+ 1) ;
    console.log(Numeri);
    if ( Numeri !== ArrNum[i]){
        ArrNum.push(Numeri);
    }
    i++;
}
console.log(ArrNum);

