const cards = document.querySelectorAll(".inner");
const backEl = document.querySelectorAll('.back')

const stitchImage = document.createElement('img')
    stitchImage.src = './img/EmojiStitch1.png'
    stitchImage.classList = 'stitchsize'

// defeine game state
const stitchPostion = Math.floor(Math.random() * 9);

cards.forEach((card, index) => {
    card.addEventListener("click", (e) => {
        card.style.transform = "rotateY(180deg)";

        setTimeout(() => {
            card.style.transform = "rotateY(0deg)";
        }, 1000);

        if (stitchPostion == index) {
            console.log(`found stitch in box number ${stitchPostion}`);
        } else {
            console.log(`BOO, Stitch is not in card num ${index}`);
        }
    });
});

// const findStitch = () => {
//     const backEl = document.querySelectorAll('.back')
//     const stitchImage = document.createElement('img')
//     stitchImage.src = './img/EmojiStitch1.png'
//     stitchImage.classList = 'stitchsize'

    
//     return 
        
// }

// console game:
const currentScore = 0;
const highScore = 0;
const stitchLocation = Math.floor(Math.random() * 9);
const attemptsLeft = 0;
const isRoundActive = 0;

// const gameCard = [0,1,2,3,4,5,6,7,8]

//     if (stitchLocation == gameCardPosition) {
//         console.log(`found stitch in box number ${stitchLocation}`);
//     } else {
//         console.log(`BOO, Stitch is not in card num `);
//     }

// const userInput =prompt('enter a num from 1 to 9')