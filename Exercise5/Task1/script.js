const input = document.querySelector('#pass');
const div = document.querySelector('.message');
const passwords = ['user', 'spring', 'fire'];
const massages = ['i left forever!', 'today is a hot day', 'call fire brigade'];

input.addEventListener('input', event => {
    div.textContent = '';
    const enterPass = event.target.value;

    passwords.forEach((password, index) => {
        if (password === enterPass) {
            div.textContent = massages[index];
            event.target.value = ''
        }
    });
});

input.addEventListener('focus', event => {
    event.target.classList.add('active');

});

input.addEventListener('blur', event => {
    event.target.classList.remove('active');

});