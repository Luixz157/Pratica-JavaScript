/* Você vai viajar para os Estados Unidos e quer saber quanto vai levar em dólares
*  Construa um sistema que resolva este problema
*/

var Dolar = require("readline-sync");

const Real = Number(Dolar.question("Quantos Reais voce possui $R: "));
const CotAtual = 5.54;

console.log(`Você deve levar $US${((Real / CotAtual).toFixed(2))}`)