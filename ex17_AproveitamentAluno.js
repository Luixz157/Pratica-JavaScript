/* Crie um programa em que o usuário digite duas notas e o programa apresenta a média das notas e o aproveitamento 
 * do aluno, sendo: se a notas for maior ou igual a nove, aproveitamento A; se a nota for maior ou igual a sete,
 * aproveitamento B; se a nota for maior ou igual a cinco, aproveitamento C; se a nota for maior ou igual a um,
 * aproveitamento E e se a nota for menor do que um, aproveitamento F 
 */

var Term = require("readline-sync");

const Note1 = Number(Term.question("Primeira nota: "));
const Note2 = Number(Term.question("Segunda nota: "));

const Midlle = ((Note1 + Note2) / 2).toFixed(2);

console.clear();
console.log(Midlle);
if (Midlle < 0) {
    console.log("{ERROR}");
} else if (Midlle < 1) {
    console.log("Aproveitamento F");
} else if (Midlle <= 2) {
    console.log("Aproveitamento E");
} else if (Midlle <= 5) {
    console.log("Aproveitamento C");
} else if (Midlle <= 7) {
    console.log("Aproveitamento B");
} else if (Midlle > 7) {
    console.log("Aproveitamento A");
} else {
    console.log("{ERROR}");
}