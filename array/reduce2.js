const alunos = [
    {nome: 'João', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Ana', nota: 9.5, bolsista: false},
    {nome: 'Pedro', nota: 6.3, bolsista: false}
 ]

 // Desafio 1: Todos os alunos são bolsistas?
0
const arrayBolsista = alunos.map(e => e.bolsista)


const resultadoDesafio1 = arrayBolsista.reduce(function(acumulador, atual) {
    console.log(acumulador, atual)
    if (acumulador == false || atual == false) {
    return false 
    }
})
 
console.log(resultadoDesafio1)

console.log(`------------------------------------------------------------------------------`)

 // Desafio 2: Algum aluno é bolsista? 

const resultadoDesafio2 = arrayBolsista.reduce(function(acumulador, atual) {
   console.log(acumulador, atual)
    if (acumulador == true || atual == true) {
       return true
    }
})

console.log(resultadoDesafio2)