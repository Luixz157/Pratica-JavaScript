/* Construa um programa que mostre os 15 primeiros números da sequência de Fibonacci. Use estrutura
 * de procedimento com passagem de parâmetro por referência.
 */

// Declaração de Funções
function head() {
    console.log("-------------------------------");
    console.log("| ex43_ParOuImparProcedimento |");
    console.log("-------------------------------");
}
function fibonacci(valorA, valorB) {
    let fibonacci = valorA + "" + valorB
    let valorC = 0;
    let i = 1;
    while (i <= 13) {
        valorC = valorA + valorB;
        valorA = valorB;
        valorB = valorC;
        fibonacci += "" + valorC;
        i++
    }

    console.log(fibonacci)
}

// Declaração de variáveis
let num_A = 0;
let num_B = 1;

// Processamento e saída de dados
head()