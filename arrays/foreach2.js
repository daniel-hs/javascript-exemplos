Array.prototype.forEach2 = function (callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this);
    }

}

const pessoas = ['Daniel', 'Alana', 'Regina', 'Aroldo'];

pessoas.forEach2(function (nome, indice) {
    console.log(`${Number(indice) + 1}) ${nome}`);
});
