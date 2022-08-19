const objectA = {
  keyA: 'Value A',
  keyB: 'Value B',
}
// Posso alterar o valor da chave
objectA.keyA = 'Another value'

// Não posso criar uma nova chave

// objectA.keyC = 'New Key' //

// devo especificar o tipo de objeto

// posso utilizar dessa forma, porém, o unknown aceita qualquer tipo de valor

const objectB: Record<string, unknown> = {
  keyA: 'Value A',
  keyB: 'Value B',
}
objectB.keyC = 'New Key'

// A melhor maneira:
const objectC: {
  readonly keyA: string
  keyB: string
  // keyC?: string // chave opcional
  // ou :
  [key: string]: unknown // any
} = {
  keyA: 'Value A',
  keyB: 'Value B',
}

objectC.keyZ = 'New value of Z'
console.log(objectC.keyZ)
export { objectC }
