let fruits = ["Apple","Watermelon","Strawberry","Lemon"]
console.log(fruits)

//Encontra e retorna o índice do elemento no Array
let position1 = fruits.indexOf("Strawberry")
console.log(position1)

//Elementos não encontrados retornam -1
let position2 = fruits.indexOf("Orange")
console.log(position2)

//Remove item pela posição do índice
// fruits.splice(1, 2)
fruits.splice(position1,1)
console.log(fruits)


