// Grupa A - u izradi...

// 1. Sta predstavljaju sledeci primeri. Svaki primer posmatrati pojedinacno.

a => a+10;                       // Odgovor: _____________________

var probna = () => 100;          // Odogovor: _____________________

( (a,b) => console.log(a+b))()   // Odgovor: ______________________


// 2. Sta ce biti ispisano u konzoli i zasto:

var objekat = {

    x : ()=>console.log(this),
    y : ()=>console.log(this.x),
    z: function(){ console.log(this.y)}
}

objekat.x;              // Odgovor: _____________________
objekat.y();            // Odgovor: _____________________
objekat.z();            // Odgovor: _____________________


