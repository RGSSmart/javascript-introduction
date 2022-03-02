// ------------------------------   PRIMERI ZADATAKA ZA KONTROLNI -------------------------------------------
// 1. Napisati anonimnu funciju koja prosledjeni niz objekatata pretvara u primitivni niz stringova.
//    U funckiju se prosledjuju objekti koji sadrze polja: name, email, country.
//    U slucaju da neko od polja unutar objekta nije definisano ne dodavati ga u primitivni niz.
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

// 2. Napisati skrkptu koja vraca izvodjaca najduze pesme iz niza pesama. 
// Koristiti bar dve arrow functions za resavanja zadatka.
// Primer
var songs = [   { title: "A", length: 230, author: "AA" },
                { title: "B", lenght: 200, author: "BB" },
                { title: "C", lenght: 120, author: "CC" }
            ]
var max_song = { length : 0 , author: "" };

songs.forEach( (value) => {
    if( value.length>max_song.length) // Obratiit paznju na "spelling". JavaScript nece baciti gresku za "pogresno" napisan property.
        max_song=value;
});
console.log(max_song);

// Domaci
// 3. Uraditi zadatak pod 2 ponovo ali sa izmenom u formatu duzine pesme tako da ne budu sekunde nego u stringu minut:sekunda. Kako se sada menja zadatak?