// function teste(num) {
//     if(num > 7) {
//         console.log('OLA');
//         console.log('Hellow');
//     }
// }
// teste(8);

// const imprimirResultado = function(nota) {
//     if(nota >= 7) {
//         console.log('Aprovado');
//     } else {
//         console.log('Reprovado');
//     }
// }

// imprimirResultado(10);
// imprimirResultado(7);
// imprimirResultado(6.9); 
// imprimirResultado('oi'); 

Number.prototype.entre = function (inicio, fim) {
    return this >= inicio && this <= fim; //this = entre 
}

const imprimirResultado = function (nota) {
    if (nota.entre(9, 10)) {
        console.log('Quadro de Honra');
    } else if (nota.entre(7, 8.99)) {
        console.log('Reprovado');
    } else if (nota.entre(4, 4.99)) {
        console.log('Recuperação');
    } else if(nota.entre(0, 3.99)) {
        console.log('Reprovado');
    } else {
        console.log('Nota inválida');
    }
}
