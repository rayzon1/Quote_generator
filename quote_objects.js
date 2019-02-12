// js project file_1 array of objects
let quotes = [{
    quote: 'To be... or not to be, that is the question.',
    source: 'William Shakespheare'
},
{
    quote: 'I\'ll be back!',
    source: 'Terminator'
},
{
    quote: 'You son of a bitch.',
    source: 'Arnold Swarzeneggar'
}]

for (var i in quotes){
    console.log(quotes[i]);
}

let random = Math.floor(Math.random() * 2) + 1;
if (random == 1){
    console.log('Your number is ' + random);
}else {
    console.log('Your number is ' + random)
}