/* Crie um programa em que o usuário digite sete valores e no final o programam mostre a quantidade de valores pares
 * digitados e a posição de cada valor par digitado. Use variáveis composta (vetores/arrays)
 */

var input = require('readline-sync');

// Declração de funções
function cabeca() {
    console.log(`----------------------------`);
    console.log(`| ex53_ValoresParesVetores |`);
    console.log(`----------------------------`);
}

// Declaração de variáveis
const QTDE_VALORES = 7;
let valores = [];
let qtdeValoresPar = 0;

// Entrada de dados
cabeca()
for (let contador = 0; contador < QTDE_VALORES; contador++) {
    valores[contador] = input.question(`Digite o ${contador + 1} valor:`)
}
// Processamento e saída de dados
for (let contador = 0; contador < QTDE_VALORES; contador++) {
    if (valores[contador] % 2 == 0) {
        qtdeValoresPar++
    }
}

console.log(`Valores digitados: `);
console.log(valores);
console.log(`Foram digitados: ${qtdeValoresPar} valores pares!`);
console.log(`Posição => Valor Par:`)
for (let contador = 0; contador < QTDE_VALORES; contador++) {
    if (valores[contador] % 2 == 0) {
        console.log(`${contador} => ${valores[contador]}`)
    }
}