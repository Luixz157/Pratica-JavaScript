/* Crie um programa que solicite ao usuário inserir valores numa matriz de ordem 3x3. No final o programa deverá 
 * apresentar os valores inseridos pelo usuário
 * Oque é uma matriz?
 * A matriz é definida como sendo um vetor com mais de uma dimensão (geralmente duas). Enquanto o vetor
 * armazena as informações de forma linear, a matriz armazena de forma tabular (com linha e colunas)
 * Aqui em JavaScript, serão arrays bi-dimensionais
 * MATRIZ   /   ARRAY
 * -------      -------------
 * | 1 2 |      |1, 2, 3, 4 |
 * | 3 4 |      -------------
 * -------      
 */

var input = require('readline-sync');

// Declração de funções
function cabecario() {
    console.log(`------------------`);
    console.log(`| ex60_Matriz3x3 |`);
    console.log(`------------------`);
}

function criarMatriz(nLinhas, nColuna) {
    let matriz = [];
    let array = [];
    let contador = 1;

    for(let linha = 0; linha < nLinhas; linha++){
        for(let coluna = 0; coluna < nColuna; coluna++) {
            array.push(input.question(`Digite ${contador} valor: `));
            contador++
        }
        matriz.push(array);
        array = [];
    }
    return matriz;
}

function mostrarMatriz(matriz) {
    for(let contador = 0; contador < matriz.lenght; contador++) {
        console.log(matriz[contador])
    }
}

// Declaração de variáveis
let matriz3x3 = [];
const NUMERO_DE_LINHAS = 3;
const NUMERO_DE_COLUNAS = 3;

// Entrada de dados
cabecario();
matriz3x3 = criarMatriz(NUMERO_DE_LINHAS, NUMERO_DE_COLUNAS)

// Processamento e saída de dados
console.clear();
console.log(matriz3x3);