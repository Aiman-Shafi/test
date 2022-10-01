var fruits = ["strawberry", "orange", "apple", "banana"]
// search item in an array
// console.log(fruits.indexOf("something"));

// accessing index
// console.log(fruits[3])

// array length
// console.log(fruits.length) 

// replace using index of an array
// fruits[2] = "kiwi";
// console.log(fruits)

// last item remove 
// fruits.pop()

// last item add 
// fruits.push("berry")

// first item remove
// fruits.shift()
// first item add
// fruits.unshift("angur")


// console.log(fruits.sort())
// console.log(fruits.reverse())

// var fruits = ["strawberry", "orange", "apple", "banana"]


// for (let i = 0; i < fruits.length; i++){
//         console.log(i)
//         console.log(fruits[i])
// }

// console.log(fruits.length)

// print out all the even numbers from an array

var num = [34,45,66,67,1,34,2,22,34,56,7,8,9,10,4, 78]

// for(let j = 0; j < num.length; j++){
//     // console.log(num[j])
//     if (num[j] % 2 == 0){
//         console.log(num[j] + " is an even number")
//     }
// }
let highestNumber = num[0]

for(let j = 0; j < num.length; j++){
    // console.log(num[j])

    if (num[j] > highestNumber){
        highestNumber = num[j]
    }
    // console.log(highestNumber)
}
console.log(highestNumber)

// find the largest in the array