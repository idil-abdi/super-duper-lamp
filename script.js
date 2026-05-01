const cards = document.querySelectorAll(".card__inner");
const score = document.querySelector('#score')
const highestScore = document.querySelector('#high')
const lives = document.querySelector('#lives')
const gameRounds = document.querySelector('#round')
const startBtn = document.querySelector('.start')
const restartBtn = document.querySelector('.restart')
const intro = document.querySelector('.game-intro')
const gameBoard = document.querySelector('.game__board')
const backEl = document.querySelectorAll('.card__back')

// const tries = Number(prompt('How many tries whould you like'))
// console.log(tries);

// create an object variable to keep track of my state. 
const game = {
    currentScore: 0,
    highScore: 0,
    stitchPosition: null,
    attemptLeft: 3,
    isRoundActive: false,
    maxAttempt: 3,
    rounds: 1,
}

startBtn.addEventListener('click' ,() => {
    intro.style.display = 'none'
    gameBoard.style.display = 'block'
    // console.log('Start Game');
})

const initialiseGame = () => {
    // reset the state variable
    game.currentScore = 0,
    game.highScore = 0,
    game.attemptLeft  = game.maxAttempt,
    game.isRoundActive = false,
    game.round = 1
    
    updateScoreDisplay()
    updateAttemptsDisplay()
    
    startRound()
}

const startRound = () => {
    game.attemptLeft = game.maxAttempt
    game.stitchPosition = Math.floor(Math.random() * 9)
    game.isRoundActive = true
    
    updateAttemptsDisplay()
    placeStitch()
    console.log('Stitch at: ', game.stitchPosition);
}

cards.forEach((card, index) => {
    card.addEventListener("click", (e) => {
        card.style.transform = "rotateY(180deg)";
        
        setTimeout(() => {
            card.style.transform = "rotateY(0deg)";
        }, 1000);
        
        handleCardClick(index);
    });
});

const placeStitch = () => {
    backEl.forEach((card) => {
            card.innerHTML = 'Not here'
    })
    const stitchImage = document.createElement('img')
    stitchImage.src = './img/EmojiStitch1.png'
    stitchImage.classList.add('stitchsize')

    backEl[game.stitchPosition].innerHTML = ''
    backEl[game.stitchPosition].appendChild(stitchImage)
}

const handleCardClick = (index) => {
    if (!game.isRoundActive) {
        return
    }
    
    if (game.stitchPosition === index){
        game.currentScore += game.attemptLeft
        game.round++;
        updateRoundDisplay()
        updateScoreDisplay()
        endRound()
        console.log('correct');
    } else {
        console.log('wrong');
        game.attemptLeft--
        
        updateAttemptsDisplay()
        if (game.attemptLeft === 0) {
            console.log('game over');
            game.round=1
            updateRoundDisplay()
            endRound('lose')
        }
    }
}

const endRound = (result) => {
    game.isRoundActive = false
    console.log('Round Over');
    
    if (result === 'lose') {
        game.currentScore = 0
        updateScoreDisplay()
    }

    if (game.currentScore > game.highScore) {
        game.highScore = game.currentScore;
        updateHighScoreDisplay()
    }    
    
    // cards[game.stitchPosition].style.transform = "rotateY(180deg)";
    
    setTimeout(() => {
        startRound()
        // cards[game.stitchPosition].style.transform = "rotateY(0deg)";
    }, 2000);
}

const updateScoreDisplay = () => score.innerHTML = game.currentScore

const updateHighScoreDisplay = () => highestScore.innerHTML = game.highScore

const updateAttemptsDisplay = () => lives.innerHTML = game.attemptLeft

const updateRoundDisplay = () => gameRounds.innerHTML = game.round

restartBtn.addEventListener('click', () => {
    intro.style.display = 'block'
    gameBoard.style.display = 'none'
})

document.addEventListener('DOMContentLoaded', (e) => initialiseGame())