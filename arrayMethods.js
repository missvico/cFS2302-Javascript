

const numbers = [3, 7, 20, 34]

numbers.forEach(function(number){
    console.log(number*2)
})

const double = function(number){
    console.log(number*2)
}
numbers.forEach(double)

const numbersDouble = numbers.map(function(number){
    return number*2
})

const evenNumbers = numbers.filter(function(number){
    return number%2 === 0
})
const evenNumbersArrow = numbers.filter(number => !(number%2))

const oddNumbers = numbers.filter(function(number){
    return number%2 !== 0
})
const oddNumbersArrow = numbers.filter(number => number%2)


const names = ["Celeste", "Fabrizio", "Victoria", "Juan", "Alex"]
const namesLength = names.map(function(name){
    return name.length
})



