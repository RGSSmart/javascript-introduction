// ------------------------------   PRIMERI ZADATAKA ZA KONTROLNI -------------------------------------------
// 1. Napisati anonimnu funciju koja pravi niz strignova na osnovu parametara.
// Primer:
var data = [{
    string:"A",
    n: 3,
},
{
    string:"B",
    n: 2,
},
{
    string:"C",
    n: 1
}]

// Ocekivani izgled niza je: [ "A","A","A", "B","B","C"];

// 2. Napisati skrkptu koja uporedjuje datume 

// 3. XAOMI PROBLEM - najbolji odnos cene i kvaliteta
var uredjaji = [
    {
        ime: "A",
        cena: 1500,
        kvalitet: 4.5
    },
    {
        ime: "B",
        cena: 1800,
        kvalitet: 4.0
    },
    {
        ime: "C",
        cena: 1400,
        kvalitet: 4.2
    }
]
var najbolji=uredjaji[0];
uredjaji.forEach(function (value){
    if(najbolji.cena/najbolji.kvalitet>value.cena/value.kvalitet)
    najbolji=value;
})

najbolji