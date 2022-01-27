//                  WELCOME TO JAVASCRIPT INTRODUCTION COURSE
//              Cas 01 - Osnovna sintaksa i razlike izmedju JS-a i C#
// 1. TIPIZIRANOST : - C# je *strogo tipizirajuci* programski jezik u kome su se varijable deklarisale 
//                     po sledecem pravilu:   tip_variable ime_varijable; 
//                   - JS je slabo tipiziran programski jezik u kojem se deklaracija vrsi
//                     po sledecem rpavilu:    var ime_varijable;            // let
//  Ova osobina omogucava da u JSu napisem sledeci kod:
    var a = 5;                   // Deklaracija i inicijalizacija varijable a sa vrednoscu 5
    a = " Ovo je isto validno "; // Dodela tekstualne vrednosti varijabli a
    a = 5.7;                     // Dodela razlomljenje vrednosti varijabli a
    a = [ 5,6,"g", 5.7];         // Dodela niza sa razlicitim tipovima varijavbli a

// 2. METODA ZA ISPIS : - U C# je bila Console.WriteLine( ... )
//                      - U JS je console.log( ... ) ili alert( ... )
    console.log("Ovo je neki ispis u konzoli.");
    alert("Hi! Ovo je pop-up prozor da te uplasim. Buu!");

// 3. SELEKCIJE : - Relativno slicne kao i u C#
    if( a > 5 ){
        a++; 
        // nesto, nesto...
    }
// Jednolinijski if-ovi ne moraju da imaju viticaste zagrade
    if( a != 5 )
        console.log("A jeste vece od 5");
    
    
// Za razliku od C# u JS-u su sledeci primeri validni    
    if( true ){
        
    }


// TRICKY JS:  Proveriti zasto izraz [] == ![]  vraca FALSE.

//  Referenca za citanje ( topla preporuka ): https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/get-started/ch1.md