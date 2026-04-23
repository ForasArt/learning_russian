window.onload = function () {
    const words = [
        { "ru": "одежда", "ar": "ملابس", "audio": "../audio/одежда.mp3" },
        { "ru": "шапка", "ar": "قبعة", "audio": "../audio/шапка.mp3" },
        { "ru": "рубашка", "ar": "قميص", "audio": "../audio/рубашка.mp3" },
        { "ru": "пиджак", "ar": "سترة", "audio": "../audio/пиджак.mp3" },
        { "ru": "костюм", "ar": "بدلة", "audio": "../audio/костюм.mp3" },
        { "ru": "форма", "ar": "زي", "audio": "../audio/форма.mp3" },
        { "ru": "халат", "ar": "روب حمام", "audio": "../audio/халат.mp3" },
        { "ru": "нижнее бельё", "ar": "ملابس داخلية", "audio": "../audio/нижнее_бельё.mp3" },
        { "ru": "бюстгальтер", "ar": "حمالة صدر", "audio": "../audio/бюстгальтер.mp3" },
        { "ru": "трусы", "ar": "كلسون", "audio": "../audio/трусы.mp3" },
        { "ru": "платье", "ar": "فستان", "audio": "../audio/платье.mp3" },
        { "ru": "штаны", "ar": "بنطال", "audio": "../audio/штаны.mp3" },
        { "ru": "ремень", "ar": "حزام", "audio": "../audio/ремень.mp3" },
        { "ru": "чулки", "ar": "فيزون", "audio": "../audio/чулки.mp3" },
        { "ru": "носки", "ar": "جوارب", "audio": "../audio/носки.mp3" },
        { "ru": "верхняя одежда", "ar": "معطف", "audio": "../audio/верхняя_одежда.mp3" },
        { "ru": "шуба", "ar": "معطف فرو", "audio": "../audio/шуба.mp3" },
        { "ru": "обувь", "ar": "حذاء", "audio": "../audio/обувь.mp3" },
        { "ru": "тапочки", "ar": "حفاية", "audio": "../audio/тапочки.mp3" },
        { "ru": "пуговица", "ar": "زر", "audio": "../audio/пуговица.mp3" },
        { "ru": "карман", "ar": "جيب", "audio": "../audio/карман.mp3" },
        { "ru": "ткань", "ar": "قماش", "audio": "../audio/ткань.mp3" },
        { "ru": "шёлк", "ar": "حرير", "audio": "../audio/шёлк.mp3" },
        { "ru": "хлопок", "ar": "قطن", "audio": "../audio/хлопок.mp3" },
        { "ru": "лён", "ar": "كتّان", "audio": "../audio/лён.mp3" },
        { "ru": "шерсть", "ar": "صوف", "audio": "../audio/шерсть.mp3" },
        
    ];

    let correctWord = null;
    let hasAnswered = false; // Флаг для отслеживания, был ли выбран ответ

    const optionsContainer = document.getElementById("options");
    const resultBox = document.getElementById("result");

    const nextButton = document.createElement("button");
    nextButton.textContent = "🌿 التالي";
    nextButton.className = "next-button"; // добавляем стиль из CSS
    nextButton.onclick = () => {
        renderQuestion();
        nextButton.style.display = "none";
        hasAnswered = false; // Сброс флага после нового вопроса
        
    };
    document.getElementById("next-button-container").appendChild(nextButton);


    // Счётчики
    let correctCount = 0;
    let wrongCount = 0;

    function updateScore() {
        const scoreBox = document.getElementById("score");
        scoreBox.textContent = `✅: ${correctCount} | ❌: ${wrongCount}`;
    }

    function handleAnswer(isCorrect) {
        if (isCorrect) {
            correctCount++;
        } else {
            wrongCount++;
        }
        updateScore();
    }



    function getRandomWord() {
        return words[Math.floor(Math.random() * words.length)];
    }

    function getRandomOptions(correct) {
        const options = [correct];
        while (options.length < 9) {
            const random = getRandomWord();
            if (!options.includes(random)) {
                options.push(random);
            }
        }
        return shuffle(options);
    }

    function shuffle(array) {
        return array.sort(() => Math.random() - 0.5);
    }

    function renderQuestion() {
        correctWord = getRandomWord();
        const options = getRandomOptions(correctWord);

        optionsContainer.innerHTML = "";
        resultBox.textContent = "";

        options.forEach(opt => {
            const btn = document.createElement("button");
            btn.textContent = opt.ar;
        btn.setAttribute("lang", "ar");  // атрибут lang
        // НЕ НУЖНО больше задавать font-family, font-size, margin, padding через JS

            btn.onclick = () => checkAnswer(opt);
            optionsContainer.appendChild(btn);
        });
    }

    // Функция проверки ответа
    function checkAnswer(selected) {
        if (hasAnswered) return; // Если ответ уже выбран, ничего не делаем

        // Отключаем все кнопки после того, как был выбран ответ
        const buttons = document.querySelectorAll('#options button');
        buttons.forEach(button => button.disabled = true); // Отключаем все кнопки

        hasAnswered = true; // Устанавливаем флаг, что ответ уже выбран

        if (selected === correctWord) {
            resultBox.textContent = "✅ صح";
            resultBox.style.color = "green";
            handleAnswer(true);
        } else {
            resultBox.innerHTML =
  `<span class="result-text" dir="rtl" lang="ar">❌ خطأ. الإجابة الصحيحة: ${correctWord.ar}</span>`;
            resultBox.style.color = "red";
            handleAnswer(false);
        }


        nextButton.style.display = "inline-block"; // Показать кнопку "Дальше"
    }

    document.getElementById("play-audio").onclick = function () {
        if (correctWord) {
            new Audio(correctWord.audio).play();
        }
    };

    renderQuestion();
    updateScore();
};
