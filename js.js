const wordDisplay = document.getElementById("random-word");
const wordButton = document.getElementById("button-word");
let randomWord = "";

function getRandomWord()
{
    fetch('https://random-word-api.herokuapp.com/word')
    .then(response => {
        if (response.ok)
        {
            return response.json();
        }

        throw new Error("Network response was not ok.");
    })
    .then(data =>
        {
            console.log(data);

            wordDisplay.textContent = data[0];

            console.log(randomWord);
        })
        .catch(error =>
            {
                console.error("There was a problem with your fetch operation:", error);
            });
}

wordButton.addEventListener("click", (e) => { 
    
    getRandomWord();
})


