window.onload = function () {
    const arabicLetters = [
        { letter: "А", name: "letter01", audio: "audio/letter01.mp3" },
        { letter: "Б", name: "letter02", audio: "audio/letter02.mp3" },
        { letter: "В", name: "letter03", audio: "audio/letter03.mp3" },
        { letter: "Г", name: "letter04", audio: "audio/letter04.mp3" },
        { letter: "Д", name: "letter05", audio: "audio/letter05.mp3" },
        { letter: "Е", name: "letter06", audio: "audio/letter06.mp3" },
        { letter: "Ё", name: "letter07", audio: "audio/letter07.mp3" },
        { letter: "Ж", name: "letter08", audio: "audio/letter08.mp3" },
        { letter: "З", name: "letter09", audio: "audio/letter09.mp3" },
        { letter: "И", name: "letter10", audio: "audio/letter10.mp3" },
        { letter: "Й", name: "letter11", audio: "audio/letter11.mp3" },
        { letter: "К", name: "letter12", audio: "audio/letter12.mp3" },
        { letter: "Л", name: "letter13", audio: "audio/letter13.mp3" },
        { letter: "М", name: "letter14", audio: "audio/letter14.mp3" },
        { letter: "Н", name: "letter15", audio: "audio/letter15.mp3" },
        { letter: "О", name: "letter16", audio: "audio/letter16.mp3" },
        { letter: "П", name: "letter17", audio: "audio/letter17.mp3" },
        { letter: "Р", name: "letter18", audio: "audio/letter18.mp3" },
        { letter: "С", name: "letter19", audio: "audio/letter19.mp3" },
        { letter: "Т", name: "letter20", audio: "audio/letter20.mp3" },
        { letter: "У", name: "letter21", audio: "audio/letter21.mp3" },
        { letter: "Ф", name: "letter22", audio: "audio/letter22.mp3" },
        { letter: "Х", name: "letter23", audio: "audio/letter23.mp3" },
        { letter: "Ц", name: "letter24", audio: "audio/letter24.mp3" },
        { letter: "Ч", name: "letter25", audio: "audio/letter25.mp3" },
        { letter: "Ш", name: "letter26", audio: "audio/letter26.mp3" },
        { letter: "Щ", name: "letter27", audio: "audio/letter27.mp3" },
        { letter: "Ъ", name: "letter28", audio: "audio/letter28.mp3" },
        { letter: "Ы", name: "letter29", audio: "audio/letter29.mp3" },
        { letter: "Ь", name: "letter30", audio: "audio/letter30.mp3" },
        { letter: "Э", name: "letter31", audio: "audio/letter31.mp3" },
        { letter: "Ю", name: "letter32", audio: "audio/letter32.mp3" },
        { letter: "Я", name: "letter33", audio: "audio/letter33.mp3" },
    ];

    let correctLetter = null;
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



    function getRandomLetter() {
        return arabicLetters[Math.floor(Math.random() * arabicLetters.length)];
    }

    function getRandomOptions(correct) {
        const options = [correct];
        while (options.length < 9) {
            const random = getRandomLetter();
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
        correctLetter = getRandomLetter();
        const options = getRandomOptions(correctLetter);

        optionsContainer.innerHTML = "";
        resultBox.textContent = "";

        options.forEach(opt => {
            const btn = document.createElement("button");
            btn.textContent = opt.letter;
            btn.setAttribute("lang", "ar");  // Добавляем атрибут lang="ar" для кнопок с арабским текстом
            btn.style.fontFamily = "'Times New Roman', sans-serif"; // Применяем шрифт Times New Roman
            btn.style.fontSize = "2.5em"; // Увеличиваем размер шрифта
            btn.style.margin = "5px"; // Увеличиваем отступы между кнопками
            btn.style.padding = "5px 30px"; // Увеличиваем внутренние отступы (внутренний отступ по вертикали и горизонтали)

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

        if (selected === correctLetter) {
            resultBox.textContent = "✅ صح";
            resultBox.style.color = "green";
            handleAnswer(true);
        } else {
            resultBox.textContent = ` ${correctLetter.letter}  : خطأ. الإجابة الصحيحة`;
            resultBox.style.color = "red";
            handleAnswer(false);
        }

        

        nextButton.style.display = "inline-block"; // Показать кнопку "Дальше"
    }

    document.getElementById("play-audio").onclick = function () {
        if (correctLetter) {
            new Audio(correctLetter.audio).play();
        }
    };

    renderQuestion();
    updateScore();
};
