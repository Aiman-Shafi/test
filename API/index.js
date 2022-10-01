// const shop = {
//     shopName: "Shopno Store",
//     address: "Dhanmondi",
//     product: ["alu", "peyaj", "chal"],
//     owner: {
//         ownerName: "Minhaz",
//         age: "35"
//     },
//     totalEmployee: 50,
//     newStore: false
// }

// console.log(shop)

// // conver to json (Javascript Object Notation)
// const covertToJSON = JSON.stringify(shop)
// console.log(covertToJSON)

// let convert = JSON.parse(covertToJSON)
// console.log(convert)

// fetch("https://jsonplaceholder.typicode.com/users")
//     .then(response => response.json())
//     .then(data => console.log(data))

// fetch("https://jsonplaceholder.typicode.com/posts")
//     .then(res => res.json())
//     .then(data => console.log(data))


function fetchUser(){
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(data => displayData(data))
}

function displayData(users){
    console.log(users)
    let userDiv = document.querySelector(".data")
    for (user of users){
        // console.log(user.name, user.email, user.website)
        userDiv.innerHTML += `
            <h2>title: ${user.title}</h2>
            <p>body: ${user.body}</p>
            
            <br>
            <hr>
        `
    }
}

fetchUser()

// function fetchPhotos(){
//     fetch("https://jsonplaceholder.typicode.com/posts")
//         .then(res => res.json())
//         .then(data => console.log(data))
// }

// fetchPhotos()

// function displayPhoto(photos){
//     // console.log(photos)
//     let album = document.querySelector(".album")
//     for (photo of photos){
//         album.innerHTML = `
//             <h3>${photo.title}</h3>
//             <img src="${photo.body}"/>
//         `
//     }
// }