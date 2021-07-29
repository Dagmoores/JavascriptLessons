Array.prototype.map2 = function(callback) {

    array = new Array

    for (let i = 0; i < this.length; i++) {
        array.push(callback(this[i], i, this))
    } 
    return array
}



const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}', 
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de lapis", "preco": 44.22}',
    '{"nome": "Caneta", "preco": 7.50}'
]

//  retornar um array apenas com os preços 

const jsonParse = e => JSON.parse(e)

const informePreco = e => e.preco.toFixed(2)

const resultado = carrinho.map2(jsonParse).map2(informePreco)

console.log(resultado)