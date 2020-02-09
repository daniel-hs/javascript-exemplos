const carrinho = [
    '{ "nome": "Borracha","preco":3.45}',
    '{ "nome":"Borracha","preco":3.45}',
    '{ "nome":"Borracha","preco":3.45}',
    '{"nome":"Borracha","preco":3.45}',
]

const apenasPreco = carrinho.map(function(e) {
    const obj = JSON.parse(e);
    return obj.preco;
});
console.log(apenasPreco);

//ou
const paraObjeto = e => JSON.parse(e);
const 