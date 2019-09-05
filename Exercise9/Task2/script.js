const slider = [
    {img: 'images/img1.jpg', text: 'Pierwszy tekst'},
    {img: 'images/img2.jpg', text: 'Drugi tekst'},
    {img: 'images/img3.jpg', text: 'Trzeci tekst'}];

const image = document.querySelector('img.slider');
const h1 = document.querySelector('h1.slider');
const dots = [...document.querySelectorAll('.dots span')];

const changeTime = 2000;
let active = 0;

const keyChangeSlide = pressKey => {
    clearInterval(auto);
    if (pressKey.keyCode === 37 || pressKey.keyCode === 39) {
        pressKey.keyCode === 37 ? active-- : active++;
    }
    changeSlider();
    auto = setInterval(autoChange, changeTime);
};

const autoChange = () =>{
    active++;
    changeSlider();
};

const changeDot = () => {
    const activeDot = dots.findIndex(dot => dot.classList.contains('active'));
    dots[activeDot].classList.remove('active');
    dots[active].classList.add('active');
};

const changeSlider = () => {
    if (active === slider.length) {
        active = 0;
    } else if (active < 0) {
        active = slider.length - 1;
    }

    image.src = slider[active].img;
    h1.textContent = slider[active].text;
    changeDot();
};

window.addEventListener('keydown', keyChangeSlide);

let auto = setInterval(autoChange, changeTime);




