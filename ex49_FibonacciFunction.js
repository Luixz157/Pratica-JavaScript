/* Crie um programam que o usuário digite os dois valores inicias da sequência de Fibonacci e o programa tenha
 * uma função que retorne os valores seguintes da sequência de Fibonacci.
 */

var input = require('readline-sync');

// Declração de funções
function cabeca() {
    console.log(`--------------------------`);
    console.log(`| ex49_FibonacciFunction |`);
    console.log(`--------------------------`);
}

function fibonacci(valorA, valorB) {
    let string = "";
    let valorC = 0;

    for (let i = 0; i < 8; i++) {
        valorC = valorA + valorB;
        valorA = valorB;
        valorB = valorC;
        string += valorC + ""
    }
    return string;
}

// Declaração de variáveis
let numeroA = 0;
let numeroB = 0;
let MeuFibonacci = "";

// Entrada de dados
cabeca();
numeroA = Number(input.question(`Digite um valor: `));
numeroB = Number(input.question(`Digite um outro valor: `));

// Processamento de dados
MeuFibonacci = numeroA + "" + numeroB;
MeuFibonacci += fibonacci(numeroA, numeroB);

// Saída de dados
console.clear();
cabeca()
console.log(MeuFibonacci)