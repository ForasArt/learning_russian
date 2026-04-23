const sentences = [
    {
        "sentence": "Я вчера (видеть) этого мужчину в парке.",
        "correct": "видел"
    },

    {
        "sentence": "Он вчера (звонить) своим родителям.",
        "correct": "звонил"
    },

    {
      "sentence": "Мы (гулять) в лесу вчера.",
      "correct": "гуляли"
    },

    {
      "sentence": "Она (читать) интересную книгу на прошлой неделе.",
      "correct": "читала"
    },

    {
      "sentence": "Дети сейчас (играть) во дворе.",
      "correct": "играют"
    },

    {
      "sentence": "Я (писать) письмо другу вчера вечером.",
      "correct": "писал"
    },

    {
      "sentence": "Он (смотреть) этот фильм на прошлой неделе.",
      "correct": "смотрел"
    },

    {
      "sentence": "Он (смотреть) этот фильм завтра.",
      "correct": "будет смотреть"
    }, 
    
    {
      "sentence": "Они (готовить) ужин вместе в прошлую субботу.",
      "correct": "готовили"
    },

    {
      "sentence": "Я (рисовать) вчера вечером.",
      "correct": "рисовал"
    },

    {
      "sentence": "Я сейчас (рисовать).",
      "correct": "рисую"
    },

    {
      "sentence": "Она сейчас (рисовать).",
      "correct": "рисует"
    },

    {
      "sentence": "Она (убирать) квартиру вчера.",
      "correct": "убирала"
    },

    {
      "sentence": "Мы (плавать) в озере прошлым летом.",
      "correct": "плавали"
    },

    {
      "sentence": "Они (путешествовать) по Европе в прошлом году.",
      "correct": "путешествовали"
    },

    {
      "sentence": "Отец сейчас (чинить) машину в гараже.",
      "correct": "чинит"
    },

    {
      "sentence": "Я (слушать) вчера музыку.",
      "correct": "слушал"
    },

    {
      "sentence": "Девочка (танцевать) вчера на празднике.",
      "correct": "танцевала"
    },

   
    
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
