let btn = document.querySelector('.btn');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');



const quotes = [{quote: `"Rock the World"`, person: `Jacky Chan`}, {quote: `"Hello to the World"`, person: `Jet Chan`}, {quote: `"Im the World"`, person: `Albert E.`}, {quote: `"Time the World"`, person: `Anonymous`},];

btn.addEventListener('click', function(){

    console.log('btn is click');
    let random = Math.floor(Math.random() * quotes.length);
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})

