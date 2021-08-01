const escola = [{
    nome: 'Turma m1',
    alunos: [{
        nome: 'Gustavo',
        nota: 8.1
    }, {
        nome: 'Ana',
        nota: 9.3
    },]
}, {
    nome: 'Turma m2',
    alunos: [{
        nome: 'Rebeca',
        nota: 8.9
    }, {
        nome: 'Roberto',
        nota: 9.3
    }]
}]

const getNotasAluno = aluno => aluno.nota
const getNotasTurma = turma => turma.alunos.map(getNotasAluno)

const notas1 = escola.flatMap(getNotasTurma)
console.log(notas1)


Array.prototype.flatMap = function(callback) {
    
    let arrayNovo  = []
    for(i = 0; i < this.length; i++) {
        arrayNovo.push(callback(this[i], i, this))
        return [].concat(arrayNovo)
    }
}