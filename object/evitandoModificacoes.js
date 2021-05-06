const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'Promocao'
}) 

console.log(Object.isExtensible(produto))
console.log(produto)

produto.nome = 'borracha'  //tentou alterar um que ja existe
produto.descricao = 'borracha escolar branca' //tentou adicionar novo atributo
delete produto.tag //tentou deletar um atributo

console.log(produto)

const pessoa = {nome: 'Juliana', idade: 35}
Object.seal(pessoa) //consegue alterar, mas não adicionar ou deletar atributos do Obj

console.log(Object.isSealed(pessoa))
pessoa.altura = 1.66
pessoa.nome = 'Mariana'
delete idade
console.log(pessoa)