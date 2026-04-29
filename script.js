const cards = document.querySelectorAll(".inner");
const score = document.querySelector('#score')
const highestScore = document.querySelector('#high')
const lives = document.querySelector('#lives')
const gameRounds = document.querySelector('#round')

const backEl = document.querySelectorAll('.back')

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


// this function is start the game.
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
        card.innerHTML = ''
    })

    const stitchImage = document.createElement('img')
    stitchImage.src = './img/EmojiStitch1.png'
    stitchImage.classList.add('stitchsize')

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

const updateScoreDisplay = () => {
    score.innerHTML = game.currentScore
}

const updateHighScoreDisplay = () => {
    highestScore.innerHTML = game.highScore
}
const updateAttemptsDisplay = () => {
    lives.innerHTML = game.attemptLeft
}
const updateRoundDisplay = () => {
    gameRounds.innerHTML = game.round
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

document.addEventListener('DOMContentLoaded', (e) => {
    initialiseGame()
})

