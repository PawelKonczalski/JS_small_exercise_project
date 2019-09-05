const form = document.querySelector('form');
const ul = document.querySelector('ul');
const taskNumber = document.querySelector('h1 span');
const listItems = document.getElementsByClassName('task');
const input = document.querySelector('input');

const removeTask = elem => {
    elem.target.parentNode.remove();
};

const addTask = event => {
    event.preventDefault();
    const titleTask = input.value;
    if (titleTask === "") {
        return
    }

    const newTask = document.createElement('li');
    newTask.className = 'task';
    newTask.innerHTML = titleTask + '<button>Usun</button>';
    ul.appendChild(newTask);
    input.value = "";

    taskNumber.textContent = `${listItems.length}`;

    newTask.querySelector('button').addEventListener('click', removeTask);
};

form.addEventListener('submit', addTask);
