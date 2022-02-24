// Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
/*                        UVEK REFERENCIRATI ZVANICNU DOKUMENTACIJU                              */

// --------------------- CAS 04 - ARROW FUNCTIONS, FANCY PART OF JAVASCRIPT  -----------------------------------------
// An arrow function expression is a compact alternative to a traditional function expression, 
// but is limited and can't be used in all situations.

// Differences & Limitations:
/*
    - Does not have its own bindings to this or super, and should not be used as methods.
    - Does not have new.target keyword.
    - Not suitable for call, apply and bind methods, which generally rely on establishing a scope.
    - Can not be used as constructors.
    - Can not use yield, within its body.
*/
// ---------------------- Comparing traditional functions to arrow functions ------------------------------
// Let's decompose a "traditional anonymous function" down to the simplest "arrow function" step-by-step:

// Note: Each step along the way is a valid "arrow function".

// Traditional Anonymous Function
function x(a){
  return a + 100;
}

// --------------------------Arrow Function Break Down -------------------------------

// 1. Remove the word "function" and place arrow between the argument and opening body bracket
(a) => {
  return a + 100;
}

// 2. Remove the body braces and word "return" -- the return is implied.
(a) => a + 100;

// 3. Remove the argument parentheses
a => a + 100;

// The { braces } and ( parentheses ) and "return" are required in some cases.

// For example, if you have multiple arguments or no arguments, you'll need to re-introduce parentheses around the arguments:

// Traditional Anonymous Function
function x (a, b){
  return a + b + 100;
}

// Arrow Function
(a, b) => a + b + 100;

// Traditional Anonymous Function (no arguments)
let a = 4;
let b = 2;
function x(){
  return a + b + 100;
}

// Arrow Function (no arguments)
let a = 4;
let b = 2;
() => a + b + 100;

//Likewise, if the body requires additional lines of processing, you'll need to re-introduce braces PLUS the "return" 
// (arrow functions do not magically guess what or when you want to "return"):

// Traditional Anonymous Function
function x(a, b){
  let chuck = 42;
  return a + b + chuck;
}

// Arrow Function
(a, b) => {
  let chuck = 42;
  return a + b + chuck;
}


//And finally, for named functions we treat arrow expressions like variables:

// Traditional Function
function bob (a){
  return a + 100;
}

// Arrow Function
let bob = a => a + 100;

// ---------------------------------- Syntax ---------------------------------------
// Basic syntax
// One param. With simple expression return is not needed:

param => expression;

//Multiple params require parentheses. With simple expression return is not needed:

(param1, paramN) => expression;

//Multiline statements require body braces and return:

param => {
  let a = 1;
  return a + param;
}

// Multiple params require parentheses. Multiline statements require body braces and return:

(param1, paramN) => {
   let a = 1;
   return a + param1 + paramN;
}


// -------------------------------- Arrow functions used as methods -----------------------------
// As stated previously, arrow function expressions are best suited for non-method functions.
// Let's see what happens when we try to use them as methods:


var obj = { // does not create a new scope
  i: 10,
  b: () => console.log(this.i, this),
  c: function() {
    console.log(this.i, this);
  }
}

obj.b(); // prints undefined, Window {...} (or the global object)
obj.c(); // prints 10, Object {...}


// ------------------------------------ Advanced syntax  ( ne ide na kontrolni) -------------------------------------------
// To return an object literal expression requires parentheses around expression:

params => ({foo: "a"}); // returning the object {foo: "a"}

//Rest parameters are supported:

(a, b, ...r) => expressionl;

// Default parameters are supported:

(a=400, b=20, c) => expression;

// Destructuring within params supported:

([a, b] = [10, 20]) => a + b;  // result is 30
({ a, b } = { a: 10, b: 20 }) => a + b; // result is 30