const btn = document.querySelectorAll('li button');

const removeTask = elem => {
    // elem.target.parentNode.remove();
    // elem.target.parentNode.style.textDecoration = 'line-through';
    const index = elem.target.dataset.key;
    document.querySelector(`li[data-key="${index}"]`).remove();
};

btn.forEach( event => {
    event.addEventListener('click', removeTask)
});