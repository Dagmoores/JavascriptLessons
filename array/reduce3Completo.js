Array.prototype.reduce2 = function(callback, valorInicial = null) {
    let x 
    let y
    
    for(let i = 0; i < this.length; i++) {
        console.log(i)

        while (i == 0) {
        if (valorInicial != null) {
        x = valorInicial
        break
        } 
        else {
            x = this[i]
            y = callback(x, this[i + 1], i, this)
            x = y
            console.log(i)
        break
        } 
    }

    
        if (i > 0) {
        x = this[i]
        y = callback(x, this[i + 1], i, this)
        x = y
        i++
        }
    }
    return x
}


const alunos = [
    {nome: 'João', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Ana', nota: 9.5, bolsista: false},
    {nome: 'Pedro', nota: 6.3, bolsista: false}
 ]

 // Desafio 1: Todos os alunos são bolsistas?

const arrayBolsista = alunos.map(e => e.bolsista)
// console.log(arrayBolsista)

const todosBolsistas = function(acumulador, atual) {
    
    // console.log(acumulador, atual)

    return acumulador && atual
}
// console.log(arrayBolsista)
console.log(arrayBolsista.reduce2(todosBolsistas))
console.log(arrayBolsista)

// Desafio 2: Algum aluno é bolsista? 

const algumBolsista = (acumulador, atual) => acumulador || atual
console.log(arrayBolsista)
console.log(arrayBolsista.reduce(algumBolsista)) 