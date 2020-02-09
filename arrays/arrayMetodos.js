const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa'];

//Exclui o ultimo elemento do vetor
pilotos.pop();
console.log(pilotos);

//Adiciona um novo item ao ultimo elemento do vetor
pilotos.push('Verstappen');
console.log(pilotos);

pilotos.shift() //remove o primeiro!
console.log(pilotos);

pilotos.unshift('Hamilton'); //coloca no inicio
console.log(pilotos);

// splice pode adicioanr e remover elementos
// => Adicionar | antes do 2 adicionar os 2 elementos
pilotos.splice(2, 0, 'Bottas', 'Massa');
console.log(pilotos);

// => Remover 
pilotos.splice(3, 1); // remove o elemento 3 (Massa)
console.log(pilotos);

//retorna um novo array 
const algunsPilotos1 = pilotos.slice(2); // a partir do indice 2
console.log(algunsPilotos1);

const algunsPilotos2 = pilotos.slice(1, 5); // pega todos menos o indice 1
console.log(algunsPilotos2);

