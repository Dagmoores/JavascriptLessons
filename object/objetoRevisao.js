const product = new Object;
product.name = 'Cadeira'
product['product brand'] = 'Generic'
product.price = 220

console.log(product)
delete product.price
delete product['product brand']
console.log(product)

const car = {
    model: 'A4',
    price: 89000,
    owner: {
        name: 'Ravier',
        age: 34,
        addres: {
            street: '4th avenue',
            number: 1304,
            reference: 'brown gate'
        },
    },
    drivers: [{
        name: 'Julius',
        age: 19
    }, {
        name: 'Marcos',
        age: 29
    }],
    calcInsurance: function() {
        //.......
    }
}

car.owner.addres.number = 1000
car['owner']['addres']['street'] = 'Heart street'
console.log(car)
delete car.drivers
console.log(car)
delete car.calcInsurance
console.log(car)
console.log(car.drivers)
//console.log(car.drivers.length)