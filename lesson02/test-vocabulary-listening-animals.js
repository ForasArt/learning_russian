window.onload = function () {
    const words = [
        {"ru": "животное", "ar": "حيوان", "audio": "../audio/животное.mp3"},
        {"ru": "питомец", "ar": "أليف", "audio": "../audio/питомец.mp3"},
        {"ru": "хищник", "ar": "مفترس", "audio": "../audio/хищник.mp3"},
        {"ru": "птица", "ar": "طائر", "audio": "../audio/птица.mp3"},
        {"ru": "жук", "ar": "حشرة", "audio": "../audio/жук.mp3"},
        {"ru": "рыба", "ar": "سمكة", "audio": "../audio/рыба.mp3"},
        {"ru": "кот", "ar": "قط", "audio": "../audio/кот.mp3"},
        {"ru": "пёс", "ar": "كلب", "audio": "../audio/пёс.mp3"},
        {"ru": "конь", "ar": "حصان", "audio": "../audio/конь.mp3"},
        {"ru": "лошадь", "ar": "فرس", "audio": "../audio/лошадь.mp3"},
        {"ru": "верблюд", "ar": "جمل", "audio": "../audio/верблюд.mp3"},
        {"ru": "бык", "ar": "ثور", "audio": "../audio/бык.mp3"},
        {"ru": "корова", "ar": "بقرة", "audio": "../audio/корова.mp3"},
        {"ru": "телёнок", "ar": "عجل", "audio": "../audio/телёнок.mp3"},
        {"ru": "козёл", "ar": "تيس", "audio": "../audio/козёл.mp3"},
        {"ru": "коза", "ar": "معزة", "audio": "../audio/коза.mp3"},
        {"ru": "козлёнок", "ar": "جدي", "audio": "../audio/козлёнок.mp3"},
        {"ru": "баран", "ar": "كبش", "audio": "../audio/баран.mp3"},
        {"ru": "овца", "ar": "غنم", "audio": "../audio/овца.mp3"},
        {"ru": "ягнёнок", "ar": "حمل", "audio": "../audio/ягнёнок.mp3"},
        {"ru": "осёл", "ar": "حمار", "audio": "../audio/осёл.mp3"},
        {"ru": "кролик", "ar": "ارنب", "audio": "../audio/кролик.mp3"},
        {"ru": "заяц", "ar": "ارنب", "audio": "../audio/заяц.mp3"},
        {"ru": "кабан", "ar": "خنزير", "audio": "../audio/кабан.mp3"},
        {"ru": "свинья", "ar": "خنزيرة", "audio": "../audio/свинья.mp3"},
        {"ru": "петух", "ar": "ديك", "audio": "../audio/петух.mp3"},
        {"ru": "курица", "ar": "دجاجة", "audio": "../audio/курица.mp3"},
        {"ru": "цыплёнок", "ar": "كتكوت", "audio": "../audio/цыплёнок.mp3"},
        {"ru": "гусь", "ar": "اوز", "audio": "../audio/гусь.mp3"},
        {"ru": "утка", "ar": "بطة", "audio": "../audio/утка.mp3"},
        {"ru": "павлин", "ar": "طاووس", "audio": "../audio/павлин.mp3"},
        {"ru": "лебедь", "ar": "بجعة", "audio": "../audio/лебедь.mp3"},
        {"ru": "голубь", "ar": "حمامة", "audio": "../audio/голубь.mp3"},
        {"ru": "попугай", "ar": "ببغاء", "audio": "../audio/попугай.mp3"},
        {"ru": "слон", "ar": "فيل", "audio": "../audio/слон.mp3"},
        {"ru": "бегемот", "ar": "فرس النهر", "audio": "../audio/бегемот.mp3"},
        {"ru": "носорог", "ar": "وحيد القرن", "audio": "../audio/носорог.mp3"},
        {"ru": "жираф", "ar": "زرافة", "audio": "../audio/жираф.mp3"},
        {"ru": "медведь", "ar": "دب", "audio": "../audio/медведь.mp3"},
        {"ru": "волк", "ar": "ذئب", "audio": "../audio/волк.mp3"},
        {"ru": "лиса", "ar": "ثعلب", "audio": "../audio/лиса.mp3"},
        {"ru": "лев", "ar": "اسد", "audio": "../audio/лев.mp3"},
        {"ru": "тигр", "ar": "نمر", "audio": "../audio/тигр.mp3"},
        {"ru": "гепард", "ar": "فهد", "audio": "../audio/гепард.mp3"},
        {"ru": "газель", "ar": "غزال", "audio": "../audio/газель.mp3"},
        {"ru": "антилопа", "ar": "ظبي", "audio": "../audio/антилопа.mp3"},
        {"ru": "кенгуру", "ar": "كنغر", "audio": "../audio/кенгуру.mp3"},
        {"ru": "тюлень", "ar": "فقمة", "audio": "../audio/тюлень.mp3"},
        {"ru": "енот", "ar": "راكون", "audio": "../audio/енот.mp3"},
        {"ru": "крот", "ar": "اكل النمل", "audio": "../audio/крот.mp3"},
        {"ru": "белка", "ar": "سنجاب", "audio": "../audio/белка.mp3"},
        {"ru": "хомяк", "ar": "همتارو", "audio": "../audio/хомяк.mp3"},
        {"ru": "ёж", "ar": "قنفذ", "audio": "../audio/ёж.mp3"},
        {"ru": "крыса", "ar": "عرسة", "audio": "../audio/крыса.mp3"},
        {"ru": "мышь", "ar": "فأر", "audio": "../audio/мышь.mp3"},
        {"ru": "летучая мышь", "ar": "خفاش", "audio": "../audio/летучая_мышь.mp3"},
        {"ru": "крокодил", "ar": "تمساح", "audio": "../audio/крокодил.mp3"},
        {"ru": "черепаха", "ar": "سلحفاة", "audio": "../audio/черепаха.mp3"},
        {"ru": "пингвин", "ar": "بطريق", "audio": "../audio/пингвин.mp3"},
        {"ru": "лягушка", "ar": "ضفدع", "audio": "../audio/лягушка.mp3"},
        {"ru": "змея", "ar": "افعى", "audio": "../audio/змея.mp3"},
        {"ru": "ящерица", "ar": "سحلية", "audio": "../audio/ящерица.mp3"},
        {"ru": "червь", "ar": "دودة", "audio": "../audio/червь.mp3"},
        {"ru": "орёл", "ar": "نسر", "audio": "../audio/орёл.mp3"},
        {"ru": "сокол", "ar": "صقر", "audio": "../audio/сокол.mp3"},
        {"ru": "сова", "ar": "بومة", "audio": "../audio/сова.mp3"},
        {"ru": "ворон", "ar": "غراب", "audio": "../audio/ворон.mp3"},
        {"ru": "акула", "ar": "قرش", "audio": "../audio/акула.mp3"},
        {"ru": "дельфин", "ar": "دولفين", "audio": "../audio/дельфин.mp3"},
        {"ru": "кит", "ar": "حوت", "audio": "../audio/кит.mp3"},
        {"ru": "краб", "ar": "سرطان", "audio": "../audio/краб.mp3"},
        {"ru": "креветка", "ar": "روبيان", "audio": "../audio/креветка.mp3"},
        {"ru": "осьминог", "ar": "أخطبوط", "audio": "../audio/осьминог.mp3"},
        {"ru": "скорпион", "ar": "عقرب", "audio": "../audio/скорпион.mp3"},
        {"ru": "пчела", "ar": "نحلة", "audio": "../audio/пчела.mp3"},
        {"ru": "оса", "ar": "دبور", "audio": "../audio/оса.mp3"},
        {"ru": "комар", "ar": "بعوضة", "audio": "../audio/комар.mp3"},
        {"ru": "муха", "ar": "ذبابة", "audio": "../audio/муха.mp3"},
        {"ru": "бабочка", "ar": "فراشة", "audio": "../audio/бабочка.mp3"},
        {"ru": "муравей", "ar": "نملة", "audio": "../audio/муравей.mp3"},
        {"ru": "паук", "ar": "عنكبوت", "audio": "../audio/паук.mp3"},
        {"ru": "саранча", "ar": "جرادة", "audio": "../audio/саранча.mp3"},
        {"ru": "кузнечик", "ar": "جندب", "audio": "../audio/кузнечик.mp3"},
        {"ru": "таракан", "ar": "صرصور", "audio": "../audio/таракан.mp3"},
        {"ru": "светлячок", "ar": "يراعة", "audio": "../audio/светлячок.mp3"},
        {"ru": "лапа", "ar": "مخلب", "audio": "../audio/лапа.mp3"},
        {"ru": "хвост", "ar": "ذيل", "audio": "../audio/хвост.mp3"},
        {"ru": "клюв", "ar": "منقار", "audio": "../audio/клюв.mp3"},
        {"ru": "перо", "ar": "ريشة", "audio": "../audio/перо.mp3"},
        {"ru": "крыло", "ar": "جناح", "audio": "../audio/крыло.mp3"},
        {"ru": "сарай", "ar": "زريبة", "audio": "../audio/сарай.mp3"},
        {"ru": "клетка", "ar": "قفص", "audio": "../audio/клетка.mp3"},
        {"ru": "аквариум", "ar": "حوض سمك", "audio": "../audio/аквариум.mp3"},
        {"ru": "корм", "ar": "طعام حيوانات", "audio": "../audio/корм.mp3"},
        {"ru": "прививка", "ar": "لقاح", "audio": "../audio/прививка.mp3"},
        {"ru": "зоопарк", "ar": "حديقة حيوانات", "audio": "../audio/зоопарк.mp3"},
        
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
