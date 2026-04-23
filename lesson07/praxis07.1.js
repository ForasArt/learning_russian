const sentences = [
    {"sentence": "Я увидел (красивый) девушку.", "correct": "красивую"},
    {"sentence": "Я встретил (старый) друга.", "correct": "старого"},
    {"sentence": "Она надела (новый) платье.", "correct": "новое"},
    {"sentence": "Мы посмотрели (интересный) фильм.", "correct": "интересный"},
    {"sentence": "Он подарил мне (большой) книгу.", "correct": "большую"},
    {"sentence": "В магазине нет (свежий) хлеба.", "correct": "свежего"},
    {"sentence": "Дети играли с (милый) котёнком.", "correct": "милым"},
    {"sentence": "Он отправил сообщение (любимый) бабушке.", "correct": "любимой"},
    {"sentence": "Мы ждали (следующий) поезда.", "correct": "следующего"},
    {"sentence": "Здесь нет (чистый) воды.", "correct": "чистой"},
    {"sentence": "Он избегал (неприятный) разговора.", "correct": "неприятного"},
    {"sentence": "У нас нет (большой) стола.", "correct": "большого"},
    {"sentence": "Она не заметила (маленький) пятна.", "correct": "маленького"},
    {"sentence": "Здесь не хватает (важный) информации.", "correct": "важной"},
    {"sentence": "Он помог (уставший) путешественнику.", "correct": "уставшему"},
    {"sentence": "Мы подарили цветы (любимый) учительнице.", "correct": "любимой"},
    {"sentence": "Папа объяснял задачу (маленький) сыну.", "correct": "маленькому"},
    {"sentence": "Я любуюсь (красивый) закатом.", "correct": "красивым"},
    {"sentence": "Она пишет (новый) карандашом.", "correct": "новым"},
    {"sentence": "Я горжусь (старший) братом.", "correct": "старшим"},
    {"sentence": "Он работает только с (надёжный) поставщиками.", "correct": "надёжными"},
    {"sentence": "Она укрылась (тёплый) одеялом.", "correct": "тёплым"},
    {"sentence": "Она восхищается (талантливый) художником.", "correct": "талантливым"},
    {"sentence": "Девочка рисует (синий) карандашом.", "correct": "синим"},
    {"sentence": "Я пишу (чёрный) ручкой.", "correct": "чёрной"},
    {"sentence": "Мы любуемся (голубой) небом.", "correct": "голубым"},
    {"sentence": "Я думаю о (новый) доме.", "correct": "новом"},
    {"sentence": "Она рассказывает об (интересный) фильме.", "correct": "интересном"},
    {"sentence": "Он мечтает о (тёплый) море.", "correct": "тёплом"},
    {"sentence": "Дети хотят (весёлый) праздника.", "correct": "весёлого"},
    {"sentence": "Я вспоминаю о (красивый) девушке.", "correct": "красивой"},
    {"sentence": "Она думает о (любимый) платье.", "correct": "любимом"},
    {"sentence": "Они спорят о (важный) вопросе.", "correct": "важном"},
    {"sentence": "Он размышляет о (сложный) задании.", "correct": "сложном"},
    {"sentence": "Студенты говорят о (трудный) экзамене.", "correct": "трудном"},
    {"sentence": "Я вспоминаю о (счастливый) времени.", "correct": "счастливом"},
    {"sentence": "Она пишет статью о (современный) искусстве.", "correct": "современном"},
    



    

   
    
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
