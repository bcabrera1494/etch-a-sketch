const body = document.querySelector('body');

// // create button that will send the user a popup asking for the number of squares per side for the new grid.
// const button = document.createElement('button');
// body.appendChild(button);
// button.textContent = 'Customize your grid!';

// // function to make grid
// function newGrid(userInput){
//     // logic to remove original grid or prevent original grid from loading could go here
//     const gridContainer = document.querySelector('#container');

//     for (let r = 0; r < userInput; r++) {
//         for (let c = 0; c < userInput; c++) {
//             const gridItem = document.createElement("div");
//             gridItem.classList.add("grid-item");
//             //Add flex properties to grid items so that they grow and shrink to fit the square
//             gridContainer.appendChild(gridItem);
//         };
//     };
// };


// // function to remove old grid
// function removeGrid (element){
//     const gridContainer = document.querySelector('#container');
//     gridContainer.removeChild(element);
// };

// // add event listener to button that will prompt the user to input a number, which will define the grid dimensions.
// button.addEventListener('click', () => {
//     // remove each cell using .forEach
//     const cells = document.querySelectorAll('.grid-item');
//         cells.forEach(cell => {
//         removeGrid(cell);
//         });
//     let userInput = prompt('Enter the number of rows and columns for your grid');
//     userInput;
//     if (userInput > 100) {
//         prompt('Please enter a value less than 100!');
//     };
//     newGrid(userInput);
//     const container = document.querySelector('#container');
//     container.setAttribute('style', 'height: max-content', 'width: max-content');
//     // set flex attributes to cells
//     cells.forEach((cell) => {
//         cell.setAttribute('style', 'height: max-content', 'width: max-content')
//     });
// });

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
});


// // below works to shade individual elements gray
//     const container = document.querySelector('#container');
//     container.addEventListener('mouseover', () => {
//         // access each grid item in a node list
//         const cells = document.querySelectorAll('.grid-item');
//         cells.forEach(cell => {
//         cell.addEventListener('mouseover',() => {
//         cell.setAttribute('style', 'background: gray')})
//     });
//     });
