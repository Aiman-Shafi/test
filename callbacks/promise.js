
const newOrder = true;

const order = new Promise((resolve, reject) => {
    if(!newOrder){
        const createOrder = {
            orderNo: 01,
            type: "clothes",
            customer: "saiful"
        }
        resolve(createOrder)
    } else {
        reject(new Error("order is already created"))
    }
})

order
    .then((res) => {
        console.log(res)
    })
    .catch((err) => {
        console.log(err.message)
    })