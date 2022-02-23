const gridcont = document.getElementById('gridcontainer');
const reset = document.getElementById('reset');
let gridItem = document.getElementsByClassName('griditem');
createGrid()
reset.addEventListener('click', () => resetGrid());

function createGrid(num=16) {
    gridcont.style.gridTemplateColumns = `repeat(${num}, ${900/num}px)`;
    gridcont.style.gridTemplateRows = `repeat(${num}, ${900/num}px)`;
    for (let i = 0; i < num; i++) {
        for (let i = 0; i < num; i++) {
            let div = document.createElement('div');
            div.classList.add('griditem');
            gridcont.appendChild(div);
        }
    }
    draw();
}

function draw() {

    Array.from(gridItem).forEach(function(event) {
        event.addEventListener("mouseenter", function() {
            this.style.background = "grey";
        });
    });
}

function resetGrid() {
    // Clear current image.
    Array.from(gridItem).forEach((item) => item.style.background = '');
    let num = document.getElementById('num').value;
    if (num > 100) {
        prompt("Try again, number cannot exceed 100");
    }
    else {
        createGrid(num);
    }
}

