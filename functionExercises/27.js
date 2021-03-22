/*
27) Construa uma função que receba como parâmetros as alturas e as taxas 
de crescimento anuais de duas crianças e calcule se existe uma criança 
menor, caso exista se a criança menor ultrapassará a maior e em quantos
anos isso acontecerá. Utilize centímetros para as unidades de medida.
*/

let childA = {
  height: 1.10,
  growthRate: 0.06,
  age: 11
}

let childB = {
  height: 1.15,
  growthRate: 0.05,
  age: 8
}

function heightCalc (heightA, heightB, growthRateA, growthRateB, ageA,
                    ageB) {
  
    heightA = childA.height
    heightB = childB.height
    growthRateA = childA.growthRate
    growthRateB = childB.growthRate
    ageA = childA.age
    ageB = childB.age

    if (heightA > heightB && growthRateB < growthRateA) {
     console.log("The Child A is Bigger than the child B")
    }
    else if (heightA > heightB && growthRateB > growthRateA) {
     console.log("The Child A is Bigger than the child B")
      
     for (i = ageB; (heightA >= heightB) && i < 21; i++) {
      heightA = heightA + growthRateA
      heightB = heightB + growthRateB
       
     } if (heightB > heightA) {
      console.log("But the kid B is gonna be bigger than A in",
                  (i - ageB - 1), "years")
     }
  }
       else if (heightB > heightA && growthRateA < growthRateB) {
     console.log("The Child B is Bigger than the child A")
    }
    else if (heightB > heightA && growthRateA > growthRateB) {
     console.log("The Child B is Bigger than the child A")
      
     for (i = ageA; (heightB >= heightA) && i < 21; i++) {
      heightA = heightA + growthRateA
      heightB = heightB + growthRateB
       
     } if (heightA > heightB) {
      console.log("But the kid A is gonna be bigger than B in",
                  (i - ageA - 1), "years")
     }
  }

     
}

heightCalc()
