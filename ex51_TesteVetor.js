/* Desenvolva um programa em que o usuário digite seis valores e o programa apresente os seis valores 
 * Use variáveis compostas (vetores/aarays).

 * Oque são variaveis composta (vetores/arrays)?
 * 
 * Um VETOR pode ser visto como uma variável que possui diversas posições, e com isso armazena diversos valores
 * porém todos do mesmo tipo. (Documentação Portugol)
 * 
 * ARRAYS são objetos semelhantes a lista que vêm com uma série de métodos embutidos para realizar operações de
 * Travessia e mutação. Nem o tamanho de um array JavaScript nem os tipos de elementos são fixos. Já que o momento e os dados
 * podem ser armazenados em posições não contíguas
 * 
 */

var input = require('readline-sync');

// Declração de funções
function cabecario() {
    console.log(`-------------------`);
    console.log(`| ex51_TesteVetor |`);
    console.log(`-------------------`);
}

// Declaração de variáveis
let array = [];

// Entrada de dados
cabecario();
for (let contador = 0; contador < 6; contador++) {
    array[contador] = input.question(`Digite o ${contador + 1} valor:`)
}

// Processamento e saída de dados
console.clear();
for(let contador = 0; contador < 6; contador++) {
    console.log(array[contador]);
}