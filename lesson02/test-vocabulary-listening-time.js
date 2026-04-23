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
