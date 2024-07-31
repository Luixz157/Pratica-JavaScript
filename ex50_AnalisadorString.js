/* Elabore um programa que o usário digite seu nome e o programa retorne quantas letras tem o nome do usuário digitado;
 * Retorne seu nome em maiúscilo, em minúsculo; Retorne a primeira e última letra do seu nome; Qual a posição da letra "A"
 * no nome; qual o código ascii da letra "A" e o código ascii 65 corresponde a qual caractere.
 */

var input = require('readline-sync');

// Declração de funções
function cabeca() {
    console.log(`---------------------------`);
    console.log(`| ex50_AnalisadorDeString |`);
    console.log(`---------------------------`);
}

// Declaração de variáveis
let nome = "";

// Entrada de dados
cabeca();
nome = String(input.question("Digite seu nome: "))

// Processamento e saída de dados
console.log(`Seu nome tem ${nome.replace(/ /g, "").length}`);
console.log(`Seu nome tem ${nome.toUpperCase()}`);
console.log(`Seu nome tem ${nome.toLowerCase()}`);
console.log(`A primeira letra do seu nome é: ${nome.charAt()}`);
console.log(`A primeira letra do seu nome é: ${nome.charAt(nome.length - 1)}`);
console.log(`A posição da letra 'a' é: ${nome.indexOf("a")}`);
console.log(`O código ascii da letra 'a' é: ${nome.charCodeAt(nome.indexOf("a"))}`);
console.log(`O código ascii 65 corresponde a: ${String.fromCharCode(65)}`);
