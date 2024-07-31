/* Desenvolva um programa em que o usuário digite até 6 valores e no final o programa apresente o total de valores entre 0 e 10; 
 * e a soma desses valores entre 0 e 10 que forem ímpares. Use a estrutura de repetição "for"
 */

var input = require('readline-sync');

let valorEntre0e10 = 0;
let somaImpar = 0;
let valores = 0;

for (let cont = 1; cont <= 6; cont++) {
    valores = Number(input.question(`Digite o ${cont} valor: `));
    if (valores >= 0 && valores <= 10) {
        valorEntre0e10++
        if (valores % 2 == 1) {
            somaImpar += valores;
        }
    }
}

console.log(`Forama Digitados ${valorEntre0e10} valores entre 0 e 10!`)
console.log(`A soma dos valores ímpares entre 0 e 10 é igual a ${somaImpar}!`)
