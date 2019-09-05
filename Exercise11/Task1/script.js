const actualTime = () => {
    const time = new Date();
    document.querySelector('.clock span').textContent = `${time.toLocaleTimeString()}`
};

setInterval(actualTime);