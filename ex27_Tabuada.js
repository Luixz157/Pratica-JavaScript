/* Desenvolva um programa que pede para o usuário escolher um número e seja mostrado
 * a tabuada desse número
 */

var input = require('readline-sync');

let contador = 1;
let numeroDigitado = 0;

numeroDigitado = Number(input.question(`Digite um número: `));

// Sistema de repetição
// DO realiza pelo menos uma vez para depois realizar a estrutura de repetição
do {
    console.log(`${numeroDigitado} x ${contador} = ${numeroDigitado * contador}`)
    contador++
} while ( contador <= 10)
// Condição