window.onload = function () {
    const words = [
        { "ru": "быть", "ar": "كَانَ", "audio": "../audio/быть.mp3" },
        { "ru": "есть", "ar": "أَكَلَ", "audio": "../audio/есть.mp3" },
        { "ru": "идти", "ar": "ذَهَبَ", "audio": "../audio/идти.mp3" },
        { "ru": "уходить", "ar": "ذَهَبَ", "audio": "../audio/уходить.mp3" },
        { "ru": "пить", "ar": "شَرِبَ", "audio": "../audio/пить.mp3" },
        { "ru": "приходить", "ar": "جَاءَ", "audio": "../audio/приходить.mp3" },
        { "ru": "говорить", "ar": "قَالَ", "audio": "../audio/говорить.mp3" },
        { "ru": "слышать", "ar": "سَمِعَ", "audio": "../audio/слышать.mp3" },
        { "ru": "видеть", "ar": "رَأَى", "audio": "../audio/видеть.mp3" },
        { "ru": "знать", "ar": "عَرَفَ", "audio": "../audio/знать.mp3" },
        { "ru": "делать", "ar": "فَعَلَ", "audio": "../audio/делать.mp3" },
        { "ru": "брать", "ar": "أَخَذَ", "audio": "../audio/брать.mp3" },
        { "ru": "давать", "ar": "أَعْطَى", "audio": "../audio/давать.mp3" },
        { "ru": "любить", "ar": "حَبَّ", "audio": "../audio/любить.mp3" },
        { "ru": "ненавидеть", "ar": "كَرِهَ", "audio": "../audio/ненавидеть.mp3" },
        { "ru": "жить", "ar": "عَاشَ", "audio": "../audio/жить.mp3" },
        { "ru": "умирать", "ar": "مَاتَ", "audio": "../audio/умирать.mp3" },
        { "ru": "спать", "ar": "نَامَ", "audio": "../audio/спать.mp3" },
        { "ru": "просыпаться", "ar": "اِسْتَيْقَظَ", "audio": "../audio/просыпаться.mp3" },
        { "ru": "работать", "ar": "عَمِلَ", "audio": "../audio/работать.mp3" },
        { "ru": "учиться", "ar": "دَرَسَ", "audio": "../audio/учиться.mp3" },
        { "ru": "зарабатывать", "ar": "كَسَبَ", "audio": "../audio/зарабатывать.mp3" },
        { "ru": "продавать", "ar": "بَاعَ", "audio": "../audio/продавать.mp3" },
        { "ru": "покупать", "ar": "اِشْتَرَى", "audio": "../audio/покупать.mp3" },
        { "ru": "читать", "ar": "قَرَأَ", "audio": "../audio/читать.mp3" },
        { "ru": "писать", "ar": "كَتَبَ", "audio": "../audio/писать.mp3" },
        { "ru": "путешествовать", "ar": "سَافَرَ", "audio": "../audio/путешествовать.mp3" },
        { "ru": "спрашивать", "ar": "سَأَلَ", "audio": "../audio/спрашивать.mp3" },
        { "ru": "отвечать", "ar": "أَجَابَ", "audio": "../audio/отвечать.mp3" },
        { "ru": "понимать", "ar": "فَهِمَ", "audio": "../audio/понимать.mp3" },
        { "ru": "разговаривать", "ar": "تَكَلَّمَ", "audio": "../audio/разговаривать.mp3" },
        { "ru": "идти пешком", "ar": "مَشَى", "audio": "../audio/идти_пешком.mp3" },
        { "ru": "бежать", "ar": "رَكَضَ", "audio": "../audio/бежать.mp3" },
        { "ru": "смеяться", "ar": "ضَحِكَ", "audio": "../audio/смеяться.mp3" },
        { "ru": "плакать", "ar": "بَكَى", "audio": "../audio/плакать.mp3" },
        { "ru": "играть", "ar": "لَعِبَ", "audio": "../audio/играть.mp3" },
        { "ru": "нуждаться", "ar": "اِحْتَاجَ", "audio": "../audio/нуждаться.mp3" },
        { "ru": "пробовать", "ar": "جَرَّبَ", "audio": "../audio/пробовать.mp3" },
        { "ru": "пытаться", "ar": "حَاوَلَ", "audio": "../audio/пытаться.mp3" },
        { "ru": "вспоминать", "ar": "تَذَكَّرَ", "audio": "../audio/вспоминать.mp3" },
        { "ru": "забывать", "ar": "نَسِيَ", "audio": "../audio/забывать.mp3" },
        { "ru": "открывать", "ar": "تَحَ", "audio": "../audio/открывать.mp3" },
        { "ru": "закрывать", "ar": "غَلَّقَ", "audio": "../audio/закрывать.mp3" },
        { "ru": "слушать", "ar": "اِسْتَمَعَ", "audio": "../audio/слушать.mp3" },
        { "ru": "смотреть", "ar": "شَاهَدَ", "audio": "../audio/смотреть.mp3" },
        { "ru": "встречаться", "ar": "اِجْتَمَعَ", "audio": "../audio/встречаться.mp3" },
        { "ru": "сталкиваться", "ar": "اِصْطَدَمَ", "audio": "../audio/сталкиваться.mp3" },
        { "ru": "ждать", "ar": "اِنْتَظَرَ", "audio": "../audio/ждать.mp3" },
        { "ru": "присутствовать", "ar": "حَضَرَ", "audio": "../audio/присутствовать.mp3" },
        { "ru": "отсутствовать", "ar": "غَابَ", "audio": "../audio/отсутствовать.mp3" },
        { "ru": "использовать", "ar": "اِسْتَعْمَلَ", "audio": "../audio/использовать.mp3" },
        { "ru": "создавать", "ar": "صَنَعَ", "audio": "../audio/создавать.mp3" },
        { "ru": "запоминать", "ar": "حَفِظَ", "audio": "../audio/запоминать.mp3" },
        { "ru": "менять", "ar": "غَيَّرَ", "audio": "../audio/менять.mp3" },
        { "ru": "начинать", "ar": "بَدَأَ", "audio": "../audio/начинать.mp3" },
        { "ru": "заканчивать", "ar": "اِنْتَهَى", "audio": "../audio/заканчивать.mp3" },
        { "ru": "оставлять", "ar": "تَرَكَ", "audio": "../audio/оставлять.mp3" },
        { "ru": "возвращаться", "ar": "رَجَعَ", "audio": "../audio/возвращаться.mp3" },
        { "ru": "помогать", "ar": "سَاعَدَ", "audio": "../audio/помогать.mp3" },
        { "ru": "бить", "ar": "ضَرَبَ", "audio": "../audio/бить.mp3" },
        { "ru": "убивать", "ar": "قَتَلَ", "audio": "../audio/убивать.mp3" },
        { "ru": "защищать", "ar": "حَامَى", "audio": "../audio/защищать.mp3" },
        { "ru": "убегать", "ar": "هَرَبَ", "audio": "../audio/убегать.mp3" },
        { "ru": "прибывать", "ar": "وَصَلَ", "audio": "../audio/прибывать.mp3" },
        { "ru": "мыть", "ar": "غَسَلَ", "audio": "../audio/мыть.mp3" },
        { "ru": "чистить", "ar": "نَظَّفَ", "audio": "../audio/чистить.mp3" },
        { "ru": "готовить", "ar": "طَبَخَ", "audio": "../audio/готовить.mp3" },
        { "ru": "освещать", "ar": "أَضَاءَ", "audio": "../audio/освещать.mp3" },
        { "ru": "гасить", "ar": "أَطْفَأَ", "audio": "../audio/гасить.mp3" },
        { "ru": "одеваться", "ar": "اِرْتَدَى", "audio": "../audio/одеваться.mp3" },
        { "ru": "снимать", "ar": "خَلَعَ", "audio": "../audio/снимать.mp3" },
        { "ru": "посещать", "ar": "زَارَ", "audio": "../audio/посещать.mp3" },
        { "ru": "встречать", "ar": "اِسْتَقْبَلَ", "audio": "../audio/встречать.mp3" },
        { "ru": "класть", "ar": "وَضَعَ", "audio": "../audio/класть.mp3" },
        { "ru": "поднимать", "ar": "رَفَعَ", "audio": "../audio/поднимать.mp3" },
        { "ru": "опускать", "ar": "خَفَضَ", "audio": "../audio/опускать.mp3" },
        { "ru": "нести", "ar": "حَمَلَ", "audio": "../audio/нести.mp3" },
        { "ru": "бросать", "ar": "أَلْقَى", "audio": "../audio/бросать.mp3" },
        { "ru": "трогать", "ar": "لَمَسَ", "audio": "../audio/трогать.mp3" },
        { "ru": "обнимать", "ar": "عَانَقَ", "audio": "../audio/обнимать.mp3" },
        { "ru": "целовать", "ar": "قَبَّلَ", "audio": "../audio/целовать.mp3" },
        { "ru": "гореть", "ar": "اِحْتَرَقَ", "audio": "../audio/гореть.mp3" },
        { "ru": "падать", "ar": "سَقَطَ", "audio": "../audio/падать.mp3" },
        { "ru": "ломать", "ar": "كَسَرَ", "audio": "../audio/ломать.mp3" },
        { "ru": "чинить", "ar": "صَلَحَ", "audio": "../audio/чинить.mp3" },
        { "ru": "выбирать", "ar": "اِخْتَارَ", "audio": "../audio/выбирать.mp3" },
        { "ru": "сравнивать", "ar": "قَارَنَ", "audio": "../audio/сравнивать.mp3" },
        { "ru": "соглашаться", "ar": "اِتَّفَقَ", "audio": "../audio/соглашаться.mp3" },
        { "ru": "не соглашаться", "ar": "اِخْتَلَفَ", "audio": "../audio/не_соглашаться.mp3" },
        { "ru": "грустить", "ar": "حَزِنَ", "audio": "../audio/грустить.mp3" },
        { "ru": "радоваться", "ar": "فَرِحَ", "audio": "../audio/радоваться.mp3" },
        { "ru": "бояться", "ar": "خَافَ", "audio": "../audio/бояться.mp3" },
        { "ru": "убеждаться", "ar": "تَأَكَّدَ", "audio": "../audio/убеждаться.mp3" },
        { "ru": "думать", "ar": "ظَنَّ", "audio": "../audio/думать.mp3" },
        { "ru": "мечтать", "ar": "حَلُمَ", "audio": "../audio/мечтать.mp3" },
        { "ru": "обещать", "ar": "وَعَدَ", "audio": "../audio/обещать.mp3" },
        { "ru": "лгать", "ar": "كَذَبَ", "audio": "../audio/лгать.mp3" },
        { "ru": "говорить правду", "ar": "صَدَقَ", "audio": "../audio/говорить_правду.mp3" },
        { "ru": "желать", "ar": "تَمَنَّى", "audio": "../audio/желать.mp3" },
        { "ru": "закрыть", "ar": "غَلَقَ", "audio": "../audio/закрыть.mp3" },
        { "ru": "плавать", "ar": "سَبَحَ", "audio": "../audio/плавать.mp3" }
        
    ];

    let correctWord = null;
    let hasAnswered = false; // Флаг для отслеживания, был ли выбран ответ

    const optionsContainer = document.getElementById("options");
    const resultBox = document.getElementById("result");

    const nextButton = document.createElement("button");
    nextButton.textContent = "🌿 التالي";
    nextButton.style.display = "none";
    nextButton.className = "next-button";
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

        const wordButton = document.getElementById("word-button");

wordButton.textContent = correctWord.ru;
wordButton.onclick = () => {
    new Audio(correctWord.audio).play();
};

        options.forEach(opt => {
            const btn = document.createElement("button");
            btn.textContent = opt.ar;
            btn.setAttribute("lang", "ar");  // Добавляем атрибут lang="ar" для кнопок с арабским тексто

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

   

    renderQuestion();
    updateScore();
};
