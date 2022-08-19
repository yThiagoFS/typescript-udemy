// Tipo Void: especifica que uma função/método não retorna um valor.
function withoutReturn(...args: Array<string>): void {
  console.log(args.join(' '))
}
const person = {
  name: 'Thiago',
  lastName: 'Ferreira',

  showName(): void {
    console.log(this.name + ' ' + this.lastName)
  },
}
withoutReturn('Thiago', 'Lucas')
person.showName()
export { person }
