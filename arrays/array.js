console.log(typeof Array, typeof new Array, typeof []);

let aprovados = new Array('Bia', 'Carlos', 'Ana');
console.log(aprovados);
aprovados = ['Bia', 'Carlos', 'Ana'];
console.log(aprovados[0]);

aprovados.push('EOQ');
console.log(aprovados.length);

aprovados[9] = 'Rafael';
console.log(aprovados.length);

console.log(aprovados[8] === undefined);

console.log(aprovados);

aprovados.sort(); 
console.log(aprovados);

delete aprovados[1];
console.log(aprovados[1]);
console.log(aprovados[2]);

aprovados = ['Bia', 'Carlos', 'Ana'];
//Indica que começa e qual termina exemplo 0,3 para excluir array inteiro
aprovados.splice(1, 2, 'Elemento1', 'Elemento2'); //Exclui carlos e ana e insere os elementos
console.log(aprovados);