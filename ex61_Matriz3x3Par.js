/* Construa um programa que o usuário insira valores numa matriz 3x3. Deverá ser mostrada a posição a qual o usuário
 * esta inserindo o valor. No final o programa deverá mostrar a matriz com todos o valores inseridos pelo usuário,
 * destacando os valores pares. Deverá apresentar também o total de valores pares inseridos
 * 
 * MATRIZ
 * 
 * Indices [[0][0] [0][1] [0][2],
 *          [1][0] [1][1] [1][2],
 *          [2][0] [2][1] [2][2],]
 */

var input = require('readline-sync');

// Declaração de funções
function cabeca() {
    console.log(`---------------`);
    console.log(`| ex55_SoComC |`);
    console.log(`---------------`);
}

function criarMatriz(nLinha, nColuna) {
    let matriz = [];

    for (let linha = 0; linha < nLinha; linha++) {
        let array = [];
        for (let coluna = 0; coluna < nColuna; coluna++) {
            let valor = Number(input.question(`Digite o valor [${linha}][${coluna}]: `));
            array.push(valor);
        }
        matriz.push(array);
    }
    return matriz;
}

function mostrarMatriz(matriz) {
    for(let linha = 0; linha < matriz.length; linha++) {
        console.log(matriz[linha]);
    }
}

function matrizComPar(matriz) {
    let novaMatriz = matriz.map(linha => linha.slice()); // Copia da matriz original
    for (let linha = 0; linha < novaMatriz.length; linha++) {
        for (let coluna = 0; coluna < novaMatriz[linha].length; coluna++) {
            if (novaMatriz[linha][coluna] % 2 == 0) {
                novaMatriz[linha][coluna] = `(${novaMatriz[linha][coluna]})`;
            }
        }
    }
    return novaMatriz;
}

function somaMatrizPar(matriz) {
    let soma = 0;
    for (let linha = 0; linha < matriz.length; linha++) {
        for (let coluna = 0; coluna < matriz[linha].length; coluna++) {
            if (matriz[linha][coluna] % 2 == 0) {
                soma++;
            }
        }
    }
    return soma;
}

// Declaração de variáveis
let matriz3x3 = [];
const NUMERO_DE_LINHAS = 3;
const NUMERO_DE_COLUNAS = 3;
let matrizPar = [];
let totalPar = 0;

// Entrada de dados
cabeca();
matriz3x3 = criarMatriz(NUMERO_DE_LINHAS, NUMERO_DE_COLUNAS);

// Processamento e saída de dados
totalPar = somaMatrizPar(matriz3x3);
matrizPar = matrizComPar(matriz3x3);

console.clear();
cabeca();
console.log("Matriz Original:");
mostrarMatriz(matriz3x3);
console.log(`---------------`);
console.log("Matriz com números pares destacados:");
mostrarMatriz(matrizPar);
console.log(`---------------`);
console.log(`Total dos valores Pares: ${totalPar}`);
