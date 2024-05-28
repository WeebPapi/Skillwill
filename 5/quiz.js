const quiz = document.querySelector('#quiz')
const buttons = quiz.querySelectorAll('button')
const answersBtn = document.querySelector('#answers')
let correct = 0
let attempts = 0

buttons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        attempts++
        const btnPressed = e.target
        if (!btnPressed.id){
            btnPressed.style.backgroundColor = 'red'
        }else {
            btnPressed.style.backgroundColor = 'green'
            correct++
        }
    })
})
answersBtn.addEventListener('click', () => {
    alert(`${correct} correct answers out of 3`)    
})




