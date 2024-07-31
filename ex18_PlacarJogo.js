/* Construa um programa em que seja digitado o placar de um jogo e no final apresente o status da partida de acordo
 * com as seguintes condições: se a diferença for igual a zero, status empate, se a diferença for de um até três gols, então 
 * status normal e se a diferença for maior do que três, então status goleada
 */

var input = require("readline-sync");

const Time1 = input.question("Qual o nome do Time 1: ");
const Time2 = input.question("Qual o nome do Time 2: ");

console.clear();

const Point1 = input.question("Qual o pontuação 1: ");
const Point2 = input.question("Qual o pontuação 2: ");

let status = ``;

const diferenca = Math.abs(Point1 - Point2)
if (diferenca === 0) {
    status = "EMPATE";
} else if (diferenca <= 3) {
    status = "NORMAL";
} else {
    status = "GOLEADA";
}

console.log(`Time1: ${Time1} ${Point1} x ${Time2} ${Point2} Time2 `);
console.log(`Status: ${status}`)
