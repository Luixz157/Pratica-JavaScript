/* Contrua um programa em que mostre 10 primeiros números da sequencia de Fibonacci.
 * Use a estrutura de repetição "for"
 * O que é a sequuência de fibonacci?
 * Na matemática, a sucessão de Fibonacci, é uma sequência de números inteiros, começando normalmento por 0 e 1
 * na qual cada termo subsequente corresponde à soma dos dois anteriores
 */

let numA = 0;
let numB = 1;
let numC = 0;
let fibonacci = "";

fibonacci += numA + "" + numB

for (let cont = 1; cont <= 8; cont++) {
    numC = numA + numB;
    fibonacci += "" + numC;
    numA = numB;
    numB = numC;
}

console.log(fibonacci)