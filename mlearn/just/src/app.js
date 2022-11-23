const msg = "hello"
var name = "SR"
var lname = "ray"

function firstEncounter(a, b) {
    sum = a + b
    diff = a - b
    prod = a * b 
    div = a / b

    console.log(`My msg to world - ${msg} : ${name} ${lname}`)
    console.log(`sum = ${sum}`)
    console.log(`diff = ${diff}`)
    console.log(`prod = ${prod}`)
    console.log(`div = ${div}`)
}

function testReturnValue(a, b) {
    return `a % b = ${a % b}`
}

firstEncounter(9, 2)

console.error(testReturnValue(11, 3))