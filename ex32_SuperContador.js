/* Desenvolva um programa em que o usuário escolha em um
 * menu se quer contar de 0 a 10 ou de 10 a 0
 */

let input = require('readline-sync');

console.log(`Escolha: `);
console.log(`[1] conta de 0 a 10`);
console.log(`[2] conta de 10 a 0`);
console.log(`[3] Cancelar`);
let option = Number(input.question(""))
console.clear();

switch(option) {
    case 1:
        i = 0;
        do {
            console.log(i);
            i++
        } while(i != 10);
        break
    case 2:
        i = 10;
        do {
            console.log(i);
            i--
        } while(i != 0)
        break
    case 3:
        console.log("PROGRAMA CANCELADO!")
        break
    default:
        console.log("{ERROR} Opção Invalida")
}