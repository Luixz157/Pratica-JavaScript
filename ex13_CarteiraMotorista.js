/* Crie um sistema em que o usuário digite o seu ano de nascimento e o programa informe se o usuário 
*  está apto ou inapto a tirar a carteira de trânsito. Considerando apto o usuário maior de idade
*/

var Terminal = require("readline-sync");

const idade = Terminal.question("Qual sua idade: ");

if (idade < 0) {
    console.log("{ERROR} Valor Invalido!")
} else if (idade < 18) {
    console.log("Você ainda não possui idade para dirigir")
} else if (idade > 18 || idade == 18) {
    console.log("Você pode DIRIGIR")
} else {
    console.log("{ERROR} Insira um valor Valido!")
}