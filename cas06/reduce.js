// JAVASCRIPT - REDUCE method

const array = [15, 16, 17, 18, 19];

function reducer(previous, current, index, array) {
  return previous + current;
}
array.reduce(reducer);

const getMax = (a, b) => Math.max(a, b);

// callback is invoked for each element in the array starting at index 0
[1, 100].reduce(getMax, 50); // 100
[    50].reduce(getMax, 10); // 50

// callback is invoked once for element at index 1
[1, 100].reduce(getMax);     // 100

// callback is not invoked
[    50].reduce(getMax);     // 50
[      ].reduce(getMax, 1);  // 1

[      ].reduce(getMax);     // TypeError



const funkcija = function(x,y){ console.log("X=" + x + " Y=" + y ); return x-y;}
[5,6,7].reduce(funkcija)