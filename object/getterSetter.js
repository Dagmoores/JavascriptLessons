const sequence = {
    _value: 1, /*por convenção, underline antes da variável indicará aos devs que eu pretendo
                 manter este valor privado */
    get value() { return this._value++ },
    set value(value) {
        if(value > this._value){
            this._value = value
        }
    }
}

console.log(sequence.value, sequence.value) /* por convenção, o JS vai entender que eu quero ler
este atributo, por isso ao usar .value ele iniciará o atributo referente ao get */
sequence.value = 1000 // Js entenderá que quero settar um valor, atribuindo ao set
console.log(sequence.value, sequence.value)