let rand = 0, a = 0, b  = 0
while (rand !== 3) {
    rand = getRandomInt(1, 6)
    a++
}
console.log(a)
rand = 0
while (rand !== 3) {
    rand = getRandomInt(1, 6)
    b++
}
console.log(b)
if (a > b) {
    console.log(`The winner is b with ${b} rolls!`)
}
else if (a < b) {
    console.log(`The winner is a with ${a} rolls!`)
}
else {
    console.log(`${a} is equal to ${b}, it's a draw!`)
}
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }