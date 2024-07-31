/* Construa um programa em que o usuário digite cinco valores e no final o programa apresente a soma 
 * total dos valores digitados
 */

var input = require('readline-sync');

let cont = 1;
let somaValores = 0;

while(cont <= 5) {
    somaValores += Number(input.question(`Digite o ${cont} valor: `));
    cont++
}
console.clear();
console.log(`Soma Total: ${somaValores}`)

