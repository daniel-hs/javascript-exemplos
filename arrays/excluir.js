const produtos = [
    {
        nome: 'Notebook',
        preco: 1999.99,
        fragil: false
    },
    {
        nome: 'Celular',
        preco: 1199.50,
        fragil: false
    },
    {
        nome: 'Smart TV 42',
        preco: 1299.00,
        fragil: true
    }
]

//algum produto fragil
const produtosFrageis = p => p.fragil;
const frageis = (resultado, fragil) => resultado && fragil;
console.log(produtos.map(produtosFrageis).reduce(frageis));

const qualquerProdutoFragil = (resultado, fragil) => resultado || fragil;
console.log(produtos.map(produtosFrageis).reduce(qualquerProdutoFragil));
