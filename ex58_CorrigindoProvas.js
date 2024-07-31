/* Construa um programa que seja cadastrado um gabarito com 5 questôes. Cadastre também 3 alunos e as 5
 * respostas de cada aluno. Cada resposta correta do aluno valerá 2 pontos. No final o programa deve mostrar a lista
 * com o nome dos alunos e a nota de cada aluno. Também deverá ser mostrado a média final da turma
 */

var input = require('readline-sync');

// Declração de funções
function cabeca() {
    console.log(`-------------------------`);
    console.log(`| ex58_CorrigindoProvas |`);
    console.log(`-------------------------`);
}

// Declaração de variáveis
const QTDE_DE_QUESTOES = 5;
const QTDE_DE_ALUNOS = 3;
let gabaritoQuestoes = [];
let alunos = [];
let gabaritoAluno = [];
let mediaAluno = [];
let somaMediaDosAlunos = 0;
let mediaDaTurma = 0;

// Entrada de dados
console.clear();
cabeca();
for (let i = 0; i < QTDE_DE_QUESTOES; i++) {
    gabaritoQuestoes[i] = input.question(`Gabarito da ${i + 1} questões: `);
}

console.clear();
cabeca();
for (let i = 0; i < QTDE_DE_ALUNOS; i++) {
    alunos[i] = input.question(`Informe o nome do ${i + 1} aluno: `);
}

for (let iA = 0; iA < QTDE_DE_ALUNOS; iA++) {
    console.clear();
    cabeca();
    mediaAluno[iA] = 0

    console.log(`Insira o gabarito do aluno ${alunos[iA]}`)
    for (let iQ = 0; iQ < QTDE_DE_QUESTOES; iQ++) {
        gabaritoAluno[iQ] = input.question([`Resposta da ${iQ + 1}: `] )
        if(gabaritoAluno[iQ] == gabaritoQuestoes[iQ]) {
            mediaAluno[iA] += 2;
        }
    }
    somaMediaDosAlunos += mediaAluno[iA]
}

mediaDaTurma = somaMediaDosAlunos / QTDE_DE_ALUNOS;

// Processamento e saída de dados
console.clear();
cabeca();
for(let i = 0; i < QTDE_DE_ALUNOS;i++) {
    console.log(`${alunos[i]} - media: ${mediaAluno[i].toFixed(2)}`)
}
console.log(`Média da turma: ${mediaDaTurma.toFixed(2)}`);
