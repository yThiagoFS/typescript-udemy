// Never = função/método que nunca vai retornar nada
export function createError(): never {
  throw new Error('any error')
}
createError()
