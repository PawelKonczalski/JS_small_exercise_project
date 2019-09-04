const  btn = document.querySelector('button');
const  ul = document.querySelector('ul');
let number = 1;

btn.addEventListener('click', () => {
    const createLiElement = document.createElement('li');
    createLiElement.textContent = number;
    const li = ul.appendChild(createLiElement);
    if(number%3 === 0){
        li.classList.add('big');
    }
    number += 2;
});