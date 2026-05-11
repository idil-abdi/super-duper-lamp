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
    console.log('Start Game');
    initialiseGame()
})

const initialiseGame = () => {
    // reset the state variable'
    game.currentScore = 0,
    game.highScore = 0,
    game.attemptLeft  = game.maxAttempt,
    game.isRoundActive = false,
    game.rounds = 1
    
    updateScoreDisplay()
    updateAttemptsDisplay()
    
    startRound()
}

const startRound = () => {
    game.attemptLeft = game.maxAttempt
    game.stitchPosition = Math.floor(Math.random() * 9)
    game.isRoundActive = true
    updateRoundDisplay()
    updateAttemptsDisplay()
    placeStitch()
    console.log(`Round ${game.rounds}`);
    
    console.log('Stitch at: ', game.stitchPosition);
}

cards.forEach((card, index) => {
    card.addEventListener("click", (e) => {
        card.style.transform = "rotateY(180deg)";
        if (!game.isRoundActive) return
        
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
    if (!game.isRoundActive) return

    const clickedCard = cards[index]
    clickedCard.style.transform = 'rotateY(180deg)'

    if (game.stitchPosition === index){
        game.currentScore += game.attemptLeft
        game.rounds++;
        updateRoundDisplay()
        updateScoreDisplay()
        endRound()
        setTimeout(() => {
            endRound()
        }, 1000);
        console.log('correct');
    } else {
        console.log('wrong');
        game.attemptLeft--
        updateAttemptsDisplay()
        
        if (game.attemptLeft === 0) {
            console.log('game over');
            cards[game.stitchPosition].style.transform = 'rotateY(180deg)'

            setTimeout(() => {
                endRound('lose')
            }, 1500);            
        } else {
            setTimeout(() => {
                clickedCard.style.transform =  'rotateY(180deg)';
            }, 1000);
        }
    }
}

const endRound = (result) => {
    game.isRoundActive = false
    console.log(`'Round Over'`);
    
    if (result === 'lose') {
        game.currentScore = 0
        updateScoreDisplay()
        game.rounds = 1
        updateRoundDisplay()
    }

    if (game.currentScore > game.highScore) {
        game.highScore = game.currentScore;
        updateHighScoreDisplay()
    }    
    
    
    
    setTimeout(() => {
        cards.forEach(card => {
            card.style.transform = "rotateY(0deg)";
        });

        startRound();

    }, 1000);
}

const updateScoreDisplay = () => score.innerHTML = game.currentScore

const updateHighScoreDisplay = () => highestScore.innerHTML = game.highScore

const updateAttemptsDisplay = () => lives.innerHTML = game.attemptLeft

const updateRoundDisplay = () => gameRounds.innerHTML = game.rounds

restartBtn.addEventListener('click', () => {
    intro.style.display = 'block'
    gameBoard.style.display = 'none'
    // game.currentScore = 0

})

// change to something other 
// document.addEventListener('DOMContentLoaded', (e) => initialiseGame())