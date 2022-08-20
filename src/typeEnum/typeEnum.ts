// Estrutura de dados não ordenada que utilizamos quando temos mais opção para algo
enum Colors {
  RED, // 0
  BLUE, // 1
  YELLOW, // 2
}

enum Colors {
  ROXO = 'ROXO',
  VERDE = 201,
  ROSA,
}

console.log(Colors.RED)
console.log(Colors)
console.log(Colors[0])

enum Cars {
  Civic = 10,
  BMW = 100,
  Ferrari = 1000,
}
console.log(Cars[10])

function chooseColor(color: Colors): void {
  console.log(Colors[color])
}
chooseColor(Colors.ROXO)
