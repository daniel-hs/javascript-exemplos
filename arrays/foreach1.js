const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Rafael'];

aprovados.forEach(function (nome, indice, array) {
    console.log(`${indice + 1} ${nome}`);
    console.log(array);
});

aprovados.forEach( (nome,index) => {console.log(`${index} ${nome}`)});

const exibirAprovados = aprovado => console.log(aprovado);
aprovados.forEach(exibirAprovados);