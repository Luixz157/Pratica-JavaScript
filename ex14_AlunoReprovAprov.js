/* Desenvolva um programa em que o usuário digite duas notas e o mostre a média das notas e se o aluno 
*  está aprovado ou reprovado. Considerando aprovado o aluno com média maior igual a sete 
*/

var Terminal = require("readline-sync");

const nota1 = Number(Terminal.question("Qual a primeira nota? "));
const nota2 = Number(Terminal.question("Qual a segunda nota? "));

const Media = ((nota1 + nota2) / 2).toFixed(2);

console.clear();
console.log(Media);

if (Media == 7 || Media < 7 ) {
    console.log("REPROVADO");
} else if (Media > 7) {
    console.log("APROVADO");
} else {
    console.log("{ERROR} Insira um valor valido!");
}