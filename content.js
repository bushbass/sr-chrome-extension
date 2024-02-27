// content.js loads after the page loads

console.log('chrome extension go?');
let paragraphs = document.getElementsByTagName('p')

for(el of paragraphs){
    el.style['background-color'] = '#ff00ff'
}