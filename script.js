const body = document.querySelector('body');
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
    document.addEventListener("load", function () {
        // access each grid item in a node list
        const cells = document.querySelectorAll('.grid-item');
    
        // write a function to change the background color to grey
        function colorChange(element) {
            element.setAttribute('background', 'gray');
        };
        
        // use for loop to add event listener on each cell individually & callback colorChange funcion
        cells.forEach(cell => {
            cell.addEventListener('mouseover', () => {
                colorChange(cell);
            })
        });
    });
});

