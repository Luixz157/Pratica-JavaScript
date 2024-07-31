/* Desenvolva um programa que pergunte qual é o nome do usuário e no final mostre uma mensagem com o nome do usuário que foi digitado */
var readlineSync = require('readline-sync');
var nome = readlineSync.question('Qual seu nome: '); //Pergunta o nome e armazena

//Mostra o nome que foi digitado
console.log('Olá '+nome+ ', seja bem-vindo ')
//ou
console.log(`Hello ${nome}`);