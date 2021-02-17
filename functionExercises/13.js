/*
13) Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.
*/

function daysSorter (day) {
    switch(day) {
        case 1:
        case 7: 
        case 8: 
        case 14: 
        case 15:
        case 21:
        case 22:
        case 28:
        case 29:
        console.log(`Day ${day} is a weekend!`);
        break;
        case 2:
        case 3: 
        case 4:
        case 5:
        case 6:
        case 9:
        case 10:
        case 11:
        case 12:
        case 13:
        case 16:
        case 17:
        case 18:
        case 19:
        case 20:
        case 23:
        case 24:
        case 25:
        case 26:
        case 27:
        case 30:
        case 31:
            console.log(`Day ${day} is not a weekend`)
        break;
        default:
            console.log(`Day ${day} is invalid`)
}
}

daysSorter(3)
daysSorter(7)
daysSorter(33)
