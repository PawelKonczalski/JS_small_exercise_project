const h1 = document.querySelector('h1');


window.addEventListener('mousemove', event => {
    const x = event.clientX;
    const y = event.clientY;
    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;
    h1.textContent = `Mouse position x = ${x}, y = ${y}`;
    document.body.style.backgroundColor = `rgb(${x/windowWidth*100}%, ${y/windowHeight*100}%, ${(x/windowWidth*100 + y/windowHeight*100)/2}%)`
});