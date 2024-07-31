/* Elabora um programa que receba até cinco números e no final 
 * mostre quantos números negativos foram digitados
 */

var input = require('readline-sync');

let valorDigitado = 0;
let valorNegativo = 0;
let i = 0;

do {
    valorDigitado = Number(input.question("Digite um valor: "));

    if ( valorDigitado < 0) {
        valorNegativo++
    }

    i++
} while (i < 5);

console.log(`Valores Negativos Digitados ${ valorNegativo }`);