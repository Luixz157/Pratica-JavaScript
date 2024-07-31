/* Desenvolva um programa que receba a quantidade total de alunos de uma sala. Em seguida
 * receba os nomes e notas desses alunos e no final mostre o aluno com a melhor nota e sua respectiva nota
 */

var input = require('readline-sync');

let quantidadeAlunos = Number(input.question("Quantos alunos a turma tem? "));
console.clear();

let cont = 0;
let melhorNota = 0;
let melhorAluno = "";

while (cont < quantidadeAlunos) {
    let nomeAluno = String(input.question(`Nome do aluno ${cont + 1}: `));
    let notaAluno = Number(input.question(`Nota do aluno ${cont + 1}: `));
    if(notaAluno > melhorNota) {
        melhorNota = notaAluno;
        melhorAluno = nomeAluno;
    }
    console.clear();
    cont++
}
console.log(`A turma tem ${quantidadeAlunos} alunos`);
console.log(`O melhor aproveitamento foi de ${melhorAluno} com nota: ${melhorNota}`);