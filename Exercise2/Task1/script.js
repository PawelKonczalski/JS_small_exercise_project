const square = document.createElement('div');
const div = document.body.appendChild(square);
const windowWidth = window.innerWidth;
let squareSize = 20;
let grow = true;

window.addEventListener('scroll', () => {
    div.style.width = `${squareSize}px`;
    div.style.height = `${squareSize}px`;

    if (grow) {
        squareSize += 10;
    } else {
        squareSize -= 10;
    }

    if (windowWidth / 2 <= squareSize) {
        grow = !grow;
    } else if (squareSize < 20) {
        grow = !grow;
    }
});
