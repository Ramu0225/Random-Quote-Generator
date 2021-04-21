
let apiQuotes = [];
const quoteCox = document.getElementById('quote-Box');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('newQuoteBtn');
const loader = document.getElementById('loader');



//show loading
function loading(){
    loader.hidden = false;
    quoteCox.hidden = true;
}
function complete(){
    if(!loader.hidden){
        quoteCox.hidden = false;
        loader.hidden = true;
    }

}
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
    complete();
}

//get quotes from API
    async function getQuotes(){
   loading();
    const apiUrl='https://type.fit/api/quotes';
    
    try{
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuote();
        }catch(error){
            getQuotes();// catch Error Here
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

