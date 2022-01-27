//                  WELCOME TO JAVASCRIPT INTRODUCTION COURSE
//                        Cas 03 - Funkcije

// Pisanje funkcija u JS se malo razlikuje od pisanje funkcija u C# i donosi neke nove koncepte
// Sintaksa deklaracije funkcije se sastoji od klucne reci function, imena i listom parametara.
// Primer jednostavne funckije koja sabira dva broja
function saberi(a, b) {
    return a + b;
}

// Dodeljivanje funckije varijabli
var promenljiva = function () {
    return "Ovo je rezultat iz funckije";
};


var objekat = {
    prva() { console.log("Ovo je poziv prve metode"); },
    druga() { console.log("Ovo je poziv druge metode"); },
    treca() { console.log("Ovo je poziv trece metode"); }
}

