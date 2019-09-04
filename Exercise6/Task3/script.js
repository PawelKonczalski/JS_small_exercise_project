const btn = document.querySelector('button');
const input = document.querySelector('input');
const div = document.querySelector('div');

const names = [];

const addName = event => {
    event.preventDefault();
    const inputName = input.value;
    if (inputName.length) {
        for (name of names) {
            if (name === inputName) {
                alert('already in array');
                return
            }
        }
        names.push(inputName);
        div.textContent += inputName + '\n';
    }
    input.value = ''
};

btn.addEventListener('click', addName);

