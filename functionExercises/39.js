/* 39) ​ Crie uma função que receba dois vetores de igual tamanho e troque seus elementos de modo que 
o primeiro elemento do vetorA passe a ser o primeiro elemento do vetorB e vice versa e assim 
sucessivamente. Faça a troca sem utilizar uma variável auxiliar. */



function changeThings(vectorA, vectorB) {
    vectorA = [1, 2 , 3 , 4 , 5];
    vectorB = [2, 4, 6, 8, 10];

    const a = vectorA.length;

    for(i = 0; i < vectorB.length; i++) {
        vectorA.push(vectorB[i]);
    }
    for(i = 0; i < a; i++) {
        vectorB.push(vectorA[i]);
    }
    //console.log(vectorA)
    while(vectorA.length > a && vectorB.length > a) {
        i = 0;
        vectorA.shift();
        vectorB.shift();
        i++;
    }
    console.log("vector A:", vectorA);
    console.log("vector B:", vectorB);
}

changeThings();