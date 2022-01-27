//                  WELCOME TO JAVASCRIPT INTRODUCTION COURSE
//              Cas 02 - Petlje i iteracija kroz podatke

// 1. KLASICAN FOR - ekvivalent C# ( i vecini popularnih jezika)
var a = [ 3,4,5,6,7,8];
for(i = 0 ; i < a.lenght ; i++){
    console.log(i);
}
// 2. FOR IN/OF - ekvivalent foreach-u u C#
// Ovakav for ima dve verzije. Razlike suu :
    for( i in a ){ // Verzija u kojoj je i indeks
        console.log(i);
    }
    for( i of a ){ // Verzija u kojoj je i vrednost niza na datom indeksu
        console.log(i);
    }
// 3. DO WHILE / WHILE - identicno, nista novo.
    i = 4;
    while( i < 10) {
        i++;
    }

    do{
        i--;
    }while( i != 0);
// 4. * FANCY * for - novi koncept, petlja koja poziva funciju za svakog clana kolekcije
// Ideja jeste da se napise takva funkcija da predstavlja zapravo telo klasicnog for-a, znaci
// ono sto bi islo unutar for-a to se pise u funciju.

a.forEach( double_function() );
// Definicija funcije ne moze da bude proizvoljna nego na jedan od sledecih nacina:
// 1. f(value, index, array) - ako se koriste sva tri parametra
// 2. f(value, index) - ako se koriste samo prva dva parametra
// 3. f(value) - ako se koristi samo element
function double_function(value, index, array){
    value *= 2;
}
