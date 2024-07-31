/* Elabore um programa em que o usuário digite seu nome, o seu salário atual e quantos dependeentes ele tem.
 * No final o programa deve apresentar o novo salário do funcionário de acordo com a quantidade de dependetes
 * Se ele não tem dependentes, aumento de 5%, se ele tem de 1 até 3 dependentes, aumento de 10%, se ele tem 
 * de 4 até 6, aumento de 15% e se ele tem amis de 6 dependentes, aumento de 18%
 */

var input = require("readline-sync");

const nome = input.question("Qual seu nome? ");
const salarioAtual = Number(input.question("Qual seu salário? "));
const Dependentes = Number(input.question("Quantos depentens? "));

console.clear();
if (Dependentes == 0) {
    console.log(`${nome} seu novo salário é: ${(salarioAtual * 0.05) + salarioAtual}`);
} else if (Dependentes <=  3) {
    console.log(`${nome} seu novo salário é: ${(salarioAtual * 0.10) + salarioAtual}`);
} else if (Dependentes <= 6) {
    console.log(`${nome} seu novo salário é: ${(salarioAtual * 0.15) + salarioAtual}`);
} else if (Dependentes > 6 ) {
    console.log(`${nome} seu novo salário é: ${(salarioAtual * 0.18) + salarioAtual}`);
} else {
    console.log("{ERROR} Solicite um valor valido!");
}