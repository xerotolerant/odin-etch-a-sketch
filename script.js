const container = document.querySelector('#container');
const setupButton = document.querySelector('#setup');
setupButton.addEventListener('click', setupGrid)
async function setupGrid() {
    container.replaceChildren();
    const userResponse = await prompt('Enter the number of pixels for grid and height');

    const val = parseInt(userResponse);
    const width = Math.min(val, 100);
    const height = Math.min(val, 100);



    document.addEventListener('mouseover', ({ target }) => {


        if (target.className == 'tile') {

            target.classList.add('hover');
            target.style.opacity = 0.1;
        } else if (target.className.includes('tile')
            && target.className.includes('hover')) {
            const opacity = window.getComputedStyle(target).getPropertyValue('opacity');
            console.log(opacity);
            target.style.opacity = parseFloat(opacity) + 0.1;

        }



    });

    for (let y = 0; y < height; y++) {
        const row = document.createElement('div');
        row.classList.add('row');

        for (let x = 0; x < width; x++) {
            const tile = document.createElement('div');

            tile.classList.add('tile');
            // tile.textContent = `${x}, ${y}`;

            row.appendChild(tile);
        }
        container.appendChild(row);
    }
}