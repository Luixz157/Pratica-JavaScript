/* Você comprou muita muamba e quer saber quanto vai pagar de imposto. 
*  Construa um sistema que resolva este problema
*/

var input = require('readline-sync');

const valoProduto = Number(input.question('Quanto custou o produto? R$'));
console.clear()

if (valoProduto < 0) {
    console.log('{Error} Digite um numero Positivo!');
} else if (valoProduto == valoProduto) {
    console.log(`Você pagara de imposto R$${(valoProduto).toFixed(2)}`)
} else if (valoProduto > 2.259) {
    console.log(`Você pagara de imposto R$${(valoProduto * 0.07).toFixed(2)}`);
} else if (valoProduto > 2.826) {
    console.log(`Você pagara de imposto R$${(valoProduto * 0.15).toFixed(2)}`);
} else if (valoProduto > 3.751) {
    console.log(`Você pagara de imposto R$${(valoProduto * 0.22).toFixed(2)}`);
} else if (valoProduto > 4.664) {
    console.log(`Você pagara de imposto R$${(valoProduto * 0.27).toFixed(2)}`);
} else {
    console.log('{ERROR} Digite um valor valido!');
}