const sentences = [
    {"sentence": "Дети играют ... улице.", "correct": "на"},
  {"sentence": "Мы едем ... Москву.", "correct": "в"},
  {"sentence": "Она вернулась ... школы.", "correct": "из"},
  {"sentence": "Он идёт ... другом.", "correct": "с"},
  {"sentence": "Птицы летят ... юг.", "correct": "на"},
  {"sentence": "Я думаю ... летних каникулах.", "correct": "о"},
  {"sentence": "Машина остановилась ... светофора.", "correct": "у"},
  {"sentence": "Они живут ... пятом этаже.", "correct": "на"},
  {"sentence": "Подарок спрятан ... кроватью.", "correct": "под"},
  {"sentence": "Мы гуляли ... парку.", "correct": "по"},
  {"sentence": "Она вышла ... комнаты.", "correct": "из"},
  {"sentence": "Автобус едет ... городу.", "correct": "по"},
  {"sentence": "Он смотрит ... окно.", "correct": "в"},
  {"sentence": "Цветы стоят ... вазе.", "correct": "в"},
  {"sentence": "Мы идём ... кино.", "correct": "в"},
  {"sentence": "Собака спит ... доме.", "correct": "в"},
  {"sentence": "Туристы поднялись ... гору.", "correct": "на"},
  {"sentence": "Этим летом мы отдыхали ... море.", "correct": "на"},
  {"sentence": "Он спрятал ключи ... карман.", "correct": "в"},
  {"sentence": "Птицы улетели ... тёплые края.", "correct": "в"},
  {"sentence": "Автобус отъехал ... остановки.", "correct": "от"},
  {"sentence": "Они плыли ... реке.", "correct": "по"},
  {"sentence": "Кот прыгнул ... подоконник.", "correct": "на"},
  {"sentence": "Мы поднялись ... вершину горы.", "correct": "на"},
  {"sentence": "Она достала книгу ... полки.", "correct": "с"},
  {"sentence": "Он шёл ... дороге.", "correct": "по"},
  {"sentence": "Он шёл ... дороги.", "correct": "вдоль"},
  {"sentence": "Подарок лежит ... ёлкой.", "correct": "под"},
  {"sentence": "Мы едем ... вокзал.", "correct": "на"},
  {"sentence": "Она вернулась ... магазина.", "correct": "из"},
  {"sentence": "Он посмотрел ... небо.", "correct": "на"},
  {"sentence": "Дети катались ... горки.", "correct": "с"},
  {"sentence": "Он приехал ... Германии.", "correct": "из"},
  {"sentence": "Мы сидели ... тени большого дерева.", "correct": "в"},
  {"sentence": "Он положил телефон ... карман.", "correct": "в"},
  {"sentence": "Картина висит ... стене.", "correct": "на"},
  {"sentence": "Она вышла ... автобуса.", "correct": "из"},
  {"sentence": "Он работает ... крупной компании.", "correct": "в"},
  {"sentence": "Они поехали ... дачу на выходные.", "correct": "на"},
  {"sentence": "Он рассказал ... своём путешествии.", "correct": "о"},
  {"sentence": "Она пошла ... врачу.", "correct": "к"},
  {"sentence": "Он лежит ... диване.", "correct": "на"},
  {"sentence": "Он пришёл ... пять минут после начала встречи.", "correct": "через"},
  {"sentence": "Мы встретимся ... субботу вечером.", "correct": "в"},
  {"sentence": "Она привезла ... отпуска много сувениров.", "correct": "из"},
  {"sentence": "Подарок предназначен ... тебя.", "correct": "для"},
  {"sentence": "Они живут ... одной квартире уже три года.", "correct": "в"},
  {"sentence": "Мы поехали отдыхать ... море.", "correct": "на"},
  {"sentence": "Он опоздал ... пробки на дороге.", "correct": "из‑за"},
  {"sentence": "Книга лежит ... верхней полке.", "correct": "на"},
  {"sentence": "Мы спрятались ... дождя под большим деревом.", "correct": "от"},
  {"sentence": "Он вернулся ... прогулки.", "correct": "с"},
  {"sentence": "Птицы летят ... юг.", "correct": "на"},
  {"sentence": "Она поставила цветы ... вазу.", "correct": "в"},
  {"sentence": "Мы говорили ... новом фильме.", "correct": "о"},
  {"sentence": "Дети катаются ... коньках.", "correct": "на"},
  {"sentence": "Мы поднялись ... лестнице на третий этаж.", "correct": "по"},
  {"sentence": "Она купила шарф ... шерсти.", "correct": "из"},
  {"sentence": "Поезд отправляется ... Москвы в 8 утра.", "correct": "из"},
  {"sentence": "Она идёт ... магазин.", "correct": "в"},
  {"sentence": "Картина висит ... диваном.", "correct": "над"},
  {"sentence": "Кот запрыгнул ... стол.", "correct": "на"},
  {"sentence": "Кот перепрыгнул ... коробку.", "correct": "через"},
  {"sentence": "Кот вылез ... коробки.", "correct": "из"},
  





    

   
    
];


window.onload = function () {

    let correctSentence = null;
    let hasAnswered = false;
    let correctCount = 0;
    let wrongCount = 0;

    const sentenceBox = document.getElementById("sentence"); // Блок для предложения
    const inputField = document.getElementById("user-input"); // Поле ввода
    const letterResult = document.getElementById("letter-result"); // Подсветка букв
    const resultBox = document.getElementById("result"); // Текст ошибки/успеха
    const scoreBox = document.getElementById("score"); // Счёт

    // Кнопка "Следующий"
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

    function getRandomSentence() {
        return sentences[Math.floor(Math.random() * sentences.length)];
    }

    function renderQuestion() {
        correctSentence = getRandomSentence();
        hasAnswered = false;

        sentenceBox.textContent = correctSentence.sentence;
        inputField.value = "";
        inputField.disabled = false;
        letterResult.innerHTML = "";
        resultBox.textContent = "";

        inputField.focus();
    }

    function checkAnswer() {
        if (hasAnswered) return;
        hasAnswered = true;

        const userWord = inputField.value.trim().toLowerCase();
        const correct = correctSentence.correct.toLowerCase();

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
                ❌ خطأ. الكلمة الصحيحة: ${correctSentence.correct}
                </span>`;
            resultBox.style.color = "red";
            wrongCount++;
        }

        inputField.disabled = true;
        nextButton.style.display = "inline-block";
        updateScore();
    }

    inputField.addEventListener("keydown", function (e) {
        if (e.key === "Enter" && inputField.value.trim() !== "") {
            checkAnswer();
        }
    });

    renderQuestion();
    updateScore();
};
