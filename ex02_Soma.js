//Desenvolva um programa que solicite ao usuário digitar dois números e no final
// apresente o resultado da soma entre os dois números.

const readlineSync = require('readline-sync');//Mostrar no Terminal
const num1 = Number(readlineSync.question('Digite o primeiro Nnumero: '));
const num2 = Number(readlineSync.question('Digite o segundo Numero: '));

const result = num1 + num2;

console.log(`O resultado da soma de ${num2} + ${num1} = ${result}`)

//Obs: o readlineSync recebe a variavel como String e não numero, então pe necessario definir