// 1. Write your functions here:

const katzDeli = []

const line = (array) => {
    if (array.length === 0) {
        let lineStatus = console.log(`The line is currently empty.`)
        return lineStatus
    } 
    else if (array.length > 0) {
        let count = []
        for (let i = 0; i < array.length; i++) {
            count.push(`${i + 1}. ${array[i]}`)
        }
        let lineStatus = console.log(`The line is currently: ${count.join(' ')}`)
        return lineStatus
    }
}

line(katzDeli)

const takeANumber = (katzArr, customer) => {
    let count = 0
    katzArr.push(customer)
    for (i = 0; i < katzArr.length; i++) {
        if (katzArr.length) {
            count = katzArr.length
            let greeting = console.log(`Welcome ${customer}. You are number ${count} in line.`)
            return greeting
        }
    }
}

takeANumber(katzDeli, "Ada") //=> Welcome, Ada. You are number 1 in line.
takeANumber(katzDeli, "Grace") //=> Welcome, Grace. You are number 2 in line.
takeANumber(katzDeli, "Kent") //=> Welcome, Kent. You are number 3 in line.

line(katzDeli)

// takeANumber(katzDeli, "Matz") //=> Welcome, Matz. You are number 4 in line.

const nowServing = (array) => {
    if (array.length === 0) {
        let serveStatus = console.log(`The line is currently empty.`)
        return serveStatus
    } 
    else if (array.length > 0) {
        let serveStatus = console.log(`Currently serving ` + array.shift() + `.`)
        return serveStatus
    }
}

nowServing(katzDeli)
line(katzDeli)




// 2. Example Usage

// const katzDeli = []

// takeANumber(katzDeli, "Ada") //=> Welcome, Ada. You are number 1 in line.
// takeANumber(katzDeli, "Grace") //=> Welcome, Grace. You are number 2 in line.
// takeANumber(katzDeli, "Kent") //=> Welcome, Kent. You are number 3 in line.

// line(katzDeli) //=> "The line is currently: 1. Ada 2. Grace 3. Kent"

// nowServing(katzDeli) //=> "Currently serving Ada."

// line(katzDeli) //=> "The line is currently: 1. Grace 2. Kent"

// takeANumber(katzDeli, "Matz") //=> Welcome, Matz. You are number 3 in line.

// line(katzDeli) //=> "The line is currently: 1. Grace 2. Kent 3. Matz"

// nowServing(katzDeli) //=> "Currently serving Grace."

// line(katzDeli) //=> "The line is currently: 1. Kent 2. Matz"