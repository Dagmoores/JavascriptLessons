const alunos = [
    {nome: 'João', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Ana', nota: 9.5, bolsista: false},
    {nome: 'Pedro', nota: 6.3, bolsista: false}
 ]

 // Desafio 1: Todos os alunos são bolsistas?

const arrayBolsista = alunos.map(e => e.bolsista)

const todosBolsistas = (acumulador, atual) => acumulador && atual
console.log(arrayBolsista.reduce(todosBolsistas))

// Desafio 2: Algum aluno é bolsista? 

const algumBolsista = (acumulador, atual) => acumulador || atual
console.log(arrayBolsista)
console.log(arrayBolsista.reduce(algumBolsista))