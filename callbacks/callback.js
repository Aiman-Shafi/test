const takeOrder = (user, callback) => {
    console.log(`Waiter is taking order from ${user}`)
    callback(user)
}

const orderProccessing = (user, callback) => {
    console.log(`order is ongoing for ${user}`)

    setTimeout(() => {
        console.log("order started")
        console.log(`order is in progress ... for ${user}`)
        callback(user)
    }, 2000)
}

const orderComplete = (user, callback) =>{
    console.log(`order is completed for ${user}`)
    callback()
}

const newOrder = (user) => {
    console.log("waiter is freee right now")
}

// takeOrder("samir")
// orderProccessing("samir")
// orderComplete("samir")

// order (shuru theke sesh prjnto)
takeOrder("samir", (user) => {
    orderProccessing(user, (user) => {
        orderComplete(user)
    })
})

console.log("ajk amr mon valo nei")


