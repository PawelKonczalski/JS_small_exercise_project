const btn = document.querySelector('button');
const li = document.querySelectorAll('li');
let fontSize = 10;

btn.addEventListener('click', () => {
    li.forEach(liElem => {
        liElem.style.display = 'block';
        liElem.style.fontSize = `${fontSize}px`;
    });
    fontSize++
});