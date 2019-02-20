// message variable will hold the string containing the quote and source.
let message = '';

// function will print the text to the html page
const printQuote = (text) => {
    message = `<p class="quote1"> ${text['quote']} </p>`;
    message += `<p class="quote2"> ${text['source']} </p>`;
    let outputDiv = document.getElementById("output");
    outputDiv.innerHTML = message;
  }


// function will get a random quote, store it in string message then return the message
const getRandomQuote = () => {
    let random = Math.floor(Math.random() * quotes.length);
    let quoteSection = quotes[random];
    return quoteSection;
}

// function will return a random number between 1 - 255
const getRandomColor = () => {
    let random1 = Math.floor(Math.random() * 255);
    return random1;
}

// function will apply color and background styles using rgb color values
const printRandomColor = (a, b, c) => {
    document.getElementById("button").style.background = `rgba(${a}, ${b}, ${c}, 0.4)`;
}

// this function scales back the transform property in CSS
const buttonConfig = () => {
    document.getElementById("button").style.transform = "scale(1.0) rotate(360deg)";
}

// main function will set color variables to return value of getRandomColor() function
const main = () => {
    color = getRandomColor();
    color1 = getRandomColor();
    color2 = getRandomColor();
    printQuote(getRandomQuote());
    buttonConfig();
    printRandomColor(color, color1, color2);
    
}
