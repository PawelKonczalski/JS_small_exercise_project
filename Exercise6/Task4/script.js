const btnAdd = document.querySelector('.add');
const btnClean = document.querySelector('.clean');
const btnShowAdvice = document.querySelector('.showAdvice');
const btnShowOptions = document.querySelector('.showOptions');
const input = document.querySelector('input');
const advice = document.querySelector('h1');

const possibilities = ['walcz', 'przemysl to jeszcze raz'];

const add = event => {
    event.preventDefault();
    const possibility = input.value;
    possibilities.push(possibility);
    input.value = "";
    alert(`add: ${possibility}`)
};

const clean = event => {
    event.preventDefault();
    possibilities.length = 0;
    alert('Reset complete')
};

const showAdvice = () => {
    const rand = Math.floor(Math.random() * possibilities.length);
    advice.textContent = `${possibilities[rand]}`
};

const showOptions = () => {
    alert(`Possibilities is: ${possibilities.join(', ')}`);
};


btnAdd.addEventListener('click', add);
btnClean.addEventListener('click', clean);
btnShowAdvice.addEventListener('click', showAdvice);
btnShowOptions.addEventListener('click', showOptions);
