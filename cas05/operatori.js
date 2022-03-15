// SPREAD OPERATOR
// resource: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
function F( ...niz){
}

F(4);
F(5,6,7);


function Suma( ...brojevi){
    var suma = 0;
    brojevi.forEach(
        function(value){
            suma += value;
        }
    )
    return suma;
}

uma(4,5,6,0,-3);
