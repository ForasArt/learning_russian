window.onload = function () {
    const words = [
        { "ru": "время", "ar": "وقت", "audio": "../audio/время.mp3" },
        { "ru": "вчера", "ar": "أمس", "audio": "../audio/вчера.mp3" },
        { "ru": "позавчера", "ar": "قبل أمس", "audio": "../audio/позавчера.mp3" },
        { "ru": "сегодня", "ar": "اليوم", "audio": "../audio/сегодня.mp3" },
        { "ru": "завтра", "ar": "غدا", "audio": "../audio/завтра.mp3" },
        { "ru": "послезавтра", "ar": "بعد غد", "audio": "../audio/послезавтра.mp3" },
        { "ru": "секунда", "ar": "ثانية", "audio": "../audio/секунда.mp3" },
        { "ru": "минута", "ar": "دقيقة", "audio": "../audio/минута.mp3" },
        { "ru": "час", "ar": "ساعة", "audio": "../audio/час.mp3" },
        { "ru": "день", "ar": "يوم", "audio": "../audio/день.mp3" },
        { "ru": "неделя", "ar": "أسبوع", "audio": "../audio/неделя.mp3" },
        { "ru": "месяц", "ar": "شهر", "audio": "../audio/месяц.mp3" },
        { "ru": "год", "ar": "سنة", "audio": "../audio/год.mp3" },
        { "ru": "календарь", "ar": "تقويم", "audio": "../audio/календарь.mp3" },
        { "ru": "зима", "ar": "شتاء", "audio": "../audio/зима.mp3" },
        { "ru": "весна", "ar": "ربيع", "audio": "../audio/весна.mp3" },
        { "ru": "лето", "ar": "صيف", "audio": "../audio/лето.mp3" },
        { "ru": "осень", "ar": "خريف", "audio": "../audio/осень.mp3" },
        { "ru": "рассвет", "ar": "فجر", "audio": "../audio/рассвет.mp3" },
        { "ru": "утро", "ar": "صباح", "audio": "../audio/утро.mp3" },
        { "ru": "полдень", "ar": "ظهر", "audio": "../audio/полдень.mp3" },
        { "ru": "вечер", "ar": "مساء", "audio": "../audio/вечер.mp3" },
        { "ru": "закат", "ar": "غروب", "audio": "../audio/закат.mp3" },
        { "ru": "ночь", "ar": "ليل", "audio": "../audio/ночь.mp3" },
        { "ru": "полночь", "ar": "منتصف الليل", "audio": "../audio/полночь.mp3" },
        { "ru": "воскресенье", "ar": "أحد", "audio": "../audio/воскресенье.mp3" },
        { "ru": "понедельник", "ar": "اثنين", "audio": "../audio/понедельник.mp3" },
        { "ru": "вторник", "ar": "ثلاثاء", "audio": "../audio/вторник.mp3" },
        { "ru": "среда", "ar": "أربعاء", "audio": "../audio/среда.mp3" },
        { "ru": "четверг", "ar": "خميس", "audio": "../audio/четверг.mp3" },
        { "ru": "пятница", "ar": "جمعة", "audio": "../audio/пятница.mp3" },
        { "ru": "суббота", "ar": "سبت", "audio": "../audio/суббота.mp3" },
        { "ru": "январь", "ar": "يناير", "audio": "../audio/январь.mp3" },
        { "ru": "февраль", "ar": "فبراير", "audio": "../audio/февраль.mp3" },
        { "ru": "март", "ar": "مارس", "audio": "../audio/март.mp3" },
        { "ru": "апрель", "ar": "أبريل", "audio": "../audio/апрель.mp3" },
        { "ru": "май", "ar": "مايو", "audio": "../audio/май.mp3" },
        { "ru": "июнь", "ar": "يونيو", "audio": "../audio/июнь.mp3" },
        { "ru": "июль", "ar": "يوليو", "audio": "../audio/июль.mp3" },
        { "ru": "август", "ar": "أغسطس", "audio": "../audio/август.mp3" },
        { "ru": "сентябрь", "ar": "سبتمبر", "audio": "../audio/сентябрь.mp3" },
        { "ru": "октябрь", "ar": "أكتوبر", "audio": "../audio/октябрь.mp3" },
        { "ru": "ноябрь", "ar": "نوفمبر", "audio": "../audio/ноябрь.mp3" },
        { "ru": "декабрь", "ar": "ديسمبر", "audio": "../audio/декабрь.mp3" },
        
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
