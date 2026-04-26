const cards = document.querySelectorAll(".inner");

cards.forEach(card => {
    card.addEventListener("click", () => {
        card.style.transform = "rotateY(180deg)";

        setTimeout(() => {
            card.style.transform = "rotateY(0deg)";
        }, 1000);
    });
});