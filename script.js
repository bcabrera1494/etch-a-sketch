const body = document.querySelector('body');
// create button that will send the user a popup asking for the number of squares per side for the new grid.
const button = document.createElement('button');
body.appendChild(button);
button.textContent = 'Click here to set the size of your grid!';

// create the grid
document.addEventListener("DOMContentLoaded", function () {
    // Get the container element
    const gridContainer = document.querySelector('#container');
    // gridContainer.setAttribute();
    body.appendChild(gridContainer);
 

    // Create a 16x16 grid
    const rows = 16;
    const columns = 16;

    // Loop to create grid items and append them to the body
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            const gridItem = document.createElement("div");
            gridItem.classList.add("grid-item");

            // Set the position of each grid item

            // Append the grid item to the container div
            gridContainer.appendChild(gridItem);
        };
    };
});

// below works to shade individual elements gray
    const container = document.querySelector('#container');
    container.addEventListener('mouseover', () => {
        // access each grid item in a node list
        const cells = document.querySelectorAll('.grid-item');
        cells.forEach(cell => {
        cell.addEventListener('mouseover',() => {
        cell.setAttribute('style', 'background: gray')})
    });
    });
