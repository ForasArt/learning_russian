window.onload = function () {
    const words = [
        { "ru": "человек", "ar": "شخص", "audio": "../audio/человек.mp3" },
        { "ru": "мужчина", "ar": "رجل", "audio": "../audio/мужчина.mp3" },
        { "ru": "женщина", "ar": "مرأة", "audio": "../audio/женщина.mp3" },
        { "ru": "жизнь", "ar": "حياة", "audio": "../audio/жизнь.mp3" },
        { "ru": "смерть", "ar": "موت", "audio": "../audio/смерть.mp3" },
        { "ru": "папа", "ar": "بابا", "audio": "../audio/папа.mp3" },
        { "ru": "мама", "ar": "ماما", "audio": "../audio/мама.mp3" },
        { "ru": "отец", "ar": "أب", "audio": "../audio/отец.mp3" },
        { "ru": "мать", "ar": "أم", "audio": "../audio/мать.mp3" },
        { "ru": "родители", "ar": "أهل", "audio": "../audio/родители.mp3" },
        { "ru": "ребёнок", "ar": "طفل", "audio": "../audio/ребёнок.mp3" },
        { "ru": "младенец", "ar": "مولود", "audio": "../audio/младенец.mp3" },
        { "ru": "несовершеннолетний", "ar": "حدث", "audio": "../audio/несовершеннолетний.mp3" },
        { "ru": "совершеннолетний", "ar": "بالغ", "audio": "../audio/совершеннолетний.mp3" },
        { "ru": "родословная", "ar": "نسب", "audio": "../audio/родословная.mp3" },
        { "ru": "потомство", "ar": "ذرية", "audio": "../audio/потомство.mp3" },
        { "ru": "сын", "ar": "ابن", "audio": "../audio/сын.mp3" },
        { "ru": "дочь", "ar": "ابنة", "audio": "../audio/дочь.mp3" },
        { "ru": "сирота", "ar": "يتيم", "audio": "../audio/сирота.mp3" },
        { "ru": "пасынок", "ar": "ابن بالتبني", "audio": "../audio/пасынок.mp3" },
        { "ru": "падчерица", "ar": "بنت بالتبني", "audio": "../audio/падчерица.mp3" },
        { "ru": "брат", "ar": "أخ", "audio": "../audio/брат.mp3" },
        { "ru": "близнец", "ar": "توأم", "audio": "../audio/близнец.mp3" },
        { "ru": "сестра", "ar": "أخت", "audio": "../audio/сестра.mp3" },
        { "ru": "дедушка", "ar": "جد", "audio": "../audio/дедушка.mp3" },
        { "ru": "бабушка", "ar": "جدة", "audio": "../audio/бабушка.mp3" },
        { "ru": "внук", "ar": "حفيد", "audio": "../audio/внук.mp3" },
        { "ru": "внучка", "ar": "حفيدة", "audio": "../audio/внучка.mp3" },
        { "ru": "дядя", "ar": "عم/خال", "audio": "../audio/дядя.mp3" },
        { "ru": "тётя", "ar": "عمة/خالة", "audio": "../audio/тётя.mp3" },
        { "ru": "двоюродный брат", "ar": "ابن العم/ابن الخال", "audio": "../audio/двоюродный_брат.mp3" },
        { "ru": "двоюродная сестра", "ar": "بنت العم/بنت الخال", "audio": "../audio/двоюродная_сестра.mp3" },
        { "ru": "отчим", "ar": "زوج الأم", "audio": "../audio/отчим.mp3" },
        { "ru": "мачеха", "ar": "زوجة الأب", "audio": "../audio/мачеха.mp3" },
        { "ru": "родственник", "ar": "قريب", "audio": "../audio/родственник.mp3" },
        { "ru": "родственница", "ar": "قريبة", "audio": "../audio/родственница.mp3" },
        { "ru": "семья", "ar": "عائلة", "audio": "../audio/семья.mp3" },
        { "ru": "имя", "ar": "إسم", "audio": "../audio/имя.mp3" },
        { "ru": "отчество", "ar": "إسم الأب", "audio": "../audio/отчество.mp3" },
        { "ru": "фамилия", "ar": "عائلة", "audio": "../audio/фамилия.mp3" },
        { "ru": "помолвка", "ar": "خطبة", "audio": "../audio/помолвка.mp3" },
        { "ru": "обручённый", "ar": "خطيب", "audio": "../audio/обручённый.mp3" },
        { "ru": "обручённая", "ar": "خطيبة", "audio": "../audio/обручённая.mp3" },
        { "ru": "свадьба", "ar": "زفاف", "audio": "../audio/свадьба.mp3" },
        { "ru": "жених", "ar": "عريس", "audio": "../audio/жених.mp3" },
        { "ru": "невеста", "ar": "عروس", "audio": "../audio/невеста.mp3" },
        { "ru": "брак", "ar": "زواج", "audio": "../audio/брак.mp3" },
        { "ru": "муж", "ar": "زوج", "audio": "../audio/муж.mp3" },
        { "ru": "жена", "ar": "زوجة", "audio": "../audio/жена.mp3" },
        { "ru": "зять", "ar": "صهر", "audio": "../audio/зять.mp3" },
        { "ru": "невестка", "ar": "كنة", "audio": "../audio/невестка.mp3" },
        { "ru": "свёкор", "ar": "ووالد بالتبنى", "audio": "../audio/свёкор.mp3" },
        { "ru": "тесть", "ar": "ووالد بالتبنى", "audio": "../audio/тесть.mp3" },
        { "ru": "свекровь", "ar": "حماة \" أم الزوج أو أم الزوجة", "audio": "../audio/свекровь.mp3" },
        { "ru": "тёща", "ar": "حماة \" أم الزوج أو أم الزوجة", "audio": "../audio/тёща.mp3" },
        { "ru": "деверь", "ar": "سلف", "audio": "../audio/деверь.mp3" },
        { "ru": "развод", "ar": "طلاق", "audio": "../audio/развод.mp3" },
        { "ru": "похороны", "ar": "جنازة", "audio": "../audio/похороны.mp3" },
        { "ru": "кладбище", "ar": "مقبرة", "audio": "../audio/кладбище.mp3" },
        { "ru": "могила", "ar": "قبر", "audio": "../audio/могила.mp3" },
        { "ru": "гроб", "ar": "تابوت", "audio": "../audio/гроб.mp3" },
        { "ru": "вдовец", "ar": "أرمل", "audio": "../audio/вдовец.mp3" },
        { "ru": "вдова", "ar": "أرملة", "audio": "../audio/вдова.mp3" },
            
        
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
