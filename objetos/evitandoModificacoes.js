// Object preventExtesions, não da para adicionar atributos
const produto = Object.preventExtensions( {
    nome: 'Qualquer', 
    preco: 1.99, 
    tag: 'promoção'
});
// Não é um objeto extensivel
console.log('Extensível:', Object.isExtensible(produto));

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto)

//Object.seal (selar)
const pessoa = {
    nome: 'Juliana',
    idade: 35
}
//Não da adicionar e nem deletar atributos, mas da para modificar valores
Object.seal(pessoa);
console.log('Selado:', Object.isSealed(pessoa));
pessoa.sobreme = 'Silva';
delete pessoa.nome;
pessoa.idade = 29;
console.log(pessoa)

// Object.freeze = selado + valores contantes (completamente constante)