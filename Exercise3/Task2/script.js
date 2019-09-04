let size = 10;
let orderElement = 1;

const init = () => {
    const btn1Create = document.createElement('button');
    const btn2Create = document.createElement('button');
    const ulCreate = document.createElement('ul');

    btn1Create.textContent = 'Add 10 list element';
    btn1Create.style.fontSize = '20px';
    btn1Create.style.fontFamily = 'sans-serif';
    btn1Create.style.marginRight = '5px';


    btn2Create.textContent = 'Delete all element';
    btn2Create.style.fontSize = '20px';
    btn2Create.style.fontFamily = 'sans-serif';

    document.body.appendChild(btn1Create).addEventListener("click", createLiElements);
    document.body.appendChild(btn2Create).addEventListener("click", resetList);
    document.body.appendChild(ulCreate);
};

const createLiElements = () => {
    for (let i = 0; i < 10; i++) {
        const liCreate = document.createElement('li');
        liCreate.textContent = `Element ${orderElement}`;
        liCreate.style.fontSize = `${size}px`;
        liCreate.style.fontFamily = 'sans-serif';
        document.querySelector('ul').appendChild(liCreate);
        size++;
        orderElement++;
    }
};

const resetList = () => {
    document.querySelector('ul').textContent = "";
    size = 10;
    orderElement = 1
};

init();

