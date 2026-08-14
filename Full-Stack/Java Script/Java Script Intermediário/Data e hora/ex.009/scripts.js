//Intl é a API de Internacionalização do ECMAScript.

//Obtém informações da localidade.

const currentLocale = Intl.DateTimeFormat().resolvedOptions()

console.log(currentLocale)

console.log(new Intl.DateTimeFormat("pt-BR").format(new Date()))
console.log(new Intl.DateTimeFormat("en-US").format(new Date()))

const date = new Date()

//Obtém diferença em minutos do timezone
console.log(date.getTimezoneOffset())

//Obtém diferença em horas do timezone
console.log(date.getTimezoneOffset()/60)

