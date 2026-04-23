const sentences = [
    {
        "sentence": "Я видел (мужчина) в парке.",
        "correct": "его"
    },

    {
        "sentence": "Я позвонил (родители).",
        "correct": "им"
    },

    {
        "sentence": "Дети играли с (собака).",
        "correct": "ней"
    },

    {
        "sentence": "Петя рассказал (сестра) историю.",
        "correct": "ей"
    },

    {
        "sentence": "Она говорит с (дети).",
        "correct": "ними"
    },
   
    {
        "sentence": "Мама гордится (сын).",
        "correct": "им"
      },
      {
        "sentence": "Мы подарили цветы (учительница).",
        "correct": "ей"
      },
      {
        "sentence": "Он помог (друзья) с домашним заданием.",
        "correct": "им"
      },
      {
        "sentence": "Я поделился конфетами с (сестра).",
        "correct": "ней"
      },
      {
        "sentence": "Она написала письмо (бабушка).",
        "correct": "ей"
      },
      {
        "sentence": "Они говорили о (сосед).",
        "correct": "нём"
      },
      {
        "sentence": "Я встретился с (коллеги) после работы.",
        "correct": "ними"
      },
      {
        "sentence": "Папа рассказал нам сказку про (волшебник).",
        "correct": "него"
      },
      {
        "sentence": "Девочка играла рядом с (мама).",
        "correct": "ней"
      },
      {
        "sentence": "Мы пошли гулять вместе с (собака).",
        "correct": "ней"
      },

      {
        "sentence": "Я отправил сообщение (друг).",
        "correct": "ему"
      },
      {
        "sentence": "Она подарила книгу (подруга).",
        "correct": "ей"
      },
      {
        "sentence": "Мы говорили о (фильм).",
        "correct": "нём"
      },
      {
        "sentence": "Он помог (учитель) перенести столы.",
        "correct": "ему"
      },
      {
        "sentence": "Мама рассказала сказку (малыш).",
        "correct": "ему"
      },
      {
        "sentence": "Я гулял рядом с (дедушка).",
        "correct": "ним"
      },
      {
        "sentence": "Дети радовались подаркам от (родители).",
        "correct": "них"
      },
      {
        "sentence": "Она поделилась впечатлениями с (коллега).",
        "correct": "ним"
      },
      {
        "sentence": "Мы навестили (бабушка) в выходные.",
        "correct": "её"
      },
      {
        "sentence": "Он написал записку (сестра).",
        "correct": "ей"
      },
      {
        "sentence": "Я показал фотографии (гости).",
        "correct": "им"
      },
      {
        "sentence": "Она поговорила с (врач).",
        "correct": "ним"
      },
      {
        "sentence": "Мы поблагодарили (соседи) за помощь.",
        "correct": "их"
      },
      {
        "sentence": "Он играл в футбол с (друзья).",
        "correct": "ними"
      },
      {
        "sentence": "Я помог (мама) с уборкой.",
        "correct": "ей"
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
