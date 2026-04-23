window.onload = function () {

    const words = [
        {"ru": "путешествие", "ar": "سفر", "audio": "../audio/путешествие.mp3"},
        {"ru": "путешественник", "ar": "مسافر", "audio": "../audio/путешественник.mp3"},
        {"ru": "поездка", "ar": "رحلة", "audio": "../audio/поездка.mp3"},
        {"ru": "туризм", "ar": "سياحة", "audio": "../audio/туризм.mp3"},
        {"ru": "турист", "ar": "سائح", "audio": "../audio/турист.mp3"},
        {"ru": "экскурсовод", "ar": "سائح", "audio": "../audio/экскурсовод.mp3"},
        {"ru": "экскурсия", "ar": "جولة", "audio": "../audio/экскурсия.mp3"},
        {"ru": "информация", "ar": "استعلام", "audio": "../audio/информация.mp3"},
        {"ru": "карта", "ar": "خريطة/بطاقة", "audio": "../audio/карта.mp3"},
        {"ru": "деньги", "ar": "نقود", "audio": "../audio/деньги.mp3"},
        {"ru": "кошелёк", "ar": "محفظة", "audio": "../audio/кошелёк.mp3"},
        {"ru": "паспорт", "ar": "جواز سفر", "audio": "../audio/паспорт.mp3"},
        {"ru": "виза", "ar": "تأشيرة", "audio": "../audio/виза.mp3"},
        {"ru": "страховка", "ar": "تأمين", "audio": "../audio/страховка.mp3"},
        {"ru": "цена", "ar": "ثمن", "audio": "../audio/цена.mp3"},
        {"ru": "распродажа", "ar": "تنزيلات", "audio": "../audio/распродажа.mp3"},
        {"ru": "скидка", "ar": "خصم", "audio": "../audio/скидка.mp3"},
        {"ru": "посольство", "ar": "سفارة", "audio": "../audio/посольство.mp3"},
        {"ru": "консульство", "ar": "قنصلية", "audio": "../audio/консульство.mp3"},
        {"ru": "полиция", "ar": "شرطة", "audio": "../audio/полиция.mp3"},
        {"ru": "билет", "ar": "تذكرة", "audio": "../audio/билет.mp3"},
        {"ru": "гостиница", "ar": "فندق", "audio": "../audio/гостиница.mp3"},
        {"ru": "номер", "ar": "جناح", "audio": "../audio/номер.mp3"},
        {"ru": "бронь", "ar": "حجز", "audio": "../audio/бронь.mp3"},
        {"ru": "рейс", "ar": "وجهة", "audio": "../audio/рейс.mp3"},
        {"ru": "транзит", "ar": "ترانزيت", "audio": "../audio/транзит.mp3"},
        {"ru": "пересечение границы", "ar": "عبور", "audio": "../audio/пересечение_границы.mp3"},
        {"ru": "вход", "ar": "مدخل", "audio": "../audio/вход.mp3"},
        {"ru": "выход", "ar": "مخرج", "audio": "../audio/выход.mp3"},
        {"ru": "таможня", "ar": "جمارك", "audio": "../audio/таможня.mp3"},
        {"ru": "контроль", "ar": "تفتيش", "audio": "../audio/контроль.mp3"},
        {"ru": "штамп", "ar": "ختم", "audio": "../audio/штамп.mp3"},
        {"ru": "сумка", "ar": "حقيبة", "audio": "../audio/сумка.mp3"},
        {"ru": "ручная кладь", "ar": "أمتعة يدوية", "audio": "../audio/ручная_кладь.mp3"},
        {"ru": "багаж", "ar": "حقيبة سفر", "audio": "../audio/багаж.mp3"},
        {"ru": "дорога", "ar": "طريق", "audio": "../audio/дорога.mp3"},
        {"ru": "тротуар", "ar": "رصيف", "audio": "../audio/тротуар.mp3"},
        {"ru": "транспорт", "ar": "مواصلات", "audio": "../audio/транспорт.mp3"},
        {"ru": "пассажир", "ar": "راكب", "audio": "../audio/пассажир.mp3"},
        {"ru": "велосипед", "ar": "بسكليت", "audio": "../audio/велосипед.mp3"},
        {"ru": "машина", "ar": "سيارة", "audio": "../audio/машина.mp3"},
        {"ru": "автобус", "ar": "حافلة", "audio": "../audio/автобус.mp3"},
        {"ru": "автовокзал", "ar": "محطة الحافلات", "audio": "../audio/автовокзал.mp3"},
        {"ru": "вертолёт", "ar": "مروحية", "audio": "../audio/вертолёт.mp3"},
        {"ru": "самолёт", "ar": "طائرة", "audio": "../audio/самолёт.mp3"},
        {"ru": "аэропорт", "ar": "مطار", "audio": "../audio/аэропорт.mp3"},
        {"ru": "поезд", "ar": "قطار", "audio": "../audio/поезд.mp3"},
        {"ru": "железнодорожный вокзал", "ar": "محطة القطار", "audio": "../audio/железнодорожный_вокзал.mp3"},
        {"ru": "метро", "ar": "قطار الأنفاق", "audio": "../audio/метро.mp3"},
        {"ru": "лодка", "ar": "قارب", "audio": "../audio/лодка.mp3"},
        {"ru": "яхта", "ar": "يخت", "audio": "../audio/яхта.mp3"},
        {"ru": "корабль", "ar": "سفينة", "audio": "../audio/корабль.mp3"},
        {"ru": "порт", "ar": "ميناء", "audio": "../audio/порт.mp3"},
        {"ru": "выходной", "ar": "عطلة", "audio": "../audio/выходной.mp3"},
        {"ru": "праздник", "ar": "عيد", "audio": "../audio/праздник.mp3"},
        {"ru": "погода", "ar": "طقس", "audio": "../audio/погода.mp3"},
        {"ru": "небо", "ar": "سماء", "audio": "../audio/небо.mp3"},
        {"ru": "земля", "ar": "أرض", "audio": "../audio/земля.mp3"},
        {"ru": "огонь", "ar": "نار", "audio": "../audio/огонь.mp3"},
        {"ru": "воздух", "ar": "هواء", "audio": "../audio/воздух.mp3"},
        {"ru": "солнце", "ar": "شمس", "audio": "../audio/солнце.mp3"},
        {"ru": "луна", "ar": "قمر", "audio": "../audio/луна.mp3"},
        {"ru": "звезда", "ar": "نجم", "audio": "../audio/звезда.mp3"},
        {"ru": "дождь", "ar": "مطر", "audio": "../audio/дождь.mp3"},
        {"ru": "ветер", "ar": "رياح", "audio": "../audio/ветер.mp3"},
        {"ru": "град", "ar": "برد", "audio": "../audio/град.mp3"},
        {"ru": "снег", "ar": "ثلج", "audio": "../audio/снег.mp3"},
        {"ru": "лёд", "ar": "جليد", "audio": "../audio/лёд.mp3"},
        {"ru": "ураган", "ar": "إعصار", "audio": "../audio/ураган.mp3"},
        {"ru": "буря", "ar": "عاصفة", "audio": "../audio/буря.mp3"},
        {"ru": "песчаная буря", "ar": "عاصفة_رملية", "audio": "../audio/песчаная_буря.mp3"},
        {"ru": "землятресение", "ar": "زلزال", "audio": "../audio/землятресение.mp3"},
        {"ru": "сезон дождей", "ar": "أمطار موسمية", "audio": "../audio/сезон_дождей.mp3"},
        {"ru": "море", "ar": "بحر", "audio": "../audio/море.mp3"},
        {"ru": "река", "ar": "نهر", "audio": "../audio/река.mp3"},
        {"ru": "озеро", "ar": "بحيرة", "audio": "../audio/озеро.mp3"},
        {"ru": "остров", "ar": "جزيرة", "audio": "../audio/остров.mp3"},
        {"ru": "водопад", "ar": "شلال", "audio": "../audio/водопад.mp3"},
        {"ru": "пещера", "ar": "كهف", "audio": "../audio/пещера.mp3"},
        {"ru": "пляж", "ar": "شاطئ", "audio": "../audio/пляж.mp3"},
        {"ru": "пустыня", "ar": "صحراء", "audio": "../audio/пустыня.mp3"},
        {"ru": "лес", "ar": "غابة", "audio": "../audio/лес.mp3"},
        {"ru": "гора", "ar": "جبل", "audio": "../audio/гора.mp3"},
        {"ru": "вулкан", "ar": "بركان", "audio": "../audio/вулкан.mp3"},
        {"ru": "камень", "ar": "حجر", "audio": "../audio/камень.mp3"},
        {"ru": "чрезвычайная ситуация", "ar": "طوارئ", "audio": "../audio/чрезвычайная_ситуация.mp3"},
        {"ru": "авария", "ar": "حادث", "audio": "../audio/авария.mp3"},
        {"ru": "больница", "ar": "مستشفى", "audio": "../audio/больница.mp3"},
        {"ru": "ресторан", "ar": "مطعم", "audio": "../audio/ресторан.mp3"},
        {"ru": "кафе", "ar": "مقهى", "audio": "../audio/кафе.mp3"},
        {"ru": "рынок", "ar": "سوق", "audio": "../audio/рынок.mp3"},
        {"ru": "магазин", "ar": "متجر", "audio": "../audio/магазин.mp3"},
        {"ru": "тюрьма", "ar": "سجن", "audio": "../audio/тюрьма.mp3"},
        {"ru": "музей", "ar": "متحف", "audio": "../audio/музей.mp3"},
        {"ru": "стадион", "ar": "ستاد", "audio": "../audio/стадион.mp3"},
        {"ru": "концерт", "ar": "حفلة", "audio": "../audio/концерт.mp3"},
        {"ru": "достопримечательность", "ar": "مواقع سياحية", "audio": "../audio/достопримечательность.mp3"},
        {"ru": "фотосъёмка", "ar": "تصوير", "audio": "../audio/фотосъёмка.mp3"},
        {"ru": "сувенир", "ar": "تذكار", "audio": "../audio/сувенир.mp3"},
        {"ru": "подарок", "ar": "هدية", "audio": "../audio/подарок.mp3"},
        {"ru": "кальян", "ar": "أرجيلة", "audio": "../audio/кальян.mp3"},
        {"ru": "золото", "ar": "ذهب", "audio": "../audio/золото.mp3"},
        {"ru": "серебро", "ar": "فضة", "audio": "../audio/серебро.mp3"},
        {"ru": "платина", "ar": "بلاتين", "audio": "../audio/платина.mp3"},
        {"ru": "север", "ar": "شمال", "audio": "../audio/север.mp3"},
        {"ru": "юг", "ar": "جنوب", "audio": "../audio/юг.mp3"},
        {"ru": "запад", "ar": "غرب", "audio": "../audio/запад.mp3"},
        {"ru": "восток", "ar": "شرق", "audio": "../audio/восток.mp3"},
        {"ru": "страна", "ar": "بلد", "audio": "../audio/страна.mp3"},
        {"ru": "город", "ar": "مدينة", "audio": "../audio/город.mp3"},
        {"ru": "столица", "ar": "عاصمة", "audio": "../audio/столица.mp3"},
        {"ru": "деревня", "ar": "قرية", "audio": "../audio/деревня.mp3"},
        {"ru": "аравийский полуостров", "ar": "شبه الجزيرة العربية", "audio": "../audio/аравийский_полуостров.mp3"},
        {"ru": "мёртвое море", "ar": "البحر الميت", "audio": "../audio/мёртвое_море.mp3"},
        {"ru": "Россия", "ar": "روسيا", "audio": "../audio/Россия.mp3"},
        {"ru": "Москва", "ar": "موسكو", "audio": "../audio/Москва.mp3"},
        {"ru": "Санкт-Петербург", "ar": "سان بترس بورغ", "audio": "../audio/Санкт-Петербург.mp3"},
        {"ru": "Иордания", "ar": "أُردن", "audio": "../audio/Иордания.mp3"},
        {"ru": "Амман", "ar": "عمان", "audio": "../audio/Амман.mp3"},
        {"ru": "Ирак", "ar": "عراق", "audio": "../audio/Ирак.mp3"},
        {"ru": "Багдад", "ar": "بغداد", "audio": "../audio/Багдад.mp3"},
        {"ru": "Сирия", "ar": "سوريا", "audio": "../audio/Сирия.mp3"},
        {"ru": "Дамаск", "ar": "دمشق", "audio": "../audio/Дамаск.mp3"},
        {"ru": "Королевство Саудовская Аравия", "ar": "المملكة العربية السعودية", "audio": "../audio/Королевство_Саудовская_Аравия.mp3"},
        {"ru": "Эр-Рияд", "ar": "الرياض", "audio": "../audio/Эр-Рияд.mp3"},
        {"ru": "Объединенные Арабские Эмираты", "ar": "الامارات العربية المتحدة", "audio": "../audio/Объединенные_Арабские_Эмираты.mp3"},
        {"ru": "Абу-Даби", "ar": "ابو ظبي", "audio": "../audio/Абу-Даби.mp3"},
        {"ru": "Дубай", "ar": "دبي", "audio": "../audio/Дубай.mp3"},
        {"ru": "Кувейт", "ar": "كويت", "audio": "../audio/Кувейт.mp3"},
        {"ru": "Египет", "ar": "مصر", "audio": "../audio/Египет.mp3"},
        {"ru": "Каир", "ar": "قاهرة", "audio": "../audio/Каир.mp3"},
        {"ru": "Палестина", "ar": "فلسطين", "audio": "../audio/Палестина.mp3"},
        {"ru": "Газа", "ar": "غزة", "audio": "../audio/Газа.mp3"},
        {"ru": "Ливан", "ar": "لبنان", "audio": "../audio/Ливан.mp3"},
        {"ru": "Бейрут", "ar": "بيروت", "audio": "../audio/Бейрут.mp3"},
        {"ru": "Марокко", "ar": "مغرب", "audio": "../audio/Марокко.mp3"},
        {"ru": "Соединенные штаты Америки", "ar": "الولايات المتحدة الأمريكية", "audio": "../audio/Соединенные_штаты_Америки.mp3"},
        
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
