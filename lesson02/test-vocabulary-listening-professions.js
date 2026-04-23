window.onload = function () {
    const words = [
        {"ru":"учёба","ar":"دراسة","audio":"../audio/учёба.mp3"},
        {"ru":"учебник","ar":"مقرر","audio":"../audio/учебник.mp3"},
        {"ru":"словарь","ar":"قاموس","audio":"../audio/словарь.mp3"},
        {"ru":"профессия","ar":"مهنة","audio":"../audio/профессия.mp3"},
        {"ru":"специальность","ar":"تخصص","audio":"../audio/специальность.mp3"},
        {"ru":"школа","ar":"مدرسة","audio":"../audio/школа.mp3"},
        {"ru":"университет","ar":"جامعة","audio":"../audio/университет.mp3"},
        {"ru":"учитель","ar":"مدرس","audio":"../audio/учитель.mp3"},
        {"ru":"профессор","ar":"أستاذ","audio":"../audio/профессор.mp3"},
        {"ru":"учёный","ar":"عالم","audio":"../audio/учёный.mp3"},
        {"ru":"врач","ar":"طبيب","audio":"../audio/врач.mp3"},
        {"ru":"инженер","ar":"مهندس","audio":"../audio/инженер.mp3"},
        {"ru":"адвокат","ar":"محام","audio":"../audio/адвокат.mp3"},
        {"ru":"фермер","ar":"مزارع","audio":"../audio/фермер.mp3"},
        {"ru":"рабочий","ar":"عامل","audio":"../audio/рабочий.mp3"},
        {"ru":"медсестра","ar":"ممرضة","audio":"../audio/медсестра.mp3"},
        {"ru":"журналист","ar":"صحفي","audio":"../audio/журналист.mp3"},
        {"ru":"переводчик","ar":"مترجم","audio":"../audio/переводчик.mp3"},
        {"ru":"пекарь","ar":"خباز","audio":"../audio/пекарь.mp3"},
        {"ru":"продавец","ar":"بائع","audio":"../audio/продавец.mp3"},
        {"ru":"плотник","ar":"نجار","audio":"../audio/плотник.mp3"},
        {"ru":"водитель","ar":"سائق","audio":"../audio/водитель.mp3"},
        {"ru":"повар","ar":"طباخ","audio":"../audio/повар.mp3"},
        {"ru":"бухгалтер","ar":"محاسب","audio":"../audio/бухгалтер.mp3"},
        {"ru":"фотограф","ar":"مصور","audio":"../audio/фотограф.mp3"},
        {"ru":"художник","ar":"فنان","audio":"../audio/художник.mp3"},
        {"ru":"певец","ar":"مغني","audio":"../audio/певец.mp3"},
        {"ru":"парикмахер","ar":"حلاق","audio":"../audio/парикмахер.mp3"},
        {"ru":"корреспондент","ar":"مراسل","audio":"../audio/корреспондент.mp3"},
        {"ru":"пилот","ar":"طيار","audio":"../audio/пилот.mp3"},
        {"ru":"солдат","ar":"جندي","audio":"../audio/солдат.mp3"},
        {"ru":"директор","ar":"مدير","audio":"../audio/директор.mp3"},
        {"ru":"пожарный","ar":"إطفائي","audio":"../audio/пожарный.mp3"},
        {"ru":"следователь","ar":"محقق","audio":"../audio/следователь.mp3"},
        {"ru":"архитектор","ar":"معماري","audio":"../audio/архитектор.mp3"},
        {"ru":"инспектор","ar":"مفتش","audio":"../audio/инспектор.mp3"},
        {"ru":"ассистент","ar":"مساعد","audio":"../audio/ассистент.mp3"},
        {"ru":"сотрудник","ar":"موظف","audio":"../audio/сотрудник.mp3"},
        {"ru":"консультант","ar":"مستشار","audio":"../audio/консультант.mp3"},
        {"ru":"строитель","ar":"بناء","audio":"../audio/строитель.mp3"},
        {"ru":"писатель","ar":"كاتب","audio":"../audio/писатель.mp3"},
        {"ru":"президент","ar":"رئيس","audio":"../audio/президент.mp3"},
        {"ru":"риэлтор","ar":"سمسار","audio":"../audio/риэлтор.mp3"},
        {"ru":"техник","ar":"فني","audio":"../audio/техник.mp3"},
        {"ru":"охранник","ar":"حارس","audio":"../audio/охранник.mp3"},
        {"ru":"продюсер","ar":"منتج","audio":"../audio/продюсер.mp3"},
        {"ru":"исследователь","ar":"باحث","audio":"../audio/исследователь.mp3"},
        {"ru":"актёр","ar":"ممثل","audio":"../audio/актёр.mp3"},
        {"ru":"официант","ar":"نادل","audio":"../audio/официант.mp3"},
        {"ru":"танцор","ar":"راقص","audio":"../audio/танцор.mp3"},
        {"ru":"уборщик","ar":"عامل نظافة","audio":"../audio/уборщик.mp3"},
        {"ru":"пастух","ar":"راعي","audio":"../audio/пастух.mp3"},
        {"ru":"ветеринар","ar":"بيطري","audio":"../audio/ветеринар.mp3"},
        {"ru":"ювелир","ar":"صائغ","audio":"../audio/ювелир.mp3"},
        {"ru":"шпион","ar":"جاسوس","audio":"../audio/шпион.mp3"},
        {"ru":"вор","ar":"سارق","audio":"../audio/вор.mp3"},
        {"ru":"убийца","ar":"قاتل","audio":"../audio/убийца.mp3"},
        {"ru":"мошенник","ar":"محتال","audio":"../audio/мошенник.mp3"}
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
