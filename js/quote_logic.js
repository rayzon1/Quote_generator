// random variable


let message = '';
// this function 
function print(text) {
    let outputDiv = document.getElementById("output");
    outputDiv.innerHTML = text;
  }

// print quote function
function printQuote(){
    let random = Math.floor(Math.random() * quotes.length);
    let quoteSection = quotes[random];
    message = '<p>' + quoteSection['quote'] + '</p>';
    message += '<p>' + quoteSection['source'] + '</p>';
    return message;
}

function main(){
    print(printQuote());
}
