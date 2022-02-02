// -------------------------------   HOMEWORK   ---------------------------------------------------------
// Nova terminologija: snippet code - isecak koda, u ovom slucaju ce biti deo skripte zbog kratkih resenja.
// Napisati javascript snippet code koji :
// 1. Ispisuje prosledjeni niz brojeva jedan ispod drugog.
// 2. Od prosledjenjog niza brojeva ispisuje samo parne
// 3. Racuna sumu prosledjenog niza
// 4. Ispisuje koliko ima brojeva vecih od prvog elementa niza


var niz = [4, 5, 7, 2, 5];
// 1. nacin
for (i = 0; i < niz.length; i++)
    console.log(niz[i]);
// 2. nacin
for (var i in niz)
    console.log(i);
//3. treci nacin
niz.forEach(ispis);

function ispis(value) {
    console.log(value);
}
// 2. Od prosledjenjog niza brojeva ispisuje samo parne

for (var i in niz) {
    broj = niz[i];
    if (broj % 2 == 0)
        console.log(broj);
}

function odds(value){
    if( value %2 == 0)
        console.log(value);
}
niz.forEach(odds);

// 3. Racuna sumu prosledjenog niza
var suma = 0;
// niz = [4,5,6,8]
for(i = 0 ; i < niz.length ; i++){
    suma += niz[i];
}
