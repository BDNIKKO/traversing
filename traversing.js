
const header = document.querySelector('header') 

const sec = document.querySelectorAll('section') 

const currentSec = document.querySelector('section.current') 

const afterCurrent = currentSec.nextElementSibling 

const hTwo = currentSec.previousElementSibling.children[0] 

const fullDiv = currentSec.parentElement 

const h2Sections = Array.from(document.querySelectorAll('h2')).map(function(h2){return h2.parentElement}) 


console.log(header)
console.log(sec)
console.log(currentSec)
console.log(afterCurrent)
console.log(hTwo)
console.log(fullDiv)
console.log(h2Sections)