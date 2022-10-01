// 1. Swap the variables 

// var numberOne = 34;
// var numberTwo = 45;

// console.log(numberOne, numberTwo)

// // swaping variables

// var extra = numberOne;
// numberOne = numberTwo;
// numberTwo = extra;

// console.log(numberOne, numberTwo)

// Find the max number between 3 integers or 3 numbers

// function returnMaxNumber(num1, num2, num3){
//     if (num1 > num2){
//         console.log("num 1 is greater")
//     } else if (num2 > num3) {
//         console.log("num2 is greater")
//     } else if (num1 > num3) {
//         console.log("num1 is greater")
//     } else {
//         console.log("num3 is greater")
//     }
// }

// function returnMaxNumber(num1, num2, num3){
//     let maxNumber = 0;

//     if (num1 > num2){
//         maxNumber = num1
//         return "num1 is max";
//     } else {
//         maxNumber = num2
//         return "num2 is max";
//     } 

//     if (num3 > maxNumber){
//        maxNumber = num3
//        return "num3 is max";
//     }
// }

// console.log(returnMaxNumber(7,6,5))


// 3. find out sum of all numbers in an array 

// var arr = [3, 4, 5, 6, 78, 3, 8, 7, 8];

// var sum = 0;

// for (let i = 0; i < arr.length; i++) {
//     // console.log(arr[i])
//     // sum = sum + arr[i]
//     sum += arr[i]
//     // console.log(sum)
// }

// console.log(sum)

// 4. Fibo nacchi series ... 
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...

// 1st = 0 + 1
// 2nd = 1 + 1
// 3rd = 1 + 2
// 4th = 2 + 3
// nth = (n-1)th + (n-2)th
// ith = (i-1)th + (i-2)th
// 5th = (5-1)th + (5-2)th
// 5th = 4th + 3rd
// 

// var fibonacci = [0, 1]

// for (let i = 2; i < 19; i++) {
//     // nth = (n-1)th + (n-2)th
//     fibonacci[5] = fibonacci[5 - 1] + fibonacci[5 - 2]
// }
// console.log(fibonacci)

function fiboSeries(num) {
    var fibonacci = [0, 1]

    if (typeof num != "number") {
        return "Wrong input enter number type"
    }

    if (num <= 2) {
        return "Enter number greater than 2"
    }

    for (let i = 2; i < num; i++) {
        // nth = (n-1)th + (n-2)th
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2]
    }

    return fibonacci
}

// console.log(fiboSeries(3))


// Find the largest number in an array


// print out all the even numbers from an array

var num = [34, 45, 66, 67, 1, 34, 2, 22, 34, 56, 7, 8, 9, 10, 4, 78]

// for(let j = 0; j < num.length; j++){
//     // console.log(num[j])
//     if (num[j] % 2 == 0){
//         console.log(num[j] + " is an even number")
//     }
// }
// let highestNumber = num[0]

// for(let j = 0; j < num.length; j++){
//     // console.log(num[j])

//     if (num[j] > highestNumber){
//         highestNumber = num[j]
//     }
//     // console.log(highestNumber)
// }
// console.log(highestNumber)

// find the closest/fastest route 

const roads = [
    { name: "Dhaka", distance: 34 },
    { name: "khulna", distance: 45 },
    { name: "shylet", distance: 65 },
    { name: "comilla", distance: 15 },
    { name: "chittagong", distance: 55 },
]

// console.log(roads[4])

// let closestRoute = roads[0]
// for (const nearest of roads){
//     console.log(nearest.distance, nearest.name)
//     if (nearest.distance < closestRoute.distance){
//         closestRoute = nearest
//     }
// }

// console.log(closestRoute)


// Find a element from an where array = [a,b,d,e,e,f,g]
// linear search - (e)

// function linearSearch(arr, value){
//     // arr = ['a','b','d','e','e','f','g']
//     // let value = "e";
//     arrLength = arr.length

//     for (let i = 0; i < arrLength; i++){
//         if (arr[i] == value){
//             return i
//         }  
//     }

//     return "value not present"
// }

// console.log(linearSearch(['a','b','d','e','e','f','g'], "f"))


// find out the largest string from the given array and it's index

// function largestSentence(arrString){
//     let largestString = '';

//     for (sentence of arrString){
//         //  console.log(sentence) 
//         if (sentence.length > largestString.length){
//             largestString = sentence;
//         }
//     }

//     return [largestString, arrString.indexOf(largestString)]
//     // console.log(largestString + ":: is the largest sentence")
// }

// arrSentence = ["Hey, How are you? My name is JS", "Good morning", "is Javascript easy?? hellooooooooo", "my name is khan"]

// console.log(largestSentence(arrSentence))


// fizzBuzz - if 3 is divisible by that number then it's fizz, in case of 5 it should be print buzz. And if the 
// number is divisible by both 3 and 5 then it's fizzBuzz

// function fizzBuzz(){

// }


// for (let i = 1; i < 60; i++) {
//     if (i % 15 === 0) {
//         console.log(i, " fizzBuzz")
//     } else if (i % 3 === 0) {
//         console.log(i, " fizz")
//     } else if (i % 5 === 0) {
//         console.log(i, " Buzz")
//     }
// }
// for (let i = 1; i < 30; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log(i, " fizzBuzz")
//     } else if (i % 3 === 0) {
//         console.log(i, " fizz")
//     } else if (i % 5 === 0) {
//         console.log(i, " Buzz")
//     }
// }

function fizzBuzz(number){
    for (let i = 1; i < number; i++) {
        if (i % 15 === 0) {
            console.log(i, " fizzBuzz")
        } else if (i % 3 === 0) {
            console.log(i, " fizz")
        } else if (i % 5 === 0) {
            console.log(i, " Buzz")
        }
    }
}

// fizzBuzz(100)

// filter the falsy values

// let arr = [12, 4, "hello", null, "aiman", 0, false, true, undefined, 23, NaN]

// let newArr = arr.filter(function(value){
//     if(value){
//         return true
//     } else {
//         return false
//     }
// })

// console.log(newArr)


// const numbers = [45, 4, 9, 16, 25];
// const over18 = numbers.filter(function(value){
//     if (value > 18){
//         return value
//     }
// })

// console.log(over18)

// function myFunction(value, index, array) {
//   return value > 18;
// }

// find out the unique numbers from an array 

let arr = [3,4,5,6,7,8,9,2,2,3,4,11,23,54,5,6,77,88,90]

let matchedNumbers = arr.filter(function(value, index, array){
    // console.log(value, index, array)
    return array.indexOf(value) !== index
})

console.log(matchedNumbers)