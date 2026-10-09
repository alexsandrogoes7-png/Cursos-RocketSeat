// strict mode (passa a prestar atenção em erros silenciosos)

    "use strict" 

function showMessage(){
    let personName ="Alex"

    // personName ="Alex"

    console.log('Olá',personName)
}

showMessage()

class Student{
    get point (){
        return 7
    }
}

let student = new Student()

// student.point = 10

console.log(student.point)

//Tentar deletar propriedade de objeto que não posso deletar
// delete window.document

//Parâmetros duplicados
// function sum(a,a,c){
//     return a+a+c
// }

// const result  = sum(1,3,2)//3+3+2 = 8
// console.log("RESULTADO:",result)