var quotes = [
  "Life is 10% what happens to you and 90% how you react to it.",
  "Good, better, best. Never let it rest. 'Til your good is better and your better is best."
]

getElementById('displayQuote').innerHTML = "cool";

function newQuote() {
  var randomNumber = Math.floor(Math.random() * (quotes.length));
  document.getElementById('displayQuote').innerHTML = quotes[randomNumber];
}

