/* Desenvolva um programa em que sejam cadastrados 1- nomes de usuário. No final o programa deve apresentar
 * uma lista com os nomes que começam com a letra "C".
 */

var input = require('readline-sync');

// Declração de funções
function cabeca() {
    console.log(`---------------`);
    console.log(`| ex55_SoComC |`);
    console.log(`---------------`);
}

// Declaração de variáveis
const QTDE_DE_NOMES = 10;
let nomesUsuarios = [];
let nomesComC = [];

// Entrada de dados
cabeca();
for (let cont = 0; cont < QTDE_DE_NOMES; cont++) {
    nomesUsuarios[cont] = input.question(`Digite o ${cont + 1} nome: `);
}

// Processamento e saída de dados
for (let cont = 0; cont < QTDE_DE_NOMES; cont++) {
    if (nomesUsuarios[cont].toUpperCase().indexOf('C') == 0) {
        nomesComC.push(nomesUsuarios[cont].toUpperCase());
    }
}

console.clear();
console.log("NOMES COM C");
console.log(nomesComC)
for(let cont = 0; cont < nomesComC.length; cont++) {
    console.log(`${cont + 1} - ${nomesComC[cont]}`)
}