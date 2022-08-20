// Union Type: variavel ou retorno da função pode ter mais de um tipo:
//  string | number | boolean

function addOrConcat(a: number | string, b: number | string): number | string {
  if (typeof a === 'number' && typeof b === 'number') return a + b
  return `${a}${b}`
}
console.log(addOrConcat(10, 10))
console.log(addOrConcat('10', '10'))
