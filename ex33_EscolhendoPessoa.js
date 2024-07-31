/* Elabore um programa em que realize o cadastro de homens e mulheres, suas idades e a cor da pele. No final mostre
 * total de homens com mais de 18 anos e cabelos castanhos e o total de mulheres entre 25 e 30 anos e
 * e cabelos loiros. Menu da cor da pele: Preto, Castanho, Loiro e Ruivo
 */

var input = require('readline-sync');

let totalHomem = 0;
let totalMulher = 0;
let sexo = 0;
let idade = 0;
let cabelo = 0;
let cadastro = "";

do {
    console.clear();
    console.log("Sexo: ");
    console.log("[1] Homem");
    console.log("[2] Mulher");
    sexo = Number(input.question(""));

    console.clear();

    idade = Number(input.question("Digite a idade: "));

    console.clear();

    console.log("Cor do Cabelo: ");
    console.log("[1] Preto");
    console.log("[2] Castanho");
    console.log("[3] Lorio");
    console.log("[4] Ruivo");
    console.log("[5] Outro");
    cabelo = Number(input.question(""));

    console.clear();

    console.log("Cadastrar mais alguém?");
    cadastro = String(input.question("[s] sim / [n] não\n"));

    switch(sexo) {
        case 1:
            if (idade >= 18 && cabelo == 2) {
                totalHomem++
            }
            break
        case 2:
            if (idade >= 25 && idade <= 30 && cabelo == 3) {
                totalMulher++
            }
            break
    }
} while ( cadastro == 's')
console.clear();

console.log(`Total de Homem com mais de 18 e cabelos castanho é: ${totalHomem}`)
console.log(`Total de Mulheres com mais de 25 e 30 anos e cabelos loiros é: ${totalMulher}`)
console.log(`Idade: ${idade}`)
console.log(`Cabelo: ${cabelo}`)