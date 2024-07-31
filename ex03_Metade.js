//Desenvolva um programa que solicete ao usuário digitar dois números
// e no final apresente o resultado da média entres os dois números

let readlineSync = require("readline-sync");

let Num1 = Number(readlineSync.question("Primeiro Numero: "));
let Num2 = Number(readlineSync.question("Segundo Numero: "));

console.log(`A media entre ${Num1} e ${Num2} = ${(Num1 + Num2) / 2}`);