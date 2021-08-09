function logThis() {
    console.log('Dentro de uma função')
    console.log(this === exports)
    console.log(this === module.exports)
    console.log(this === global)

    this.perigo = '...'
}


// dentro de uma função, this aponta para global!!!!!! 
// fora de uma função, this aponta para module exports!!!
logThis()