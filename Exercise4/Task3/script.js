const div = document.querySelector('div');
let divX = 150;
let divY = 50;
let active = false;
let insertDivX;
let insertDivY;

div.style.left = `${divX}px`;
div.style.top = `${divY}px`;


div.addEventListener('mousedown', event => {
    div.style.backgroundColor = 'grey';
    active = !active;
    insertDivX = event.offsetX;
    insertDivY = event.offsetY;
});

div.addEventListener('mousemove', event => {
    if (active) {
        divX = event.clientX;
        divY = event.clientY;
        div.style.left = `${divX - insertDivX}px`;
        div.style.top = `${divY - insertDivY}px`;
    }
});

div.addEventListener('mouseup', () => {
    div.style.backgroundColor = 'black';
    active = !active;
});


