const quotes = [
    { quote: "The best way to predict the future is to invent it.", author: "Alan Kay" },
    { quote: "Life is 10% what happens to us and 90% how we react to it.", author: "Charles R. Swindoll" },
    { quote: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { quote: "Success is not how high you have climbed, but how you make a positive difference to the world.", author: "Roy T. Bennett" },
    { quote: "Your time is limited, so don’t waste it living someone else’s life.", author: "Steve Jobs" },
    { quote: "Not everything that is faced can be changed, but nothing can be changed until it is faced.", author: "James Baldwin" },
    { quote: "The purpose of our lives is to be happy.", author: "Dalai Lama" }
];

function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const selectedQuote = quotes[randomIndex];
    document.getElementById('quote').innerText = selectedQuote.quote;
    document.getElementById('author').innerText = `— ${selectedQuote.author}`;
}

function shareQuote() {
    const quoteText = document.getElementById('quote').innerText;
    const authorText = document.getElementById('author').innerText;
    const fullQuote = `${quoteText} ${authorText}`;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(fullQuote)}`;
    window.open(twitterUrl, '_blank');
}