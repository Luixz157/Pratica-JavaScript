/* Desenvolva um programa que o usuário insira valores numa matriz de ordem 4x4. O programa deverá
 * apresentar o valores da matriz; a soma da Diagonal Principal, o produto da segunda
 * linha e o maior valor da terceira coluna
 */

var input = require('readline-sync');

// Declaração de funções
function cabeca() {
    console.log(`---------------`);
    console.log(`| ex55_SoComC |`);
    console.log(`---------------`);
}

function getRamdomInInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min
}

function criarMatriz(nLinha, nColuna) {
    let matriz = [];
    let array = [];

    for (let linha = 0; linha < nLinha; linha++) {
        for (let coluna = 0; coluna < nColuna; coluna++) {
            // Você Inseri
            //array.push(input.question(`Digite valor [${linha} ${coluna}]`))
            //Automatico
            array.push(getRamdomInInclusive(1, 9))
        }
        matriz.push(array);
        array = [];
    }
    return matriz;
}

function mostrarMatriz(matriz) {
    for(let contador = 0; contador < matriz.length; contador++) {
        console.log(matriz[contador]);
    }
}

function somaDiagonalPrincipal(matriz) {
    let somaValores = 0;

    for (let linha = 0; linha < matriz.length; linha++) {
        for (let coluna = 0; coluna < matriz.length; coluna++) {
            if(linha == coluna) {
                somaValores += Number(matriz[linha][coluna]);
            }
        }
    }
    return somaValores;
}

function produtoSegundaLinha(matriz){
    let produtoValores = 1;

    for (let linha = 0; linha < matriz.length; linha++) {
        for (let coluna = 0; coluna < matriz.length; coluna++) {
            if(linha == 1) {
                produtoValores *= Number(matriz[linha][coluna]);
            }
        }
    }
    return produtoValores;
}

function maiorValorTerceiraColuna(matriz) {
    let maiorValor = 0
    for (let linha = 0; linha < matriz.length; linha++) {
        for (let coluna = 0; coluna < matriz.length; coluna++) {
            if(linha == 2) {
                if(maiorValor < Number(matriz[linha][coluna])) {
                    maiorValor = Number(matriz[linha][coluna])
                }
            }
        }
    }

    return maiorValor
}

// Declaração de variáveis
let matriz4x4 = [];
const NUMERO_DE_LINHA = 4;
const NUMERO_DE_COLUNA = 4;
let somaDaDiagonalPrincipal = 0;
let produtoDaSegundaLinha = 0;
let maiorValorDaTarceiraLinha = 0;

// Entrada de dados
cabeca();
matriz4x4 = criarMatriz(NUMERO_DE_LINHA, NUMERO_DE_COLUNA)

// Processamento e saída de dados
somaDaDiagonalPrincipal = somaDiagonalPrincipal(matriz4x4);
produtoDaSegundaLinha = produtoSegundaLinha(matriz4x4);
maiorValorDaTarceiraLinha = maiorValorTerceiraColuna(matriz4x4);

console.clear();
cabeca();
mostrarMatriz(matriz4x4);
console.log(`---------------`);
console.log(`Soma da diagonal principal: ${somaDaDiagonalPrincipal}`);
console.log(`Produto da segunda linha: ${produtoDaSegundaLinha}`);
console.log(`Maior valor da terceira coluna: ${maiorValorDaTarceiraLinha}`);

