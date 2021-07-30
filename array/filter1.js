const produtos = [
    {nome: 'Roupas', preco: 2499, fragil: false},
    {nome: 'iPad Pro' , preco: 4199, fragil: true},
    {nome: 'Copo de vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de plástico', preco: 4.99, fragil: false}
]

const caro = p => p.preco > 500
const fragil = p => p.fragil 

console.log(produtos.filter(caro).filter(fragil))