/* Crie um programa em que o usuário digite um número e mostre como resultado se esse número é
 * primo ou não. Dica: um número primo é aquele que só pode ser dividido por um e por ele mesmo
 */

let input = require('readline-sync');

let numero = Number(input.question(`Digite um número: `));
let contador = numero;
let ehPrimo = 0;

do {
    if (numero % contador == 0) {
        ehPrimo++
    }

    contador--
} while(contador > 0);

if (ehPrimo == 2) {
    console.log(`O numero ${numero} é Primo!`);
} else {
    console.log(`O número ${numero} não é Primo!`);
}