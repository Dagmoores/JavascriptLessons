const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Moore', 'Massa']
//console.log(pilotos)
pilotos.pop()
//console.log(pilotos)

pilotos.push('Verstappen')
//console.log(pilotos)

pilotos.shift()  // remove o primeiro!
//console.log(pilotos)

pilotos.unshift('Hamilton') // adiciona na primeira posição do array!
//console.log(pilotos)

pilotos.splice(2, 0, 'Bottas', 'Massa') // splice adicionando
//console.log(pilotos)

pilotos.splice(3, 1) // splice removendo 
console.log(pilotos)

const algunsPilotos = pilotos.slice(2)  //cria um novo array a partir da posição informada
console.log(algunsPilotos)

const algunsPilotos2 = pilotos.slice(1, 5) /* com dois parâmetros o splice cria o novo array
a partir de um intervalo */
console.log(algunsPilotos2)
