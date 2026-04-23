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
    let hasAnswered = false;
    let correctCount = 0;
    let wrongCount = 0;

    const optionsContainer = document.getElementById("options");
    const resultBox = document.getElementById("result");
    const scoreBox = document.getElementById("score");
    const wordButton = document.getElementById("word-button");

    const nextButton = document.createElement("button");
    nextButton.textContent = "🌿 التالي";
    nextButton.className = "next-button";

    document
        .getElementById("next-button-container")
        .appendChild(nextButton);

    nextButton.onclick = () => {
        hasAnswered = false;
        nextButton.style.display = "none";
        renderQuestion();
    };

    function updateScore() {
        scoreBox.textContent = `✅: ${correctCount} | ❌: ${wrongCount}`;
    }

    function getRandomWord() {
        return words[Math.floor(Math.random() * words.length)];
    }

    function shuffle(array) {
        return array.sort(() => Math.random() - 0.5);
    }

    function getOptions(correct) {
        const list = [correct];
        while (list.length < 9 && list.length < words.length) {
            const w = getRandomWord();
            if (!list.includes(w)) list.push(w);
        }
        return shuffle(list);
    }

    function renderQuestion() {
        correctWord = getRandomWord();
        const options = getOptions(correctWord);

        optionsContainer.innerHTML = "";
        resultBox.textContent = "";
        resultBox.classList.remove("result-correct", "result-wrong");

        wordButton.textContent = correctWord.ru;
        wordButton.onclick = () => {
            new Audio(correctWord.audio).play();
        };

        options.forEach(option => {
            const btn = document.createElement("button");
            btn.textContent = option.ar;
            btn.lang = "ar";
            btn.onclick = () => checkAnswer(option);
            optionsContainer.appendChild(btn);
        });
    }

    function checkAnswer(selected) {
        if (hasAnswered) return;
        hasAnswered = true;

        document
            .querySelectorAll("#options button")
            .forEach(b => b.disabled = true);

        if (selected === correctWord) {
            resultBox.textContent = "✅ صح";
            resultBox.classList.add("result-correct");
            correctCount++;
        } else {
            resultBox.innerHTML =
                `<span dir="rtl" lang="ar">❌ خطأ. الإجابة الصحيحة: ${correctWord.ar}</span>`;
            resultBox.classList.add("result-wrong");
            wrongCount++;
        }

        updateScore();
        nextButton.style.display = "inline-block";
    }

    renderQuestion();
    updateScore();
};
