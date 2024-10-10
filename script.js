const body = document.querySelector('body');

// create button that will send the user a popup asking for the number of squares per side for the new grid.
const button = document.createElement('button');
body.appendChild(button);
button.textContent = 'Customize your grid!';

// // function to make grid //* There's a bug that is causing the grid to overflow if you input > 17 rows/columns.
function newGrid(userInput) {
    for (let i = 0; i < userInput; i++) {
        const gridContainer = document.querySelector('#container');
        const rowContainer = document.createElement('div');
        rowContainer.setAttribute('id', 'row');
        rowContainer.style.flex = '1 1 0';
        gridContainer.appendChild(rowContainer);

        for (let j = 0; j < userInput; j++) {
            const rowCell = document.createElement('div');
            rowCell.setAttribute('id', 'cell');
            rowCell.style.border = 'solid 1px black';
            rowCell.style.flex = '1 1 0';
            rowContainer.appendChild(rowCell);
        };
    };
};

// // function to remove old grid
function removeGrid(row) {
    const gridContainer = document.querySelector('#container');
    gridContainer.removeChild(row);
};

// add event listener to button that will prompt the user to input a number, which will define the grid dimensions.
//remove each row using .forEach
button.addEventListener('click', () => {
    const rows = document.querySelectorAll('#row');
    rows.forEach(row => {
        removeGrid(row);
    });

    let userInput = parseInt(prompt('Enter the number of rows and columns for your grid!'));
    while (userInput === 0 || userInput > 100) {
        userInput;
        if (userInput <= 100) {
            break;
        } else {
            let rePrompt = parseInt(prompt('Enter a number less than or equal to 100.'));
            userInput = rePrompt;
        };
    };

    newGrid(userInput);
    // //code to shade cells gray goes here
    const rowContainer = document.querySelectorAll('#row');
    rowContainer.forEach(row => {
        row.addEventListener('mouseover', (event) => {
            let target = event.target
            if (target.id = 'cell') {
                let background = getRandomColor();
                target.setAttribute('style', `background: ${background}`);
            };
        });
    });
    // code to click back to white background
    const container = document.querySelectorAll('#row');
    container.forEach(row => {
        row.addEventListener('click', (event => {
            let target = event.target
            if (target.id = 'cell') {
                target.setAttribute('style', 'background: white');
                target.setAttribute('style', 'border: solid 1px black');
            };
        }));

    });
});

// create the original grid
document.addEventListener("DOMContentLoaded", function () {
    // Get the container element
    const gridContainer = document.querySelector('#container');
    // gridContainer.setAttribute();
    body.appendChild(gridContainer);

    // Create a 16x16 grid
    const rows = 16;

    // Loop to create grid items and append them to the body
    for (let i = 0; i < rows; i++) {
        const rowContainer = document.createElement('div');
        rowContainer.setAttribute('id', 'row');
        gridContainer.appendChild(rowContainer);

        for (let j = 0; j < rows; j++) {
            const rowCell = document.createElement('div');
            rowCell.setAttribute('id', 'cell');
            rowCell.style.border = 'solid 1px black';
            rowContainer.appendChild(rowCell);
        };
    };
    //code to shade cells gray goes here
    const rowContainer = document.querySelectorAll('#row');
    rowContainer.forEach(row => {
        row.addEventListener('mouseover', (event) => {
            let target = event.target
            if (target.id = 'cell') {
                let background = getRandomColor();
                target.setAttribute('style', `background: ${background}`);
            };
        });
    });
    // code to click back to white background
    const container = document.querySelectorAll('#row');
    container.forEach(row => {
        row.addEventListener('click', (event => {
            let target = event.target
            if (target.id = 'cell') {
                target.setAttribute('style', 'background: white');
                target.setAttribute('style', 'border: solid 1px #000');
            };
        }));

    });
});

// randomize background color function
function getRandomColor(){
    const letters = '0123456789ABCDEF';
    let color = '#'
    for (let i = 0; i<6; i++){
        color += letters[Math.floor(Math.random()* 16)];
    }
    return color;
};