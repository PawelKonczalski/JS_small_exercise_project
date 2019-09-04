document.body.style.height = '10000px';
const createDivElement = document.createElement('div');
const div = document.body.appendChild(createDivElement);

div.style.position = 'fixed';
div.style.left = '0';
div.style.top = '0';
div.style.width = '100%';

let size = 10;
let grow = true;
let color = 'green';

function changeHeight() {
    div.style.height = `${size}px`;
    div.style.backgroundColor = color;

    if (grow) {
        size += 10;
    } else {
        size -= 10;
    }

    if (window.innerHeight / 2 <= size) {
        grow = !grow;
        color = 'red';
    } else if (size < 10) {
        grow = !grow;
        color = 'green';
    }
}

window.addEventListener('scroll', changeHeight);