
var quotes = [
  "Life is 10% what happens to you and 90% how you react to it.",
  "Good, better, best. Never let it rest. 'Til your good is better and your better is best.",
  "Knowing is not enough; we must apply. Willing is not enough; we must do."
]


var author = [
  "Charles R. Swindoll",
  "Tim Duncan",
  "Johann W. von Goethe"
]

window.onload = newQuote();

function newQuote() {
  var randomNumber = Math.floor(Math.random() * (quotes.length));
  document.getElementById('displayQuote').innerHTML = quotes[randomNumber];
  document.getElementById('displayAuthor').innerHTML =  "-" + author[randomNumber];
};


