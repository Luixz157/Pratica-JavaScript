/* Elabore um programa em que o usuário digite seu peso (kg) e altura (metros) e o programa informe o IMC 
*  do usuario e se ele  está dentro do peso ideal ou fora do peso ideal . Dica faixa de peso ideal entre 18.5 e 25
*/

var input = require("readline-sync");

const Altura = Number(input.question("Qual sua Altura (Metros): "));
const Peso = Number(input.question("Qual seu Peso (Kg): "));

const IMC = ((Peso/(Altura * Altura)).toFixed(2));

console.clear();

console.log(`Sua Altura (Metros): ${Altura}`);
console.log(`Seu Peso (Kg): ${Peso}`);
console.log(`Seu IMC: ${IMC}`);

if (IMC < 18) {
    console.log("Classificação: MAGREZA")
} else if (IMC < 25) {
    console.log("Classificação: NORMAL")
} else if (IMC < 30) {
    console.log("Classificação: SOBREPESO")
} else if (IMC < 40) {
    console.log("Classificação: OBESIDADE") 
} else if (IMC > 40) {
    console.log("Classificação: OBESIDADE GRAVE")
}
