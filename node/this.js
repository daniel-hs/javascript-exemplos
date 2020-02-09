console.log(this === global) //this aponta para module.expots
console.log(this === module)
console.log(this === module.exports)

console.log(this === exports)

function logThis() {
    console.log('Dentro de uma função...')
    console.log(this === exports) //dentro da função this não aponta para exports
    console.log(this === module.exports)
    console.log(this === global) // Aponta para global

    this.perigo = '...' //Colocando para o escopo global
}

logThis()

console.log(global.perigo)
