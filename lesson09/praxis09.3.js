const sentences = [
    { 
        sentence: "Вчера Лена и Катя хотели пойти в парк, чтобы покататься на велосипедах. Неожиданно пошёл дождь и планы пришлось отменить.Тогда девочки решили провести вечер за просмотром нового фильма. Что делали Лена и Катя вчера вечером? .", 
        correct: "смотрели фильм" 
    },
    { 
      sentence: "Анна планировала в среду после работы пойти в ресторан, но он оказался закрыт. Вместо этого девушка пошла в парк и долго гуляла там. Где была Анна в среду после работы?", 
      correct: "в парке" 
  },

  { 
    sentence: "В субботу вечером Иван собирался пойти в кино на новый фильм, но все билеты оказались распроданы. Тогда он решил поиграть в футбол на стадионе с друзьями. Где Иван был в субботу вечером?", 
    correct: "на стадионе" 
},

{ 
  sentence: "После получения диплома медицинского университета, Али планировал вернуться в Багдад, но передумал и начал искать работу в Москве. Куда отменил поездку Али?", 
  correct: "в Багдад" 
},

{ 
  sentence: "Андрей планировал летом поехать в Сочи, но в последний момент решил остаться дома и провести отпуск с семьёй в Москве. В каком городе живет Андрей?", 
  correct: "в Москве" 
},

{ 
  sentence: "Маша любит животных и поэтому у нее есть три попугая, две кошки и собака. Сколько животных у Маши?", 
  correct: "6" 
},

{ 
  sentence: "Ахмед женился в 2021 году на Кате, а через два года взял в жёны Амани. Законодательство какой страны нарушил Ахмед?", 
  correct: "России" 
},

{ 
  sentence: "Хамдан живет в России уже семь лет, из них последние два года  - в Москве, а до этого жил во Владивостоке. Сколько лет Хамдан жил во Владивостоке?", 
  correct: "5" 
},

{ 
  sentence: "Наташа договорилась пойти в парк вместе с Али, Машей и Ахмедом. Парни пришли вовремя, а девушки опоздали на полчаса, из-за чего Али обиделся и ушёл. Кто из ребят дождался девушек?", 
  correct: "Ахмед" 
},

{ 
  sentence: "Бабушка сварила суп и оставила его остывать на столе. Кот запрыгнул на стул и перевернул кастрюлю. Какое блюдо приготовила бабушка?", 
  correct: "суп" 
},

{ 
  sentence: "В следующем году Даша окончит медицинский университет и пойдёт работать в больницу. На кого учится Даша?", 
  correct: "на врача" 
},

{ 
  sentence: "Али учится на ветеринара и с нетерпением ждёт, когда начнёт работать. Кого будет лечить Али?", 
  correct: "животных" 
},

{ 
  sentence: "У меня есть четыре кошки и два попугая. Одного из них я собираюсь подарить Ахмеду. Какой подарок получит Ахмед?", 
  correct: "попугая" 
},

{ 
  sentence: "Учитель попросил не опаздывать завтра на занятия. Ахмед так и сделал, а Али, как всегда, проспал. Кто из парней пришёл на занятия вовремя?", 
  correct: "Ахмед" 
},

{ 
  sentence: "Поезд отправляется через полчаса. Али будет на вокзале через десять минут, а Ахмед уже приехал. Кто опоздал на поезд?", 
  correct: "никто" 
},

{ 
  sentence: "В магазине было два вида яблок: красные по 80 рублей за килограмм и зелёные по 100. Анна купила по килограмму тех и других. Сколько стоили яблоки, которые купила Анна?", 
  correct: "180 рублей" 
},

{ 
  sentence: "В библиотеке Анна искала книгу о животных. Библиотекарь предложил ей три книги: про птиц, про рыб и про кошек. Анна выбрала книгу про кошек, потому что любит этих животных. Сколько книг взяла Анна в библиотеке?", 
  correct: "1" 
},

{ 
  sentence: "У Маши есть два платья: зелёное и синее. Катя попросила одолжить ей зелёное. Маша отказалась, потому что пойдет в нем вечером в театр. В каком платье Маша пойдёт в театр?", 
  correct: "в зелёном" 
},

{ 
  sentence: "Через неделю Маша выходит замуж за Ахмеда. На праздник приглашены все их друзья, кроме Али. Кого не будет на свадьбе?", 
  correct: "Али" 
},


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
