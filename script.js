const quoteBox = document.getElementById('quote-box');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('newQuoteBtn');

let apiQuotes = [];
// show New Quote
function newQuote(){
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)]
    //authorText.textContent = quote.author;
    if(!quote.author){
    authorText.textContent = "Unknown";

    }
    else{
    authorText.textContent = quote.author;

    }
    quoteText.textContent = quote.text;
}
//get quotes from API
async function getQuotes(){
    const apiUrl='http://type.fit/api/quotes';
try{
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
    newQuote();
}catch(error){
    // catch Error Here
}

}
// tweet quote
function tweetQuote(){
    const twitterUrl = `http://twitter.com/intent/tweet?text=${quoteText.textContent} -- ${authorText.textContent}`;

    window.open(twitterUrl, '_blank');
}
// event listeners
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);
//on load
getQuotes();