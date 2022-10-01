var car = {
   brand: "Toyota",
   model: 2013,
   color: "green",
   goodCondition: true,
   price: 230000,
   canStart: function(){
      console.log(this.brand + " is in good condition")
   }
}

car.canStart()
// console.log(car["brand"])

// console.log(car.brand)
// console.log(car.model)
// console.log(car.price)


// const human = {
//    key = value
// }

const human = {
   firstName: "Lazuk",
   lastName: "Shah",
   age: 45,
   married: true,
   canLaugh: function(){
      console.log(this.firstName + " " + this.lastName + " can laugh");
   },
   canWalk: function(){
      console.log("Lazuk can walk");
   },
   canDrive: function(){
      console.log("Lazuk can Drive");
   }
}

// console.log(human)

let humanDetails = `${human.firstName} is ${human.age} years old.`

// console.log(humanDetails)
human.canLaugh()
// human.canWalk()
// human.canDrive()
