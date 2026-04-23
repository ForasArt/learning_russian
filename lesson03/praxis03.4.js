const sentences = [
    { 
        sentence: "Я гуляю с (собака).", 
        correct: "собакой" 
    },
    { 
        sentence: "У меня есть (книга).", 
        correct: "книга" 
    },
    { 
        sentence: "Он играет с (мяч).", 
        correct: "мячом" 
    },
    { 
        sentence: "Мы идём к (школа).", 
        correct: "школе" 
    },

    { 
        sentence: "Мы идём в (школа).", 
        correct: "школу" 
    },

    {
        "sentence": "Я пишу письмо (мама).",
        "correct": "маме"
    },
    {
        "sentence": "Мы идём к (друзья).",
        "correct": "друзьям"
    },
    {
        "sentence": "Она рассказывает о (работа).",
        "correct": "работе"
    },
    {
        "sentence": "Студенты учатся в (университет).",
        "correct": "университете"
    },
    {
        "sentence": "Я живу с (родители).",
        "correct": "родителями"
    },
    {
        "sentence": "Он говорит о (дочь).",
        "correct": "дочери"
    },
    {
        "sentence": "Мы работаем в (библиотека).",
        "correct": "библиотеке"
    },
    {
        "sentence": "Она звонит (сестра).",
        "correct": "сестре"
    },
    {
        "sentence": "Они играют с (дети).",
        "correct": "детьми"
    },

  
        {
            "sentence": "Я разговариваю с (друг).",
            "correct": "другом"
        },
        {
            "sentence": "Она рисует (картина).",
            "correct": "картину"
        },
        {
            "sentence": "Он смотрит на (небо).",
            "correct": "небо"
        },
        {
            "sentence": "Я читаю (газета).",
            "correct": "газету"
        },
        {
            "sentence": "Они живут в (деревня).",
            "correct": "деревне"
        },
        {
            "sentence": "Мы едем к (бабушка).",
            "correct": "бабушке"
        },
        {
            "sentence": "Я работаю в (офис).",
            "correct": "офисе"
        },
        {
            "sentence": "Он идёт в (магазин).",
            "correct": "магазин"
        },
   
        {
            "sentence": "Я думаю о (друг).",
            "correct": "друге"
        },

        {
            "sentence": "Мы говорим с (учитель).",
            "correct": "учителем"
        },

        {
            "sentence": "Я помогаю (мама).",
            "correct": "маме"
        },

        {
            "sentence": "Они едут к (родственники).",
            "correct": "родственникам"
        },

        {
            "sentence": "Она работает в (больница).",
            "correct": "больнице"
        },

        {
            "sentence": "Я слушаю (музыка).",
            "correct": "музыку"
        },

        {
            "sentence": "Он играет на (гитара).",
            "correct": "гитаре"
        },

        {
            "sentence": "Мы гуляем по (парк).",
            "correct": "парку"
        },

        {
            "sentence": "Она читает (учебник).",
            "correct": "учебник"
        },
    
        {
            "sentence": "Я позвоню (отец).",
            "correct": "отцу"
        },

        {
            "sentence": "Они учатся в (школа).",
            "correct": "школе"
        },

        {
            "sentence": "Он смотрит (фильм).",
            "correct": "фильм"
        },

        {
            "sentence": "Я мечтаю о (поездка) в Багдад.",
            "correct": "поездке"
        },

        {
            "sentence": "Я буду в Дамаске на следующей (неделя).",
            "correct": "неделе"
        },

        {
            "sentence": "Он знает несколько (язык).",
            "correct": "языков"
        },

        {
            "sentence": "Там было много (люди).",
            "correct": "людей"
        },

        {
            "sentence": "У меня нет (братья).",
            "correct": "братьев"
        },

        {
            "sentence": "Я жду своего (брат).",
            "correct": "брата"
        },

        {
            "sentence": "Я хочу покататься на (верблюд).",
            "correct": "верблюде"
        },
        {
            "sentence": "На столе лежит (книга).",
            "correct": "книга"
          },
          {
            "sentence": "(Дети) играют во дворе.",
            "correct": "Дети"
          },
          {
            "sentence": "Это мой любимый (фильм).",
            "correct": "фильм"
          },

          {
            "sentence": "Над лесом летит (самолёт).",
            "correct": "самолёт"
          },
          
          {
            "sentence": "В клетке сидит (попугай).",
            "correct": "попугай"
          },
          {
            "sentence": "(Облака) плывут по небу.",
            "correct": "Облака"
          },
        
          {
            "sentence": "У меня нет (ручка).",
            "correct": "ручки"
          },
          {
            "sentence": "Мы купили несколько (яблоки).",
            "correct": "яблок"
          },
          {
            "sentence": "В вазе не осталось (конфеты).",
            "correct": "конфет"
          },
          {
            "sentence": "Он боится (собака).",
            "correct": "собаки"
          },

          {
            "sentence": "Она не получила ни одного (сообщение).",
            "correct": "псообщения"
          },
          {
            "sentence": "Из (окно) дует холодный ветер.",
            "correct": "окна"
          },
          {
            "sentence": "Несколько (ученики) не пришли на урок.",
            "correct": "учеников"
          },
          {
            "sentence": "Не видно ни одной (звезда) на небе.",
            "correct": "звезды"
          },

          {
            "sentence": "После (дождь) на дорогах лужи.",
            "correct": "дождя"
          },
          {
            "sentence": "Нет (время) объяснять всё подробно.",
            "correct": "времени"
          },
          {
            "sentence": "Много (работа) накопилось за неделю.",
            "correct": "работы"
          },

          {
            "sentence": "Здесь нет ни капли (вода).",
            "correct": "воды"
          },

          {
            "sentence": "В магазине не было (хлеб).",
            "correct": "хлеба"
          },

          {
            "sentence": "Она устала от твоих (вопросы).",
            "correct": "вопросов"
          },

          {
            "sentence": "Он пришёл без (зонт).",
            "correct": "зонта"
          },

          {
            "sentence": "В этой книге не хватает (страница).",
            "correct": "страницы"
          },

          {
            "sentence": "От (дом) до школы десять минут пешком.",
            "correct": "дома"
          },

          {
            "sentence": "Без твоей (помощь) мне не справиться.",
            "correct": "помощи"
          },


          {
            "sentence": "В составе (салат) есть грибы.",
            "correct": "салата"
          },

          {
            "sentence": "Он не дождался (автобус) и пошёл пешком.",
            "correct": "автобуса"
          },

          {
            "sentence": "Он помог (сосед).",
            "correct": "соседу"
          },
          {
            "sentence": "Мы подошли к (остановка).",
            "correct": "остановке"
          },
          {
            "sentence": "Ребёнок улыбается (папа).",
            "correct": "папе"
          },
          {
            "sentence": "Она написала письмо (учитель).",
            "correct": "учителю"
          },

          {
            "sentence": "Мы идём навстречу (друзья).",
            "correct": "друзьям"
          },
        
          {
            "sentence": "Прислушайся к (совет) учителя.",
            "correct": "совету"
          },
          {
            "sentence": "Мы радуемся (весна).",
            "correct": "весне"
          },
          {
            "sentence": "По дороге к (школа) мы встретили соседа.",
            "correct": "школе"
          },
          {
            "sentence": "Она подарила цветы (бабушка).",
            "correct": "бабушке"
          },

          {
            "sentence": "Подойди к (окно) и посмотри на улицу.",
            "correct": "окну"
          },

          {
            "sentence": "Мы готовимся к (праздник).",
            "correct": "празднику"
          },

          {
            "sentence": "Он читает (книга) каждый вечер.",
            "correct": "книгу"
          },
          {
            "sentence": "Мы встретили (друзья) на площади.",
            "correct": "друзей"
          },
          {
            "sentence": "Она купила (платье) на распродаже.",
            "correct": "платье"
          },

          {
            "sentence": "Я слушаю (музыка) в наушниках.",
            "correct": "музыку"
          },
          {
            "sentence": "Он ищет (ключи) уже полчаса.",
            "correct": "ключи"
          },
          {
            "sentence": "Мы ждём (автобус) на остановке.",
            "correct": "автобус"
          },
          {
            "sentence": "Мама зовёт (дети) домой.",
            "correct": "детей"
          },
          {
            "sentence": "Я купил (хлеб) в магазине.",
            "correct": "хлеб"
          },

          {
            "sentence": "Он несёт (сумка).",
            "correct": "сумку"
          },
          {
            "sentence": "Я встретил (сосед) во дворе.",
            "correct": "соседа"
          },
          {
            "sentence": "Дети рисуют (солнце).",
            "correct": "солнце"
          },
          {
            "sentence": "Она надевает (шапка) перед выходом.",
            "correct": "шапку"
          },

          {
            "sentence": "Он ловит (рыба).",
            "correct": "рыбу"
          },
          {
            "sentence": "Я поздравляю (родители) с праздником.",
            "correct": "родителей"
          },
          {
            "sentence": "Она ведёт (ребёнок) за руку.",
            "correct": "ребёнка"
          },

          {
            "sentence": "Она пишет письмо (ручка).",
            "correct": "ручкой"
          },

          {
            "sentence": "Мы гордимся (достижения) нашей команды.",
            "correct": "достижениями"
          },

          {
            "sentence": "Он рисует (карандаш).",
            "correct": "карандашом"
          },

          {
            "sentence": "Она укрылась (одеяло).",
            "correct": "одеялом"
          },

          {
            "sentence": "Он доволен (результат) своей работы.",
            "correct": "результатом"
          },

          {
            "sentence": "Я встречаюсь с (друзья) по выходным.",
            "correct": "друзьями"
          },

          {
            "sentence": "Он разговаривает с (учитель).",
            "correct": "учителем"
          },

          {
            "sentence": "Он открыл своим дверь (ключ).",
            "correct": "ключом"
          },

          {
            "sentence": "Мы плывём на (лодка) по реке.",
            "correct": "лодке"
          },

          {
            "sentence": "Он ушёл на (работа).",
            "correct": "работу"
          },

          {
            "sentence": "Я мечтаю о (путешествие) на море.",
            "correct": "путешествии"
          },

          {
            "sentence": "Расскажи мне о своём родном (город).",
            "correct": "городе"
          },

          {
            "sentence": "Она думает об (экзамен).",
            "correct": "экзамене"
          },

          {
            "sentence": "Он готовится к (экзамен).",
            "correct": "экзамену"
          },

          {
            "sentence": "Мы думаем о (будущее) нашей страны.",
            "correct": "будущем"
          },

          {
            "sentence": "Она говорила о своём (отец).",
            "correct": "отце"
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
