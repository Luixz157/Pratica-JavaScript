// Desenvolva um programa que conte de 0 até onde quiser. O usuário também deve escolher de quanto será o pulo

var input = require('readline-sync');

let cont = 0;
let Valor = Number(input.question("Até qual numero você deseja que vá? "));
let pulo = Number(input.question("Quanto pulos você deseja? "));

while (cont <= Valor) {
    console.log(cont);
    cont += pulo;
}