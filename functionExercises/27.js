/*
27) Construa uma função que receba como parâmetros as alturas e as taxas 
de crescimento anuais de duas crianças e calcule se existe uma criança 
menor, caso exista se a criança menor ultrapassará a maior e em quantos
anos isso acontecerá. Utilize centímetros para as unidades de medida.
*/

let childA = {
  height: 1.10,
  growthRate: 0.10,
  age: 11
}

let childB = {
  height: 1.00,
  growthRate: 0.110,
  age: 8
}

function heightCalc (heightA, heightB, growthRateA, growthRateB) {
  
    heightA = childA.height
    heightB = childB.height
    growthRateA = childA.growthRate
    growthRateB = childB.growthRate

    if (heightA > heightB && growthRabeB < growthRateA) {
     console.log("The Child A is Bigger than the child B")
    }
    else if (heightA > heightB && growthRateB > growthRateA) {
     console.log("The Child A is Bigger than the child B")
     for (i = heightB; //stopped here) )
     
   } else {
     console.log("The Child B is Bigger than the child A")
   }

   
  
}

heightCalc()
