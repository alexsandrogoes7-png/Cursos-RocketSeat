let message = "Estou estudando os fundamentos do JavaScript"

//Obtém a posição da palavra
console.log(message.indexOf("estudando"))

//Quando não encontra retorna -1 (falso)
//console.log(message.indexOf("Estudando"))

console.log(message.includes("estudando"))

console.log(message.toLowerCase().includes("estudando"))

console.log(message.toUpperCase().includes("estudando"))