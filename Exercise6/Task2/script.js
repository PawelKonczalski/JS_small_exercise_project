const btn = document.querySelector('button');
const section = document.querySelector('section');

const codeNumber = 1000;
const charsNumber = 10;
const chars = 'QWERTYUIOPLKJHGFDSAZXCVBNM1234567890';

const codesGenerator = () => {
    for (let i = 0; i < codeNumber; i++) {
        const div = document.createElement('div');
        for (let j = 0; j < charsNumber; j++) {
            let randChar = Math.floor(Math.random() * chars.length);
            div.textContent += `${chars[randChar]}`
        }
        section.appendChild(div);
    }
};

btn.addEventListener('click', codesGenerator);