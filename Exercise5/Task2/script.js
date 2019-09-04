const input = document.querySelector('#pass');
const div = document.querySelector('.message');
const passwords = ['One', 'twO'];
const massages = ['great', 'work'];

input.addEventListener('input', event => {
    div.textContent = '';
    const enterPass = event.target.value.toLowerCase();

    passwords.forEach((password, index) => {
        if (password.toLowerCase() === enterPass) {
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