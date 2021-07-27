const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

Array.prototype.forEach2 = function(funcaoCallBack) {
    
    for (let i = 0; i < this.length; i++) {
        
        // Aqui passamos uma função para ser executada como callback, porém...
        funcaoCallBack(this[i], i, this)
        // Essa função não existe a principio....

    }
}


// aprovados.forEach2() - um comando como esse, retornaria que funcaoCallBack não é uma função...
// ...Porque ela realmente não é. Não até nós usarmos um parâmetro no lugar de "funcaoCallBack"...
// que realmente seja uma função. 

/*  aprovados.forEach2(um, dois, três) - aqui coloquei 3 parâmetros que são indefinidos até o momento.   
    aprovados.forEach2((um, dois, tres) => console.log(um, dois, tres)) - coloquei uma arrowFunction
pra substituir a funcaoCallBack, passando a fazer com que funcione o método...
Uma coisa interessante que percebo aqui, e antes não havia notado, é que quando eu passo algo que "de fato
existe", como parâmetro, se eu tentar passar outro parâmetro no lugar, eu estarei apenas fazendo uma
atribuição desse novo parâmetro para ser igual à aquilo que já foi parâmetrado anteriormente. Isso ocorre,
quando chamei (um, dois tres) como parâmetros da função que ocupa o lugar da funcaoCallBack...
um torna-se this[i], dois torna-se i e tres torna-se this... vamos testar: */

// aprovados.forEach2((um, dois, tres) => console.log(um, dois, tres))

/* uma coisa que ainda estou com dúvida, é por que a funçãoCallback foi "substituida" pela nova função
passada como parâmetro, e já os parâmetros this[i],i e this, se mantem e são atribuidos aos parâmetros 
novos? Talvez porque a função callback é undefined e estes 3 parâmetros não? Vamos tentar testar */

// const doze = 12
// let string = 'string'

// function testeCallback (callback) {

//  callback(indefinido, doze, string)
// }


// testeCallback((x, y, z) => console.log(x, y, z))

// Answer: ReferenceError: indefinido is not defined

const doze = 12
let string = 'string'


function testeCallback (callback) {

 callback(null, doze, string)

}


testeCallback(
    
    function umaFuncao (x, y, z) {
    x = 15
    console.log(x, y, z, typeof callback, typeof umaFuncao)
}
)
    

/* Interessante!... é impossível usar como parâmetro um elemento indefinido. Não sendo possível, 
nem mesmo iniciar com ele indefinido e tentar substitui-lo depois por algo definido ou nulo. */
/* Mas, é possível iniciar com uma função indefinida e depois substitui-la por uma função definida */

// ou algo parecido com isso que ainda não compreendi. Mas, valeu o aprendizado. 