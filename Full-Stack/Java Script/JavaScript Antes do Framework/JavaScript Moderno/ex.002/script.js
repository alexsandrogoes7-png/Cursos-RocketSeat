//destruturing arrays (desestruturando arrays) permite extrair dados de arrays ou objetos em variáveis distintas.
"use strict" 
const data = ["Alex","alexsandrogoes7@gmail.com"]

const [username,email] = data

console.log(username)
console.log(email)

//Desestruturando somente a primeira
const fruits = ["Orange","Apple","Banana"]

const [laranja] = fruits

console.log(laranja)

//Ignorando o primeiro

const [,maçã] = fruits

console.log(maçã)

//Ignorando o primeiro e segundo

const [,,banana2] = fruits

console.log(banana2)