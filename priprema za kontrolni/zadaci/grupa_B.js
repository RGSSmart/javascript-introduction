// ------------------------------   PRIMERI ZADATAKA ZA KONTROLNI -------------------------------------------
// 1. Napisati anonimnu funciju koja pravi niz objekata na osnovu parametara.
// Primer:
var users = [{
    name: "blah",
    email: "blah@gmail.com"
},
{
    name: "blah1"
},
{
    email: "undefined@gmail.com"
}]

// Ocekivani izgled niza je: [ "blah" , "blah@gmail.com" , "blah1" , "undefiend@gmail.com"];

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