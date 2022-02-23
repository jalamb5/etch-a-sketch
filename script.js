const GRIDCONT = document.getElementById('gridcontainer');
const CLEAR = document.getElementById('clear');
const SMALL = document.getElementById('small');
const MEDIUM = document.getElementById('medium');
const LARGE = document.getElementById('large');
const GREY = document.getElementById('grey');
const RGB = document.getElementById('rgb');
const BLACK = document.getElementById('black');
const ERASER = document.getElementById('eraser');
let gridItem = document.getElementsByClassName('griditem');

CLEAR.addEventListener('click', () => clearGrid());
SMALL.addEventListener('click', () => resetGrid(100));
MEDIUM.addEventListener('click', () => resetGrid(50));
LARGE.addEventListener('click', () => resetGrid(16));
GREY.addEventListener('click', () => draw('rgb(128, 128, 128)'));
BLACK.addEventListener('click', () => draw('rgb(0, 0, 0)'));
RGB.addEventListener('click', () => draw(randColor(), true));
ERASER.addEventListener('click', () => draw('rgb(211, 211, 211)'));

createGrid()

function createGrid(num=16) {
    GRIDCONT.style.gridTemplateColumns = `repeat(${num}, ${900/num}px)`;
    GRIDCONT.style.gridTemplateRows = `repeat(${num}, ${700/num}px)`;
    for (let i = 0; i < num; i++) {
        for (let i = 0; i < num; i++) {
            let div = document.createElement('div');
            div.classList.add('griditem');
            GRIDCONT.appendChild(div);
        }
    }
    draw();
}

function draw(pencolor="rgb(128, 128, 128)", rand=false) {
    if (rand === true) {
        Array.from(gridItem).forEach(function(event) {
            event.addEventListener("mouseenter", function() {
                this.style.background = randColor();
            });
        });
    }
    else {
    Array.from(gridItem).forEach(function(event) {
        event.addEventListener("mouseenter", function() {
            this.style.background = pencolor;
        });
    });
}}

function randColor() {
    let c = Math.floor(Math.random() * 255);
    let o = Math.floor(Math.random() * 255);
    let l = Math.floor(Math.random() * 255);
    return `rgb(${c}, ${o}, ${l})`;
};

function resetGrid(num) {
    shakeIt();
    // Clear current image.
    Array.from(gridItem).forEach((item) => item.style.background = '');
    createGrid(num);
}

function clearGrid() {
    shakeIt();
    Array.from(gridItem).forEach((item) => item.style.background = '');
}

function shakeIt() {
    GRIDCONT.classList.add("shake");
    setTimeout(() => {GRIDCONT.classList.remove("shake");}, 1000);
}