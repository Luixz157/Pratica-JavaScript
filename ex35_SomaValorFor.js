/* Faça um programa em que receba 5 valores e no final apresente a soma
 * desses valores. Use a estrutura de repetição "for"
 */

let input = require('readline-sync');

let valor = 0;

for (let i = 1; i <= 5; i++) {
    valor += Number(input.question(`Digite o ${i}: `))
}
console.clear();
console.log(`A soma dos valores digitados é ${valor}`);