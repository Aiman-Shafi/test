// taking input 
const notesTitle = document.querySelector("#default-text")
const notesDescription = document.querySelector("#description")
const noteGallery = document.getElementById("noteGallery")

let notes = localStorage.getItem("note-list")
if (notes == null) {
    allNotes = []
} else {
    allNotes = JSON.parse(notes)
}

function showNotes() {
    // let notes = localStorage.getItem("note-list")
    // if (notes == null) {
    //     allNotes = []
    // } else {
    //     allNotes = JSON.parse(notes)
    // }

    allNotes.forEach((note, id) => {      // for each use as function and take 2 parameter 1 as item and another as index
        noteGallery.innerHTML += `
        <div class="w-full shadow bg-blue-200 h-full rounded p-4 flex flex-col justify-between" id=${id}>
            <div class="container">
                <h2 class="text-sm font-semibold">${note.title}</h2>
                <hr class="border-white mt-2 border-1">
                <p class="text-[12px] mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet porro
                    deserunt accusantium illum qui, perspiciatis veritatis, placeat mollitia ipsam ex dolorem
                    temporibus, consequatur ab id. Ex incidunt eius soluta saepe.</p>
            </div>
            <div class="flex justify-end flex-wrap">
                <button class="text-sm px-5 py-1 mt-1 bg-slate-800 text-white">Edit</button>
                <button onClick="deleteNote(${id})" class="text-sm ml-2 px-5 py-1 mt-1 bg-red-800 text-white">Delete</button>
                <button onClick="taskDone(this)" class="text-sm ml-2 px-5 py-1 mt-1 bg-green-800 text-white">Completed</button>
            </div>
        </div>
        `
    })
    
}

document.getElementById("btn").addEventListener("click", e => {
    let userTitle = notesTitle.value.trim()
    let userDescription = notesDescription.value.trim()
    // if user Title exist then it will work
    let notesObject = { title: userTitle, description: userDescription } // creating a object to store all data in object as well in the local storage
    // localStorage.setItem("note-list",  notes) // setting the object to localstorage
    // let notes = localStorage.getItem("note-list")
    // if (notes == null) {
    //     allNotes = []
    // } else {
    //     allNotes = JSON.parse(notes)
    // }
    allNotes.push(notesObject)
    localStorage.setItem("note-list", JSON.stringify(allNotes)) // setting the object to localstorage
    notesTitle.value = ""
    notesDescription.value = ""
    console.log(allNotes)
    // showNotes()
    window.location.reload();
})

// mark as completed
function taskDone(markCompleted) {
    const element = markCompleted.parentElement.parentElement
    if (element) {
        element.classList.toggle("bg-green-500")
        element.classList.toggle("bg-blue-200")
    }
}

// function delete an item
function deleteNote(element) {
    allNotes.splice(element, 1)
    localStorage.setItem("note-list", JSON.stringify(allNotes))
    window.location.reload();
}

showNotes()

