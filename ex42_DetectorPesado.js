/* Desenvolva um programa que o usupario digite o nome de cinco pessoas e o peso corporal de cada. A cada pessoa incluída nos 
 * Sistema, deve ser mostrado o amior peso cadastrado até o momento. No final deve ser apresentado o nome da pessoa que teve 
 * o maior peso e seu peso. Use estrutura de procedimento
 */

var input = require('readline-sync');

//declaração de procedimento
function cabecalho (){
    console.log("-----------------------------")
    console.log("|    ex42_DetectorPesado    |")
    console.log(`|  Maior peso até agora: ${maiorPeso} |`)
    console.log("-----------------------------")
}

// Declarando minha variáveis
let maiorPeso = 0;
let nomeMaiorPeso = ``;
let nome = ``;
let peso = 0;

// Entrada de dados
for (let i = 0; i < 5; i++) {
    cabecalho();
    nome = String(input.question(`Digite o nome: `));
    peso = Number(input.question(`Digite o peso (kg) de ${nome}: `));

    // Processando dados
    if (peso > maiorPeso) {
        maiorPeso = peso;
        nomeMaiorPeso = nome;
    }
    console.clear()
}

// Saída de dados
cabecalho();
console.log(`A pessoa mais pesada foi ${nomeMaiorPeso} com ${maiorPeso} kg.`)