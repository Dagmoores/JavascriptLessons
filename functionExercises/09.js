/*
09) Construa uma função para um sistema de notas de uma instituição que possui a seguinte política de
classificação: Todo aluno recebe uma nota de 0 a 100.* Alunos com nota abaixo de 40 são reprovados. As notas
possuem a seguinte regra de arredondamento: Se a diferença entre a nota e o próximo múltiplo de 5 for menor
que 3, arredondar a nota para esse próximo múltiplo de 5. Se a nota for abaixo de 38, não é feito nenhum
arredondamento pois esta nota resulta na reprovação do aluno. Por exemplo, a nota 84 será arredondada para
85, mas a nota 29 não será arredondada por ser abaixo de 40 e não ser possível arredondamento eficiente, ou
seja, que evite a reprovação do aluno. No caso de a nota ser 38, o arredondamento é possível pois atingirá 40
e o aluno será aprovado.
*/

//Not Finished, I need to make the last 2 results to work.
function classifiedNotes(grade) {
    let roundedGrade = grade + (5 - grade % 5)
     if (grade > 40 && (roundedGrade - grade) <= 3) {
            return console.log('Aprovado com nota:', roundedGrade)}
         else {return console.log('Aprovado com nota:', grade)}
    if (0 < grade < 40) {return console.log('Disaproved')
        }else {return console.log('Invalid Note')
        }
}



classifiedNotes(45)
classifiedNotes(43)
classifiedNotes(41)
classifiedNotes(47)
classifiedNotes(58)
classifiedNotes(69)
classifiedNotes(33)
classifiedNotes(0.2)
