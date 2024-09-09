const new_quote = document.querySelector("#js-new-quote");
const question_api = 'https://trivia.cyberwisp.com/getrandomchristmasquestion';


new_quote.addEventListener("click", getQuote)

async function getQuote(){
    try{
        const response = await fetch(question_api);
        const quote = await response.json();
        displayQuote(quote.question);
        
    } catch (error) {
        console.error(`Error Message: ${error.message}`);
        alert(`Error Message: ${error.message}`);
        displayQuote("Error");
    }
}

function play_sound(sound) {
    sound.play();
}