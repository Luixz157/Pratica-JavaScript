/* Crie um programa que o usuário insira valores numa matriz de ordem 4x4. O programa deve conter um menu
 * com as opções: Matriz completa, Diagonal Esquerda-Direita, Triângulo Superior Direito, Triângulo Inferior Esquerdo
 * Diagonal Direita Direita-Esquerda, Triângulo Inferior Direito, Triângulo Superior Esquerdo, Gerar outra Matriz e
 *  Encerrar Programa
 * O programa deve mostrar a matriz de acordo com a opção escolhida pelo usuário. Se o usuário escolhe matriz
 * completa, deve ser mostrado a matriz completa, se o usuário escolher a diagonal principal, deve ser mostrado
 * a diagonal principal e assim por diante.
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

function criarMatriz(nLinha, nColuna){
    let matriz = [];
    let array = [];

    for(let linha = 0; linha < nLinha; linha++) {
        for(let coluna = 0; coluna < nColuna; coluna++) {
            //array.push(input.question(`Digite o valor [${linha}][${coluna}]: `))
            array.push(getRamdomInInclusive(10, 99));
        }
        matriz.push(array);
        array = [];
    }
    return matriz
}

function mostrarMatriz(matriz) {
    for(let contador = 0; contador < matriz.length; contador++){
        console.log(matriz[contador]);
    }
}

function menu(){
    console.log(`Escolha: `);
    console.log(`[1] Matriz completa`);
    console.log(`[2] Diagonal esquerda-Direita`);
    console.log(`[3] Triângulo Superior Direito`);
    console.log(`[4] Triângulo Inferior Direito`);
    console.log(`[5] Diagonal Direita-Esquerda`);
    console.log(`[6] Triângulo Inferior Direito`);
    console.log(`[7] Triângulo Inferior Esquerdo`);
    console.log(`[8] Gerar outra matriz`);
    console.log(`[9] Encerrar Programa`);
}

// Declaração de variáveis
let matriz4x4 = [];
const NUMERO_DE_LINHA = 4;
const NUMERO_DE_COLUNA = 4;
let escolha = 0;


// Entrada de dados
cabeca();
matriz4x4 = criarMatriz(NUMERO_DE_LINHA, NUMERO_DE_COLUNA);
console.clear();

// Processamento e saída de dados
do {
    cabeca();
    menu();
    escolha = Number(input.question(``));
    console.clear();
    cabeca();

    let novaMatriz = [];
    let novoArray = [];

    switch (escolha) {
        case 1:
            mostrarMatriz(matriz4x4);
        break;

        case 2:
            for(let linha = 0; linha < matriz4x4.length; linha++) {
                for (let coluna = 0; coluna < matriz4x4.length; coluna++) {
                    if (linha == coluna) {
                        novoArray.push(matriz4x4[linha][coluna])
                    } else {
                        novoArray.push(``)
                    }
                }
                novaMatriz.push(novoArray);
                novoArray = [];
            }
            mostrarMatriz(novaMatriz)
        break;

        case 3:
            for(let linha = 0; linha < matriz4x4.length; linha++) {
                for (let coluna = 0; coluna < matriz4x4.length; coluna++) {
                    if (coluna > linha) {
                        novoArray.push(matriz4x4[linha][coluna])
                    } else {
                        novoArray.push(``)
                    }
                }
                novaMatriz.push(novoArray);
                novoArray = [];
            }
            mostrarMatriz(novaMatriz)
        break;

        case 4:
            for(let linha = 0; linha < matriz4x4.length; linha++) {
                for (let coluna = 0; coluna < matriz4x4.length; coluna++) {
                    if (linha > coluna) {
                        novoArray.push(matriz4x4[linha][coluna])
                    } else {
                        novoArray.push(``)
                    }
                }
                novaMatriz.push(novoArray);
                novoArray = [];
            }
            mostrarMatriz(novaMatriz)
        break;

        case 5:
            for(let linha = 0; linha < matriz4x4.length; linha++) {
                for (let coluna = 0; coluna < matriz4x4.length; coluna++) {
                    if (linha + coluna == matriz4x4.length - 1) {
                        novoArray.push(matriz4x4[linha][coluna])
                    } else {
                        novoArray.push(``)
                    }
                }
                novaMatriz.push(novoArray);
                novoArray = [];
            }
            mostrarMatriz(novaMatriz)
        break;

        case 6:
            for(let linha = 0; linha < matriz4x4.length; linha++) {
                for (let coluna = 0; coluna < matriz4x4.length; coluna++) {
                    if (linha + coluna >= matriz4x4.length) {
                        novoArray.push(matriz4x4[linha][coluna])
                    } else {
                        novoArray.push(``)
                    }
                }
                novaMatriz.push(novoArray);
                novoArray = [];
            }
            mostrarMatriz(novaMatriz)
        break;

        case 7:
            for(let linha = 0; linha < matriz4x4.length; linha++) {
                for (let coluna = 0; coluna < matriz4x4.length; coluna++) {
                    if (linha + coluna < matriz4x4.length) {
                        novoArray.push(matriz4x4[linha][coluna])
                    } else {
                        novoArray.push(``)
                    }
                }
                novaMatriz.push(novoArray);
                novoArray = [];
            }
            mostrarMatriz(novaMatriz)
        break;

        case 8:
            matriz4x4 = criarMatriz(NUMERO_DE_LINHA, NUMERO_DE_COLUNA);
            console.clear();
            console.log(`Nova matriz criada!`);
        break;

        case 9:
            console.log(`Programa Encerrado!`);
        break;

        default:
            console.log(`Número inválido!`);
        break;
    }
} while(escolha != 9)

