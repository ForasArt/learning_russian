const sentences = [
    {
        "sentence": "Я видел (этот) мужчину в парке.",
        "correct": "этого"
    },

    {
        "sentence": "Я позвонил (свои) родителям.",
        "correct": "своим"
    },

    {
        "sentence": "Дети играли с (моя) собакой.",
        "correct": "моей"
    },

    {
        "sentence": "Петя рассказал историю (своя) сестры.",
        "correct": "своей"
    },

    {
        "sentence": "Она говорит с (он) детьми.",
        "correct": "его"
    },

    {
        "sentence": "Мама гордится (наши) успехами.",
        "correct": "нашими"
      },
      {
        "sentence": "Он читает книгу (этот) автора.",
        "correct": "этого"
      },

      {
        "sentence": "Я восхищаюсь (ваш) талантом.",
        "correct": "вашим"
      },
      {
        "sentence": "Она подарила цветы (своя) учительнице.",
        "correct": "своей"
      },
    
      {
        "sentence": "Они говорили об (этот) фильме весь вечер.",
        "correct": "этом"
      },
      {
        "sentence": "Катя помогает (своя) бабушке по дому.",
        "correct": "своей"
      },

      {
        "sentence": "Мы смотрели фотографии (наше) путешествия.",
        "correct": "нашего"
      },

      {
        "sentence": "Вы отлично справились с (ваше) заданием.",
        "correct": "вашим"
      },

      {
        "sentence": "Я услышал голос (она).",
        "correct": "её"
      },
      {
        "sentence": "Мы ждали (он) больше часа.",
        "correct": "его"
      },
      {
        "sentence": "Они пригласили (мы) на вечеринку.",
        "correct": "нас"
      },

      {
        "sentence": "Он передал посылку (вы).",
        "correct": "вам"
      },
      {
        "sentence": "Все говорили о (они).",
        "correct": "них"
      },

      {
        "sentence": "У (я) нет времени.",
        "correct": "меня"
      },

      {
        "sentence": "От (он) не было никаких вестей.",
        "correct": "него"
      },

      {
        "sentence": "Мы долго ждали (она).",
        "correct": "её"
      },
      {
        "sentence": "Из-за (они) мы опоздали на поезд.",
        "correct": "них"
      },

      {
        "sentence": "Я не видел (мой) брата сегодня.",
        "correct": "моего"
      },

      {
        "sentence": "Мы гордимся (наш) результатом.",
        "correct": "нашим"
      },

      {
        "sentence": "Он рассказал о (свои) планах на лето.",
        "correct": "своих"
      },

      {
        "sentence": "(эта) книги нет в библиотеке.",
        "correct": "этой"
      },
      {
        "sentence": "Я не нашёл (тот) магазина, о котором ты говорил.",
        "correct": "того"
      },

      {
        "sentence": "В продаже не осталось (такая) модели телефона.",
        "correct": "такой"
      },

      {
        "sentence": "Ты знаешь, у (кто) можно спросить дорогу?",
        "correct": "кого"
      },

      {
        "sentence": "Вокруг не было (никто), кто мог бы подсказать дорогу.",
        "correct": "никого"
      },

      {
        "sentence": "Нам не хватило (несколько) деталей для сборки.",
        "correct": "нескольких"
      },

      {
        "sentence": "Он подарил (я) книгу.",
        "correct": "мне"
      },
   
      {
        "sentence": "Она рассказала (я) секрет.",
        "correct": "мне"
      },

      {
        "sentence": "Он подарил (ты) книгу.",
        "correct": "тебе"
      },

      {
        "sentence": "Мы помогли (он).",
        "correct": "ему"
      },

      {
        "sentence": "Папа купил (она) мороженое.",
        "correct": "ей"
      },

      {
        "sentence": "Друзья пожелали (они) удачи.",
        "correct": "им"
      },

      {
        "sentence": "Друзья пожелали (мы) удачи.",
        "correct": "нам"
      },

      {
        "sentence": "Я вижу (он).",
        "correct": "его"
      },

      {
        "sentence": "Я вижу (она).",
        "correct": "её"
      },

      {
        "sentence": "Мама зовёт (я).",
        "correct": "меня"
      },

      {
        "sentence": "Она любит (ты).",
        "correct": "тебя"
      },

      {
        "sentence": "Она любит (он).",
        "correct": "его"
      },

      {
        "sentence": "Мы ждём (они) уже час.",
        "correct": "их"
      },

      {
        "sentence": "Мы ждём (вы) уже час.",
        "correct": "вас"
      },

      {
        "sentence": "Мы ждём (ты) уже час.",
        "correct": "тебя"
      },

      {
        "sentence": "Я горжусь (он).",
        "correct": "им"
      },

      {
        "sentence": "Он гордится (ты).",
        "correct": "тобой"
      },

      {
        "sentence": "Мы говорили о (он).",
        "correct": "нём"
      },

      {
        "sentence": "Она заботится обо (я).",
        "correct": "мне"
      },

      {
        "sentence": "Они смеются над (ты).",
        "correct": "тобой"
      },

      {
        "sentence": "Я думаю о (она).",
        "correct": "ней"
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
