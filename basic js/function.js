// what is function

// let number1 = 3
// let number2 = 4

// function addition(number1, number2){
//    const add = number1 + number2
//    console.log(add)
// }

// addition(12,13)
// addition(22,13)
// addition(12,45)
// addition(1233453,13)

function wish(userName){
    console.log("Happy birthday:", userName)
}

// wish("Samir")


// write a function to print a certain range of number

// for (let count = 1; count <= 10; count++){
//     console.log(count)
// }

function doForLoop(start, end){
    for (let count = start; count <= end; count++){
        console.log(count)
    }
}

// doForLoop(10,20)


// let sentence = "How are you doing? Is everything alright?"

function searchWord(sentence, search){
    let newSentence = sentence.toLowerCase()
    let newSearch = search.toLowerCase()
    let searchForWord = newSentence.indexOf(newSearch)
    console.log(searchForWord)
    if (searchForWord !== -1){
        console.log("Match Found")
    } else {
        console.log("No match found!!!")
    }
}

searchWord("How are you doing? Is everything alright?","is")








