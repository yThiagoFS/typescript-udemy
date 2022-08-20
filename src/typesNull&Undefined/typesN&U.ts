let x
if (typeof x === 'undefined') x = 20
console.log(x * 2)

export function createPerson(
  name: string,
  lastName?: string,
): {
  name: string
  lastName?: string
} {
  return { name, lastName }
}

export function squareOf(x: any) {
  if (typeof x === 'number') return Math.pow(x, 2)
  return null
}

// pra checar se a função acima retornou null:

const squareOfTwoNumber = squareOf(2)
const squareOfTwoString = squareOf('2')

if (squareOfTwoNumber === null) {
  console.log('Conta Inválida')
} else {
  console.log(squareOfTwoNumber)
}
