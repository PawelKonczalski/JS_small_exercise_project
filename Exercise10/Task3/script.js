const time = () => {
    let timeSpentOnPage = 0;
    const timePassed = () =>{
        document.body.textContent = `Time on page ${++timeSpentOnPage} seconds`
    };
    return timePassed;
};

const timeOnPage = time();

setInterval(timeOnPage, 1000);