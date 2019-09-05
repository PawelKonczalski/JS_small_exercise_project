const input = document.querySelector('input');
const ul = document.querySelector('ul');
const liElements = document.querySelectorAll('li');

const search = item => {
    const searchItem = item.target.value.toLowerCase();
    let items = [...liElements];
    items = items.filter(li => li.textContent.toLowerCase().includes(searchItem));
    ul.textContent = '';
    items.forEach(elem => ul.appendChild(elem));
};

input.addEventListener('input', search);

