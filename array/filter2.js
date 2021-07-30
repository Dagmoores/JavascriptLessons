Array.prototype.filter2 = function(callback) {

    let array = []

    for (let i = 0; i < this.length; i++) {

        if (callback(this[i], i, this)) {
            array.push(this[i])
        }
    }
    return array
}



const produtos = [
    {nome: 'Roupas', preco: 2499, fragil: false},
    {nome: 'iPad Pro' , preco: 4199, fragil: true},
    {nome: 'Copo de vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de plástico', preco: 4.99, fragil: false}
]

const caro = p => p.preco > 500
const fragil = p => p.fragil 

console.log(produtos.filter2(caro).filter2(fragil))