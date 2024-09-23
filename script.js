const body = document.querySelector('body');

document.addEventListener("DOMContentLoaded", function() {
    // Get the container element
    const gridContainer = document.querySelector('#container');
   // gridContainer.setAttribute();
    body.appendChild(gridContainer);

    // Create a 16x16 grid
    const rows = 16;
    const columns = 16;

    // Loop to create grid items and append them to the body
    for (let i = 0; i < rows; i++) {
        for (var j = 0; j < columns; j++) {
            const gridItem = document.createElement("div");
            gridItem.classList.add("grid-item");

            // Set the position of each grid item

            // Append the grid item to the container div
            gridContainer.appendChild(gridItem);
        }
    }
});
