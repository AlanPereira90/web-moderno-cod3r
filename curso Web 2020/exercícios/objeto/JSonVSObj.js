const obj = { a: 1, b: 2, c: 3, soma(){return a + b + c}}

console.log(JSON.stringify(obj)) // a fn não entra no json, pois ele é um formato de dados
console.log(JSON.parse(`{ "a": 1, "b": 2, "c": 3}`)) //nomes dos elementos e strings do json devem ser limitados por ""
console.log(JSON.parse(`{ "a" : 1.7, "b": "string", "c": true, "d":{}, "e":[{},{}] }`))