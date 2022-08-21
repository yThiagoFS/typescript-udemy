// criar o apelido para um tipo com o type Alias
// Por convenção, tipos criado por nós são com letra inicial Maiuscula
type Age = number
type Person = {
  name: string
  lastName: string
  salary: number
  favoriteColor?: string
}
type ColorRGB = 'Red' | 'Green' | 'Blue'

type ColorCMYK = 'Cyan' | 'Magenta' | 'Yellow' | 'Black'

type FavoriteColor = ColorRGB | ColorCMYK

const person: Person = {
  name: 'Thiago',
  lastName: 'Ferreira',
  salary: 2000_000,
}
export function setFavoriteColor(person: Person, color: FavoriteColor): Person {
  return { ...person, favoriteColor: color }
}
console.log(setFavoriteColor(person, 'Red'))
