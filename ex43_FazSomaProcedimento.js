/* Crie um programa que receba dois valores e apresente a soma entres os dois valores inseridos.
 * Use estrutura de procedimento com passagem de parâmetros por valor
 */

var input = require('readline-sync');

// Declaração de funções
function cabecalho() {
    console.log("-----------------------------");
    console.log("| ex43_FazSomarProcedimento |");
    console.log("-----------------------------");
}
function Soma(valoX, valorY) {
    console.log(`A soma entre os dois valores é ${valoX + valorY}`);
}

// Declaração de variáveis
let valorA = 0;
let valorB = 0;


// Entrada de dados
cabecalho();
valorA = Number(input.question(`Digite o 1 valor: `));
valorB = Number(input.question(`Digite o 2 valor: `));

// Procedimentos e saída de dados
console.clear();
cabecalho();
Soma(valorA, valorB);
