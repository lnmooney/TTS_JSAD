// Get the header element
const header = document.querySelector('header');
// Get all the section elements
const sectionElements = document.querySelectorAll('sections');
// Get the section element with class="current"
const currentSection = document.querySelector('section.current');
// Get the section that comes after the current section
const currentSibling = document.querySelector('currentSection.nextElementSibling');
// Get the div that contains the section that has an h2 with a class of 'highlight'
const currentPrevH2 = currentSection.previousElementSibling.querySelector('h2');
// Get all the sections that contain an H2 (using a single statement);
const divWithH2Highlight = document.querySelector('h2.highlight').parentElement.parentElement;
// Get all sections with H2
const sectionsWithH2 = Array.from(document.querySelectorAll('section')).filter(h => h.querySelector('h2' != null));
// OR use the brackets idk it's called spread
const sectionsWithH2Spread = [...document.querySelectorAll('section')].filter(h => h.querySelector('h2') != null);

console.log(header);
console.log(sectionElements);
console.log(currentSection);
console.log(currentSibling);
console.log(currentPrevH2);
console.log(divWithH2Highlight);
console.log(sectionsWithH2);