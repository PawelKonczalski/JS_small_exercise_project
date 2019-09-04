const span = document.querySelector('.text');
const cursor = document.querySelector('.cursor');
const txt = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam officia pariatur ratione voluptas?' +
    ' Aliquid asperiores cupiditate doloribus explicabo laboriosam, vero voluptatum? Blanditiis dolor fugiat' +
    ' harum quod reprehenderit voluptates! Officiis, unde?  ';

let indexText = 0;

const addLetter = () => {
    span.textContent += txt[indexText];
    indexText++;
    if(indexText === txt.length){
        clearInterval(indexTyping)
    }
};

const cursorAnimation = () => {
  cursor.classList.toggle('active');
};

const indexTyping = setInterval(addLetter, 60);

setInterval(cursorAnimation, 400);