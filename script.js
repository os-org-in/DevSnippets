document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    let currentIndex = 0;

    function showNextCard() {
        cards[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % cards.length;
        cards[currentIndex].classList.add('active');
    }

    setInterval(showNextCard, 3000);
});