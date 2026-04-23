window.onload = function () {

    const words = [
        {"ru": "дом", "audio": "../audio/дом.mp3", "ar": "بيت"},
        {"ru": "жильё", "audio": "../audio/жильё.mp3", "ar": "سكن"},
        {"ru": "дворец", "audio": "../audio/дворец.mp3", "ar": "قلعة"},
        {"ru": "шатёр", "audio": "../audio/шатёр.mp3", "ar": "خيمة"},
        {"ru": "квартира", "audio": "../audio/квартира.mp3", "ar": "شقة"},
        {"ru": "стена", "audio": "../audio/стена.mp3", "ar": "جدار"},
        {"ru": "дверь", "audio": "../audio/дверь.mp3", "ar": "باب"},
        {"ru": "окно", "audio": "../audio/окно.mp3", "ar": "نافذة"},
        {"ru": "пол", "audio": "../audio/пол.mp3", "ar": "أرضية"},
        {"ru": "потолок", "audio": "../audio/потолок.mp3", "ar": "سقف"},
        {"ru": "крыша", "audio": "../audio/крыша.mp3", "ar": "سطح"},
        {"ru": "подвал", "audio": "../audio/подвал.mp3", "ar": "قبو"},
        {"ru": "этаж", "audio": "../audio/этаж.mp3", "ar": "طابق"},
        {"ru": "лестница", "audio": "../audio/лестница.mp3", "ar": "درج"},
        {"ru": "перила", "audio": "../audio/перила.mp3", "ar": "درابزين"},
        {"ru": "замок", "audio": "../audio/замок.mp3", "ar": "قفل"},
        {"ru": "ключ", "audio": "../audio/ключ.mp3", "ar": "مفتاح"},
        {"ru": "гараж", "audio": "../audio/гараж.mp3", "ar": "كراج"},
        {"ru": "комната", "audio": "../audio/комната.mp3", "ar": "غرفة"},
        {"ru": "кухня", "audio": "../audio/кухня.mp3", "ar": "مطبخ"},
        {"ru": "спальня", "audio": "../audio/спальня.mp3", "ar": "غرفة نوم"},
        {"ru": "гостиная", "audio": "../audio/гостиная.mp3", "ar": "مضافة"},
        {"ru": "детская", "audio": "../audio/детская.mp3", "ar": "غرفة اطفال"},
        {"ru": "библиотека", "audio": "../audio/библиотека.mp3", "ar": "مكتبة"},
        {"ru": "склад", "audio": "../audio/склад.mp3", "ar": "مستودع"},
        {"ru": "ванная", "audio": "../audio/ванная.mp3", "ar": "حمام"},
        {"ru": "туалет", "audio": "../audio/туалет.mp3", "ar": "مرحاض"},
        {"ru": "мебель", "audio": "../audio/мебель.mp3", "ar": "أثاث"},
        {"ru": "стол", "audio": "../audio/стол.mp3", "ar": "طاولة"},
        {"ru": "стул", "audio": "../audio/стул.mp3", "ar": "كرسي"},
        {"ru": "шкаф", "audio": "../audio/шкаф.mp3", "ar": "خزانة"},
        {"ru": "гардероб", "audio": "../audio/гардероб.mp3", "ar": "دولاب"},
        {"ru": "полка", "audio": "../audio/полка.mp3", "ar": "رف"},
        {"ru": "кровать", "audio": "../audio/кровать.mp3", "ar": "سرير"},
        {"ru": "диван", "audio": "../audio/диван.mp3", "ar": "أريكة"},
        {"ru": "кресло", "audio": "../audio/кресло.mp3", "ar": "كنبة"},
        {"ru": "вешалка", "audio": "../audio/вешалка.mp3", "ar": "علاقة"},
        {"ru": "электрическая розетка", "audio": "../audio/электрическая_розетка.mp3", "ar": "مقبس كهربائي"},
        {"ru": "лампа", "audio": "../audio/лампа.mp3", "ar": "مصباح"},
        {"ru": "зеркало", "audio": "../audio/зеркало.mp3", "ar": "مرآة"},
        {"ru": "расчёска", "audio": "../audio/расчёска.mp3", "ar": "فرشاة شعر"},
        {"ru": "бритва", "audio": "../audio/бритва.mp3", "ar": "شفرة حلاقة"},
        {"ru": "мыло", "audio": "../audio/мыло.mp3", "ar": "صابون"},
        {"ru": "шампунь", "audio": "../audio/шампунь.mp3", "ar": "شامبو"},
        {"ru": "зубная паста", "audio": "../audio/зубная_паста.mp3", "ar": "معجون أسنان"},
        {"ru": "зубная щетка", "audio": "../audio/зубная_щетка.mp3", "ar": "فرشاة أسنان"},
        {"ru": "одеяло", "audio": "../audio/одеяло.mp3", "ar": "بطانية"},
        {"ru": "простыня", "audio": "../audio/простыня.mp3", "ar": "شرشف"},
        {"ru": "подушка", "audio": "../audio/подушка.mp3", "ar": "وسادة"},
        {"ru": "полотенце", "audio": "../audio/полотенце.mp3", "ar": "منشفة"},
        {"ru": "занавеска", "audio": "../audio/занавеска.mp3", "ar": "ستارة"},
        {"ru": "ковёр", "audio": "../audio/ковёр.mp3", "ar": "سجاد"},
        {"ru": "зонт", "audio": "../audio/зонт.mp3", "ar": "مظلة"},
        {"ru": "чайник", "audio": "../audio/чайник.mp3", "ar": "إبريق"},
        {"ru": "кастрюля", "audio": "../audio/кастрюля.mp3", "ar": "قدر"},
        {"ru": "сковорода", "audio": "../audio/сковорода.mp3", "ar": "مقلاة"},
        {"ru": "миска", "audio": "../audio/миска.mp3", "ar": "زبدية"},
        {"ru": "половник", "audio": "../audio/половник.mp3", "ar": "مغرفة"},
        {"ru": "тарелка", "audio": "../audio/тарелка.mp3", "ar": "صحن"},
        {"ru": "ложка", "audio": "../audio/ложка.mp3", "ar": "ملعقة"},
        {"ru": "вилка", "audio": "../audio/вилка.mp3", "ar": "شوكة"},
        {"ru": "нож", "audio": "../audio/нож.mp3", "ar": "سكين"},
        {"ru": "душ", "audio": "../audio/душ.mp3", "ar": "دش"},
        {"ru": "ванна", "audio": "../audio/ванна.mp3", "ar": "بانيو"},
        {"ru": "бассейн", "audio": "../audio/бассейн.mp3", "ar": "مسبح"},
        {"ru": "раковина", "audio": "../audio/раковина.mp3", "ar": "مغسلة/حوض"},
        {"ru": "кран", "audio": "../audio/кран.mp3", "ar": "صنبور"},
        {"ru": "холодильник", "audio": "../audio/холодильник.mp3", "ar": "ثلاجة"},
        {"ru": "стиральная машина", "audio": "../audio/стиральная_машина.mp3", "ar": "غسالة"},
        {"ru": "посудомоечная машина", "audio": "../audio/посудомоечная_машина.mp3", "ar": "مغسلة الصحون"},
        {"ru": "пылесос", "audio": "../audio/пылесос.mp3", "ar": "مكنسة كهربائية"},
        {"ru": "утюг", "audio": "../audio/утюг.mp3", "ar": "مكوى"},
        {"ru": "вентилятор", "audio": "../audio/вентилятор.mp3", "ar": "مروحة"},
        {"ru": "кондиционер", "audio": "../audio/кондиционер.mp3", "ar": "مكيف"},
        {"ru": "плита", "audio": "../audio/плита.mp3", "ar": "موقد"},
        {"ru": "микроволновка", "audio": "../audio/микроволновка.mp3", "ar": "ميكروويف"},
        {"ru": "турка", "audio": "../audio/турка.mp3", "ar": "بكرج"},
        {"ru": "тостер", "audio": "../audio/тостер.mp3", "ar": "محمصة"},
        {"ru": "телевизор", "audio": "../audio/телевизор.mp3", "ar": "تلفاز"},
        {"ru": "телефон", "audio": "../audio/телефон.mp3", "ar": "هاتف"},
        {"ru": "радио", "audio": "../audio/радио.mp3", "ar": "راديو"},
        {"ru": "сад", "audio": "../audio/сад.mp3", "ar": "حديقة"},
        {"ru": "цветок", "audio": "../audio/цветок.mp3", "ar": "وردة"},
        {"ru": "дерево", "audio": "../audio/дерево.mp3", "ar": "شجرة"},
        {"ru": "трава", "audio": "../audio/трава.mp3", "ar": "عشب"},
        {"ru": "ремонт", "audio": "../audio/ремонт.mp3", "ar": "صيانة"},
        {"ru": "уборка", "audio": "../audio/уборка.mp3", "ar": "تنظيف"},
        {"ru": "стирка", "audio": "../audio/стирка.mp3", "ar": "غسيل"},
        {"ru": "мусор", "audio": "../audio/мусор.mp3", "ar": "مهملات"},
        {"ru": "салфетка", "audio": "../audio/салфетка.mp3", "ar": "منديل"},
        {"ru": "тряпка", "audio": "../audio/тряпка.mp3", "ar": "خرقة"},
        {"ru": "губка", "audio": "../audio/губка.mp3", "ar": "إسفنجة"},
        {"ru": "ведро", "audio": "../audio/ведро.mp3", "ar": "دلو"},
        {"ru": "таз", "audio": "../audio/таз.mp3", "ar": "حوض"},
        {"ru": "веник", "audio": "../audio/веник.mp3", "ar": "مكنسة"},
        {"ru": "совок", "audio": "../audio/совок.mp3", "ar": "مجرفة"},
        {"ru": "швабра", "audio": "../audio/швабра.mp3", "ar": "ممسحة"},
        {"ru": "порошок", "audio": "../audio/порошок.mp3", "ar": "مسحوق غسيل"},
        {"ru": "пила", "audio": "../audio/пила.mp3", "ar": "منشار"},
        {"ru": "молоток", "audio": "../audio/молоток.mp3", "ar": "مطرقة"},
        {"ru": "отвёртка", "audio": "../audio/отвёртка.mp3", "ar": "مفك"},
        {"ru": "документ", "audio": "../audio/документ.mp3", "ar": "مستند"},
        {"ru": "бумага", "audio": "../audio/бумага.mp3", "ar": "ورقة"},
        {"ru": "книга", "audio": "../audio/книга.mp3", "ar": "كتاب"},
        {"ru": "тетрадь", "audio": "../audio/тетрадь.mp3", "ar": "دفتر"},
        {"ru": "ножницы", "audio": "../audio/ножницы.mp3", "ar": "مقص"},
        {"ru": "ручка", "audio": "../audio/ручка.mp3", "ar": "قلم حبر"},
        {"ru": "карандаш", "audio": "../audio/карандаш.mp3", "ar": "قلم رصاص"},
        {"ru": "линейка", "audio": "../audio/линейка.mp3", "ar": "مسطرة"},
        {"ru": "степлер", "audio": "../audio/степлер.mp3", "ar": "مكبس"},
        {"ru": "игла", "audio": "../audio/игла.mp3", "ar": "إبرة"},
        {"ru": "нитка", "audio": "../audio/нитка.mp3", "ar": "خيط"},
        {"ru": "игрушка", "audio": "../audio/игрушка.mp3", "ar": "لعبة"},

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
