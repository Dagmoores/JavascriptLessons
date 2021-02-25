/*
21) Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado
considerando que todos pagam R$ 100 mais um adicional conforme
a seguinte tabela: 
1) crianças com menos de 10 anos pagam R$80; 
2) conveniados com idade entre 10 e 30 anos pagam R$50; 
3) conveniados com idade acima de 30 e até 60 anos pagam R$ 95;
4) conveniados acima de 60 anos pagam R$130. 
*/

    
function healthPlan (age) {
    if (age < 10) {
        console.log("The price is R$", 100 + 80)
    }
    if (age >= 10 && age <= 30) {
        console.log("The price is R$", 100 + 50)
    }
    if (age > 30 && age <= 60) {
        console.log("The price is R$", 100 + 95)
    }
    if (age > 60) {
        console.log("The price is R$", 100 + 130)
    }
}

healthPlan(5)
healthPlan(10)
healthPlan(20)
healthPlan(50)
healthPlan(90)
