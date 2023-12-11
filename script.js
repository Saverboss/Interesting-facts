// Файл script.js
document.addEventListener("DOMContentLoaded", function() {
    // Выбор случайного факта
    const randomFact = facts[Math.floor(Math.random() * facts.length)];

    // Отображение факта на странице
    document.getElementById("factDisplay").innerText = randomFact;
});
