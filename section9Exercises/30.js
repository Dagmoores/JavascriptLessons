/*
Elabore uma função que recebe um objeto com estudantes e suas notas. As notas de cada estudante estarão
num array, conforme exemplo abaixo. Você deverá calcular a média da nota de cada aluno e retornar um objeto
com os atributos nome e media, que indica o aluno que teve o melhor desempenho nas notas.
Exemplo:
recerberMelhorEstudante({
Joao: [8, 7.6, 8.9, 6], // média 7.625
Mariana: [9, 6.6, 7.9, 8], // média 7.875
Carla: [7, 7, 8, 9] // média 7.75
}) // retornará { nome: "Mariana", media: 7.875 }
*/

function bestStudent(objStudent) {
    
    let newObj = {}
    let media0 = 0
    let media = 0
    for (property in objStudent) {
      

    media = objStudent[property].reduce((p, c) => p + c) / objStudent[property].length

    if (media > media0) {
        media0 = media
        newObj.nome = property
        newObj.media = media
        }
    }
    console.log(newObj)
}

bestStudent({
    Joao: [8, 7.6, 8.9, 6], // média 7.625
    Mariana: [9, 6.6, 7.9, 8], // média 7.875
    Carla: [7, 7, 8, 9] // média 7.75
    })