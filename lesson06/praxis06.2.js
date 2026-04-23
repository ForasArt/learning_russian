const sentences = [
    {"sentence": "Я видел (5) скамеек в парке.", "correct": "пять"},
    {"sentence": "На столе лежало (3) книги.", "correct": "три"},
    {"sentence": "Мы купили (7) яблок на рынке.", "correct": "семь"},
    {"sentence": "В классе учится (25) учеников.", "correct": "двадцать пять"},
    {"sentence": "Она прочитала (1) главу за вечер.", "correct": "одну"},
    {"sentence": "Осталось (10) минут.", "correct": "десять"},
    {"sentence": "У него было (4) друзей.", "correct": "четверо"},
    {"sentence": "Они посетили (8) музеев во время поездки.", "correct": "восемь"},
    {"sentence": "За лето я прочитал (15) книг.", "correct": "пятнадцать"},
    {"sentence": "Мне не хватило (5) минут, чтобы успеть.", "correct": "пяти"},
    {"sentence": "Мне хватит (2) ложек сахара.", "correct": "двух"},
    {"sentence": "До финиша оставалось не более (15) метров.", "correct": "пятнадцати"},
    {"sentence": "Нам не хватило (13) стульев.", "correct": "тринадцати"},
    {"sentence": "Он подошёл к (5) студентам.", "correct": "пяти"},
    {"sentence": "Подарок вручили (3) победителям конкурса.", "correct": "трём"},
    {"sentence": "Мы дали книги (7) студентам.", "correct": "семи"},
    {"sentence": "Мы отправили приглашения (8) коллегам из другого отдела.", "correct": "восьми"},
    {"sentence": "Расскажи эту историю (5) детям.", "correct": "пятерым"},
    {"sentence": "Мы благодарны (20) волонтёрам за помощь.", "correct": "двадцати"},
    {"sentence": "Мы поздравили (7) победителей конкурса.", "correct": "семерых"},
    



    

   
    
];


window.onload = function () {

    let correctSentence = null;
    let hasAnswered = false;
    let correctCount = 0;
    let wrongCount = 0;

    const sentenceBox = document.getElementById("sentence"); // Блок для предложения
    const inputField = document.getElementById("user-input"); // Поле ввода
    const letterResult = document.getElementById("letter-result"); // Подсветка букв
    const resultBox = document.getElementById("result"); // Текст ошибки/успеха
    const scoreBox = document.getElementById("score"); // Счёт

    // Кнопка "Следующий"
    const nextButton = document.createElement("button");
    nextButton.textContent = "🌿 التالي";
    nextButton.style.display = "none";
    nextButton.className = "next-button";
    nextButton.onclick = () => {
        renderQuestion();
        nextButton.style.display = "none";
        hasAnswered = false;
    };
    document.getElementById("next-button-container").appendChild(nextButton);

    function updateScore() {
        scoreBox.textContent = `✅: ${correctCount} | ❌: ${wrongCount}`;
    }

    function getRandomSentence() {
        return sentences[Math.floor(Math.random() * sentences.length)];
    }

    function renderQuestion() {
        correctSentence = getRandomSentence();
        hasAnswered = false;

        sentenceBox.textContent = correctSentence.sentence;
        inputField.value = "";
        inputField.disabled = false;
        letterResult.innerHTML = "";
        resultBox.textContent = "";

        inputField.focus();
    }

    function checkAnswer() {
        if (hasAnswered) return;
        hasAnswered = true;

        const userWord = inputField.value.trim().toLowerCase();
        const correct = correctSentence.correct.toLowerCase();

        letterResult.innerHTML = "";
        const maxLen = Math.max(userWord.length, correct.length);

        for (let i = 0; i < maxLen; i++) {
            const span = document.createElement("span");
            if (userWord[i] === correct[i]) {
                span.textContent = userWord[i] || "";
                span.style.color = "green";
            } else {
                span.textContent = userWord[i] || "_";
                span.style.color = "red";
            }
            letterResult.appendChild(span);
        }

        if (userWord === correct) {
            resultBox.textContent = "✅ صح";
            resultBox.style.color = "green";
            correctCount++;
        } else {
            resultBox.innerHTML =
                `<span dir="rtl" lang="ar">
                ❌ خطأ. الكلمة الصحيحة: ${correctSentence.correct}
                </span>`;
            resultBox.style.color = "red";
            wrongCount++;
        }

        inputField.disabled = true;
        nextButton.style.display = "inline-block";
        updateScore();
    }

    inputField.addEventListener("keydown", function (e) {
        if (e.key === "Enter" && inputField.value.trim() !== "") {
            checkAnswer();
        }
    });

    renderQuestion();
    updateScore();
};
