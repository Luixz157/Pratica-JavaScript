/* Elabore um programa o qual o usuário digite um número e o programa tenha uma função 
 * que retorne o fatorial do número digitado pelo usuário
 */

var input = require('readline-sync');

// Declração de funções
function cabeca() {
    console.log(`-------------------------`);
    console.log(`| ex48_FatorialFunction |`);
    console.log(`-------------------------`);
}

function fatorial(valor) {
    let cont = valor;
    let fatorial = 1;
    do {
        fatorial *= cont;
        cont--
    } while (cont > 0) {
        return fatorial;
    }
}

// Declaração de variáveis
let num = 0;

// Entrada de dados
cabeca();
num = Number(input.question("Digite um número: "))

// Processamento e saída de dados
console.log(`O fatorial de ${num} = ${fatorial(num)}`)