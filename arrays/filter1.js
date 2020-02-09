

console.log(produtos.filter(function (p) {
    return p.preco > 2500
}));

//True e false
console.log(produtos.map(function (p) {
    return p.preco > 2500
}));

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil;

console.log(produtos.filter(caro).filter(fragil));