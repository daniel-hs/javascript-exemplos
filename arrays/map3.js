const carrinho = [
    '{ "nome": "Borracha", "preco":3.45}',
    '{ "nome":"Borracha", "preco":3.45}',
    '{ "nome":"Borracha", "preco":3.45}',
    '{ "nome":"Borracha", "preco":3.45}',
]

const paraObjeto = e => JSON.parse(e);
const apenasPreco = e => e.preco;

//map gera um novo array
Array.prototype.map2 = function(callback) {
    const newArray = [];
    for (let i = 0; i < this; i++) {
        newArray.push(callback(this[i], i, this));
    }
    return newArray;
}

const resultado = carrinho.map2(paraObjeto).map(apenasPreco);
console.log(resultado);