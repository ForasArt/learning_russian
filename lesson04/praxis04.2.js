window.onload = function () {

    const words = [
        { ru: "это", gender: "n", audio: "../audio/это.mp3" },
        { ru: "ему", gender: "m+n", audio: "../audio/ему.mp3" },
        { ru: "своей", gender: "f", audio: "../audio/своей.mp3" },
        { ru: "её", gender: "f", audio: "../audio/её.mp3" },
        { ru: "оно", gender: "n", audio: "../audio/оно.mp3" },
        { ru: "каждый", gender: "m", audio: "../audio/каждый.mp3" },
        { ru: "он", gender: "m", audio: "../audio/он.mp3" },
        { ru: "она", gender: "f", audio: "../audio/она.mp3" },
        { ru: "мой", gender: "m", audio: "../audio/мой.mp3" },
        { ru: "моя", gender: "f", audio: "../audio/моя.mp3" },
        { ru: "моё", gender: "n", audio: "../audio/моё.mp3" },
        { ru: "твой", gender: "m", audio: "../audio/твой.mp3" },
        { ru: "твоя", gender: "f", audio: "../audio/твоя.mp3" },
        { ru: "твоё", gender: "n", audio: "../audio/твоё.mp3" },
        { ru: "его", gender: "m+n", audio: "../audio/его.mp3" },
        { ru: "наш", gender: "m", audio: "../audio/наш.mp3" },
        { ru: "наша", gender: "f", audio: "../audio/наша.mp3" },
        { ru: "наше", gender: "n", audio: "../audio/наше.mp3" },
        { ru: "ваш", gender: "m", audio: "../audio/ваш.mp3" },
        { ru: "ваша", gender: "f", audio: "../audio/ваша.mp3" },
        { ru: "ваше", gender: "n", audio: "../audio/ваше.mp3" },
        { ru: "свой", gender: "m", audio: "../audio/свой.mp3" },
        { ru: "своя", gender: "f", audio: "../audio/своя.mp3" },
        { ru: "своё", gender: "n", audio: "../audio/своё.mp3" },
        { ru: "какой", gender: "m", audio: "../audio/какой.mp3" },
        { ru: "какая", gender: "f", audio: "../audio/какая.mp3" },
        { ru: "какое", gender: "n", audio: "../audio/какое.mp3" },
        { ru: "который", gender: "m", audio: "../audio/который.mp3" },
        { ru: "этот", gender: "m", audio: "../audio/этот.mp3" },
        { ru: "эта", gender: "f", audio: "../audio/эта.mp3" },
        { ru: "тот", gender: "m", audio: "../audio/тот.mp3" },
        { ru: "та", gender: "f", audio: "../audio/та.mp3" },
        { ru: "то", gender: "n", audio: "../audio/то.mp3" },
        { ru: "весь", gender: "m", audio: "../audio/весь.mp3" },
    { ru: "вся", gender: "f", audio: "../audio/вся.mp3" },
    { ru: "всё", gender: "n", audio: "../audio/всё.mp3" },
    { ru: "сам", gender: "m", audio: "../audio/сам.mp3" },
    { ru: "сама", gender: "f", audio: "../audio/сама.mp3" },
    { ru: "само", gender: "n", audio: "../audio/само.mp3" },
    
    ];

    const genders = [
        { id: "m", label: "المذكر" },
        { id: "m+n", label: "المذكر+المفرد" },
        { id: "f", label: "المؤنث" },
        { id: "n", label: "المفرد" }
    ];

    let correctWord = null;
    let hasAnswered = false;

    let correctCount = 0;
    let wrongCount = 0;

    const wordButton = document.getElementById("word-button");
    const optionsContainer = document.getElementById("options");
    const resultBox = document.getElementById("result");
    const scoreBox = document.getElementById("score");

    const nextButton = document.createElement("button");
    nextButton.textContent = "🌿 التالي";
    nextButton.style.display = "none";
    nextButton.className = "next-button";
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
        resultBox.textContent = "";
        optionsContainer.innerHTML = "";

        wordButton.textContent = correctWord.ru;
        wordButton.onclick = () => {
            new Audio(correctWord.audio).play();
        };

        genders.forEach(g => {
            const btn = document.createElement("button");
            btn.textContent = g.label;
            btn.lang = "ar";
            btn.onclick = () => checkAnswer(g.id);
            optionsContainer.appendChild(btn);
        });
    }

    function checkAnswer(selectedGender) {
        if (hasAnswered) return;
        hasAnswered = true;
    
        document
            .querySelectorAll("#options button")
            .forEach(b => b.disabled = true);
    
        const correctLabel = genders.find(g => g.id === correctWord.gender).label;
    
        if (selectedGender === correctWord.gender) {
            resultBox.textContent = "✅ صح";
            resultBox.style.color = "green";
            correctCount++;
        } else {
            resultBox.innerHTML =
                `<span dir="rtl" lang="ar">❌ خطأ. الإجابة الصحيحة: ${correctLabel}</span>`;
            resultBox.style.color = "red";
            wrongCount++;
        }
    
        updateScore();
        nextButton.style.display = "inline-block";
    }
    

    renderQuestion();
    updateScore();
};
