const container = document.querySelector('div.grid-container');
const sizeControl = document.querySelector('#grid-size-control');
const clearButton = document.querySelector('button.clear-grid');
const colorControl = document.querySelector('#color-control');
const rainbowModeControl = document.querySelector('#rainbow-control');

sizeControl.addEventListener('input', createGrid);

clearButton.addEventListener('click', clearGrid);

function clearGrid() {
    const divsFilled = document.querySelectorAll('div.grid-container div');
    divsFilled.forEach((x) => {
        x.style.backgroundColor = 'white';
    });
}

function randomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

function createGrid() {
    container.innerHTML = '';
    const size = sizeControl.value;

    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < (size * size); i++) {
        const div = document.createElement('div');
        div.classList.add('cell');
        div.addEventListener('mouseenter', (e) => {
            let color = colorControl.value;
            if (rainbowModeControl.checked) {
                color = randomColor();
            }
            e.target.style.backgroundColor = color;
        });
        container.append(div);
    }
}

createGrid();