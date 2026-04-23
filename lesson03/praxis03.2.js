window.onload = function () {

    // Слова с формой единственного и множественного числа
    const words = [
       
        { ru: "минута", plural: "минуты", audio: "../audio/минута.mp3" },
        { ru: "час", plural: "часы", audio: "../audio/час.mp3" },
        { ru: "день", plural: "дни", audio: "../audio/день.mp3" },
        { ru: "неделя", plural: "недели", audio: "../audio/неделя.mp3" },
        { ru: "месяц", plural: "месяцы", audio: "../audio/месяц.mp3" },
        { ru: "год", plural: "годы", audio: "../audio/год.mp3" },


        { "ru": "буква", "plural": "буквы", "audio": "../audio/буква.mp3" },
        { "ru": "язык", "plural": "языки", "audio": "../audio/язык.mp3" },
        { "ru": "звук", "plural": "звуки", "audio": "../audio/звук.mp3" },
        
        { "ru": "человек", "plural": "люди", "audio": "../audio/человек.mp3" },
        { "ru": "мужчина", "plural": "мужчины", "audio": "../audio/мужчина.mp3" },
        { "ru": "женщина", "plural": "женщины", "audio": "../audio/женщина.mp3" },
        { "ru": "жизнь", "plural": "жизни", "audio": "../audio/жизнь.mp3" },
        { "ru": "смерть", "plural": "смерти", "audio": "../audio/смерть.mp3" },
        { "ru": "папа", "plural": "папы", "audio": "../audio/папа.mp3" },
        { "ru": "мама", "plural": "мамы", "audio": "../audio/мама.mp3" },
        { "ru": "отец", "plural": "отцы", "audio": "../audio/отец.mp3" },
        { "ru": "мать", "plural": "матери", "audio": "../audio/мать.mp3" },
        { "ru": "ребёнок", "plural": "дети", "audio": "../audio/ребёнок.mp3" },
        { "ru": "младенец", "plural": "младенцы", "audio": "../audio/младенец.mp3" },
        { "ru": "потомство", "plural": "потомства", "audio": "../audio/потомство.mp3" },
        { "ru": "сын", "plural": "сыновья", "audio": "../audio/сын.mp3" },
        { "ru": "дочь", "plural": "дочери", "audio": "../audio/дочь.mp3" },
        { "ru": "пасынок", "plural": "пасынки", "audio": "../audio/пасынок.mp3" },
        { "ru": "падчерица", "plural": "падчерицы", "audio": "../audio/падчерица.mp3" },
        { "ru": "брат", "plural": "братья", "audio": "../audio/брат.mp3" },
        { "ru": "близнец", "plural": "близнецы", "audio": "../audio/близнец.mp3" },
        { "ru": "сестра", "plural": "сёстры", "audio": "../audio/сестра.mp3" },
        { "ru": "дедушка", "plural": "дедушки", "audio": "../audio/дедушка.mp3" },
        { "ru": "бабушка", "plural": "бабушки", "audio": "../audio/бабушка.mp3" },
        { "ru": "внук", "plural": "внуки", "audio": "../audio/внук.mp3" },
        { "ru": "внучка", "plural": "внучки", "audio": "../audio/внучка.mp3" },
        { "ru": "дядя", "plural": "дяди", "audio": "../audio/дядя.mp3" },
        { "ru": "тётя", "plural": "тёти", "audio": "../audio/тётя.mp3" },
        { "ru": "отчим", "plural": "отчимы", "audio": "../audio/отчим.mp3" },
        { "ru": "мачеха", "plural": "мачехи", "audio": "../audio/мачеха.mp3" },
        { "ru": "родственник", "plural": "родственники", "audio": "../audio/родственник.mp3" },
        { "ru": "родственница", "plural": "родственницы", "audio": "../audio/родственница.mp3" },
        { "ru": "семья", "plural": "семьи", "audio": "../audio/семья.mp3" },
        { "ru": "имя", "plural": "имена", "audio": "../audio/имя.mp3" },
        { "ru": "отчество", "plural": "отчества", "audio": "../audio/отчество.mp3" },
        { "ru": "фамилия", "plural": "фамилии", "audio": "../audio/фамилия.mp3" },
        { "ru": "помолвка", "plural": "помолвки", "audio": "../audio/помолвка.mp3" },
        { "ru": "свадьба", "plural": "свадьбы", "audio": "../audio/свадьба.mp3" },
        { "ru": "жених", "plural": "женихи", "audio": "../audio/жених.mp3" },
        { "ru": "невеста", "plural": "невесты", "audio": "../audio/невеста.mp3" },
        { "ru": "брак", "plural": "браки", "audio": "../audio/брак.mp3" },
        { "ru": "муж", "plural": "мужья", "audio": "../audio/муж.mp3" },
        { "ru": "жена", "plural": "жёны", "audio": "../audio/жена.mp3" },
        { "ru": "зять", "plural": "зятья", "audio": "../audio/зять.mp3" },
        { "ru": "невестка", "plural": "невестки", "audio": "../audio/невестка.mp3" },
        { "ru": "свёкор", "plural": "свёкры", "audio": "../audio/свёкор.mp3" },
        { "ru": "тесть", "plural": "тести", "audio": "../audio/тесть.mp3" },
        { "ru": "свекровь", "plural": "свекрови", "audio": "../audio/свекровь.mp3" },
        { "ru": "тёща", "plural": "тёщи", "audio": "../audio/тёща.mp3" },
        { "ru": "деверь", "plural": "девери", "audio": "../audio/деверь.mp3" },
        { "ru": "развод", "plural": "разводы", "audio": "../audio/развод.mp3" },
        { "ru": "кладбище", "plural": "кладбища", "audio": "../audio/кладбище.mp3" },
        { "ru": "могила", "plural": "могилы", "audio": "../audio/могила.mp3" },
        { "ru": "гроб", "plural": "гробы", "audio": "../audio/гроб.mp3" },
        { "ru": "вдовец", "plural": "вдовцы", "audio": "../audio/вдовец.mp3" },
        { "ru": "вдова", "plural": "вдовы", "audio": "../audio/вдова.mp3" }, 


        { "ru": "тело", "plural": "тела", "audio": "../audio/тело.mp3" },
{ "ru": "голова", "plural": "головы", "audio": "../audio/голова.mp3" },
{ "ru": "лицо", "plural": "лица", "audio": "../audio/лицо.mp3" },
{ "ru": "лоб", "plural": "лбы", "audio": "../audio/лоб.mp3" },
{ "ru": "бровь", "plural": "брови", "audio": "../audio/бровь.mp3" },
{ "ru": "веко", "plural": "веки", "audio": "../audio/веко.mp3" },
{ "ru": "глаз", "plural": "глаза", "audio": "../audio/глаз.mp3" },
{ "ru": "зрачок", "plural": "зрачки", "audio": "../audio/зрачок.mp3" },
{ "ru": "щека", "plural": "щёки", "audio": "../audio/щека.mp3" },
{ "ru": "нос", "plural": "носы", "audio": "../audio/нос.mp3" },
{ "ru": "ухо", "plural": "уши", "audio": "../audio/ухо.mp3" },
{ "ru": "рот", "plural": "рты", "audio": "../audio/рот.mp3" },
{ "ru": "губа", "plural": "губы", "audio": "../audio/губа.mp3" },
{ "ru": "десна", "plural": "дёсны", "audio": "../audio/десна.mp3" },
{ "ru": "зуб", "plural": "зубы", "audio": "../audio/зуб.mp3" },
{ "ru": "борода", "plural": "бороды", "audio": "../audio/борода.mp3" },
{ "ru": "шея", "plural": "шеи", "audio": "../audio/шея.mp3" },
{ "ru": "голос", "plural": "голоса", "audio": "../audio/голос.mp3" },
{ "ru": "плечо", "plural": "плечи", "audio": "../audio/плечо.mp3" },
{ "ru": "рука", "plural": "руки", "audio": "../audio/рука.mp3" },
{ "ru": "локоть", "plural": "локти", "audio": "../audio/локоть.mp3" },
{ "ru": "запястье", "plural": "запястья", "audio": "../audio/запястье.mp3" },
{ "ru": "ладонь", "plural": "ладони", "audio": "../audio/ладонь.mp3" },
{ "ru": "кулак", "plural": "кулаки", "audio": "../audio/кулак.mp3" },
{ "ru": "палец", "plural": "пальцы", "audio": "../audio/палец.mp3" },
{ "ru": "ноготь", "plural": "ногти", "audio": "../audio/ноготь.mp3" },
{ "ru": "спина", "plural": "спины", "audio": "../audio/спина.mp3" },
{ "ru": "бедро", "plural": "бёдра", "audio": "../audio/бедро.mp3" },
{ "ru": "нога", "plural": "ноги", "audio": "../audio/нога.mp3" },
{ "ru": "колено", "plural": "колени", "audio": "../audio/колено.mp3" },
{ "ru": "лодыжка", "plural": "лодыжки", "audio": "../audio/лодыжка.mp3" },
{ "ru": "пятка", "plural": "пятки", "audio": "../audio/пятка.mp3" },
{ "ru": "кость", "plural": "кости", "audio": "../audio/кость.mp3" },
{ "ru": "ребро", "plural": "рёбра", "audio": "../audio/ребро.mp3" },
{ "ru": "сердце", "plural": "сердца", "audio": "../audio/сердце.mp3" },
{ "ru": "желудок", "plural": "желудки", "audio": "../audio/желудок.mp3" },
{ "ru": "болезнь", "plural": "болезни", "audio": "../audio/болезнь.mp3" },
{ "ru": "боль", "plural": "боли", "audio": "../audio/боль.mp3" },
{ "ru": "рана", "plural": "раны", "audio": "../audio/рана.mp3" },
{ "ru": "перелом", "plural": "переломы", "audio": "../audio/перелом.mp3" },
{ "ru": "лекарство", "plural": "лекарства", "audio": "../audio/лекарство.mp3" },

{ "ru": "шапка", "plural": "шапки", "audio": "../audio/шапка.mp3" },
{ "ru": "рубашка", "plural": "рубашки", "audio": "../audio/рубашка.mp3" },
{ "ru": "пиджак", "plural": "пиджаки", "audio": "../audio/пиджак.mp3" },
{ "ru": "костюм", "plural": "костюмы", "audio": "../audio/костюм.mp3" },
{ "ru": "форма", "plural": "формы", "audio": "../audio/форма.mp3" },
{ "ru": "халат", "plural": "халаты", "audio": "../audio/халат.mp3" },
{ "ru": "платье", "plural": "платья", "audio": "../audio/платье.mp3" },
{ "ru": "ремень", "plural": "ремни", "audio": "../audio/ремень.mp3" },
{ "ru": "шуба", "plural": "шубы", "audio": "../audio/шуба.mp3" },
{ "ru": "обувь", "plural": "обуви", "audio": "../audio/обувь.mp3" },
{ "ru": "пуговица", "plural": "пуговицы", "audio": "../audio/пуговица.mp3" },
{ "ru": "карман", "plural": "карманы", "audio": "../audio/карман.mp3" },
{ "ru": "ткань", "plural": "ткани", "audio": "../audio/ткань.mp3" },
{ "ru": "шёлк", "plural": "шелка", "audio": "../audio/шёлк.mp3" },

{ "ru": "дом", "plural": "дома", "audio": "../audio/дом.mp3" },
{ "ru": "дворец", "plural": "дворцы", "audio": "../audio/дворец.mp3" },
{ "ru": "шатёр", "plural": "шатры", "audio": "../audio/шатёр.mp3" },
{ "ru": "квартира", "plural": "квартиры", "audio": "../audio/квартира.mp3" },
{ "ru": "стена", "plural": "стены", "audio": "../audio/стена.mp3" },
{ "ru": "дверь", "plural": "двери", "audio": "../audio/дверь.mp3" },
{ "ru": "окно", "plural": "окна", "audio": "../audio/окно.mp3" },
{ "ru": "пол", "plural": "полы", "audio": "../audio/пол.mp3" },
{ "ru": "потолок", "plural": "потолки", "audio": "../audio/потолок.mp3" },
{ "ru": "крыша", "plural": "крыши", "audio": "../audio/крыша.mp3" },
{ "ru": "подвал", "plural": "подвалы", "audio": "../audio/подвал.mp3" },
{ "ru": "этаж", "plural": "этажи", "audio": "../audio/этаж.mp3" },
{ "ru": "лестница", "plural": "лестницы", "audio": "../audio/лестница.mp3" },
{ "ru": "замок", "plural": "замки", "audio": "../audio/замок.mp3" },
{ "ru": "ключ", "plural": "ключи", "audio": "../audio/ключ.mp3" },
{ "ru": "гараж", "plural": "гаражи", "audio": "../audio/гараж.mp3" },
{ "ru": "комната", "plural": "комнаты", "audio": "../audio/комната.mp3" },
{ "ru": "кухня", "plural": "кухни", "audio": "../audio/кухня.mp3" },
{ "ru": "спальня", "plural": "спальни", "audio": "../audio/спальня.mp3" },
{ "ru": "библиотека", "plural": "библиотеки", "audio": "../audio/библиотека.mp3" },
{ "ru": "склад", "plural": "склады", "audio": "../audio/склад.mp3" },
{ "ru": "стол", "plural": "столы", "audio": "../audio/стол.mp3" },
{ "ru": "стул", "plural": "стулья", "audio": "../audio/стул.mp3" },
{ "ru": "шкаф", "plural": "шкафы", "audio": "../audio/шкаф.mp3" },
{ "ru": "полка", "plural": "полки", "audio": "../audio/полка.mp3" },
{ "ru": "кровать", "plural": "кровати", "audio": "../audio/кровать.mp3" },
{ "ru": "диван", "plural": "диваны", "audio": "../audio/диван.mp3" },
{ "ru": "кресло", "plural": "кресла", "audio": "../audio/кресло.mp3" },
{ "ru": "вешалка", "plural": "вешалки", "audio": "../audio/вешалка.mp3" },
{ "ru": "лампа", "plural": "лампы", "audio": "../audio/лампа.mp3" },
{ "ru": "зеркало", "plural": "зеркала", "audio": "../audio/зеркало.mp3" },
{ "ru": "расчёска", "plural": "расчёски", "audio": "../audio/расчёска.mp3" },
{ "ru": "бритва", "plural": "бритвы", "audio": "../audio/бритва.mp3" },
{ "ru": "шампунь", "plural": "шампуни", "audio": "../audio/шампунь.mp3" },
{ "ru": "одеяло", "plural": "одеяла", "audio": "../audio/одеяло.mp3" },
{ "ru": "простыня", "plural": "простыни", "audio": "../audio/простыня.mp3" },
{ "ru": "подушка", "plural": " подушки", "audio": "../audio/подушка.mp3" },
{ "ru": "полотенце", "plural": "полотенца", "audio": "../audio/полотенце.mp3" },
{ "ru": "занавеска", "plural": "занавески", "audio": "../audio/занавеска.mp3" },
{ "ru": "ковёр", "plural": "ковры", "audio": "../audio/ковёр.mp3" },
{ "ru": "зонт", "plural": "зонты", "audio": "../audio/зонт.mp3" },
{ "ru": "кастрюля", "plural": "кастрюли", "audio": "../audio/кастрюля.mp3" },
{ "ru": "сковорода", "plural": "сковороды", "audio": "../audio/сковорода.mp3" },
{ "ru": "миска", "plural": "миски", "audio": "../audio/миска.mp3" },
{ "ru": "тарелка", "plural": "тарелки", "audio": "../audio/тарелка.mp3" },
{ "ru": "ложка", "plural": "ложки", "audio": "../audio/ложка.mp3" },
{ "ru": "вилка", "plural": "вилки", "audio": "../audio/вилка.mp3" },
{ "ru": "нож", "plural": "ножи", "audio": "../audio/нож.mp3" },
{ "ru": "ванна", "plural": "ванны", "audio": "../audio/ванна.mp3" },
{ "ru": "бассейн", "plural": "бассейны", "audio": "../audio/бассейн.mp3" },
{ "ru": "телефон", "plural": "телефоны", "audio": "../audio/телефон.mp3" },
{ "ru": "сад", "plural": "сады", "audio": "../audio/сад.mp3" },
{ "ru": "цветок", "plural": "цветы", "audio": "../audio/цветок.mp3" },
{ "ru": "цветок", "plural": "цвета", "audio": "../audio/цвет.mp3" },
{ "ru": "дерево", "plural": "деревья", "audio": "../audio/дерево.mp3" },
{ "ru": "трава", "plural": "травы", "audio": "../audio/трава.mp3" },
{ "ru": "салфетка", "plural": "салфетки", "audio": "../audio/салфетка.mp3" },
{ "ru": "тряпка", "plural": "тряпки", "audio": "../audio/тряпка.mp3" },
{ "ru": "ведро", "plural": "вёдра", "audio": "../audio/ведро.mp3" },
{ "ru": "таз", "plural": "тазы", "audio": "../audio/таз.mp3" },
{ "ru": "веник", "plural": "веники", "audio": "../audio/веник.mp3" },
{ "ru": "совок", "plural": "совки", "audio": "../audio/совок.mp3" },
{ "ru": "швабра", "plural": "швабры", "audio": "../audio/швабра.mp3" },
{ "ru": "порошок", "plural": "порошки", "audio": "../audio/порошок.mp3" },
{ "ru": "пила", "plural": "пилы", "audio": "../audio/пила.mp3" },
{ "ru": "молоток", "plural": "молотки", "audio": "../audio/молоток.mp3" },
{ "ru": "отвёртка", "plural": "отвёртки", "audio": "../audio/отвёртка.mp3" },
{ "ru": "документ", "plural": "документы", "audio": "../audio/документ.mp3" },
{ "ru": "бумага", "plural": "бумаги", "audio": "../audio/бумага.mp3" },
{ "ru": "книга", "plural": "книги", "audio": "../audio/книга.mp3" },
{ "ru": "тетрадь", "plural": "тетради", "audio": "../audio/тетрадь.mp3" },
{ "ru": "ручка", "plural": "ручки", "audio": "../audio/ручка.mp3" },
{ "ru": "карандаш", "plural": "карандаши", "audio": "../audio/карандаш.mp3" },
{ "ru": "линейка", "plural": "линейки", "audio": "../audio/линейка.mp3" },
{ "ru": "игла", "plural": "иглы", "audio": "../audio/игла.mp3" },
{ "ru": "нитка", "plural": "нитки", "audio": "../audio/нитка.mp3" },
{ "ru": "игрушка", "plural": "игрушки", "audio": "../audio/игрушка.mp3" },

{ "ru": "животное", "plural": "животные", "audio": "../audio/животное.mp3" },
{ "ru": "питомец", "plural": "питомцы", "audio": "../audio/питомец.mp3" },
{ "ru": "хищник", "plural": "хищники", "audio": "../audio/хищник.mp3" },
{ "ru": "птица", "plural": "птицы", "audio": "../audio/птица.mp3" },
{ "ru": "жук", "plural": "жуки", "audio": "../audio/жук.mp3" },
{ "ru": "рыба", "plural": "рыбы", "audio": "../audio/рыба.mp3" },
{ "ru": "кот", "plural": "коты", "audio": "../audio/кот.mp3" },
{ "ru": "кошка", "plural": "кошки", "audio": "../audio/кошка.mp3" },
{ "ru": "пёс", "plural": "псы", "audio": "../audio/пёс.mp3" },
{ "ru": "собака", "plural": "собаки", "audio": "../audio/собака.mp3" },
{ "ru": "конь", "plural": "кони", "audio": "../audio/конь.mp3" },
{ "ru": "лошадь", "plural": "лошади", "audio": "../audio/лошадь.mp3" },
{ "ru": "верблюд", "plural": "верблюды", "audio": "../audio/верблюд.mp3" },
{ "ru": "бык", "plural": "быки", "audio": "../audio/бык.mp3" },
{ "ru": "корова", "plural": "коровы", "audio": "../audio/корова.mp3" },
{ "ru": "телёнок", "plural": "телята", "audio": "../audio/телёнок.mp3" },
{ "ru": "козёл", "plural": "козлы", "audio": "../audio/козёл.mp3" },
{ "ru": "коза", "plural": "козы", "audio": "../audio/коза.mp3" },
{ "ru": "козлёнок", "plural": "козлята", "audio": "../audio/козлёнок.mp3" },
{ "ru": "баран", "plural": "бараны", "audio": "../audio/баран.mp3" },
{ "ru": "овца", "plural": "овцы", "audio": "../audio/овца.mp3" },
{ "ru": "ягнёнок", "plural": "ягнята", "audio": "../audio/ягнёнок.mp3" },
{ "ru": "осёл", "plural": "ослы", "audio": "../audio/осёл.mp3" },
{ "ru": "кролик", "plural": "кролики", "audio": "../audio/кролик.mp3" },
{ "ru": "заяц", "plural": "зайцы", "audio": "../audio/заяц.mp3" },
{ "ru": "кабан", "plural": "кабаны", "audio": "../audio/кабан.mp3" },
{ "ru": "свинья", "plural": "свиньи", "audio": "../audio/свинья.mp3" },
{ "ru": "петух", "plural": "петухи", "audio": "../audio/петух.mp3" },
{ "ru": "курица", "plural": "курицы", "audio": "../audio/курица.mp3" },
{ "ru": "цыплёнок", "plural": "цыплята", "audio": "../audio/цыплёнок.mp3" },
{ "ru": "гусь", "plural": "гуси", "audio": "../audio/гусь.mp3" },
{ "ru": "утка", "plural": "утки", "audio": "../audio/утка.mp3" },
{ "ru": "павлин", "plural": "павлины", "audio": "../audio/павлин.mp3" },
{ "ru": "лебедь", "plural": "лебеди", "audio": "../audio/лебедь.mp3" },
{ "ru": "голубь", "plural": "голуби", "audio": "../audio/голубь.mp3" },
{ "ru": "попугай", "plural": "попугаи", "audio": "../audio/попугай.mp3" },
{ "ru": "слон", "plural": "слоны", "audio": "../audio/слон.mp3" },
{ "ru": "бегемот", "plural": "бегемоты", "audio": "../audio/бегемот.mp3" },
{ "ru": "носорог", "plural": "носороги", "audio": "../audio/носорог.mp3" },
{ "ru": "жираф", "plural": "жирафы", "audio": "../audio/жираф.mp3" },
{ "ru": "медведь", "plural": "медведи", "audio": "../audio/медведь.mp3" },
{ "ru": "волк", "plural": "волки", "audio": "../audio/волк.mp3" },
{ "ru": "лиса", "plural": "лисы", "audio": "../audio/лиса.mp3" },
{ "ru": "лев", "plural": "львы", "audio": "../audio/лев.mp3" },
{ "ru": "тигр", "plural": "тигры", "audio": "../audio/тигр.mp3" },
{ "ru": "гепард", "plural": "гепарды", "audio": "../audio/гепард.mp3" },
{ "ru": "газель", "plural": "газели", "audio": "../audio/газель.mp3" },
{ "ru": "антилопа", "plural": "антилопы", "audio": "../audio/антилопа.mp3" },
{ "ru": "енот", "plural": "еноты", "audio": "../audio/енот.mp3" },
{ "ru": "крот", "plural": "кроты", "audio": "../audio/крот.mp3" },
{ "ru": "белка", "plural": "белки", "audio": "../audio/белка.mp3" },
{ "ru": "хомяк", "plural": "хомяки", "audio": "../audio/хомяк.mp3" },
{ "ru": "ёж", "plural": "ежи", "audio": "../audio/ёж.mp3" },
{ "ru": "крыса", "plural": "крысы", "audio": "../audio/крыса.mp3" },
{ "ru": "мышь", "plural": "мыши", "audio": "../audio/мышь.mp3" },
{ "ru": "крокодил", "plural": "крокодилы", "audio": "../audio/крокодил.mp3" },
{ "ru": "черепаха", "plural": "черепахи", "audio": "../audio/черепаха.mp3" },
{ "ru": "пингвин", "plural": "пингвины", "audio": "../audio/пингвин.mp3" },
{ "ru": "лягушка", "plural": "лягушки", "audio": "../audio/лягушка.mp3" },
{ "ru": "змея", "plural": "змеи", "audio": "../audio/змея.mp3" },
{ "ru": "ящерица", "plural": "ящерицы", "audio": "../audio/ящерица.mp3" },
{ "ru": "орёл", "plural": "орлы", "audio": "../audio/орёл.mp3" },
{ "ru": "сокол", "plural": "соколы", "audio": "../audio/сокол.mp3" },
{ "ru": "сова", "plural": "совы", "audio": "../audio/сова.mp3" },
{ "ru": "ворон", "plural": "вороны", "audio": "../audio/ворон.mp3" },
{ "ru": "акула", "plural": "акулы", "audio": "../audio/акула.mp3" },
{ "ru": "дельфин", "plural": "дельфины", "audio": "../audio/дельфин.mp3" },
{ "ru": "кит", "plural": "киты", "audio": "../audio/кит.mp3" },
{ "ru": "краб", "plural": "крабы", "audio": "../audio/краб.mp3" },
{ "ru": "креветка", "plural": "креветки", "audio": "../audio/креветка.mp3" },
{ "ru": "осьминог", "plural": "осьминоги", "audio": "../audio/осьминог.mp3" },
{ "ru": "скорпион", "plural": "скорпионы", "audio": "../audio/скорпион.mp3" },
{ "ru": "пчела", "plural": "пчёлы", "audio": "../audio/пчела.mp3" },
{ "ru": "оса", "plural": "осы", "audio": "../audio/оса.mp3" },
{ "ru": "комар", "plural": "комары", "audio": "../audio/комар.mp3" },
{ "ru": "муха", "plural": "мухи", "audio": "../audio/муха.mp3" },
{ "ru": "бабочка", "plural": "бабочки", "audio": "../audio/бабочка.mp3" },
{ "ru": "муравей", "plural": "муравьи", "audio": "../audio/муравей.mp3" },
{ "ru": "паук", "plural": "пауки", "audio": "../audio/паук.mp3" },
{ "ru": "кузнечик", "plural": "кузнечики", "audio": "../audio/кузнечик.mp3" },
{ "ru": "таракан", "plural": "тараканы", "audio": "../audio/таракан.mp3" },
{ "ru": "лапа", "plural": "лапы", "audio": "../audio/лапа.mp3" },
{ "ru": "хвост", "plural": "хвосты", "audio": "../audio/хвост.mp3" },
{ "ru": "перо", "plural": "перья", "audio": "../audio/перо.mp3" },
{ "ru": "крыло", "plural": "крылья", "audio": "../audio/крыло.mp3" },
{ "ru": "сарай", "plural": "сараи", "audio": "../audio/сарай.mp3" },
{ "ru": "клетка", "plural": "клетки", "audio": "../audio/клетка.mp3" },
{ "ru": "аквариум", "plural": "аквариумы", "audio": "../audio/аквариум.mp3" },
{ "ru": "корм", "plural": "корма", "audio": "../audio/корм.mp3" },
{ "ru": "прививка", "plural": "прививки", "audio": "../audio/прививка.mp3" },


{ "ru": "завтрак", "plural": "завтраки", "audio": "../audio/завтрак.mp3" },
{ "ru": "обед", "plural": "обеды", "audio": "../audio/обед.mp3" },
{ "ru": "ужин", "plural": "ужины", "audio": "../audio/ужин.mp3" },
{ "ru": "напиток", "plural": "напитки", "audio": "../audio/напиток.mp3" },
{ "ru": "сыр", "plural": "сыры", "audio": "../audio/сыр.mp3" },
{ "ru": "масло", "plural": "масла", "audio": "../audio/масло.mp3" },
{ "ru": "сок", "plural": "соки", "audio": "../audio/сок.mp3" },
{ "ru": "крупа", "plural": "крупы", "audio": "../audio/крупа.mp3" },
{ "ru": "суп", "plural": "супы", "audio": "../audio/суп.mp3" },
{ "ru": "борщ", "plural": "борщи", "audio": "../audio/борщ.mp3" },
{ "ru": "каша", "plural": "каши", "audio": "../audio/каша.mp3" },
{ "ru": "помидор", "plural": "помидоры", "audio": "../audio/помидор.mp3" },
{ "ru": "огурец", "plural": "огурцы", "audio": "../audio/огурец.mp3" },
{ "ru": "салат", "plural": "салаты", "audio": "../audio/салат.mp3" },
{ "ru": "тыква", "plural": "тыквы", "audio": "../audio/тыква.mp3" },
{ "ru": "яблоко", "plural": "яблоки", "audio": "../audio/яблоко.mp3" },
{ "ru": "груша", "plural": "груши", "audio": "../audio/груша.mp3" },
{ "ru": "вишня", "plural": "вишни", "audio": "../audio/вишня.mp3" },
{ "ru": "арбуз", "plural": "арбузы", "audio": "../audio/арбуз.mp3" },
{ "ru": "банан", "plural": "бананы", "audio": "../audio/банан.mp3" },
{ "ru": "ананас", "plural": "ананасы", "audio": "../audio/ананас.mp3" },
{ "ru": "апельсин", "plural": "апельсины", "audio": "../audio/апельсин.mp3" },
{ "ru": "лимон", "plural": "лимоны", "audio": "../audio/лимон.mp3" },
{ "ru": "десерт", "plural": "десерты", "audio": "../audio/десерт.mp3" },
{ "ru": "пирог", "plural": "пироги", "audio": "../audio/пирог.mp3" },
{ "ru": "торт", "plural": "торты", "audio": "../audio/торт.mp3" },


{ "ru": "учебник", "gender": "m", "plural": "учебники", "audio": "../audio/учебник.mp3" },
{ "ru": "словарь", "gender": "m", "plural": "словари", "audio": "../audio/словарь.mp3" },
{ "ru": "профессия", "gender": "f", "plural": "профессии", "audio": "../audio/профессия.mp3" },
{ "ru": "специальность", "gender": "f", "plural": "специальности", "audio": "../audio/специальность.mp3" },
{ "ru": "школа", "gender": "f", "plural": "школы", "audio": "../audio/школа.mp3" },
{ "ru": "университет", "gender": "m", "plural": "университеты", "audio": "../audio/университет.mp3" },
{ "ru": "учитель", "gender": "m", "plural": "учителя", "audio": "../audio/учитель.mp3" },
{ "ru": "профессор", "gender": "m", "plural": "профессора", "audio": "../audio/профессор.mp3" },
{ "ru": "учёный", "gender": "m", "plural": "учёные", "audio": "../audio/учёный.mp3" },
{ "ru": "врач", "gender": "m", "plural": "врачи", "audio": "../audio/врач.mp3" },
{ "ru": "инженер", "gender": "m", "plural": "инженеры", "audio": "../audio/инженер.mp3" },
{ "ru": "адвокат", "gender": "m", "plural": "адвокаты", "audio": "../audio/адвокат.mp3" },
{ "ru": "медсестра", "gender": "f", "plural": "медсёстры", "audio": "../audio/медсестра.mp3" },
{ "ru": "продавец", "gender": "m", "plural": "продавцы", "audio": "../audio/продавец.mp3" },


{ "ru": "путешествие", "gender": "n", "plural": "путешествия", "audio": "../audio/путешествие.mp3" },
{ "ru": "путешественник", "gender": "m", "plural": "путешественники", "audio": "../audio/путешественник.mp3" },
{ "ru": "поездка", "gender": "f", "plural": "поездки", "audio": "../audio/поездка.mp3" },
{ "ru": "турист", "gender": "m", "plural": "туристы", "audio": "../audio/турист.mp3" },
{ "ru": "экскурсия", "gender": "f", "plural": "экскурсии", "audio": "../audio/экскурсия.mp3" },
{ "ru": "карта", "gender": "f", "plural": "карты", "audio": "../audio/карта.mp3" },
{ "ru": "паспорт", "gender": "m", "plural": "паспорта", "audio": "../audio/паспорт.mp3" },
{ "ru": "виза", "gender": "f", "plural": "визы", "audio": "../audio/виза.mp3" },
{ "ru": "цена", "gender": "f", "plural": "цены", "audio": "../audio/цена.mp3" },
{ "ru": "распродажа", "gender": "f", "plural": "распродажи", "audio": "../audio/распродажа.mp3" },
{ "ru": "скидка", "gender": "f", "plural": "скидки", "audio": "../audio/скидка.mp3" },
{ "ru": "билет", "gender": "m", "plural": "билеты", "audio": "../audio/билет.mp3" },
{ "ru": "гостиница", "gender": "f", "plural": "гостиницы", "audio": "../audio/гостиница.mp3" },
{ "ru": "номер", "gender": "m", "plural": "номера", "audio": "../audio/номер.mp3" },
{ "ru": "штамп", "gender": "m", "plural": "штампы", "audio": "../audio/штамп.mp3" },
{ "ru": "сумка", "gender": "f", "plural": "сумки", "audio": "../audio/сумка.mp3" },
{ "ru": "дорога", "gender": "f", "plural": "дороги", "audio": "../audio/дорога.mp3" },
{ "ru": "тротуар", "gender": "m", "plural": "тротуары", "audio": "../audio/тротуар.mp3" },
{ "ru": "пассажир", "gender": "m", "plural": "пассажиры", "audio": "../audio/пассажир.mp3" },
{ "ru": "велосипед", "gender": "m", "plural": "велосипеды", "audio": "../audio/велосипед.mp3" },
{ "ru": "машина", "gender": "f", "plural": "машины", "audio": "../audio/машина.mp3" },
{ "ru": "автобус", "gender": "m", "plural": "автобусы", "audio": "../audio/автобус.mp3" },
{ "ru": "автовокзал", "gender": "m", "plural": "автовокзалы", "audio": "../audio/автовокзал.mp3" },
{ "ru": "вертолёт", "gender": "m", "plural": "вертолёты", "audio": "../audio/вертолёт.mp3" },
{ "ru": "самолёт", "gender": "m", "plural": "самолёты", "audio": "../audio/самолёт.mp3" },
{ "ru": "аэропорт", "gender": "m", "plural": "аэропорты", "audio": "../audio/аэропорт.mp3" },
{ "ru": "поезд", "gender": "m", "plural": "поезда", "audio": "../audio/поезд.mp3" },
{ "ru": "лодка", "gender": "f", "plural": "лодки", "audio": "../audio/лодка.mp3" },
{ "ru": "яхта", "gender": "f", "plural": "яхты", "audio": "../audio/яхта.mp3" },
{ "ru": "корабль", "gender": "m", "plural": "корабли", "audio": "../audio/корабль.mp3" },
{ "ru": "порт", "gender": "m", "plural": "порты", "audio": "../audio/порт.mp3" },
{ "ru": "праздник", "gender": "m", "plural": "праздники", "audio": "../audio/праздник.mp3" },
{ "ru": "звезда", "gender": "f", "plural": "звёзды", "audio": "../audio/звезда.mp3" },
{ "ru": "дождь", "gender": "m", "plural": "дожди", "audio": "../audio/дождь.mp3" },
{ "ru": "буря", "gender": "f", "plural": "бури", "audio": "../audio/буря.mp3" },
{ "ru": "землетрясение", "gender": "n", "plural": "землетрясения", "audio": "../audio/землетрясение.mp3" },
{ "ru": "море", "gender": "n", "plural": "моря", "audio": "../audio/море.mp3" },
{ "ru": "река", "gender": "f", "plural": "реки", "audio": "../audio/река.mp3" },
{ "ru": "озеро", "gender": "n", "plural": "озёра", "audio": "../audio/озеро.mp3" },
{ "ru": "остров", "gender": "m", "plural": "острова", "audio": "../audio/остров.mp3" },
{ "ru": "водопад", "gender": "m", "plural": "водопады", "audio": "../audio/водопад.mp3" },
{ "ru": "пещера", "gender": "f", "plural": "пещеры", "audio": "../audio/пещера.mp3" },
{ "ru": "пляж", "gender": "m", "plural": "пляжи", "audio": "../audio/пляж.mp3" },
{ "ru": "пустыня", "gender": "f", "plural": "пустыни", "audio": "../audio/пустыня.mp3" },
{ "ru": "лес", "gender": "m", "plural": "леса", "audio": "../audio/лес.mp3" },
{ "ru": "гора", "gender": "f", "plural": "горы", "audio": "../audio/гора.mp3" },
{ "ru": "вулкан", "gender": "m", "plural": "вулканы", "audio": "../audio/вулкан.mp3" },
{ "ru": "камень", "gender": "m", "plural": "камни", "audio": "../audio/камень.mp3" },
{ "ru": "авария", "gender": "f", "plural": "аварии", "audio": "../audio/авария.mp3" },
{ "ru": "больница", "gender": "f", "plural": "больницы", "audio": "../audio/больница.mp3" },
{ "ru": "ресторан", "gender": "m", "plural": "рестораны", "audio": "../audio/ресторан.mp3" },
{ "ru": "рынок", "gender": "m", "plural": "рынки", "audio": "../audio/рынок.mp3" },
{ "ru": "магазин", "gender": "m", "plural": "магазины", "audio": "../audio/магазин.mp3" },
{ "ru": "тюрьма", "gender": "f", "plural": "тюрьмы", "audio": "../audio/тюрьма.mp3" },
{ "ru": "музей", "gender": "m", "plural": "музеи", "audio": "../audio/музей.mp3" },
{ "ru": "стадион", "gender": "m", "plural": "стадионы", "audio": "../audio/стадион.mp3" },
{ "ru": "концерт", "gender": "m", "plural": "концерты", "audio": "../audio/концерт.mp3" },
{ "ru": "сувенир", "gender": "m", "plural": "сувениры", "audio": "../audio/сувенир.mp3" },
{ "ru": "подарок", "gender": "m", "plural": "подарки", "audio": "../audio/подарок.mp3" },
{ "ru": "кальян", "gender": "m", "plural": "кальяны", "audio": "../audio/кальян.mp3" },
{ "ru": "страна", "gender": "f", "plural": "страны", "audio": "../audio/страна.mp3" },
{ "ru": "город", "gender": "m", "plural": "города", "audio": "../audio/город.mp3" },
{ "ru": "столица", "gender": "f", "plural": "столицы", "audio": "../audio/столица.mp3" },
{ "ru": "деревня", "gender": "f", "plural": "деревни", "audio": "../audio/деревня.mp3" },

{
    "ru": "россиянин",
    "gender": "m",
    "plural": "россияне",
    "audio": "../audio/россиянин.mp3"
  },
  {
    "ru": "египтянин",
    "gender": "m",
    "plural": "египтяне",
    "audio": "../audio/египтянин.mp3"
  },
  {
    "ru": "христианин",
    "gender": "m",
    "plural": "христиане",
    "audio": "../audio/христианин.mp3"
  },
  {
    "ru": "мусульманин",
    "gender": "m",
    "plural": "мусульмане",
    "audio": "../audio/мусульманин.mp3"
  },
  {
    "ru": "славянин",
    "gender": "m",
    "plural": "славяне",
    "audio": "../audio/славянин.mp3"
  }




    ];

    let correctWord = null;
    let hasAnswered = false;
    let correctCount = 0;
    let wrongCount = 0;

    const wordButton = document.getElementById("word-button");
    const inputField = document.getElementById("user-input");
    const letterResult = document.getElementById("letter-result");
    const resultBox = document.getElementById("result");
    const scoreBox = document.getElementById("score");

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

    function getRandomWord() {
        return words[Math.floor(Math.random() * words.length)];
    }

    function renderQuestion() {
        correctWord = getRandomWord();
        hasAnswered = false;

        // Сброс полей
        resultBox.textContent = "";
        letterResult.innerHTML = "";
        inputField.value = "";
        inputField.disabled = false;

        // Показываем слово и назначаем аудио
        wordButton.textContent = correctWord.ru;
        wordButton.onclick = () => {
            if (!correctWord || !correctWord.audio) return;
            const audio = new Audio(correctWord.audio);
            audio.play().catch(err => console.error("Ошибка воспроизведения:", err));
        };

        inputField.focus();
    }

    function checkSpelling() {
        if (hasAnswered) return;
        hasAnswered = true;

        const userWord = inputField.value.trim().toLowerCase();
        const correct = correctWord.plural.toLowerCase();

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
                 ❌ خطأ. الكلمة الصحيحة: ${correctWord.plural}
                 </span>`;
            resultBox.style.color = "red";
            wrongCount++;
        }

        updateScore();
        inputField.disabled = true;
        nextButton.style.display = "inline-block";
    }

    // Проверка при нажатии Enter
    inputField.addEventListener("keydown", function (e) {
        if (e.key === "Enter" && inputField.value.trim() !== "") {
            checkSpelling();
        }
    });

    renderQuestion();
    updateScore();
};
