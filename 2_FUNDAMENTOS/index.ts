//1 - numbers
let x: number = 10

console.log(x)

x = 16

console.log(typeof x)

const y: number = 15.584848

console.log(y)
console.log(y.toPrecision(3))

//2 - string
const firstName: string = "Edimilson"
console.log(firstName.toUpperCase())

let fullName: string

const lastName: string = "Braz"

fullName = firstName + " " + lastName

console.log(fullName)

console.log(typeof fullName)


//3 - boolean
let a: boolean = false 

console.log("a=" + a)
console.log(typeof a)

a = true

console.log("a=" + a)

//4 - Inference e annotation
const ann: string = "Teste"

let inf = "Teste" //ja reconhece como do tipo string

console.log("Testando TS Automático")