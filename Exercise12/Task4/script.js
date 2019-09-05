const form = document.querySelector('form');
const ul = document.querySelector('ul');
const taskNumber = document.querySelector('h1 span');
const listItems = document.getElementsByClassName('task');
const input = document.querySelector('input');

const toDoList = [];

const renderList = () => {
    ul.textContent = '';
    toDoList.forEach((toDoElement, key) => {
        toDoElement.dataset.key = key;
        ul.appendChild(toDoElement)
    });
};

const removeTask = elem => {
    const index = elem.target.parentNode.dataset.key;
    toDoList.splice(index, 1);
    taskNumber.textContent = `${listItems.length-1}`;
    console.log(toDoList);
    renderList()
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
    toDoList.push(newTask);
    renderList();
    ul.appendChild(newTask);
    input.value = "";
    taskNumber.textContent = `${listItems.length}`;
    newTask.querySelector('button').addEventListener('click', removeTask);
};

form.addEventListener('submit', addTask);
