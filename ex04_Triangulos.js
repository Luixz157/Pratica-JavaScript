//TesteDosTriangulos
/* Desenvolva um programa que soliceite ao usuário digitar o valor de três
lados de uma forma geométrica. O programa deverá informar se o valores digitados pelo usuários formam um triângulos
se esse triângulo é equilátero ou escaleno
equilátero = todos iguais
escaleno = todos diferentes */

var readlineSync = require("readline-sync");

var lado1 = Number((readlineSync.question("Solicite o lado1: ")))
var lado2 = Number((readlineSync.question("Solicite o lado2: ")))
var lado3 = Number((readlineSync.question("Solicite o lado3: ")))

if (lado1 == lado2 && lado1 == lado3 && lado2 == lado3) {
    console.log("Os lados são todos iguais");
} else if (lado1 == lado2 || lado1 == lado3 || lado3 == lado2) {
    console.log("Dois lados são iguais apenas");
} else {
    console.log("Todos lados são diferentes");
};