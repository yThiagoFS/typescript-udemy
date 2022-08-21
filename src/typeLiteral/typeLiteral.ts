let x = 10 // eslint-disable-line
x = 0b1010
const y = 10 // como é uma constante, ele é um subtipo de number, mas não pode alterar o valor.

let a: 100 = 100 // eslint-disable-line
// declarando o tipo 100 para o A (não posso alterar mais)
// não é aconselhado
let b = 100 as const // eslint-disable-line

const person = {
  name: 'Thiago' as const,
  lastName: 'Ferreira',
}

function chooseColor(color: 'Red' | 'Yellow' | 'Blue'): string {
  return color
}
console.log(chooseColor('Yellow'))
export default 1
