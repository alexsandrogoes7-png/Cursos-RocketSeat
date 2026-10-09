//Shallow Copy (cópia superficial): não pega os itens aninhados.
//Shallow Copy para propriedades de valores primitivos (String,Number)

const htmlCourse = {
    course:"HTML",
    students: [{name: "Rodrigo",email:"rodrigo@email.com"}],
}

// const jsCourse = {
//     ...htmlCourse,
//     course:"Javascript"
// }

//Vai modificar o htmlCourse também students é uma referência e não uma cópia.
//jsCourse.stundents.push({name:"João",email:"joão@email.com"})

//Deep Copy(cópia profunda)
//Para propriedades mais complexas (Array, Objetos aninhados.)

// const jsCourse  = {
//     ...htmlCourse,
//     course:"JavaScript",
//     students:[...htmlCourse.students,{name:"Maria",email:"maria@email.com"}],
// }

// jsCourse.students.push({name:"João",email:"joão@email.com"})

const jsCourse = {
    ...htmlCourse,
    course:"JavaScript",
}

jsCourse.students = [
    ...htmlCourse.students,
    {name:"João",email:"joão@email.com"}
]

console.log(htmlCourse,jsCourse)