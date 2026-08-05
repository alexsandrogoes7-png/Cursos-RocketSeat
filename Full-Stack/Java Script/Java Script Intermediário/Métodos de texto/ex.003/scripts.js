let message = "Estou estudando os fundamentos do JavaScript."

//Comprimento de uma string
console.log(message.replace("JavaScript","HTML"))

console.log(message)

//Extraindo uma parte da string(start, end)
console.log(message.slice(6,30))

//Extraindo uma parte da string de trás para frente
console.log(message.slice(-11))

let textWithSpace = "   Texto de exemplo   "

//Remove espaços em branco no início e no final da string. Só antes e depois, no meio ele entende que é do proprio texto.
console.log(textWithSpace.trim())