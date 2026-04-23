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

    const playButton = document.getElementById("play-audio");
    const inputField = document.getElementById("user-input");
    const letterResult = document.getElementById("letter-result");
    const resultBox = document.getElementById("result");
    const scoreBox = document.getElementById("score");

    const nextButton = document.createElement("button");
    nextButton.textContent = "🌿 التالي";
    nextButton.className = "next-button"; // добавляем стиль из CSS
    nextButton.onclick = () => {
        renderQuestion();
        nextButton.style.display = "none";
        hasAnswered = false;
    };
    document.getElementById("next-button-container").appendChild(nextButton);

    function updateScore() {
        scoreBox.textContent = `✅: ${correctCount} | ❌: ${wrongCount}`;
    }

    function getRandomWord() {
        return words[Math.floor(Math.random() * words.length)];
    }

    function renderQuestion() {
        correctWord = getRandomWord();
        hasAnswered = false;

        resultBox.textContent = "";
        letterResult.innerHTML = "";
        inputField.value = "";
        inputField.disabled = false;
        inputField.focus();
    }

    // Воспроизведение аудио
    playButton.onclick = () => {
        if (!correctWord || !correctWord.audio) return;
        const audio = new Audio(correctWord.audio);
        audio.play().catch(err => console.error("Ошибка аудио:", err));
    };

    function checkSpelling() {
        if (hasAnswered) return;
        hasAnswered = true;

        const userWord = inputField.value.trim().toLowerCase();
        const correct = correctWord.ru.toLowerCase();

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
                ❌ خطأ. الكلمة الصحيحة: ${correctWord.ru}
                </span>`;
            resultBox.style.color = "red";
            wrongCount++;
        }

        updateScore();
        inputField.disabled = true;
        nextButton.style.display = "inline-block";
    }

    inputField.addEventListener("keydown", function (e) {
        if (e.key === "Enter" && inputField.value.trim() !== "") {
            checkSpelling();
        }
    });

    renderQuestion();
    updateScore();
};
