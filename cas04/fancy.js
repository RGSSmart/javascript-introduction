
// 1. Prebrojavanje elemenata u nizu koji su brojevnog tipa
var niz = [4,5,'k', {}, "434"]
var br = 0;
for( el in niz)
    if( typeof(el) == 'number')
    br++;


// 2. Prebrojavanje elemenata u nizu koji su veci od svog prethodnog elementa

niz = [ 4,5,6,7,,5,6,7,2,4,32,1,4,7,0]
// (15) [4, 5, 6, 7, empty, 5, 6, 7, 2, 4, 32, 1, 4, 7, 0]
niz = [ 4,5,6,7,0,5,6,7,2,4,32,1,4,7,0]
// (15) [4, 5, 6, 7, 0, 5, 6, 7, 2, 4, 32, 1, 4, 7, 0]
for( i = 0 ; i < niz.length ; i++)
    if( niz[i-1] < niz[i])
        console.log(niz[i])


// Neobavezno domaci :) 1+2. prebrojavanje elemenata u nizu koji su veci od prethodnog ali tako da se preskacu elementi koji NISU BROJEVI. 