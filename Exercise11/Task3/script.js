const btnStart = document.querySelector('.main');
const btnReset = document.querySelector('.reset');
const screen = document.querySelector('.time div');

let active = false;
let idInterval;

let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;

const startStopwatch = () => {
    if(!active){
        active = !active;
        btnStart.textContent = 'Pause';
        idInterval = setInterval(timer, 10);
    } else {
        active = !active;
        btnStart.textContent = 'Start';
        clearInterval(idInterval);
    }
};

const timer = () => {
        milliseconds++;
        if (milliseconds === 100) {
            seconds++;
            milliseconds = 0;
        } else if (seconds === 60) {
            minutes++;
            seconds = 0
        } else if (minutes === 60) {
            hours++;
            minutes = 0;
        }

        let time = ``;

        if (hours > 0) {
            time = `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}` +
                `:${seconds < 10 ? '0' + seconds : seconds}:${milliseconds < 10 ? '0' + milliseconds : milliseconds}`
        } else if (minutes > 0) {
            time = `${minutes < 10 ? '0' + minutes : minutes}` +
                `:${seconds < 10 ? '0' + seconds : seconds}:${milliseconds < 10 ? '0' + milliseconds : milliseconds}`
        } else if (seconds > 0) {
            time = `${seconds < 10 ? '0' + seconds : seconds}:${milliseconds < 10 ? '0' + milliseconds : milliseconds}`
        } else {
            time = `${milliseconds < 10 ? '0' + milliseconds : milliseconds}`
        }

        screen.textContent = time;
};


btnStart.addEventListener('click', startStopwatch);
btnReset.addEventListener('click', () => {
    btnStart.textContent = 'Start';
    active = false;
    screen.textContent = '---';
    clearInterval(idInterval);
});

