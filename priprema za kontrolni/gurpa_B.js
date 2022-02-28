// Grupa B - u izradi...

// 1. Koji primeri su validni?

function f( a = 3){
    return;
}
// Odgovor: ________________

var x = function ff(){
    console.log("Helou");
}
x();

// Odgovor: __________________

var y = (function fff(){ return function(){ console.log("ByeQ?")};})();

// Odgovor: _________________

z = function(){ return function(){}}
z()();
