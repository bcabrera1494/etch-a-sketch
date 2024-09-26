const body = document.querySelector('body');

// create button that will send the user a popup asking for the number of squares per side for the new grid.
const button = document.createElement('button');
body.appendChild(button);
button.textContent = 'Customize your grid!';

// // function to make grid
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
    let userInput = prompt('Enter the number of rows and columns for your grid');
    userInput;
    if (userInput > 100) {
        prompt('Please enter a value less than 100!');
    };
    newGrid(userInput);
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
        rowContainer.style.flex = '1 1 0';
        gridContainer.appendChild(rowContainer);

        for (let j = 0; j < rows; j++) {
            const rowCell = document.createElement('div');
            rowCell.setAttribute('id', 'cell');
            rowCell.style.border = 'solid 1px black';
            rowCell.style.flex = '1 1 0';
            rowContainer.appendChild(rowCell);
        };
    };
    //code to shade cells gray goes here
});


// // below works to shade individual elements gray
const container = document.querySelector('#container');

container.addEventListener('mouseover', () => {
    const rowContainer = document.querySelectorAll('#row');
    rowContainer.forEach(r => {
        r.addEventListener('mouseover', () => {
            const cell = document.querySelectorAll('#cell');
            cell.forEach(c => {
                c.addEventListener('mouseover', () => {
                    c.setAttribute('style', 'background: gray');
                });

            });
        });
    });
});

// const cell = document.querySelectorAll('#cell');
// cell.forEach(cell => {
//     cell.addEventListener('mouseover', () => {
//         cell.setAttribute('style', 'background: gray');
//     });
// });