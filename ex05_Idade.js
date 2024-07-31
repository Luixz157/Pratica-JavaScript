/* Você está fazendo aniversário, mas não sabe quantas velas colocar no bolo,
*  Sabe apenas o ano do seu nascimento. Contrua um programa que
*  Solucione este problema
*/ 

var readlineSync = require("readline-sync");

console.log("Para descobrir quantas velas colocar em seu bolo Responda a seguinte pergunta");
//PEgando a data 
const agora = new Date();
const anoAtual = agora.getFullYear();
const anoNascimento = Number(readlineSync.question("Qual seu ano de Nascimento [yyyy]: "));

if (anoNascimento > anoAtual) {
    console.log("{ERROR} Ainda não chegamos nesse ano");
} else if (anoNascimento < 0) {
    console.log("{ERROR} Seu ano é menor que zero");
}  else {
    console.log(`Você deve colocar em seu bolo ${anoNascimento - anoAtual}`);
}
    
    