const button = document.querySelector('button');
let number = 1;

button.addEventListener('click', () => {
    const createDivElement = document.createElement('div');
    createDivElement.textContent = number;
    const div = document.body.appendChild(createDivElement);
        if (number % 10 === 0) {
            div.classList.add('circle', 'black');
        }else if (number % 5 === 0) {
            div.classList.add('circle', 'blue');
        }
    number++;
});