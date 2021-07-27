const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach((nome, indice) => console.log(`${indice + 1}) ${nome}`))

aprovados.forEach(nome => console.log(nome))

aprovados.forEach((x, y, z) => console.log(z))

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)