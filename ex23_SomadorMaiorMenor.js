/* Crie um programa em que o usuário digite cinco valores e no final o programa apresente a soma total 
 * dos valores digitados, qual o maior valor e qual o menor valor digitado
 */

var input = require('readline-sync');

let cont = 1;
let somaValue = 0;
let maiorValue = 0;
let menorValue = 0;
while(cont <= 5) {
    let value = Number(input.question(`Digite o ${cont} valor: `));

    if(value > maiorValue) {
        maiorValue = value
    }
    if(cont == 1) {
        menorValue = value;
    }
    if(value < menorValue) {
        menorValue = value
    }
    somaValue += value;
    cont++
}

console.clear();
console.log(`Total dos valores ${somaValue}`);
console.log(`Maior valor: ${maiorValue}`);
console.log(`Menor valor: ${menorValue}`);