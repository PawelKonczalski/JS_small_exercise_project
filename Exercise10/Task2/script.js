const user = (name = '', age) =>{
    let userName = name;
    let userAge = age;
    const showName = () => {
        document.body.textContent = `Hello ${userName}, ${userAge >= 18 ? 'you can enter.' : "you can't enter you are to young"}`;
    };

    return showName;
};

const enterUser = user('Michal', 18);

enterUser();


