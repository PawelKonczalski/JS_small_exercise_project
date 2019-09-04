const span = document.querySelector('.text');
const cursor = document.querySelector('.cursor');
const txt = ['Hello', "I'm really happy that you are still here", "Let's get started ours new challenge"];
let indexText = 0;
let index = 0;

const addLetter = () => {
    if (txt[indexText].length > index) {
        span.textContent += txt[indexText].charAt(index);
        index++;
        setTimeout(addLetter,100)
    } else if (indexText < txt.length-1) {
        setTimeout(() =>{
        indexText++;
        index = 0;
        span.textContent = '';
        addLetter()
        },2000);
    }
};

const cursorAnimation = () => {
    cursor.classList.toggle('active');
};

addLetter();

setInterval(cursorAnimation, 400);