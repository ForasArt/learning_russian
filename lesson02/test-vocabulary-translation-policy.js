window.onload = function () {
    const words = [
        {"ru": "политика", "ar": "سياسة", "audio": "../audio/политика.mp3"},
        {"ru": "государство", "ar": "دولة", "audio": "../audio/государство.mp3"},
        {"ru": "суверенитет", "ar": "سيادة", "audio": "../audio/суверенитет.mp3"},
        {"ru": "власть", "ar": "سلطة", "audio": "../audio/власть.mp3"},
        {"ru": "политический режим", "ar": "نظام سياسي", "audio": "../audio/политический_режим.mp3"},
        {"ru": "демократия", "ar": "ديمقراطية", "audio": "../audio/демократия.mp3"},
        {"ru": "авторитаризм", "ar": "سلطوية", "audio": "../audio/авторитаризм.mp3"},
        {"ru": "тоталитаризм", "ar": "شمولية", "audio": "../audio/тоталитаризм.mp3"},
        {"ru": "многополярность", "ar": "تعددية الأقطاب", "audio": "../audio/многополярность.mp3"},
        {"ru": "однополярный мир", "ar": "عالم أحادي القطب", "audio": "../audio/однополярный_мир.mp3"},
        {"ru": "геополитика", "ar": "الجغرافيا السياسية", "audio": "../audio/геополитика.mp3"},
        {"ru": "национальный интерес", "ar": "المصلحة الوطنية", "audio": "../audio/национальный_интерес.mp3"},
        {"ru": "тактика", "ar": "تكتيكات", "audio": "../audio/тактика.mp3"},
        {"ru": "стратегия", "ar": "استراتيجية", "audio": "../audio/стратегия.mp3"},
        {"ru": "идеология", "ar": "أيديولوجيا", "audio": "../audio/идеология.mp3"},
        {"ru": "лидерство", "ar": "قيادة", "audio": "../audio/лидерство.mp3"},
        {"ru": "союзник", "ar": "حليف", "audio": "../audio/союзник.mp3"},
        {"ru": "противник", "ar": "خصم", "audio": "../audio/противник.mp3"},
        {"ru": "нейтралитет", "ar": "حياد", "audio": "../audio/нейтралитет.mp3"},
        {"ru": "влияние", "ar": "نفوذ", "audio": "../audio/влияние.mp3"},
        {"ru": "баланс сил", "ar": "توازن القوى", "audio": "../audio/баланс_сил.mp3"},
        {"ru": "международные отношения", "ar": "العلاقات الدولية", "audio": "../audio/международные_отношения.mp3"},
        {"ru": "мировой порядок", "ar": "النظام العالمي", "audio": "../audio/мировой_порядок.mp3"},
        {"ru": "дипломатия", "ar": "الدبلوماسية", "audio": "../audio/дипломатия.mp3"},
        {"ru": "дипломат", "ar": "دبلوماسي", "audio": "../audio/дипломат.mp3"},
        {"ru": "посол", "ar": "سفير", "audio": "../audio/посол.mp3"},
        {"ru": "посольство", "ar": "سفارة", "audio": "../audio/посольство.mp3"},
        {"ru": "консул", "ar": "قنصل", "audio": "../audio/консул.mp3"},
        {"ru": "консульство", "ar": "قنصلية", "audio": "../audio/консульство.mp3"},
        {"ru": "переговоры", "ar": "مفاوضات", "audio": "../audio/переговоры.mp3"},
        {"ru": "посредничество", "ar": "وساطة", "audio": "../audio/посредничество.mp3"},
        {"ru": "компромисс", "ar": "تسوية / حل وسط", "audio": "../audio/компромисс.mp3"},
        {"ru": "соглашение", "ar": "اتفاق", "audio": "../audio/соглашение.mp3"},
        {"ru": "договор", "ar": "معاهدة", "audio": "../audio/договор.mp3"},
        {"ru": "протокол", "ar": "بروتوكول", "audio": "../audio/протокол.mp3"},
        {"ru": "дипломатическая нота", "ar": "مذكرة دبلوماسية", "audio": "../audio/дипломатическая_нота.mp3"},
        {"ru": "признание", "ar": "اعتراف", "audio": "../audio/признание.mp3"},
        {"ru": "резолюция", "ar": "قرار أممي", "audio": "../audio/резолюция.mp3"},
        {"ru": "консенсус", "ar": "إجماع", "audio": "../audio/консенсус.mp3"},

          {"ru": "дипломатические отношения", "ar": "العلاقات الدبلوماسية", "audio": "../audio/дипломатические_отношения.mp3"},
          {"ru": "внешняя политика", "ar": "السياسة الخارجية", "audio": "../audio/внешняя_политика.mp3"},
          {"ru": "внутренняя политика", "ar": "السياسة الداخلية", "audio": "../audio/внутренняя_политика.mp3"},
          {"ru": "международное сообщество", "ar": "المجتمع الدولي", "audio": "../audio/международное_сообщество.mp3"},
          {"ru": "международное право", "ar": "القانون الدولي", "audio": "../audio/международное_право.mp3"},
          {"ru": "конфликт", "ar": "صراع", "audio": "../audio/конфликт.mp3"},
          {"ru": "вооружённый конфликт", "ar": "صراع مسلح", "audio": "../audio/вооружённый_конфликт.mp3"},
          {"ru": "война", "ar": "حرب", "audio": "../audio/война.mp3"},
          {"ru": "агрессия", "ar": "عدوان", "audio": "../audio/агрессия.mp3"},
          {"ru": "оккупация", "ar": "احتلال", "audio": "../audio/оккупация.mp3"},
          {"ru": "оборона", "ar": "دفاع", "audio": "../audio/оборона.mp3"},
          {"ru": "наступление", "ar": "هجوم", "audio": "../audio/наступление.mp3"},
          {"ru": "перемирие", "ar": "هدنة", "audio": "../audio/перемирие.mp3"},
          {"ru": "прекращение огня", "ar": "وقف إطلاق النار", "audio": "../audio/прекращение_огня.mp3"},
          {"ru": "миротворец", "ar": "قوات حفظ السلام", "audio": "../audio/миротворец.mp3"},
          {"ru": "санкции", "ar": "عقوبات", "audio": "../audio/санкции.mp3"},
          {"ru": "блокада", "ar": "حصار", "audio": "../audio/блокада.mp3"},
          {"ru": "терроризм", "ar": "إرهاب", "audio": "../audio/терроризм.mp3"},
          {"ru": "террорист", "ar": "إرهابي", "audio": "../audio/террорист.mp3"},
          {"ru": "партизанин", "ar": "مقاتل مقاوم", "audio": "../audio/партизанин.mp3"},
          {"ru": "сопротивление", "ar": "مقاومة", "audio": "../audio/сопротивление.mp3"},
          {"ru": "союз", "ar": "تحالف", "audio": "../audio/союз.mp3"},
          {"ru": "враг", "ar": "عدو", "audio": "../audio/враг.mp3"},
          {"ru": "безопасность", "ar": "أمن", "audio": "../audio/безопасность.mp3"},
          {"ru": "угроза", "ar": "تهديد", "audio": "../audio/угроза.mp3"},
          {"ru": "разведка", "ar": "استخبارات", "audio": "../audio/разведка.mp3"},
          {"ru": "диалог", "ar": "حوار", "audio": "../audio/диалог.mp3"},
          {"ru": "дискуссия", "ar": "نقاش", "audio": "../audio/дискуссия.mp3"},
          {"ru": "консультации", "ar": "مشاورات", "audio": "../audio/консультации.mp3"},
          {"ru": "посредник", "ar": "وسيط", "audio": "../audio/посредник.mp3"},
          {"ru": "соглашение о перемирии", "ar": "اتفاق هدنة", "audio": "../audio/соглашение_о_перемирии.mp3"},
          {"ru": "урегулирование", "ar": "تسوية / تنظيم", "audio": "../audio/урегулирование.mp3"},
          {"ru": "компромиссное решение", "ar": "حل وسط", "audio": "../audio/компромиссное_решение.mp3"},
          {"ru": "уступка", "ar": "تنازل", "audio": "../audio/уступка.mp3"},
          {"ru": "переговорщик", "ar": "مفاوض", "audio": "../audio/переговорщик.mp3"},
          {"ru": "дипломатический канал", "ar": "قناة دبلوماسية", "audio": "../audio/дипломатический_канал.mp3"},
          {"ru": "гарантия", "ar": "ضمان", "audio": "../audio/гарантия.mp3"},
          {"ru": "доверие", "ar": "ثقة", "audio": "../audio/доверие.mp3"},
          {"ru": "стратегия переговоров", "ar": "استراتيجية التفاوض", "audio": "../audio/стратегия_переговоров.mp3"},
          {"ru": "инициатива", "ar": "مبادرة", "audio": "../audio/инициатива.mp3"},
          {"ru": "взаимопонимание", "ar": "تفاهم متبادل", "audio": "../audio/взаимопонимание.mp3"},
          {"ru": "позиция сторон", "ar": "موقف الأطراف", "audio": "../audio/позиция_сторон.mp3"},
          {"ru": "посредническая миссия", "ar": "مهمة وساطة", "audio": "../audio/посредническая_миссия.mp3"},
          {"ru": "заключение соглашения", "ar": "إبرام اتفاق", "audio": "../audio/заключение_соглашения.mp3"},
          {"ru": "Организация Объединённых Наций (ООН)", "ar": "منظمة الأمم المتحدة", "audio": "../audio/Организация_Объединённых_Наций.mp3"},
          {"ru": "Совет Безопасности", "ar": "مجلس الأمن", "audio": "../audio/Совет_Безопасности.mp3"},
          {"ru": "Генеральная Ассамблея", "ar": "الجمعية العامة", "audio": "../audio/Генеральная_Ассамблея.mp3"},
          {"ru": "международная организация", "ar": "منظمة دولية", "audio": "../audio/международная_организация.mp3"},
          {"ru": "региональная организация", "ar": "منظمة إقليمية", "audio": "../audio/региональная_организация.mp3"},
          {"ru": "Европейский союз (ЕС)", "ar": "الاتحاد الأوروبي", "audio": "../audio/Европейский_союз.mp3"},
          {"ru": "Североатлантический альянс (НАТО)", "ar": "حلف الناتو", "audio": "../audio/Североатлантический_альянс.mp3"},
          {"ru": "Лига арабских государств", "ar": "جامعة الدول العربية", "audio": "../audio/Лига_арабских_государств.mp3"},
          {"ru": "Ближний Восток", "ar": "الشرق الأوسط", "audio": "../audio/Ближний_Восток.mp3"},
          {"ru": "мирный процесс", "ar": "عملية السلام", "audio": "../audio/мирный_процесс.mp3"},
          {"ru": "многосторонний формат", "ar": "صيغة متعددة الأطراف", "audio": "../audio/многосторонний_формат.mp3"},
          {"ru": "двусторонние отношения", "ar": "علاقات ثنائية", "audio": "../audio/двусторонние_отношения.mp3"},
          {"ru": "дипломатическая миссия", "ar": "بعثة دبلوماسية", "audio": "../audio/дипломатическая_миссия.mp3"},
          {"ru": "спецпредставитель", "ar": "المبعوث الخاص", "audio": "../audio/спецпредставитель.mp3"},
          {"ru": "международное посредничество", "ar": "الوساطة الدولية", "audio": "../audio/международное_посредничество.mp3"},
          {"ru": "гуманитарная миссия", "ar": "مهمة إنسانية", "audio": "../audio/гуманитарная миссия.mp3"},
          {"ru": "санкционный режим", "ar": "نظام العقوبات", "audio": "../audio/санкционный_режим.mp3"},
          {"ru": "международное давление", "ar": "ضغط دولي", "audio": "../audio/международное_давление.mp3"},
          {"ru": "многосторонняя дипломатия", "ar": "الدبلوماسية متعددة الأطراف", "audio": "../audio/многосторонняя_дипломатия.mp3"},
          {"ru": "членство", "ar": "العضوية", "audio": "../audio/членство.mp3"},
          {"ru": "мирное урегулирование", "ar": "التسوية السلمية", "audio": "../audio/мирное_урегулирование.mp3"},
          {"ru": "политическое решение", "ar": "الحل السياسي", "audio": "../audio/политическое_решение.mp3"},
          {"ru": "соглашение о мире", "ar": "اتفاق سلام", "audio": "../audio/соглашение_о_мире.mp3"},
          {"ru": "дорожная карта", "ar": "خريطة الطريق", "audio": "../audio/дорожная_карта.mp3"},
          {"ru": "переходный процесс", "ar": "عملية انتقالية", "audio": "../audio/переходный_процесс.mp3"},
          {"ru": "реформа", "ar": "إصلاح", "audio": "../audio/реформа.mp3"},
          {"ru": "консолидация", "ar": "توحيد / ترسيخ", "audio": "../audio/консолидация.mp3"},
          {"ru": "интеграция", "ar": "اندماج", "audio": "../audio/интеграция.mp3"},
          {"ru": "примирение", "ar": "مصالحة", "audio": "../audio/примирение.mp3"},
          {"ru": "стабильность", "ar": "استقرار", "audio": "../audio/стабильность.mp3"},
          {"ru": "восстановление", "ar": "إعادة الإعمار", "audio": "../audio/восстановление.mp3"},
          {"ru": "развитие", "ar": "تنمية", "audio": "../audio/развитие.mp3"},
          {"ru": "гуманитарная помощь", "ar": "مساعدات إنسانية", "audio": "../audio/гуманитарная_помощь.mp3"},
          {"ru": "доверительные меры", "ar": "إجراءات بناء الثقة", "audio": "../audio/доверительные_меры.mp3"},
          {"ru": "наблюдатель", "ar": "مراقب", "audio": "../audio/наблюдатель.mp3"},
          {"ru": "мониторинг", "ar": "رصد / مراقبة", "audio": "../audio/мониторинг.mp3"},
          {"ru": "политический диалог", "ar": "الحوار السياسي", "audio": "../audio/политический_диалог.mp3"},
          {"ru": "переговорный процесс", "ar": "عملية التفاوض", "audio": "../audio/переговорный_процесс.mp3"},
          {"ru": "инициативa по урегулированию", "ar": "مبادرة للتسوية", "audio": "../audio/инициативa_по_урегулированию.mp3"},
          {"ru": "компромиссный план", "ar": "خطة تسوية وسطية", "audio": "../audio/компромиссный_план.mp3"}
        
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
