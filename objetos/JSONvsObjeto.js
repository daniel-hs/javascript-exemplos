const obj = { a: 1, b: 2, c: 3, soma () { return a + b + c}};
//Função foi excluida --> OBJ --> JSON
console.log(JSON.stringify(obj));

//JSON --> OBJ
console.log(JSON.parse('{"a": 1, "b": 2, "c": 3}'));

console.log(JSON.parse('{"a": 1, "b": "string", "c": true, "d": {}, "e": [] }'));
