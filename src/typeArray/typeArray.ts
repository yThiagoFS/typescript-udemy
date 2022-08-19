// Array<Tipo>  -  tipo[]

export function multiplyArgs(...args: Array<number>): number {
  return args.reduce((ac, value) => ac * value, 1)
}

export function concatStrings(...args: string[]): string {
  return args.reduce((ac, value) => ac + value)
}

export function toUpperString(...args: string[]): string[] {
  return args.map((value) => value.toUpperCase())
}

const result = multiplyArgs(1, 2, 3)
const concat = concatStrings('p', 'a', 'o')
console.log(result)
console.log(concat)
console.log(toUpperString('c', 'a', 'r'))

export { result }
