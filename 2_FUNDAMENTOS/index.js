"use strict";
//1 - numbers
let x = 10;
console.log(x);
x = 16;
console.log(x);
const y = 15.584848;
console.log(y);
console.log(y.toPrecision(3));
//2 - string
const firstName = "Edimilson";
console.log(firstName.toUpperCase());
let fullName;
const lastName = "Braz";
fullName = firstName + " " + lastName;
console.log(fullName);
console.log(typeof fullName);
//3 - boolean
let a = false;
console.log("a=" + a);
console.log(typeof a);
a = true;
console.log("letra=" + a);
//4 - Inference e annotation
const ann = "Testes"; // Typagem do type annotation
let inf = "Teste"; //ja reconhece como do tipo string
let myNumber = 200; //Type por inferencia - Reconhece como type number
let letra = true; //Type por inferencia - Reconhece como type Boolean
console.log(typeof myNumber);
console.log(typeof letra);
console.log("Testando TS Automático");
