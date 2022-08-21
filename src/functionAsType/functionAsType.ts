// CallabeFunction: função que pode ser chamada
// pra criar um tipo de função: type "Nome" = (args) => retorno
type MapStringsCallback = (item: string) => string

function mapStrings(arr: string[], callbackfn: MapStringsCallback): string[] {
  const newArray: string[] = []

  for (let i = 0; i < arr.length; i++) {
    newArray.push(callbackfn(arr[i]))
  }

  return newArray
}

const abc = ['a', 'b', 'c']
const abcMapped = mapStrings(abc, (item) => item.toUpperCase())
console.log(abcMapped)
export default ''
