/* Construa um sistema que o usuário digite um valor  e o programa informe 
*  se aquele valor é par ou ímpar 
*/

var Search = require('readline-sync');

const Num = Number(Search.question("Qual numero voce quer descobrir se e PAR ou IMPAR: "));

const Result = Num % 2;

if (Result == 1) {
    console.log("IMPAR");
} else if (Result == 0) {
    console.log("PAR");
} else {
    console.log("{ERROR} Solicite um numero valido!")
}