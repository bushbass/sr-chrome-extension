// content.js loads after the page loads

console.log('chrome extension go');
let paragraphs = document.getElementsByTagName('p');

for (el of paragraphs) {
  el.style['background-color'] = '#00ff00';
}

alert('button time');
let buttons = document.getElementsByClassName('ng-tns-c37-0');
for (but of buttons) {
  console.log(but.innerText);
}
console.log({ buttons });
