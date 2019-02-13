// random variable
let random = Math.floor(Math.random() * quotes.length);
let message = '';

// this function 
function print(message) {
    var outputDiv = document.getElementById("output");
    outputDiv.innerHTML = message;
  }

function printQuote(number){
    var quoteSection = quotes[number];
    message += '<p>' + quoteSection['quote'] + '</p>';
    message += '<p>' + quoteSection['source'] + '</p>';
}


printQuote(random)
print(message);