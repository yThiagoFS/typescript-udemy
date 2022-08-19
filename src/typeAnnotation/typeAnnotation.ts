// Informar pro ts que a variável é de tal tipo
// Ao usar sinal de atribuição, o ts infere o tipo correto.

/* eslint-disable */
let personName: string = 'Thiago'
let age: number = 30 // 10, 1.57, -5.55, 0xf00d, 0b1010, 0o7744
let adult: boolean = true // true or false
let simbol: symbol = Symbol('any symbol') // symbol
let big: bigint = 10n // bigint

// Arrays
                      //<> indica qual tipo vou passar
let numbersArray: Array<number> = [1,2,3,4]
let stringsArray: Array<string> = ['a,b,c,d']

// ou, posso fazer dessa forma: numbersArray: number[]
let secondNumbersArray: number[] =[1,2,3]
let secondStringsArray: number[] =[1,2,3]

// Objetos                             //chave opcional
let person: { name: string, age: number, adult?: boolean } = {
  name: 'Thiago',
  age: 30
  // adulto é opcional
}

// Funções

function sum(x: number, y: number){
  return x + y
}

const result = sum(5,4)
// inferindo o tipo number com o =>, pois já foi usado :
const secondSum: (x: number, y:number) => number = (x,y) => x + y
