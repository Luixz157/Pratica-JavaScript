/* Elabore um programa que mostre uma matriz identidade de ordem 3x3.
 * Na matemática, matriz identidade é uma matriz diagonal, cujos elementos da diagonal principal são todos iguais a 1
 */

var input = require('readline-sync');

// Declaração de funções
function cabeca() {
    console.log(`---------------`);
    console.log(`| ex55_SoComC |`);
    console.log(`---------------`);
}

function criarMatrizIdentidade(nLinha, nColuna) {
    let matriz = [];
    let array = [];

    for (let linha = 0; linha < nLinha; linha++) {
        for (let coluna = 0; coluna < nColuna; coluna++) {
            if (linha == coluna) {
                array.push(1);
            } else {
                array.push(0);
            }
        }
        matriz.push(array);
        array = [];
    }
    return matriz;
}

function mostrarMatriz(matriz) {
    for(let contador = 0; contador < matriz.length; contador++) {
        console.log(matriz[contador])
    }
}

// Declaração de variáveis
let matrizIdentidade = [];
const NUMERO_DE_LINHAS = 3;
const NUMERO_DE_COLUNAS = 3; 

// Entrada de dados

// Processamento e saída de dados
matrizIdentidade = criarMatrizIdentidade(NUMERO_DE_LINHAS, NUMERO_DE_COLUNAS);

cabeca();
mostrarMatriz(matrizIdentidade);