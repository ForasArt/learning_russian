window.onload = function () {

    const words = [
        { "ru": "1", "audio": "../audio/один.mp3" },
        { "ru": "2", "audio": "../audio/два.mp3" },
{ "ru": "3", "audio": "../audio/три.mp3" },
{ "ru": "4", "audio": "../audio/четыре.mp3" },
{ "ru": "5", "audio": "../audio/пять.mp3" },
{ "ru": "6", "audio": "../audio/шесть.mp3" },
{ "ru": "7", "audio": "../audio/семь.mp3" },
{ "ru": "8", "audio": "../audio/восемь.mp3" },
{ "ru": "9", "audio": "../audio/девять.mp3" },
{ "ru": "10", "audio": "../audio/десять.mp3" },
{ "ru": "11", "audio": "../audio/одиннадцать.mp3" },
{ "ru": "12", "audio": "../audio/двенадцать.mp3" },
{ "ru": "13", "audio": "../audio/тринадцать.mp3" },
{ "ru": "14", "audio": "../audio/четырнадцать.mp3" },
{ "ru": "15", "audio": "../audio/пятнадцать.mp3" },
{ "ru": "16", "audio": "../audio/шестнадцать.mp3" },
{ "ru": "17", "audio": "../audio/семнадцать.mp3" },
{ "ru": "18", "audio": "../audio/восемнадцать.mp3" },
{ "ru": "19", "audio": "../audio/девятнадцать.mp3" },
{ "ru": "20", "audio": "../audio/двадцать.mp3" },
{ "ru": "10", "audio": "../audio/десять.mp3" },
{ "ru": "20", "audio": "../audio/двадцать.mp3" },
{ "ru": "30", "audio": "../audio/тридцать.mp3" },
{ "ru": "40", "audio": "../audio/сорок.mp3" },
{ "ru": "50", "audio": "../audio/пятьдесят.mp3" },
{ "ru": "60", "audio": "../audio/шестьдесят.mp3" },
{ "ru": "70", "audio": "../audio/семьдесят.mp3" },
{ "ru": "80", "audio": "../audio/восемьдесят.mp3" },
{ "ru": "90", "audio": "../audio/девяносто.mp3" },
{ "ru": "100", "audio": "../audio/сто.mp3" },
{ "ru": "200", "audio": "../audio/двести.mp3" },
{ "ru": "300", "audio": "../audio/триста.mp3" },
{ "ru": "400", "audio": "../audio/четыреста.mp3" },
{ "ru": "500", "audio": "../audio/пятьсот.mp3" },
{ "ru": "600", "audio": "../audio/шестьсот.mp3" },
{ "ru": "700", "audio": "../audio/семьсот.mp3" },
{ "ru": "800", "audio": "../audio/восемьсот.mp3" },
{ "ru": "900", "audio": "../audio/девятьсот.mp3" },
{ "ru": "1000", "audio": "../audio/тысяча.mp3" },
{ "ru": "2000", "audio": "../audio/две_тысячи.mp3" },
{ "ru": "3000", "audio": "../audio/три_тысячи.mp3" },
{ "ru": "4000", "audio": "../audio/четыре_тысячи.mp3" },
{ "ru": "5000", "audio": "../audio/пять_тысяч.mp3" },
{ "ru": "6000", "audio": "../audio/шесть_тысяч.mp3" },
{ "ru": "7000", "audio": "../audio/семь_тысяч.mp3" },
{ "ru": "8000", "audio": "../audio/восемь_тысяч.mp3" },
{ "ru": "9000", "audio": "../audio/девять_тысяч.mp3" },
{ "ru": "10 000", "audio": "../audio/десять_тысяч.mp3" },



{ "ru": "23", "audio": "../audio/двадцать_три.mp3" },
{ "ru": "44", "audio": "../audio/сорок_четыре.mp3" },
{ "ru": "35", "audio": "../audio/тридцать_пять.mp3" },
{ "ru": "146", "audio": "../audio/сто_сорок_шесть.mp3" },
{ "ru": "57", "audio": "../audio/пятьдесят_семь.mp3" },
{ "ru": "328", "audio": "../audio/триста_двадцать_восемь.mp3" },
{ "ru": "2009", "audio": "../audio/две_тысячи_девять.mp3" },
{ "ru": "110", "audio": "../audio/сто_десять.mp3" },
{ "ru": "843", "audio": "../audio/восемьсот_сорок_три.mp3" },
{ "ru": "144", "audio": "../audio/сто_сорок_четыре.mp3" },
{ "ru": "485", "audio": "../audio/четыреста_восемьдесят_пять.mp3" },
{ "ru": "26", "audio": "../audio/двадцать_шесть.mp3" },
{ "ru": "207", "audio": "../audio/двести_семь.mp3" },
{ "ru": "98", "audio": "../audio/девяносто_восемь.mp3" },
{ "ru": "739", "audio": "../audio/семьсот_тридцать_девять.mp3" },
{ "ru": "310", "audio": "../audio/триста_десять.mp3" },
{ "ru": "4823", "audio": "../audio/четыре_тысячи_восемьсот_двадцать_три.mp3" },
{ "ru": "5084", "audio": "../audio/пять_тысяч_восемьдесят_четыре.mp3" },
{ "ru": "10105", "audio": "../audio/десять_тысяч_сто_пять.mp3" },
{ "ru": "706", "audio": "../audio/семьсот_шесть.mp3" },
{ "ru": "187", "audio": "../audio/сто_восемьдесят_семь.mp3" },
{ "ru": "338", "audio": "../audio/триста_тридцать_восемь.mp3" },
{ "ru": "89", "audio": "../audio/восемьдесят_девять.mp3" },
{ "ru": "710", "audio": "../audio/семьсот_десять.mp3" },
{ "ru": "523", "audio": "../audio/пятьсот_двадцать_три.mp3" },
{ "ru": "1154", "audio": "../audio/тысяча_сто_пятьдесят_четыре.mp3" },
{ "ru": "45", "audio": "../audio/сорок_пять.mp3" },
{ "ru": "406", "audio": "../audio/четыреста_шесть.mp3" },
{ "ru": "87", "audio": "../audio/восемьдесят_семь.mp3" },
{ "ru": "108", "audio": "../audio/сто_восемь.mp3" },
{ "ru": "329", "audio": "../audio/триста_двадцать_девять.mp3" },
{ "ru": "510", "audio": "../audio/пятьсот_десять.mp3" },
{ "ru": "1107", "audio": "../audio/тысяча_сто_семь.mp3" },
{ "ru": "38", "audio": "../audio/тридцать_восемь.mp3" },
{ "ru": "99", "audio": "../audio/девяносто_девять.mp3" },
{ "ru": "410", "audio": "../audio/четыреста_десять.mp3" },
{ "ru": "603", "audio": "../audio/шестьсот_три.mp3" },
{ "ru": "754", "audio": "../audio/семьсот_пятьдесят_четыре.mp3" },
{ "ru": "85", "audio": "../audio/восемьдесят_пять.mp3" },
{ "ru": "36", "audio": "../audio/тридцать_шесть.mp3" },
{ "ru": "97", "audio": "../audio/девяносто_семь.mp3" },
{ "ru": "1008", "audio": "../audio/тысяча_восемь.mp3" },
{ "ru": "409", "audio": "../audio/четыреста_девять.mp3" },
{ "ru": "3010", "audio": "../audio/три_тысячи_десять.mp3" },
{ "ru": "524", "audio": "../audio/пятьсот_двадцать_четыре.mp3" },
{ "ru": "34", "audio": "../audio/тридцать_четыре.mp3" },
{ "ru": "95", "audio": "../audio/девяносто_пять.mp3" },
{ "ru": "206", "audio": "../audio/двести_шесть.mp3" },

       
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
