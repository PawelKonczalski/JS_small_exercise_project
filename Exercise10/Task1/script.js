const addClick = (startNumber = 0) => {
    let clickNumber = startNumber;
    return () => {
        document.body.textContent = `Click number ${++clickNumber}`
    }
};

const counter = addClick();

window.addEventListener('click', counter);


