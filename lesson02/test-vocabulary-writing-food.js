window.onload = function () {

    const words = [
        {"ru": "еда", "ar": "طعام", "audio": "../audio/еда.mp3"},
        {"ru": "продукт", "ar": "منتج", "audio": "../audio/продукт.mp3"},
        {"ru": "белки", "ar": "بروتين", "audio": "../audio/белки.mp3"},
        {"ru": "жиры", "ar": "دهون", "audio": "../audio/жиры.mp3"},
        {"ru": "углеводы", "ar": "كربوهيدرات", "audio": "../audio/углеводы.mp3"},
        {"ru": "калории", "ar": "كالوري", "audio": "../audio/калории.mp3"},
        {"ru": "витамины", "ar": "ڤيتامين", "audio": "../audio/витамины.mp3"},
        {"ru": "завтрак", "ar": "فطور", "audio": "../audio/завтрак.mp3"},
        {"ru": "обед", "ar": "غداء", "audio": "../audio/обед.mp3"},
        {"ru": "ужин", "ar": "عشاء", "audio": "../audio/ужин.mp3"},
        {"ru": "напиток", "ar": "مشروب", "audio": "../audio/напиток.mp3"},
        {"ru": "рыба", "ar": "سمك", "audio": "../audio/рыба.mp3"},
        {"ru": "мясо", "ar": "لحم", "audio": "../audio/мясо.mp3"},
        {"ru": "яйца", "ar": "بيض", "audio": "../audio/яйца.mp3"},
        {"ru": "сыр", "ar": "جبن", "audio": "../audio/сыр.mp3"},
        {"ru": "молоко", "ar": "حليب", "audio": "../audio/молоко.mp3"},
        {"ru": "кефир", "ar": "شنينة", "audio": "../audio/кефир.mp3"},
        {"ru": "сметана", "ar": "لبن رائب", "audio": "../audio/сметана.mp3"},
        {"ru": "творог", "ar": "جبن قريش", "audio": "../audio/творог.mp3"},
        {"ru": "йогурт", "ar": "زبادي", "audio": "../audio/йогурт.mp3"},
        {"ru": "фрукты", "ar": "فواكه", "audio": "../audio/фрукты.mp3"},
        {"ru": "овощи", "ar": "خضار", "audio": "../audio/овощи.mp3"},
        {"ru": "ягоды", "ar": "توت", "audio": "../audio/ягоды.mp3"},
        {"ru": "грибы", "ar": "فطر", "audio": "../audio/грибы.mp3"},
        {"ru": "орехи", "ar": "مكسرات", "audio": "../audio/орехи.mp3"},
        {"ru": "специи", "ar": "توابل", "audio": "../audio/специи.mp3"},
        {"ru": "соус", "ar": "صلصة", "audio": "../audio/соус.mp3"},
        {"ru": "масло", "ar": "زبدة", "audio": "../audio/масло.mp3"},
        {"ru": "мука", "ar": "دقيق", "audio": "../audio/мука.mp3"},
        {"ru": "хлеб", "ar": "خبز", "audio": "../audio/хлеб.mp3"},
        {"ru": "вода", "ar": "ماء", "audio": "../audio/вода.mp3"},
        {"ru": "минеральная вода", "ar": "ماء معدني", "audio": "../audio/минеральная_вода.mp3"},
        {"ru": "сок", "ar": "عصير", "audio": "../audio/сок.mp3"},
        {"ru": "чай", "ar": "شاي", "audio": "../audio/чай.mp3"},
        {"ru": "кофе", "ar": "قهوة", "audio": "../audio/кофе.mp3"},
        {"ru": "говядина", "ar": "لحم عجل", "audio": "../audio/говядина.mp3"},
        {"ru": "телятина", "ar": "لحم عجل رضيع", "audio": "../audio/телятина.mp3"},
        {"ru": "баранина", "ar": "لحم خروف", "audio": "../audio/баранина.mp3"},
        {"ru": "свинина", "ar": "لحم خنزير", "audio": "../audio/свинина.mp3"},
        {"ru": "крупа", "ar": "حبوب", "audio": "../audio/крупа.mp3"},
        {"ru": "рис", "ar": "أرز", "audio": "../audio/рис.mp3"},
        {"ru": "гречка", "ar": "حنطة سوداء", "audio": "../audio/гречка.mp3"},
        {"ru": "овсянка", "ar": "شوفان", "audio": "../audio/овсянка.mp3"},
        {"ru": "булгур", "ar": "برغل", "audio": "../audio/булгур.mp3"},
        {"ru": "фасоль", "ar": "فاصولياء", "audio": "../audio/фасоль.mp3"},
        {"ru": "горох", "ar": "بازيلاء", "audio": "../audio/горох.mp3"},
        {"ru": "чечевица", "ar": "عدس", "audio": "../audio/чечевица.mp3"},
        {"ru": "пшено", "ar": "حبوب الدخن", "audio": "../audio/пшено.mp3"},
        {"ru": "перловая крупа", "ar": "شعير", "audio": "../audio/перловая_крупа.mp3"},
        {"ru": "кускус", "ar": "كسكس", "audio": "../audio/кускус.mp3"},
        {"ru": "хумус", "ar": "حمص", "audio": "../audio/хумус.mp3"},
        {"ru": "суп", "ar": "حساء", "audio": "../audio/суп.mp3"},
        {"ru": "борщ", "ar": "", "audio": "../audio/борщ.mp3"},
        {"ru": "каша", "ar": "يخنة", "audio": "../audio/каша.mp3"},
        {"ru": "картофель", "ar": "بطاطا", "audio": "../audio/картофель.mp3"},
        {"ru": "помидор", "ar": "طماطم", "audio": "../audio/помидор.mp3"},
        {"ru": "огурец", "ar": "خيار", "audio": "../audio/огурец.mp3"},
        {"ru": "морковь", "ar": "جزر", "audio": "../audio/морковь.mp3"},
        {"ru": "баклажаны", "ar": "باذنجان", "audio": "../audio/баклажаны.mp3"},
        {"ru": "капуста", "ar": "ملفوف", "audio": "../audio/капуста.mp3"},
        {"ru": "цветная капуста", "ar": "زهرة", "audio": "../audio/цветная_капуста.mp3"},
        {"ru": "брокколи", "ar": "بروكلي", "audio": "../audio/брокколи.mp3"},
        {"ru": "шпинат", "ar": "سبانخ", "audio": "../audio/шпинат.mp3"},
        {"ru": "салат", "ar": "خس", "audio": "../audio/салат.mp3"},
        {"ru": "тыква", "ar": "قرع", "audio": "../audio/тыква.mp3"},
        {"ru": "свёкла", "ar": "شمندر", "audio": "../audio/свёкла.mp3"},
        {"ru": "редис", "ar": "فجل", "audio": "../audio/редис.mp3"},
        {"ru": "кабачок", "ar": "كوسا", "audio": "../audio/кабачок.mp3"},
        {"ru": "оливки", "ar": "زيتون", "audio": "../audio/оливки.mp3"},
        {"ru": "лук", "ar": "بصل", "audio": "../audio/лук.mp3"},
        {"ru": "чеснок", "ar": "ثوم", "audio": "../audio/чеснок.mp3"},
        {"ru": "яблоко", "ar": "تفاحة", "audio": "../audio/яблоко.mp3"},
        {"ru": "груша", "ar": "إجاصة", "audio": "../audio/груша.mp3"},
        {"ru": "вишня", "ar": "كرز", "audio": "../audio/вишня.mp3"},
        {"ru": "клубника", "ar": "فراولة", "audio": "../audio/клубника.mp3"},
        {"ru": "виноград", "ar": "عنب", "audio": "../audio/виноград.mp3"},
        {"ru": "арбуз", "ar": "بطيخ", "audio": "../audio/арбуз.mp3"},
        {"ru": "банан", "ar": "موزة", "audio": "../audio/банан.mp3"},
        {"ru": "инжир", "ar": "تين", "audio": "../audio/инжир.mp3"},
        {"ru": "персики", "ar": "خوخ", "audio": "../audio/персики.mp3"},
        {"ru": "сливы", "ar": "برقوق", "audio": "../audio/сливы.mp3"},
        {"ru": "абрикосы", "ar": "مشمش", "audio": "../audio/абрикосы.mp3"},
        {"ru": "ананас", "ar": "أناناس", "audio": "../audio/ананас.mp3"},
        {"ru": "киви", "ar": "كيوي", "audio": "../audio/киви.mp3"},
        {"ru": "финики", "ar": "تمر", "audio": "../audio/финики.mp3"},
        {"ru": "гранаты", "ar": "رمان", "audio": "../audio/гранаты.mp3"},
        {"ru": "апельсин", "ar": "برتقالة", "audio": "../audio/апельсин.mp3"},
        {"ru": "мандарины", "ar": "يوسفي", "audio": "../audio/мандарины.mp3"},
        {"ru": "лимон", "ar": "ليمونة", "audio": "../audio/лимон.mp3"},
        {"ru": "десерт", "ar": "حلوى", "audio": "../audio/десерт.mp3"},
        {"ru": "мёд", "ar": "عسل", "audio": "../audio/мёд.mp3"},
        {"ru": "пирог", "ar": "فطيرة", "audio": "../audio/пирог.mp3"},
        {"ru": "торт", "ar": "كعكة", "audio": "../audio/торт.mp3"},
        {"ru": "шоколад", "ar": "شوكولا", "audio": "../audio/шоколад.mp3"},
        {"ru": "печенье", "ar": "بسكويت", "audio": "../audio/печенье.mp3"},
        {"ru": "конфеты", "ar": "حلوى", "audio": "../audio/конфеты.mp3"},
        {"ru": "мороженое", "ar": "بوظة", "audio": "../audio/мороженое.mp3"},
        {"ru": "соль", "ar": "ملح", "audio": "../audio/соль.mp3"},
        {"ru": "сахар", "ar": "سكر", "audio": "../audio/сахар.mp3"},
        {"ru": "перец", "ar": "فلفل", "audio": "../audio/перец.mp3"},
        {"ru": "корица", "ar": "قرفة", "audio": "../audio/корица.mp3"},
        {"ru": "кардамон", "ar": "هيل", "audio": "../audio/кардамон.mp3"},
        {"ru": "куркума", "ar": "كركم", "audio": "../audio/куркума.mp3"},
        {"ru": "тмин", "ar": "كمون", "audio": "../audio/тмин.mp3"},
        {"ru": "шафран", "ar": "زعفران", "audio": "../audio/шафран.mp3"},
        {"ru": "гвоздика", "ar": "قرنفل", "audio": "../audio/гвоздика.mp3"},
        {"ru": "мята", "ar": "نعناع", "audio": "../audio/мята.mp3"},
        {"ru": "фундук", "ar": "بندق", "audio": "../audio/фундук.mp3"},
        {"ru": "изюм", "ar": "زبيب", "audio": "../audio/изюм.mp3"},
        {"ru": "алкоголь", "ar": "كحول", "audio": "../audio/алкоголь.mp3"},
        {"ru": "вино", "ar": "نبيذ", "audio": "../audio/вино.mp3"},
        {"ru": "пиво", "ar": "بيرة", "audio": "../audio/пиво.mp3"},

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
