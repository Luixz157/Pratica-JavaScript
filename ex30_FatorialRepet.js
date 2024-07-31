/* Construa um programa em que o usuário digite um número e o programa
 * mostre o fatorial desse número e no final pergunte se o usuário que repetir a operação
 */

var input = require('readline-sync');

let numero = 0;
let contador = 0;
let fatorial = 0;
let repetir = 0;

do {
    numero = Number(input.question("Digite um número: "));
    contador = numero - 1;
    fatorial = numero;
    console.clear();

    do {
        fatorial *= contador;
        contador--
    } while (contador != 0);

    console.log(`O fatorial de ${numero} = ${fatorial.toFixed(2)}`)

    console.log("Repetir?")
    console.log("[1] Sim")
    console.log("[2] Não")
    repetir = Number(input.question(``))

} while (repetir == 1)

console.log(`Programa Encerrado!`)