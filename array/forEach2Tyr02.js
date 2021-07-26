// tentativa de implantar um método similar ao forEach padrão do JS.

const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

const aprovadosObj =  {

    metodoForEach2: function forEach2 (nome, indice, array) {

        for (let i = 0; i < aprovados.length; i++) {
            this.nome = aprovados[i]
            this.indice = i
            this.array = aprovados
        }
        return (nome, indice, array)
    }
}

aprovadosObj.metodoForEach2(nome => console.log(nome))
//aprovados.forEach2((x, y, z) => console.log(x, y, z))