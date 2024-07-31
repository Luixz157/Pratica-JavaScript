/* Crie um programa em que o usuário digite 1- valores de forma aleatória e no final o 
 * programa apresente os valores em ordem crescente
 */

var input = require('readline-sync');

// Declração de funções
function cabecario() {
    console.log(`-------------------`);
    console.log(`| ex56_OrdemVetor |`);
    console.log(`-------------------`);
}

function getRamdomIntInclusive(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
}

// Declaração de variáveis
const QTDE_DE_VALORES = 10;
var listaDeValores = [];

// Entrada de dados
cabecario();
for (let contador = 0; contador < QTDE_DE_VALORES; contador++) {
    //listaDeValores[contador] = Number(input.question(`Insita o ${contador + 1}`));
    listaDeValores[contador] = getRamdomIntInclusive(0, 100);
}

// Processamento e saída de dados
for(let contadorA = 0; contadorA < QTDE_DE_VALORES; contadorA++) {
    for(let contadorB = contadorA+1; contadorB < QTDE_DE_VALORES; contadorB++) {
        if (listaDeValores[contadorA] > listaDeValores[contadorB]) {
            let troca = listaDeValores[contadorA];
            listaDeValores[contadorA] = listaDeValores[contadorB];
            listaDeValores[contadorB] = troca;
        }
    }
}


console.clear()
for (let contador = 0; contador < QTDE_DE_VALORES; contador++) {
    console.log(listaDeValores[contador])
}

