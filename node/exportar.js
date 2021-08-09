console.log(module.exports === this)
console.log(module.exports === exports)

this.a = 1
exports.b = 2
module.exports.c = 2
console.log(exports)
// exports = null
console.log(module.exports)

// exports = {
//     nome: 'Daniel'
// }

console.log(module.exports)
console.log(exports)

exports.nome2 = 'Solange'
console.log(module.exports)

module.exports = {
    publico: true
}