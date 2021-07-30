 const alunos = [
    {nome: 'João', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Ana', nota: 9.5, bolsista: false},
    {nome: 'Pedro', nota: 6.3, bolsista: false}
 ]

 console.log(alunos.map(a => a.nota))
 const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual) {
     console.log(acumulador, atual)
     return acumulador + atual
 })

 console.log(resultado)