const alunos = [
    {nome: 'João', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Pedro', nota: 9.8, bolsista: false},
    {nome: 'Ana', nota: 8.7, bolsista: true},
]

const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual){
    console.log(acumulador, atual);
    return acumulador + atual
}, 10); //valor inicial é 10, assim ele começa pelo primeiro elemento
//10 + 7.3 = 17.3 -> 1º
//17.3 + 9.2 = 26.5 -> 2º
//...
console.log(resultado);