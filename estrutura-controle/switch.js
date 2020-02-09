const imprimirResultado = function (nota) {
    //Arredonda pra cima tail seria pra cima
    switch (Math.floor(nota)) {
        case 10:
        case 9:
            console.log('Quadro de Honra'); //Pega o case 9 e 10
            break;
        case 8: case 7:
            console.log('Aprovado');
            break;
        case 6: case 5: case 4:
            console.log('Recuperação');
            break;
        case 3, 2, 1, 0: 
            console.log('Reprovado');
            break;
        default:
            console.log('Nota inválida');
    }
}

imprimirResultado(2);