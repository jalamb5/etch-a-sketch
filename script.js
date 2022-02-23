const GRIDCONT = document.getElementById('gridcontainer');
const CLEAR = document.getElementById('clear');
const SMALL = document.getElementById('small');
const MEDIUM = document.getElementById('medium');
const LARGE = document.getElementById('large');
const GREY = document.getElementById('grey');
const RGB = document.getElementById('rgb');
const BLACK = document.getElementById('black');
const ERASER = document.getElementById('eraser');
const SIZE = document.getElementsByClassName('size');
const COLOR = document.getElementsByClassName('color');
let gridItem = document.getElementsByClassName('griditem');

CLEAR.addEventListener('click', () => clearGrid());

SMALL.addEventListener('click', function() {
    resetGrid(100);
    activeButton(SIZE, SMALL);
});
MEDIUM.addEventListener('click', function() {
    resetGrid(50);
    activeButton(SIZE, MEDIUM);
});
LARGE.addEventListener('click', function() {
    resetGrid(16);
    activeButton(SIZE, LARGE);
});
GREY.addEventListener('click', function() {
    draw('rgb(128, 128, 128)');
    activeButton(COLOR, GREY);
});
BLACK.addEventListener('click', function() {
    draw('rgb(0, 0, 0)');
    activeButton(COLOR, BLACK);
});
RGB.addEventListener('click', function() {
    draw(randColor(), true);
    activeButton(COLOR, RGB);
});
ERASER.addEventListener('click', function() {
    draw('rgb(211, 211, 211)');
    activeButton(COLOR, ERASER);
});

// Initialize page
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
    if (rand === true) { //only activated when rgb option is chosen
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
    activeButton(COLOR, GREY);
    createGrid(num);    
}

function clearGrid() {
    shakeIt();
    Array.from(gridItem).forEach((item) => item.style.background = '');
}

function shakeIt() {
    GRIDCONT.classList.add("shake");
    setTimeout(() => {GRIDCONT.classList.remove("shake");}, 500);
}

function activeButton(type, button) {
    Array.from(type).forEach(type => type.classList.remove('active'));
    button.classList.add('active');
}