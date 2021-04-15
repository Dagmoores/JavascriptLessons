/* 40) Faça uma função que receba como parâmetro um vetor de notas e mostre os conceitos de cada uma 
de modo que de 0,0 a 4,9 seja atribuído o conceito D, de 5,0 a 6,9 seja atribuído o conceito C, de 
7,0 a 8,9 o conceito B e de 9,0 a 10,0 o conceito A. */


function notesCalc (notes) {
    notes = [2.6, 3.9, 9, 9.8, 6.6, 11];
    for(i = 0; i < notes.length; i++) {
        if(notes[i] > 0 && notes[i] <= 4.9) {
            console.log(notes[i], "Concept D")
        } else if(notes[i] >= 5 && notes[i] <= 6.9) {
            console.log(notes[i], "Concept C")
        } else if(notes[i] >= 7 && notes[i] <= 8.9) {
            console.log(notes[i], "Concept B")
    } else if(notes[i] >= 9 && notes[i] <= 10) {
        console.log(notes[i], "Concept A")
    } else {
        console.log("Invalid note")
    }
}
}
notesCalc()