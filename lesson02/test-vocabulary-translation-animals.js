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
        {"ru": "зоопарк", "ar": "حديقة حيوانات", "audio": "../audio/зоопарк.mp3"}
        
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
