/* Construa um programa em que o usuário digite duas notas e mostre a média das notas e se o 
*  aluno está aprovado, em recuperação ou reprovado. Considerando aprovado o aluno com média maior 
*  igual a sete, em recuperação com média entre sete e cinco e reporvado com média menor que cinco
*/

var Input = require("readline-sync");

const Nota1 = Number(Input.question("Nota 1°: "));
const Nota2 = Number(Input.question("Nota 2°: "));

const Media = ((Nota1 + Nota2) / 2).toFixed(2);

console.clear();
console.log(Media);

if (Media >= 7) {
    console.log("APROVADO");
} else if (Media >= 5 && Media < 7) {
    console.log("RECUPERAÇÃO");
} else if (Media < 5) {
    console.log("REPROVADO");
} else {
    console.log("{ERROR} Valor Invalido!");
}