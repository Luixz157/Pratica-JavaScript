/* Crie um programa em que o usuário digite um valor e o programa apresente apenas os valores pares 
 * da contagem progressiva até o valor digitado e os valores pares da contagem regressiva 
 * partindo do valor digitado Use a estrutura de repetição "for"
 */

var input = require('readline-sync');

let i = 0;
let valor = 0;
let par = 0;
let impar = 0;

for (i = 0; i <= 5; i++) {
    let valor = Number(input.question("Solicite o valor (IMPAR ou PAR): "));
    
    if (valor % 2 == 0) {
        par = valor;
    } else {
        impar = valor;
    }
}

console.log(par);
console.log(impar);