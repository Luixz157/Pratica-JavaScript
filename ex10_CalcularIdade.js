/* Desenvolva um programa em que o usuário digite o ano de nascimento e o programa mostre 
*  a idade do usuário e uma mensagem informamndo se ele já atingiu a maioridade
*/

var Terminal = require("readline-sync");

const Ano = new Date()
const AnoAtual = Ano.getFullYear()

console.log("Escolha entre Brasil e Estados Unidos para ver se voce ja atingiu a maior Idade")
const Pais = Number(Terminal.question("Brasil = 1 | Estados Unidos = 2: "));

if (Pais == 1) {
    const Nascimento = Number(Terminal.question("Qual ano voce nasceu [yyyy]: "));

    const absoluto = Math.abs(Nascimento - AnoAtual);
    const idade = absoluto ;
    console.log("Sua idade é: "+idade);

    if (idade < 0) {
        console.log("{ERROR} Sua idade nao e menor que 0!");
    } else if (idade < 18 ) {
        console.log("Voce é MENOR de idade no Brasil");
    } else {
        console.log("Voce é MAIOR de idade no Brasil");
    }
} else if (Pais == 2) {

    const Nascimento = Number(Terminal.question("Qual ano voce nasceu [yyyy]: "));

    const absoluto = Math.abs(Nascimento - AnoAtual);
    const idade = absoluto ;
    console.log("Sua idade é: "+idade);

    if (idade < 0) {
        console.log("{ERROR} Sua idade nao e menor que 0!");
    } else if (idade < 21 ) {
        console.log("Voce é MENOR de idade no Estados Unidos");
    } else {
        console.log("Voce é MARIOR de idade no Estados Unidos");
    }
} else if (Pais != 1 || Pais != 2 ) {
     console.log("{ERROR} Selecione um numero valido!");
} else {
    console.log("{ERROR} Selecione um numero valido fornecido!")
}

