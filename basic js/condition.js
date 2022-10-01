// && - and - all the conditions should be true
// || - or - if any of the condition is true then the outcome will be true
// ==
// ===
// !=
// !==


// var number = 33

// console.log(3 == "3")
// // console.log(3 > 4)
// // console.log(3 < 4)
// // console.log(3 != 4)
// console.log(5 === "5")
// // console.log(3 !== 4)


var math = "A"
var english = "B"
var science = "C"

// if math = A and english = A then the student is eligible for test exam;

if (math == "A" || english == "A" || science == "A") {
    console.log("student is eligible")
} else {
    console.log("not eligible")
}

// if the year is leap year or not 
// Hints: If a year is exactly divisible by 4 and not divisible by 100, then it is a leap year. Or if a year is exactly divisible by 400 then it is a leap year.


var year = 2024

if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
    console.log(year + " is a leap year")
} else {
    console.log(year + " is not a leap year")
}

// 

var isRain = false;
var budget = 500

var guestAshce = true;

if ((isRain == false && budget <= 500) || guestAshce == true){
    console.log("I will go for shopping")
} else {
    console.log("I will stay at home")
}




