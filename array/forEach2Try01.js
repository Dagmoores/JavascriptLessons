// tentativa de implantar um método similar ao forEach padrão do JS.

const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']


function forEach2 (nome, indice, array) {

    for (let i = 0; i < aprovados.length; i++) {
        nome = aprovados[i]
        indice = i
        array = aprovados
    }
    console.log(aprovados)
}

aprovados.forEach2((x, y, z) => console.log(x, y, z))