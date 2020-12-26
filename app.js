//Variables
const sizeUp = document.querySelector('.sizeUp')
const sizeDown = document.querySelector('.sizeDown')
const color = document.querySelector('.color')
const text = document.querySelector('p')


// Sizing up function

sizeUp.addEventListener('click', function(e){
    const newFontSize =
    parseFloat(getComputedStyle(text).fontSize) + 1;
  text.style.fontSize = `${newFontSize}px`;

});

//Sizing down function

sizeDown.addEventListener('click', function(e){
    const newFontSize =
    parseFloat(getComputedStyle(text).fontSize) - 1;
  text.style.fontSize = `${newFontSize}px`;

});

//Color changing function

color.addEventListener('click', function(e){
    const newColor =
     'hsl(' + (360 * Math.random()) + ',50%,50%)'; // H,S,L
 text.style.color = `${newColor}`;
})


// Thanks for watching :)))