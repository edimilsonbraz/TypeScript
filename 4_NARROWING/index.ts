//1 - Type guard
function sum(a:number | string, b:number | string) {
  if(typeof a === 'string' && typeof b === 'string') {
    console.log(parseFloat(a) + parseFloat(b));
  }else if(typeof a === 'number' && typeof b === 'number') {
    console.log(a + b)
  }else {
    console.log("Impossível realizar esta soma")
  }
}
sum("4", "59")
sum(10, 42.5)
sum("10", 5)

//2 - Checando se o valor existe
function operations(arr: number[], operation?: string | undefined) {
  if(operation) {
    if(operation === "sum2") {
      const sum2 = arr.reduce((i, total) => i + total)
      console.log(sum2)
    }else if(operation === "multiply") {
      const multiply = arr.reduce((i, total) => i * total)
      console.log(multiply)
    }
  }else {
    console.log("Por favor, defina uma operação")
  }
}

operations([1,2,3])
operations([1,2,3], "sum")
operations([1,5,8], "multiply")

//3 instance of
class User {
  name

  constructor(name: string) {
    this.name = name
  }
}
class SuperUser extends User {
  constructor(name: string) {
    super(name)
  }
}
const jhon = new User("Jhon")
const paul = new SuperUser("Paul")

console.log(jhon)
console.log(paul)

function userGreeting(user: object) {
  if(user instanceof SuperUser) {
    console.log(`Olá ${user.name}, você tem permissão de Super usuário`)
  }else if(user instanceof User) {
    console.log(`Olá ${user.name}, você tem permissão limitada`)
  }
}
userGreeting(jhon)
userGreeting(paul)

//4 - Operator in
class Dog {
  name 
  breed 

  constructor(name: string, breed?: string) {
    this.name = name 
    if(breed) {
      this.breed = breed
    }
  }
}

const turca = new Dog("Turca")
const bob = new Dog("Bob", "Pastor Alemão")

function showDogDetails(dog: Dog) {
  //se existir raça faça
  if('breed' in dog) {
    console.log(`O cachorro é de raça ${dog.breed}`)
  }else{
    console.log('O cachorro é um SRD')
  }
}
showDogDetails(turca)
showDogDetails(bob)

/*
Desafio 3
1. Fazer uma função que receba review dos usuários, precisamos utilizar o narrowing
para receber dados.
2. As possibilidades são Boolean e number
3. Serão enviados números de 1 a 5(estrelas), prever uma mensagem para cada uma destas
notas
4. Ou false, que é quando o usuário não deixa um review, prever um retorno para este
caso também
*/
function getReview(nota: number | boolean) {
  if(nota == 1) {
    console.log("Nota de avaliação foi 1")
  }else if(nota == 2) {
    console.log("Nota de avaliação foi 2")
  }else if(nota == 3) {
    console.log("Nota de avaliação foi 3")
  }else if(nota == 4) {
    console.log("Nota de avaliação foi 4")
  }else if(nota == 5) {
    console.log("Nota de avaliação foi 5")
  }else{
    console.log("Conteúdo não foi avaliado")
  }
}
getReview(4)
getReview(1)
getReview(5)
getReview(false)


/*RESOLUÇÃO DO PROFESSOR*/
type Review = number | boolean
function showUserReview(review: Review) {
  if(!review) {
    console.log("Você não avaliou o produto")
    return
  }
  console.log(`A nota que você avaliou foi ${review}, obrigado`)
}
showUserReview(4)
showUserReview(2)
showUserReview(false)