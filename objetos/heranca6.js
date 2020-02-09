function Aula(nome, videoID) {
    this.nome = nome;
    this.videoID = videoID;
}

const aula1 = new Aula('Bem Vindo', 123);
const aula2 = new Aula('Até Breve', 456);
console.log(aula1, aula2)

//Simulando o new
function novo(f, ...params)  {
    const obj = {};
    obj.__proto__ = f.prototype;
    //params é um array
    f.apply(obj, params);
    return obj;
}

const aula3 = novo(Aula, 'Bem Vindo', 123);
const aula4 = novo(Aula, 'Até Breve', 456);
console.log(aula3, aula4);

//Simulando o operador new de uma função no JS *OBS: quase tudo é função
function newObj(f, ...params) {
    const obj = {}
    obj.__proto__ = f.prototype;
    f.apply(obj,  params);
    return obj;
}

