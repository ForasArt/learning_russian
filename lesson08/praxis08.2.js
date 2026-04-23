const sentences = [
    { sentence: "Дети играют ... улице.", correct: "на" },
    { sentence: "Мы едем ... Москву.", correct: "в" },
    { sentence: "Поезд отправляется ... Петербург.", correct: "в" },
{ sentence: "Туристы возвращаются ... экскурсии.", correct: "с" },
{ sentence: "Он идёт ... работу.", correct: "на" },
{ sentence: "Книга лежит ... столе.", correct: "на" },
{ sentence: "Кот спрятался ... диваном.", correct: "под" },
{ sentence: "Птицы летают ... лесом.", correct: "над" },
{ sentence: "Цветы растут ... клумбе.", correct: "на" },
{ sentence: "Ключи остались ... кармане.", correct: "в" },
{ sentence: "Они вернулись ... магазина.", correct: "из" },
{ sentence: "Письмо пришло ... Германии.", correct: "из" },
{ sentence: "Я только что ... тренировки.", correct: "с" },
{ sentence: "Дети играют ... улице.", correct: "на" },
{ sentence: "Мы едем ... Москву.", correct: "в" },
{ sentence: "Поезд отправляется ... Петербург.", correct: "в" },
{ sentence: "Туристы возвращаются ... экскурсии.", correct: "с" },
{ sentence: "Он идёт ... работу.", correct: "на" },
{ sentence: "Книга лежит ... столе.", correct: "на" },
{ sentence: "Кот спрятался ... диваном.", correct: "под" },
{ sentence: "Ключи остались ... кармане.", correct: "в" },
{ sentence: "Они вернулись ... магазина.", correct: "из" },
{ sentence: "Письмо пришло ... Германии.", correct: "из" },
{ sentence: "Я только что ... тренировки.", correct: "с" },
{ sentence: "Переходи дорогу ... зебре.", correct: "по" },
{ sentence: "Мы шли ... парку.", correct: "по" },


];

const options = ["в", "на", "через", "с", "над", "для", "до", "из", "под"];

window.onload = function () {

    let currentSentence = null;
    let hasAnswered = false;
    let correctCount = 0;
    let wrongCount = 0;

    const sentenceBox = document.getElementById("sentence");
    const resultBox = document.getElementById("result");
    const scoreBox = document.getElementById("score");
    const optionsBox = document.getElementById("options");

    // Кнопка "Следующий"
    const nextButton = document.createElement("button");
    nextButton.textContent = "🌿 التالي";
    nextButton.style.display = "none";
    nextButton.className = "next-button";

    nextButton.onclick = () => {
        renderQuestion();
    };

    document.getElementById("next-button-container").appendChild(nextButton);

    function updateScore() {
        scoreBox.textContent = `✅: ${correctCount} | ❌: ${wrongCount}`;
    }

    function getRandomSentence() {
        return sentences[Math.floor(Math.random() * sentences.length)];
    }

    function renderQuestion() {
        optionsBox.innerHTML = "";
        hasAnswered = false;
        resultBox.textContent = "";
        nextButton.style.display = "none";

        currentSentence = getRandomSentence();
        sentenceBox.textContent = currentSentence.sentence;

        options.forEach(option => {
            const btn = document.createElement("button");
            btn.textContent = option;
            btn.lang = "ru";
            btn.className = "option-button";

            btn.onclick = () => checkAnswer(option, btn);

            optionsBox.appendChild(btn);
        });
    }

    function checkAnswer(selected, clickedButton) {
        if (hasAnswered) return;
        hasAnswered = true;

        const correct = currentSentence.correct;
        const buttons = document.querySelectorAll("#options button");

        buttons.forEach(button => {
            button.disabled = true;

            // правильный всегда зелёный
            if (button.textContent === correct) {
                button.style.backgroundColor = '#E0F8F7';
            }

            // неправильный выбранный — красный
            if (button === clickedButton && selected !== correct) {
                button.style.backgroundColor = '#FFC0CB';
            }
        });

        if (selected === correct) {
            resultBox.textContent = "✅ صح";
            resultBox.style.color = "green";
            correctCount++;
        } else {
            resultBox.textContent = "❌ خطأ";
            resultBox.style.color = "red";
            wrongCount++;
        }

        nextButton.style.display = "inline-block";
        updateScore();
    }

    renderQuestion();
    updateScore();
};