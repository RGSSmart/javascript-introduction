// OVO JE PONAVLJANJE FUNCKIJA I TIPOVA U JS
// Priavljenje metode prva
function prva() {
    console.log("Prva");
}
// Njen ispis: undefined
// Poziv metode
prva()
// Ispis prototipa metode
prva
//    ƒ prva(){
//    console.log("Prva");
//}
var a = prva;
// Poziv a()
a()
// Kreiranje metode druga sa parametrom x
function druga(x) {
    return x * 2;
}
druga(0);
a = druga(0);
a();
a = druga
//    ƒ druga(x){
//    return x * 2;
//}
// Poziv metode ciji je parametar druga metoda
druga(prva);
//NaN <- Ovo je povratna vrednost!

//Zadatak 2 :  Sta ce biti ispisano?
function f(){
    return "f" + 4;
}
f();

(function x(){
    console.log("X");
})();

var a = f;
var rez = a();
console.log(rez());

var objekat = {
    a : function( ){ return "a"; },
    b : function(b){ return b;   },
    c : function(c){ return c*c; }
}

