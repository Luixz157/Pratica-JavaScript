/* Elabore um programam em que seja cadastrados 3 times e no final seja mostrado uma tabela com
 * os confrontos entre os times
 */

var input = require('readline-sync');

// Declração de funções
function cabeca() {
    console.log(`--------------------------`);
    console.log(`| ex57_CampeonatoFutebol |`);
    console.log(`--------------------------`);
}

// Declaração de variáveis
let quantidadeDeTimes = 0;
let listaDeTimes = [];

// Entrada de dados
cabeca();
quantidadeDeTimes = Number(input.question(`Informe a quantidade de times: `));
for(let contador = 0; contador < quantidadeDeTimes; contador++) {
    listaDeTimes[contador] = input.question(`Digite o ${contador + 1} Time:`);
}

// Processamento e saída de dados
console.clear();
console.log(`Tabela Final`);
for(let timeA = 0; timeA < quantidadeDeTimes; timeA++) {
    for(let timeB = 0; timeB < quantidadeDeTimes; timeB++) {
        if(timeA != timeB) {
            console.log(`${listaDeTimes[timeA]} x ${listaDeTimes[timeB]}`);
        }
    }
}