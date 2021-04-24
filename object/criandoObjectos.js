//Using literal notation

const obj1 = {}
console.log(obj1)

//Object in Js
console.log(typeof Object, typeof new Object) /* ao usar o new, o uso de colchetes em new Object()
torna-se opcional */
const obj2 = new Object
console.log(obj2) 

function Product(name, price, desc) {
    this.name = name 
    this.getPriceWithDescount = () => {
        return price * (1 - desc)
    }
}

const p1 = new Product ('pen', 5.99, 0.10)
const p2 = new Product ('notebook', 5000.99, 0.25)
console.log(p1.getPriceWithDescount())
console.log(p2.getPriceWithDescount())

function createEmployee (name, baseSalary, faults) {
    return {
        name,
        baseSalary,
        faults,
        getWage() {
            return (baseSalary / 30) * (30 - faults)
        }
    }
}

const f1 = createEmployee('John', 5000, 4)
const f2 = createEmployee('Mary', 10300, 1)
console.log(f1.getWage().toFixed(2), f2.getWage().toFixed(2))