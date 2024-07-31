/* Faça um programa em que o usuário digite 5 valores e no final ele apresente: a soma dos valores,
 * a média entre os valores, quantos são divisíves por 5, quantos são nulos e a soma dos valores pares.
 * Use a estrutura de repetição "for"
 */

var input = require('readline-sync');

let valor = 0;
let valorDigitados = "";
let somaValores = 0;
let mediaValores = 0;
let divisivelPorCinco = 0;
let nulo = 0;
let somaPar = 0;

for (let contador = 1; contador <= 5; contador++) {
    valor = Number(input.question(`Digite o ${contador} valor: `));
    valorDigitados += "" + valor;
    somaValores += valor;
    if (valor % 5 === 0) {
        divisivelPorCinco++;
    }
    if (valor === 0) {
        nulo++;
    }
    if (valor % 2 === 0) {
        somaPar += valor;
    }
}

mediaValores = somaValores / 5

console.clear();
console.log(`Valores digitados ${valorDigitados}`);
console.log(`A soma dos valores é igual a ${somaValores}`);
console.log(`A média entre os valores é igual a ${mediaValores}`);
console.log(`Valores divisíveis por 5:  ${divisivelPorCinco}`);
console.log(`Valores nulos:  ${nulo}`);
console.log(`A soma dos valores pares é igual a:  ${somaPar}`);