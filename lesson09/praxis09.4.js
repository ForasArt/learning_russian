window.onload = function () {

    const words = [
        { "ru": "смотрели фильм", "audio": "../audio/вчера_Лена_и_Катя_хотели_пойти_в_парк.mp3" },
        { "ru": "в парке", "audio": "../audio/Анна_планировала_в_среду.mp3" },
        { "ru": "на стадионе", "audio": "../audio/в_субботу_вечером_Иван_собирался.mp3" },
        { "ru": "в Багдад", "audio": "../audio/после_получения_диплома_медицинского.mp3" },
        { "ru": "в Москве", "audio": "../audio/Андрей_планировал_летом.mp3" },
        { "ru": "6", "audio": "../audio/Маша_любит_животных.mp3" },
        { "ru": "России", "audio": "../audio/Ахмед_женился_в_2021.mp3" },
        { "ru": "5", "audio": "../audio/Хамдан_живет_в_России.mp3" },
        { "ru": "Ахмед", "audio": "../audio/Наташа_договорилась_пойти.mp3" },
        { "ru": "суп", "audio": "../audio/бабушка_сварила_суп.mp3" },
        { "ru": "на врача", "audio": "../audio/в_следующем_году_Даша.mp3" },
        { "ru": "животных", "audio": "../audio/Али_учится_на_ветеринара.mp3" },
        { "ru": "попугая", "audio": "../audio/у_меня_есть_четыре_кошки.mp3" },
        { "ru": "Ахмед", "audio": "../audio/учитель_попросил .mp3" },
        { "ru": "никто", "audio": "../audio/поезд_отправляется.mp3" },
        { "ru": "180 рублей", "audio": "../audio/в_магазине_было.mp3" },
        { "ru": "1", "audio": "../audio/в_библиотеке_Анна.mp3" },
        { "ru": "в зелёном", "audio": "../audio/у_Маши_есть_два_платья.mp3" },
        { "ru": "Али", "audio": "../audio/через_неделю_Маша.mp3" },
       
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
