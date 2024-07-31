/* Desenvolva um programa em que o usuário digite dois valores e esses valores sejam passados para
 * uma função. Essa função deve retornar a soma dos valores inseridos
 * Um dos grandes benefícios é não precisar copiar o código todas as vezes que precisar executar 
 * aquela operação, além de deixar a leitura do código mais intuitica. Os procedimentos
 * diferem das funções apenas por não retornarem resultado.
 */

var input = require('readline-sync');

// Declração de funções
function cabeca() {
    console.log(`-------------------`);
    console.log(`| ex46_somaFuncao |`);
    console.log(`-------------------`);
}

function somaValores(NumA, NumB) {
    return NumA + NumB;
}

// Declaração de variáveis
let valorA = 0;
let valorB = 0;
let soma = 0;

// Entrada de dados
cabeca();
valorA = Number(input.question("Digite um valor: "));
valorB = Number(input.question("Digite outro valor: "));
console.clear();
// Processamento e saída de dados
soma = somaValores(valorA, valorB);
console.log(`A soma entre ${valorA} e ${valorB} é igual a ${soma}`);