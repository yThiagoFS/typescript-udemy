const clientData: readonly [number, string] = [1, 'Thiago'] // especifico que quero um numero no primeiro indice e uma string no segundo
// não posso alterar o valor dessa tupla pois ela é readonly

const clientData2: [number, string, string] = [20, 'Thiago', 'Ferreira']

const clientData3: [number, string, string?] = [20, 'Thiago']

const clientData4: [number, string, ...string[]] = [20, 'Thiago', 'Silva']

console.log(clientData)
