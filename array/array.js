console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Daniel', 'Ana')

// console.log(aprovados)
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'Paulo'
aprovados.push('Abia')

console.log(aprovados.length)

aprovados[9] = 'Rafael'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)
console.log(aprovados)
aprovados.sort()
console.log(aprovados)

delete aprovados[1]
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ['Daniel', 'Matilda', 'Joseph']

aprovados.splice(1 , 0, 'Elemento1', 'Elemento2')
console.log(aprovados)