// Számok tömbje
const numbers = Array.from({ length: 9 }, (_, i) => i + 1);

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function updateDisplay() {
    const container = document.getElementById('number-container');
    container.innerHTML = numbers
        .map(num => `<div class="number">${num}</div>`)
        .join('');
}

function shuffleNumbers() {
    shuffleArray(numbers);
    updateDisplay();
}


// Az oldal betöltésekor inicializáljuk az eredeti sorrendet
updateDisplay();
document.getElementById('shuffle-button').addEventListener('click', shuffleNumbers);
