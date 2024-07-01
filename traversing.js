// Select the first <header> element in the document
const header = document.querySelector('header') 

// Select all <section> elements in the document
const sec = document.querySelectorAll('section') 

// This line selects the <section> element with the class current and assigns it to the variable currentSec.
const currentSec = document.querySelector('section.current') 

// Select the next sibling element of the 'current' <section>
const afterCurrent = currentSec.nextElementSibling 

// Select the first child element of the previous sibling of the 'current' <section>
// In this case, it's selecting the first <h2> element within the previous sibling <section>
const hTwo = currentSec.previousElementSibling.children[0] 

// Select the parent element of the 'current' <section>
// This is likely the main container or a <div> that holds the sections
const fullDiv = currentSec.parentElement 

// Create an array from the NodeList of all <h2> elements, then map each <h2> to its parent element
// The result is an array of all <section> elements that contain <h2> elements
const h2Sections = Array.from(document.querySelectorAll('h2')).map(function(h2){return h2.parentElement}) 


console.log(header)
console.log(sec)
console.log(currentSec)
console.log(afterCurrent)
console.log(hTwo)
console.log(fullDiv)
console.log(h2Sections)