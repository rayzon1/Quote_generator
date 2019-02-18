// message variable will hold the string containing the quote and source.
let message = '';

// function will print the text to the html page
function printQuote(text) {
    let outputDiv = document.getElementById("output");
    outputDiv.innerHTML = text;
  }

// function will get a random quote, store it in string message then return the message
function getRandomQuote() {
    let random = Math.floor(Math.random() * quotes.length);
    let quoteSection = quotes[random];
    message = '<h1 id="quote1">' + quoteSection['quote'] + '</h1>';
    message += '<h2 id="quote2">' + quoteSection['source'] + '</h1>';
    return message;
}

// function will return a random number between 1 - 255
function getRandomColor() {
    let random = Math.floor(Math.random() * 255);
    return random;
}

// function will apply color and background styles using rgb color values
function printRandomColor(a, b, c) {
    document.getElementById("button").style.background = "rgba(" +  a + "," + b + "," + c + ", 0.4)";
    document.getElementById("quote1").style.color = "rgb(" +  a + "," + b + "," + c + ")";
    document.getElementById("quote2").style.color = "rgb(" +  a + "," + b + "," + c + ")";
}

// this function scales back the transform property in CSS
function buttonConfig() {
    document.getElementById("button").style.transform = "scale(1.0) rotate(360deg)";
}

// main function will set color variables to return value of getRandomColor() function
function main() {
    color = getRandomColor();
    color1 = getRandomColor();
    color2 = getRandomColor();
    printQuote(getRandomQuote());
    printRandomColor(color, color1, color2);
    buttonConfig();
    
}
