// alert ('working')


$.getJSON('http://numbersapi.com/1?json')
// .then(data => console.log(data))
// console.log(r)

let nums = [1,3,6,9]
$.getJSON(`http://numbersapi.com/${nums}?json`)
// .then(data => console.log(data))


let arr = []

for(let i = 0; i <= 3; i++) {
    $.getJSON('http://numbersapi.com/1?json')
    .then(data => arr.push(data))
 }

Promise.all(
    Array.from({length:7}, () => {
        return $.getJSON('http://numbersapi.com/1?json');
    })
).then (facts => {
    facts.forEach(data => $('body').append(`<p>${data.text}</p>`))
});

