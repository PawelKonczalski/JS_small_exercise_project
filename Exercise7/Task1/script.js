const gameSummary = {
    numbers: 0,
    wins: 0,
    losses: 0,
    draws: 0
};

const game = {
    playerHand: '',
    aiHand: ''
};

const hands = document.querySelectorAll('img');
const startBtn = document.querySelector('.start');

const handSelection = hand => {
    game.playerHand = hand.target.dataset.option;
    hands.forEach(clearSelect => clearSelect.style.boxShadow = "");
    hand.target.style.boxShadow = '0 0 0 5px yellow';
};

const aiChoice = () => {
    return hands[Math.floor(Math.random() * 3)].dataset.option;
};

const checkResult = (player, ai) => {
    if (player === ai) {
        return 'draw';
    } else if ((player === 'papier' && ai === 'kamień') || (player === 'kamień' && ai === 'nożyczki') || (player === 'nożyczki' && ai === 'papier')) {
        return 'win';
    } else {
        return 'loss'
    }
};

const gamesResult = (player, ai, result) => {
    document.querySelector('[data-summary="your-choice"]').textContent = player;
    document.querySelector('[data-summary="ai-choice"]').textContent = ai;
    document.querySelector('[data-summary="who-win"]').textContent = result;
    document.querySelector('.numbers span').textContent = `${++gameSummary.numbers}`;
    if(result === 'win'){
        document.querySelector('.wins span').textContent = `${++gameSummary.wins}`;
        document.querySelector('[data-summary="who-win"]').textContent = 'Ty wygrales!!!';
        document.querySelector('[data-summary="who-win"]').style.color = 'green'
    } else if (result === 'loss'){
        document.querySelector('.losses span').textContent = `${++gameSummary.losses}`;
        document.querySelector('[data-summary="who-win"]').textContent = 'Komputer wygral!!!';
        document.querySelector('[data-summary="who-win"]').style.color = 'red'
    } else {
        document.querySelector('.draws span').textContent = `${++gameSummary.draws}`;
        document.querySelector('[data-summary="who-win"]').textContent = 'Remis!!!';
        document.querySelector('[data-summary="who-win"]').style.color = 'grey'
    }
};

const endGame = () => {
    document.querySelector(`[data-option="${game.playerHand}"]`).style.boxShadow = "";
    game.playerHand = '';
    game.aiHand = '';
};

const startGame = () => {
    if (!game.playerHand) {
        return alert('choice hand!!!');
    }
    game.aiHand = aiChoice();
    const gameResult = checkResult(game.playerHand, game.aiHand);
    gamesResult(game.playerHand, game.aiHand, gameResult);

    endGame();
};


hands.forEach(hand => hand.addEventListener('click', handSelection));

startBtn.addEventListener('click', startGame);