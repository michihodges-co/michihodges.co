const quote1 = 'Believe'
const quote2 = 'Good'
const quote3 = 'You'
const quote4 = 'Discipline equals freedom'
const quote5 = 'Get after it'

let myArray = [quote1, quote2, quote3, quote4, quote5]

let randomItem = myArray[Math.floor(Math.random()*myArray.length)]

console.log(randomItem)
document.write('<p>' + randomItem + '</p>')
