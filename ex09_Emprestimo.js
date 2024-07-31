/* Você ficou sem dinheiro e teve que pegar um empréstimo. Você vai pagar um valor de 20% 
*  a mais do valor que tomou emprestado e vai poder dividir em quantas parcelas quiser.
*  Construa um sistema que mostre de quanto será o valor de cada parcela
*/ 

var input = require('readline-sync');

const ValorEmprestimo = Number(input.question('Qual valor voce deseja: R$'));
const Parcelas = Number(input.question('Voce deseja dividir em quantas parcelas? '));

const ValorFinal = (ValorEmprestimo * 0.20) + ValorEmprestimo

console.clear()
console.log(`Voce Vai pegar de Emprestimo: R$${ValorEmprestimo}`);
console.log(`Voce vai parcelar em: ${Parcelas}x`);
console.log(`O preco a pagar em cada Parcela será: ${(ValorFinal / Parcelas).toFixed(2)}`);
console.log(`O preco a pagar ao final sera de: ${(ValorFinal).toFixed(2)}`);