const h1 = document.querySelector('h1');

window.addEventListener('click', event => {
    h1.textContent = `x = ${event.clientX}, y = ${event.clientY}`;
    const color = getColor(event);
    document.body.style.backgroundColor = color;
});

const getColor = color => {
    if (color.clientX % 2 === 0 && color.clientY % 2 === 0) {
        return 'red'
    } else if (color.clientX % 2 === 1 && color.clientY % 2 === 1) {
        return 'blue'
    } else {
        return 'green'
    }
}