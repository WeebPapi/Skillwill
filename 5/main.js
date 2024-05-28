//davaleba 1
const bodEl = document.body

const button = bodEl.querySelector('#myBtn')

button.addEventListener('click', () => {
    const div = bodEl.querySelector('#container')
    div.style.display = 'none'
})
//davaleba 2
const card = document.createElement('div')
card.id = 'Card'
const heading = document.createElement('h2')
heading.innerHTML = 'Gandalf'
const anch = document.createElement('a')
anch.innerHTML = 'Go to profile'
anch.href = '#'
card.append(heading, anch)
bodEl.append(card)
//davaleba 3
