"use strict";
//1 - Arrays
let numbers = [1, 2, 3, 4, 5];
numbers.push(6);
console.log(numbers);
console.log(typeof numbers);
const nomes = ['Edimilson', 'Mayk', 'Diego'];
console.log(typeof nomes);
nomes.push('Bruno');
console.log(nomes);
//2 - Outra sintaxe de Arrays
const numbs = [100, 200, 300];
console.log(numbs);
console.log(typeof numbs);
console.log(numbs[1]);
//3 - Any
const arr1 = [1, 'Tipagem', true, [], 'Edimilson'];
console.log(arr1);
arr1.push([1, 2, 3]);
console.log(arr1);
//4 - Parametros tipados
function soma(a, b) {
    return a + b;
}
console.log(soma(4, 5));
//5 - Retorno da função
function greeting(name) {
    return `Olá ${name}`;
}
console.log(greeting('Edimilson'));
//6 - Função Anônima
// setTimeout(() => {
//   alert('Olá Edimilson')
//   const salary: number = 4500
//   console.log(salary)
// }, 2000)
//7 - Tipagem de Objects 
function passCoordinates(coord) {
    console.log("X cordinates:" + coord.x);
    console.log("Y cordinates:" + coord.y);
}
const objCoord = { x: 329, y: 84.2 };
passCoordinates(objCoord);
const pessoaObj = { nome: "Edimilson", sobrenome: 'Braz' };
console.log(pessoaObj.sobrenome);
//8 - Props Opcionais
function showNumbers(a, b, c) {
    console.log('A: ' + a);
    console.log('B: ' + b);
    console.log('C: ' + c);
}
showNumbers(5, 8, 20);
showNumbers(5, 20);
//9 - Validando argumentos opcional
function advancedGreeting(firstName, lastName) {
    if (lastName !== undefined) {
        return `Olá, ${firstName} ${lastName}, tudo bem ?`;
    }
    return `Olá, ${firstName}, tudo bem ?`;
}
console.log(advancedGreeting('Edimilson', 'Brazolia'));
console.log(advancedGreeting("Mayk"));
//10 - Union types - Aceita varios tipos de dados juntos
function showBalance(balance) {
    console.log(`O saldo da conta é R$ ${balance}`);
}
showBalance(500);
showBalance("100");
//11 - Avançando em union types
function showUserRole(role) {
    if (typeof role === 'boolean') {
        return "Usuário não aprovado";
    }
    return `A função do usuário é: ${role}`;
}
console.log(showUserRole(true));
console.log(showUserRole('Admin'));
console.log(showUserRole('root'));
function showId(id) {
    console.log(`O ID é: ${id}`);
}
showId(1);
showId("120");
showId("123");
function showCoords(obj) {
    console.log(`X: ${obj.x} Y: ${obj.y} Z ${obj.z}`);
}
const objcoord = {
    x: 10,
    y: 15,
    z: 20
};
showCoords(objcoord);
// 15 - Literal Type
let test;
test = "testing";
console.log(test);
function showDirection(direction) {
    console.log(`A direção escolhida é ${direction}`);
}
showDirection("left");
showDirection("center");
//showDirection("top") Não aceita outros valores que não foram declarados
//16 Non-null Aseertion Operators 
const p = document.getElementById('some-p');
console.log(p.innerText);
