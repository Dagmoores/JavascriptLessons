const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}', 
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de lapis", "preco": 44.22}',
    '{"nome": "Caneta", "preco": 7.50}'
]

//retornar um array apenas com os preços 

const jsonPase = e => JSON.parse(e)

const informePreco = e => e.preco.toFixed(2)
const resultado = carrinho.map(jsonPase).map(informePreco)
console.log(resultado)