// Etch-A-Sketch

const res = prompt("How many squares per side?",16);
const gamegrid = document.querySelector('.gamegrid');
gamegrid.setAttribute('style', `grid-template-rows: repeat(${res}, 1fr); grid-template-columns: repeat(${res}, 1fr);`);

for (let i=0; i<res*res; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    gamegrid.appendChild(square);
}

let grayShades, isDrawing, colorShades;
const grayScale = document.querySelector('#grayScale');
const multiColor = document.querySelector('#multiColor');

grayScale.addEventListener('click', () => {
    grayShades = true;
    grayScale.classList.add('buttonDown');
    colorShades = false;
    multiColor.classList.remove('buttonDown');
});

multiColor.addEventListener('click', () => {
    grayShades = false;
    grayScale.classList.remove('buttonDown');
    colorShades = true;
    multiColor.classList.add('buttonDown');
});

const squares = document.querySelectorAll('.square');
squares.forEach((square) => {
    square.addEventListener('mousedown', () => {
        isDrawing = true;
        
    });
    square.addEventListener('mousemove', () => {
        if (isDrawing === true) {
            coloring(square.style);
        }
    });
    square.addEventListener('mouseup', () => {
        isDrawing = false;
    });
}); 

function coloring(style) {
    if (grayShades) {
        if (style['background-color'] != 'black') {
            style['background-color'] = 'black';
            style.opacity = '0.1';
        } else {
            let increaseOpac = parseFloat(style.opacity)+0.1;
            style.opacity = `${increaseOpac}`;
        }
    } else {
        let R = Math.floor(Math.random() * 255);
        let G = Math.floor(Math.random() * 255);
        let B = Math.floor(Math.random() * 255);
        style['background-color'] = `rgb(${R}, ${G}, ${B})`;
    }
}

const reset = document.querySelector('button');
reset.addEventListener('click', () => location.reload());