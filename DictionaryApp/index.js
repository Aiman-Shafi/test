const search = document.getElementById("floatingInput")
const allDetails = document.querySelector(".all-details")
const searchingBar = document.querySelector(".searching")
let audio;

function fetchData(word){
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    fetch(url)
        .then(res => res.json())
        .then(data => searchData(data))
}

// function search(word){
//     fetchData(data)
//     search.value = word 
// }

search.addEventListener("keyup", (e)=>{
    let word = e.target.value
    console.log("search " + word)
    if(e.key = "Enter" && word){
        fetchData(word)
    }
})


function searchData(data){
    console.log(data)
    console.log(data[0].meanings[0].synonyms)
    // for error
    if(data.title){
        searchingBar.innerText = data.message;
        allDetails.style.display = "none";
    }else{
        searchingBar.innerText = "Search Results.."
        allDetails.style.display = "block";
        document.querySelector(".search-word").innerText = data[0].word
        document.querySelector(".partOfSpeech").innerText = data[0].meanings[0].partOfSpeech
        
        // for word example
        if (data[0].meanings[0].definitions[0].example === undefined){
            // document.querySelector(".example").style.display = "none"
        } else {
            document.querySelector(".word-examples").innerText = data[0].meanings[0].definitions[0].example
        }

        audio = new Audio(data[0].phonetics[0].audio)

        document.querySelector(".word-meaning").innerText = data[0].meanings[0].definitions[0].definition + " | " + data[0].meanings[0].definitions[1].definition
        
        // for synonymns
        let synonymnsArray = data[0].meanings[0].synonyms
        let allSynonymns = document.querySelector(".synonyms-words")

        if (synonymnsArray === undefined){
            document.querySelector(".synonyms").style.display = "none"
        } else{
            document.querySelector(".synonyms").style.display = "block"
            for (let i = 0; i < 5; i++){
                if (synonymnsArray[i] !== undefined){
                    allSynonymns.innerHTML += `<span>${synonymnsArray[i]}</span>, `
                }    
                
            }
        }  
    }

}

document.querySelector(".btn").addEventListener("click", ()=>{
    console.log(audio)
    audio.play()
})