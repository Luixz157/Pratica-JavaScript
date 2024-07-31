/* Construa um programa que tenha uma função que receba 
 * um valor e retorne se o valor é par ou ímpar
 */

var input = require('readline-sync');

// Declração de funções
function cabecalho() {
    console.log(`-------------------------`);
    console.log(`| ex47_ParImparFunction |`);
    console.log(`-------------------------`);
}

function parImpar(valor) {
    if (valor % 2 === 0) {
        return "PAR"
    } else {
        return "IMPAR"
    }
}

// Declaração de variáveis
let numero = 0;

// Entrada de dados
cabecalho();
numero = Number(input.question(`Digite um valor: `));

// Processamento e saída de dados
console.log(`O valor ${numero} é ${parImpar(numero)}`);