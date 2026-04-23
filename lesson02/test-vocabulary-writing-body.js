window.onload = function () {

    const words = [
        { "ru": "тело", "ar": "جسم", "audio": "../audio/тело.mp3" },
        { "ru": "голова", "ar": "رأس", "audio": "../audio/голова.mp3" },
        { "ru": "волосы", "ar": "شعر", "audio": "../audio/волосы.mp3" },
        { "ru": "лицо", "ar": "وجه", "audio": "../audio/лицо.mp3" },
        { "ru": "лоб", "ar": "جبهة", "audio": "../audio/лоб.mp3" },
        { "ru": "бровь", "ar": "حاجب", "audio": "../audio/бровь.mp3" },
        { "ru": "веко", "ar": "جفن", "audio": "../audio/веко.mp3" },
        { "ru": "глаз", "ar": "عين", "audio": "../audio/глаз.mp3" },
        { "ru": "зрачок", "ar": "بؤبؤ", "audio": "../audio/зрачок.mp3" },
        { "ru": "ресницы", "ar": "رموش", "audio": "../audio/ресницы.mp3" },
        { "ru": "щека", "ar": "خد", "audio": "../audio/щека.mp3" },
        { "ru": "нос", "ar": "أنف", "audio": "../audio/нос.mp3" },
        { "ru": "ухо", "ar": "أذن", "audio": "../audio/ухо.mp3" },
        { "ru": "рот", "ar": "فم", "audio": "../audio/рот.mp3" },
        { "ru": "губа", "ar": "شفه", "audio": "../audio/губа.mp3" },
        { "ru": "язык", "ar": "لسان", "audio": "../audio/язык.mp3" },
        { "ru": "десна", "ar": "لثة", "audio": "../audio/десна.mp3" },
        { "ru": "зуб", "ar": "سن", "audio": "../audio/зуб.mp3" },
        { "ru": "усы", "ar": "شارب", "audio": "../audio/усы.mp3" },
        { "ru": "борода", "ar": "لحية", "audio": "../audio/борода.mp3" },
        { "ru": "шея", "ar": "عنق", "audio": "../audio/шея.mp3" },
        { "ru": "горло", "ar": "حلق", "audio": "../audio/горло.mp3" },
        { "ru": "голос", "ar": "صوت", "audio": "../audio/голос.mp3" },
        { "ru": "плечо", "ar": "كتف", "audio": "../audio/плечо.mp3" },
        { "ru": "подмышка", "ar": "إبط", "audio": "../audio/подмышка.mp3" },
        { "ru": "рука", "ar": "ذراع", "audio": "../audio/рука.mp3" },
        { "ru": "локоть", "ar": "مرفق", "audio": "../audio/локоть.mp3" },
        { "ru": "запястье", "ar": "معصم", "audio": "../audio/запястье.mp3" },
        { "ru": "ладонь", "ar": "يد", "audio": "../audio/ладонь.mp3" },
        { "ru": "кулак", "ar": "قبضة", "audio": "../audio/кулак.mp3" },
        { "ru": "палец", "ar": "إصبع", "audio": "../audio/палец.mp3" },
        { "ru": "ноготь", "ar": "ظفر", "audio": "../audio/ноготь.mp3" },
        { "ru": "грудь", "ar": "صدر", "audio": "../audio/грудь.mp3" },
        { "ru": "спина", "ar": "ظهر", "audio": "../audio/спина.mp3" },
        { "ru": "бедро", "ar": "خاصرة", "audio": "../audio/бедро.mp3" },
        { "ru": "нога", "ar": "قدم", "audio": "../audio/нога.mp3" },
        { "ru": "колено", "ar": "ركبة", "audio": "../audio/колено.mp3" },
        { "ru": "лодыжка", "ar": "كاحل", "audio": "../audio/лодыжка.mp3" },
        { "ru": "пятка", "ar": "كعب", "audio": "../audio/пятка.mp3" },
        { "ru": "кость", "ar": "عظمة", "audio": "../audio/кость.mp3" },
        { "ru": "ребро", "ar": "ضلع", "audio": "../audio/ребро.mp3" },
        { "ru": "сердце", "ar": "قلب", "audio": "../audio/сердце.mp3" },
        { "ru": "лёгкое", "ar": "رئة", "audio": "../audio/лёгкое.mp3" },
        { "ru": "печень", "ar": "كبد", "audio": "../audio/печень.mp3" },
        { "ru": "желудок", "ar": "معدة", "audio": "../audio/желудок.mp3" },
        { "ru": "кровь", "ar": "دم", "audio": "../audio/кровь.mp3" },
        { "ru": "здоровье", "ar": "صحة", "audio": "../audio/здоровье.mp3" },
        { "ru": "болезнь", "ar": "مرض", "audio": "../audio/болезнь.mp3" },
        { "ru": "кашель", "ar": "سعال", "audio": "../audio/кашель.mp3" },
        { "ru": "насморк", "ar": "سيلان الأنف", "audio": "../audio/насморк.mp3" },
        { "ru": "температура", "ar": "حرارة", "audio": "../audio/температура.mp3" },
        { "ru": "давление", "ar": "ضغط", "audio": "../audio/давление.mp3" },
        { "ru": "боль", "ar": "ألم", "audio": "../audio/боль.mp3" },
        { "ru": "рана", "ar": "جرح", "audio": "../audio/рана.mp3" },
        { "ru": "перелом", "ar": "كسر", "audio": "../audio/перелом.mp3" },
        { "ru": "лекарство", "ar": "دواء", "audio": "../audio/лекарство.mp3" },
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
