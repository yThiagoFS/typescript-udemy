type HasName = { name: string }
type HasLastName = { lastName: string }
type HasAge = { age: number }
type Person = HasName & HasLastName & HasAge

type AB = 'A' | 'B'
type AC = 'A' | 'C'
type AD = 'A' | 'D'
type Intersection = AB & AC & AD

const person: Person = {
  name: 'Thiago',
  lastName: 'Ferreira',
  age: 19,
}
console.log(person)

export default ''
