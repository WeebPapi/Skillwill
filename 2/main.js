const users =  [{name: 'Temo', age: 25},
{name: 'Lasha', age: 21}, {name: 'Ana', age: 28}]

function findYoungest(users){
    ages = users.map((user) => (user.age))
    youngestAge = Math.min(...ages)
    youngestUser = users.find((user => (user.age === youngestAge)))
    return youngestUser.name
}

function cloneArray(arr) {
    return arr.map((item) => (item))
}

console.log(users)
console.log(cloneArray(users))