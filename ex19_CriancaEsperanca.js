/* Desenvolva um programa em que o usuário escolha quanto será a sua doação e no final o programa apresente uma mensagem 
 * de quanto foi a doação
 *
 * Dica de página inicial:
 * "Muito Obrigado por ajudar"
 * "[1] para doar R$10"
 *  [2] para doar R$25"
 *  [3] para doar R$50"
 *  [4] para doar outros valores"
 *  [5] para cancelar"
 * 
 * Caso o usuário escolha
 * "Outros valores" o programa deverá informar no final quanto foi esse valor conforme o valor inserido pelo usuáriuo
 */

var input = require('readline-sync');

console.log("Muito Obrigado por Ajudar");
console.log("[1] para doar R$10");
console.log("[2] para doar R$25");
console.log("[3] para doar R$50");
console.log("[4] para doar outros valores");
console.log("[5] para cancelar");
let option = Number(input.question("Escolha uma opção: "));
let doation = 0;
console.clear();

switch(option) {
    case 1:
        doation = 10
        break;
    case 2:
        doation = 25
        break;
    case 3:
        doation = 50
        break;
    case 4:
        doation = Number(input.question("Digite o valor da doação: "))
        break;
    case 5:
        doation = 0
        break;
    default:
        console.log("Sua doação será considera R$0,00");
} 

console.log("Muito Obrigado pela sua doação");
console.log(`Sua doação foi ${doation.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`);