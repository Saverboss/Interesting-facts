document.addEventListener("DOMContentLoaded", function() {
    // Выбор случайной фразы из внешнего файла
    const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
    document.getElementById("factPhrase").innerText = randomPhrase;

    // Выбор случайного факта
    const randomFact = facts[Math.floor(Math.random() * facts.length)];
    document.getElementById("factDisplay").innerText = randomFact;
});
