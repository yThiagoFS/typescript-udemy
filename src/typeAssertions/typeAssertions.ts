// alterar o tipo do valor
const body = document.querySelector('body')
// tenho certeza que o body existe, mas, o ts diz que pode ser nulo.

// body.style.background = 'red'

// para contornar isso, existem algumas opções:

// 1°

// if(body) body.style.background = 'red

// 2° informando pro ts que o body existe:
// non-null-assertion

// const body = document.querySelector('body')! (objeto não vai ser nulo, mas, não é aconselhável)

// 3° a mais utilizada:
// type assertion:
const body2 = document.querySelector('body') as HTMLBodyElement
body2.style.background = 'red'

// posso ter vários tipos de elemtns:
// HTMLElement
// (HTMLButtonElement =  button, HTMLDivElement = div)

const input = document.querySelector('.input') as HTMLInputElement

// convertendo o body para um number (muito provavelmente não irei utilizar)
const body3 = (document.querySelector('body') as unknown) as number

export { }
