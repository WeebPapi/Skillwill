const body = document.body
const button = body.querySelector('#btn')
console.log (button)

//davaleba 1

body.style.backgroundColor = 'blue'
button.addEventListener('click', () => {
    console.log('clicked')
    const dialog = document.createElement('div')
    dialog.style.backgroundColor = 'black'
    dialog.style.color = 'white'
    dialog.style.width = '150px'
    dialog.style.height = '125px'
    dialog.style.border = '1px solid white'
    const heading = document.createElement('h1')
    heading.innerHTML = 'Hello World!'
    dialog.append(heading)
    body.append(dialog)
})

//davaleba 2

const input = document.querySelector('#input')
console.log(input)
const changeColor = body.querySelector('#changeColor')
console.log(changeColor)
changeColor.addEventListener('click', () => {
    if (['red', 'blue', 'green', 'black', 'white'].includes(input.value.toLowerCase())) {
        console.log(input.value)
        body.style.backgroundColor = input.value.toLowerCase()
    }
    else {
        alert('Wrong color!')
    }
})

//davaleba 3
const numbersInput = document.querySelector('#numbers')

const averageButton = document.querySelector('#average')

averageButton.addEventListener('click', () => {
    const numbersString = numbersInput.value
    const numbers = numbersString.split(':').map(number => parseInt(number))
    const sum = numbers.reduce((accumulator, number) => (
        accumulator + number
    ))
    const average = document.createElement('p')
    average.innerHTML = sum/numbers.length
    body.append(average)
})
