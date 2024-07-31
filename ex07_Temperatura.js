/* Você chegou nos EUA olhou para o termômetro e viu 100 graus fahrenheit,
*  mas você ques saber quanto é esta temperatura em graus celsius
* Construa um sistema que solucione este problema
*/

var input = require("readline-sync");

const Fahrenheit = input.question("Qual a temperatura em Fahrenheit: ");
const Formula = ((Fahrenheit - 32) * 5/9);

console.log("Sua temperatura em Celsius é: "+Formula.toFixed(4))+"°";