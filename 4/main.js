//davaleba 1
const replaceString = (str, replacable, replacement) => (
    str.split(replacable).join(replacement)
)
//davaleba 2
const capitalize = (str) => (
    str.split(' ').map((word) => (
        word[0].toUpperCase() + word.slice(1)
    )).join(' ')
)
//davaleba 3
const sortByAge = (arr) => {
    arr.sort((a, b) => (a.age - b.age))
    return arr
}
const user = [
    {
        name: 'Saba',
        age: 27
    },
    {
        name: 'Gio',
        age: 18
    },
    {
        name: 'Tornike',
        age: 12
    },
    {
        name: 'Mari',
        age: 18
    },

]
console.log(sortByAge(user))
