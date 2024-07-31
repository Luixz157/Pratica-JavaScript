/* Desenvolva um programa em que simule a reserva de cadeiras de um cinema. No total serão 10 cadeiras
 * Quando o usuário escolher qual a sua cadeira, deverá ser apresentado quais as cadeiras estão livres em quais estão ocupadas
 */

var input = require('readline-sync');

// Declração de funções
function cabecalho() {
    console.log(`-----------------------`);
    console.log(`| ex59_ReservarCinema |`);
    console.log(`-----------------------`);
}

function cadeirasCinema() {
    let cinema = "";
    for (let c = 1; c <= QTDE_DED_CADEIRAS; c++) {
        cinema += `| ${reserva[c]}`;
        console.log(`-----------------------`);
    }
    console.log(cinema);
}

function cadeiraReservada(numero) {
    for(let c = 1; c <= QTDE_DED_CADEIRAS; c++) {
        if(reserva[numero] == 'X') {
            return false
        } else {
            return true
        }
    } 
}

// Declarando Variavel
let resposta = "";
const QTDE_DED_CADEIRAS = 10;
let reserva = []
let cadeira = 0;

// Inserindo valores no array reserva
for(let c = 1; c <= QTDE_DED_CADEIRAS; c++) {
    reserva[c] = c
}

do {
    cabecalho();
    cadeirasCinema();
    cadeira = Number(input.question(`Informe uma cadeira: `));

    // Processando dados
    console.clear();
    while(cadeiraReservada(cadeira) == false) {
        cabecalho();
        cadeirasCinema();
        cadeira = Number(input.question(`Informe uma cadeira: `));
    }

    for(let c = 1; c <= QTDE_DED_CADEIRAS; c++) {
        if (reserva[c] == cadeira) {
            reserva[c] = "X"
        }
    }

    // Saidad de dados
    console.clear();
    cabecalho();
    cadeirasCinema();

    // Entrada de dados
    resposta = input.question(`Quer continuar? [s][n]: `)
    console.clear();
} while (resposta == "s") {

}

console.clear();
console.log("Programa encerrado!");