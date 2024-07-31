/* Elabora um program em que o usuário digite o valor inicial e o valor final de uma contagem 
 * a ser mostrada pelo programa. Se o valor final for maior do que o inicial, a contagem será 
 * progressiva, caso contrário, a contagem será regressiva
 */

var input = require('readline-sync');


let Initial = Number(input.question("Digite o valor inicial: "));
let Final = Number(input.question("Digite o valor Final: "));

console.clear();

if(Initial < Final) {
    while( Initial <= Final) {
        console.log(Initial);
        Initial++
    }
} else if (Initial > Final) {
    while( Initial >= Final) {
        console.log(Initial)
        Initial--
    }
} else if (Initial == Final) {
    console.log("Valores Iguais")
} else {
    console.log("{ERROR} Valor Inaceitavel!")
}
