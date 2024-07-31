/* Elabore um programa que o suário digite um valor e o programa informe se aquele valor é par ou ímpar.
 * Use estrutura de procedimento com passagem de parâmetro por valor.
 */

var input = require('readline-sync');

// Declaração de Funções
function head() {
    console.log("-------------------------------");
    console.log("| ex43_ParOuImparProcedimento |");
    console.log("-------------------------------");
}

function parImpar(valor) {
    console.clear();
    head();
    if (valor % 2 == 0) {
        console.log(`${valor} é par!`);
    } else {
        console.log(`${valor} é ímpar!`);
    }
}

// Declaração de variáveis
let numero = 0;

// Entrada de dados
head();
numero = Number(input.question(`Digite um número: `));

// Processamento e saída de dados
parImpar(numero);