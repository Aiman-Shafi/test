// function quote(){
//     fetch("https://api.kanye.rest/")
//         .then(res => res.json())
//         .then(data => displayQuote(data))
// }

// function displayQuote(quote){
//     console.log(quote.quote)
//     document.getElementById("quote").innerHTML = quote.quote
// }

// document.getElementById("generate").onclick = quote



// Generate Random User

// function randomUser() {
//     fetch("https://randomuser.me/api/")
//         .then(res => res.json())
//         .then(data => displayUser(data))
// }

// randomUser()

// function displayUser(users) {
//     // console.log(user)
//     // console.log(user.results)
//     console.log(users.results[0])
//     // console.log(user.results[0].name)
//     // console.log(user.results[0].name.title)
//     // console.log(user.results[0].login.username)
//     document.getElementById("generateUser").innerHTML = `
//     <div class="col">
//         <div class="card h-100">
//             <img src=${users.results[0].picture.large} class="card-img-top" alt="...">
//             <div class="card-body">
//                 <h5 class="card-title">${users.results[0].name.title} ${users.results[0].name.first}</h5>
//                 <p>Email: ${users.results[0].email}</p>
//                 <p>Gender: ${users.results[0].gender}</p>
//                 <p class="card-text">${users.results[0].phone}</p>
//                 <p class="card-text">${users.results[0].location.country}</p>
//             </div>
//         </div>
//     </div>
//     `
// }


function randomUser() {
    fetch("https://randomuser.me/api/?results=6")
        .then(res => res.json())
        .then(data => displayUser(data))
}

randomUser()

function displayUser(users) {
    console.log(users)
    
    let allUser = users.results

    for (let user of allUser){
        console.log(user.name)
        document.getElementById("generateUser").innerHTML += `
        <div class="col">
            <div class="card h-100">
                <img src=${user.picture.large} class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${user.name.title} ${user.name.first}</h5>
                    <p>Email: ${user.email}</p>
                    <p>Gender: ${user.gender}</p>
                    <p class="card-text">${user.phone}</p>
                    <p class="card-text">${user.location.country}</p>
                </div>
            </div>
        </div>
        `
    }
    
}