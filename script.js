document.addEventListener("DOMContentLoaded", function() {
    
    // Выбор случайного факта
    const randomFact = facts[Math.floor(Math.random() * facts.length)];
    document.getElementById("factDisplay").innerText = randomFact;
    
});
