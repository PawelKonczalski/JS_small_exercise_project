const btn = document.querySelector('button');
const div = document.querySelector('div');

const names = ["Jagienka", "Dobrawa (Dobrusia)", "Daria", "Asia", "Kira", "Marysia", "Anastazja", "Kasia"];

const prefixs = ["Wydaje mi się", "Mam wrażenie", "Szczerze powiedziawszy, myślę", "Szczerze uważam", "Na 100% twierdzę", "Jestem pewien"];

const nameGenerator = () => {
    const rendName = Math.floor(Math.random() * names.length);
    const rendPrefix = Math.floor(Math.random() * prefixs.length);
    div.textContent = `${prefixs[rendPrefix]}, ze najlepsze bedzie imie ${names[rendName]} `
};

btn.addEventListener('click', nameGenerator);