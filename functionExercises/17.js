/*
17) Um funcionário irá receber um aumento de acordo com o seu plano de
trabalho, de acordo com a tabela abaixo:
Plano Aumento
A 10%
B 15%
C 20%
Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido.
*/

function careerPath (plan) {
    const wage = 1350
    switch (plan){
    case 'A':
       return wage + (wage * 0.10)
        break;
    case 'B':
        return wage + (wage * 0.15)
        break;
    case 'C':
        return wage + (wage * 0.20)
        break;
    }
}

console.log(careerPath('A'))
console.log(careerPath('B'))
console.log(careerPath('C'))
