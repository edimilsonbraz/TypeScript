//1 - Arrays
let numbers: number[] = [1, 2, 3, 4, 5];

numbers.push(6)
console.log(numbers)
console.log(typeof numbers)

const nomes: string[] = ['Edimilson', 'Mayk', 'Diego']
console.log(typeof nomes)
nomes.push('Bruno')
console.log(nomes)

//2 - Outra sintaxe de Arrays
const numbs: Array<number> = [100, 200, 300]
console.log(numbs)
console.log(typeof numbs)
console.log(numbs[1])

//3 - Any
const arr1: any = [1, 'Tipagem', true, [], 'Edimilson']
console.log(arr1)

arr1.push([1,2,3])
console.log(arr1)


//4 - Parametros tipados
function soma(a:number, b:number) {
  return a + b
}

console.log(soma(4,5))

//5 - Retorno da função
function greeting(name: string) {
  return `Olá ${name}`
}
console.log(greeting('Edimilson'))

//6 - Função Anônima
// setTimeout(() => {
//   alert('Olá Edimilson')
//   const salary: number = 4500
//   console.log(salary)
// }, 2000)

//7 - Tipagem de Objects 
function passCoordinates(coord: {x: number, y: number}) {
  console.log("X cordinates:" + coord.x)
  console.log("Y cordinates:" + coord.y)
}
const objCoord = {x: 329, y: 84.2}
passCoordinates(objCoord)

const pessoaObj: {nome: string, sobrenome: string} = {nome: "Edimilson", sobrenome: 'Braz'}
console.log(pessoaObj.sobrenome)

//8 - Props Opcionais
function showNumbers(a:number, b:number, c?:number) {
  console.log('A: '+ a)
  console.log('B: '+ b)
  console.log('C: '+ c)
}
showNumbers(5, 8, 20)
showNumbers(5, 20)

//9 - Validando argumentos opcional
function advancedGreeting(firstName: string, lastName?: string) {
  if(lastName !== undefined) {
    return `Olá, ${firstName} ${lastName}, tudo bem ?`

  }

    return `Olá, ${firstName}, tudo bem ?`
}

console.log(advancedGreeting('Edimilson', 'Brazolia'))
console.log(advancedGreeting("Mayk"))


//10 - Union types - Aceita varios tipos de dados juntos
function showBalance(balance: number | string) {
  console.log(`O saldo da conta é R$ ${balance}`)
}
showBalance(500)
showBalance("100")

//11 - Avançando em union types
function showUserRole(role: boolean | string) {
  if(typeof role === 'boolean') {
    return "Usuário não aprovado"
  }
  return `A função do usuário é: ${role}`
}
console.log(showUserRole(true))
console.log(showUserRole('Admin'))
console.log(showUserRole('root'))

//12 - Type Alias
type ID = string | number

function showId(id: ID) {
  console.log(`O ID é: ${id}`)
}
showId(1)
showId("120")
showId("123")

//13 - Interface
interface Point {
  x: number
  y: number
  z: number
}

function showCoords(obj: Point) {
  console.log(`X: ${obj.x} Y: ${obj.y} Z ${obj.z}`)
}

const objcoord: Point = {
  x: 10,
  y: 15,
  z: 20
}
showCoords(objcoord)

// 15 - Literal Type
let test: "testing"
test = "testing"
console.log(test)

function showDirection(direction: "left" | "right" | "center") {
  console.log(`A direção escolhida é ${direction}`)
}
showDirection("left")
showDirection("center")
//showDirection("top") Não aceita outros valores que não foram declarados


//16 Non-null Aseertion Operators 
const p = document.getElementById('some-p')
console.log(p!.innerText)