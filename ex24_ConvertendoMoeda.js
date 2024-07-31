/* Desenvolva um programa em que o usuário faça conversões de moeda. O usuário deve escolher quantas conversões 
 * ele realizará antes de digitar o valor em real que ele tem. O valor em real deve ser convertido para dólar
 */

var input = require('readline-sync');

let contador = 0;
let valorEmReais = 0;
let valorEmDolares = 0;
let quantidadeDeConversoes = Number(input.question(`Quantas vezes você que converter? `));

while(contador < quantidadeDeConversoes) {
    valorEmReais = Number(input.question(`Qual o valor em R$: `));
    valorEmDolares = valorEmReais / 5.14;
    console.log(`O valor convertido em US$ ${valorEmDolares.toFixed(2)}`);
    contador += 1
}