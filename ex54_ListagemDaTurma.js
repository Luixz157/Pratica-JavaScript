/* Construa um programam em que sejam cadastrados os nomes de 4 alunos, e duas notas para cada aluno cadastrado.  
 * Ao final o programa deve apresentar um relatório que tenha:
 * - Uma lista com nomes de cada aluno e suas respectivas médias;
 * - Outra lista com os nomes e o status de suas médias.
 * Caso o aluno tenha média maior ou igual a 7, aluno aprovado, caso a nota seja menor do que 7, aluno reprovado. A lista
 * de status deverá contes o nome seguido do status de cada usuário cadastrados
 */

var input = require('readline-sync');

// Declração de funções
function cabeca() {
    console.log(`------------------------`);
    console.log(`| ex54_ListagemDaTurma |`);
    console.log(`------------------------`);
}

// Declaração de variáveis
const QTDE_DE_ALUNOS = 4;
let nome = [];
let notaA = [];
let notaB = [];
let media = [];
let status = [];
let totalTurma = 0;
let mediaTurma = 0;
let alunoAcimaDaMedia = 0;

// Entrada de dados
for (let contador = 0; contador < QTDE_DE_ALUNOS; contador++) {
    cabeca()
    nome[contador] = String(input.question(`Nome do aluno ${contador + 1}: `));
    notaA[contador] = Number(input.question(`Nome a 1 nota: `));
    notaB[contador] = Number(input.question(`Nome a 2 nota: `));
    console.clear();
}

// Processamento e saída de dados
for (let contador = 0; contador < QTDE_DE_ALUNOS; contador++) {
    // Definindo a média de cada aluno
    media[contador] = ((notaA[contador] + notaB[contador]) / 2);
    // Definindo o status de cada aluno
    if (media[contador] >= 7) {
        status[contador] = "APROVADO"
    } else {
        status[contador] = "REPROVADO"
    }
    totalTurma += media[contador]
} 
// Definindo a média da turma
mediaTurma = totalTurma / QTDE_DE_ALUNOS
// Definindo a quantidade de alunos com a média maior que a média da turma
for (let contador = 0; contador < QTDE_DE_ALUNOS; contador++) {
    if (media[contador] > mediaTurma) {
        alunoAcimaDaMedia++
    }
}

cabeca();
console.log(`Nome --> MEDIA`);
for (let contador = 0; contador < QTDE_DE_ALUNOS; contador++) {
    console.log(`${nome[contador]} --> ${media[contador]}`);
}
console.log(`Nome --> STATUS`);
for (let contador = 0; contador < QTDE_DE_ALUNOS; contador++) {
    console.log(`${nome[contador]} --> ${status[contador]}`);
}
console.log(`MEDIA DA TURMA`);
console.log(`${mediaTurma.toFixed(2)}`);
console.log(`Alunos acima da média: ${alunoAcimaDaMedia}`)