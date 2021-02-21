/*
15) Um homem decidiu ir à uma revenda comprar um carro. Ele deseja comprar um carro hatch, e a revenda
possui, além de carros hatch, sedans, motocicletas e caminhonetes. Utilizando uma estrutura switch, caso o
comprador queira o hatch, retorne: “Compra efetuada com sucesso”. Nas outras opções, retorne: “Tem certeza
que não prefere este modelo?”. Caso seja especificado um modelo que não está disponível, retorne no console:
“Não trabalhamos com este tipo de automóvel aqui”.
*/

function buyACar(carModel) {
    switch(carModel) {
        case 'hatch': 
            console.log('Successful Purchase!')
        break;
        case 'sedans':
        case 'motocicles':
        case 'pickups':
            console.log("Are you sure that you don't prefer this model?")
        break;
        default: 
            console.log ("We don't work with this model here")
    }
}

buyACar('hatch')
buyACar('sedans')
buyACar('pickups')
buyACar('trucks')
