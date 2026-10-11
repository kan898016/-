// Story content
const storyHTML = `
<p>Артур был шестнадцатилетним подмастерьем кузнеца в деревне Зелёный Бор, расположенной между Серебряными горами и Шепчущим лесом. Он с ранних лет помогал отцу в кузнице, aprend ковать мечи и доспехи, но его сердце жаждало приключений и славы, таких, как в старых легендах о хранителях Света, которые когда-то защищали земли от Тьмы Мрака.</p>
<p>Однажды в деревне готовились к ежегодному Фестивалю Огней — празднику, когда каждому жителю раздавали сладкие пирожки с мёдом. Главный курьер, парень по имени Лио, должен был принести корзинку этих лакомств из далёкого города Солярия. Однако из‑за путаницы на рынке он вернулся с мешком свежего мяса и пучком угля вместо сладостей.</p>
<p>В деревне пошёл ропот: некоторые готовы были отругать Лио за ошибку. Артур, видя страх в глазах курьера, шагнул вперёд. Он напомнил всем, что ошибки случаются, и истинный дух праздника заключается не в вине, а в доброте. Он предложил использовать мясо и уголь для приготовления шашлыка — превратить досадную недоразумение в праздник изобретательности и共享.</p>
<p>Когда жители собрались вокруг огня, Артур почувствовал странное тепло в груди — признак древнего огня, дремавшего в нём со дня рождения. В ту же ночь ему приснился кристаллический волк, который предупредил о надвигающейся опасности: Тьма Мрака вновь пробуждается, стремясь поглотить весь свет в мире.</p>
<p>На следующий день Артур решил отправиться в поисках Солнечного Кристалла — реликвии, усиливающей внутренний свет своего владельца и способной отгонять тени. Он взял отцовский старый меч, кусок хлеба и флягу с водой, и отправился к Пещерам Кристаллов, руководствуясь видением волка.</p>
<p>По пути его ждали испытания. Сначала он подошёл к бурной реке, где страж‑каменное существо предложил загадку: «Я говорю без рта и слышу без ушей. У меня есть тело, но я не живу. Что я?» Артур ответил: «Эхо». Страж расступился, пропустив его.</p>
<p>Затем он вошёл в Шепчущий лес, где деревья говорили полупрозрачными голосами, пытаясь сбить его с пути, шепча ложные тропы и страхи. Артур вспомнил совет старшего кузнеца: «Когда лес лжёт — пой своей песней». Он запевал простую мелодию о доме и друзьях, и деревья постепенно замолкали, открывая правильную дорогу.</p>
<p>Далее последовал горный перевал, где ветер выл голосами тех, кто не смог пройти раньше. Здесь Артур встретил измождённого странника, который поделился последними кусочками хлеба. Артур поделился своей едой, и в благодарность странник показал ему безопасную тропу через камни.</p>
<p>Наконец, Артур достиг Пещер Кристаллов. В глубине пещеры он увидел Солнечный Кристалл, пульсирующий тёплым золотым светом. Когда он протянул руку, из тени возникла Тьма Мрака — вихрь тьмы, поглощающий свет и надежду.</p>
<p>Артур поднял кристалл над головой, и его свет вспыхнул, отталкивая тьму. Он вспомнил урок с курьером: даже ошибка может привести к чему‑то великому, если отнестись к ней с добротой. Он направил не только свою силу, но и сострадание, которое проявил ранее — мясо и уголь превратились в шашлык, а незнакомец получил кусок хлеба.</p>
<p>С мощным всплеском света Тьма Мрака рассыпалась на безвредные искры, которые поднялись вверх, словно светлячки. Деревня встретила Артура не просто как героя, но как напоминание о том, что истинная доблесть проявляется в разных формах: иногда — в прощении ошибки, иногда — в совместной трапёзе, а иногда — в готовности встретить тьму с открытым сердцем.</p>
<p>История завершается тем, что Артур сидит у костра, наслаждаясь шашлыком, который он помог приготовить, смотрит на звёзды и мечтает о следующем приключении.</p>
`;

// Games content
const gamesHTML = `
<div class="game-box">
    <h3>Викторина: Как хорошо вы помните историю?</h3>
    <div id="quiz-container">
        <div id="quiz-question"></div>
        <div id="quiz-options"></div>
        <div id="quiz-feedback" style="margin-top:10px;min-height:20px;"></div>
        <button id="quiz-next" class="btn" style="display:none;">Следующий вопрос</button>
    </div>
</div>
<div class="game-box">
    <h3>Кликер: Собери сладости для фестиваля</h3>
    <div id="clicker-game">
        <p>Собрано сладостей: <span id="sweets-count">0</span> / 100</p>
        <button id="sweet-btn" class="btn">Собрать сладость</button>
        <p id="clicker-message" style="margin-top:10px;min-height:20px;"></p>
    </div>
</div>
<div class="game-box">
    <h3>Память: Найди пары символов из истории</h3>
    <div id="memory-game">
        <div id="memory-board"></div>
        <p id="memory-message" style="margin-top:10px;min-height:20px;text-align:center;"></p>
    </div>
</div>
`;

// DOM elements
const storySection = document.getElementById('story');
const gamesSection = document.getElementById('games');
const storyLink = document.querySelector('nav a[href="#story"]');
const gamesLink = document.querySelector('nav a[href="#games"]');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Populate story
    document.getElementById('story-content').innerHTML = storyHTML;

    // Populate games placeholder
    document.getElementById('games-content').innerHTML = gamesHTML;

    // Initialize games after DOM is ready
    initQuiz();
    initClicker();
    initMemory();

    // Handle navigation
    storyLink.addEventListener('click', (e) => {
        e.preventDefault();
        storySection.classList.remove('hidden');
        gamesSection.classList.add('hidden');
    });
    gamesLink.addEventListener('click', (e) => {
        e.preventDefault();
        gamesSection.classList.remove('hidden');
        storySection.classList.add('hidden');
    });

    // Start with story visible
    storySection.classList.remove('hidden');
    gamesSection.classList.add('hidden');
});

// Quiz data
const quizQuestions = [
    {
        q: "Сколько лет Артуру?",
        options: ["14", "15", "16", "17"],
        correct: 2
    },
    {
        q: "Что должен был принести курьер Лио?",
        options: ["Мясо", "Уголь", "Сладкие пирожки", "Воду"],
        correct: 2
    },
    {
        q: "Что Артур решил сделать вместо того, чтобы ругать курьера?",
        options: ["Побить его", "Проигнорировать", "Приготовить шашлык", "Пожаловаться старейшинам"],
        correct: 2
    },
    {
        q: "Как назывался лес, где деревья шептали ложь?",
        options: ["Шепчущий лес", "Тёмный лес", "Лес забвения", "Лес молчания"],
        correct: 0
    },
    {
        q: "Что показал Артуру кристаллический волк во сне?",
        options: ["Предстоящий бой", "Надвигающуюся тьму", "Сокровище", "Древний меч"],
        correct: 1
    }
];
let currentQuizIndex = 0;
let quizScore = 0;

function initQuiz() {
    const questionDiv = document.getElementById('quiz-question');
    const optionsDiv = document.getElementById('quiz-options');
    const feedbackDiv = document.getElementById('quiz-feedback');
    const nextBtn = document.getElementById('quiz-next');

    function loadQuestion() {
        if (currentQuizIndex >= quizQuestions.length) {
            questionDiv.textContent = `Викторина завершена! Ваш счёт: ${quizScore} из ${quizQuestions.length}`;
            optionsDiv.innerHTML = '';
            nextBtn.style.display = 'none';
            feedbackDiv.textContent = quizScore === quizQuestions.length ?
                "Отлично! Вы знаете историю на отлично!" :
                "Можно лучше! Попробуйте ещё раз.";
            return;
        }
        const qq = quizQuestions[currentQuizIndex];
        questionDiv.textContent = qq.q;
        optionsDiv.innerHTML = '';
        qq.options.forEach((opt, idx) => {
            const btn = document.createElement('button');
            btn.textContent = opt;
            btn.className = 'btn';
            btn.onclick = () => {
                if (idx === qq.correct) {
                    feedbackDiv.textContent = "Правильно!";
                    feedbackDiv.style.color = 'green';
                    quizScore++;
                } else {
                    feedbackDiv.textContent = "Неправильно. Правильный ответ: " + qq.options[qq.correct];
                    feedbackDiv.style.color = 'red';
                }
                // Disable all options
                const buttons = optionsDiv.querySelectorAll('button');
                buttons.forEach(b => b.disabled = true);
                nextBtn.style.display = 'inline-block';
            };
            optionsDiv.appendChild(btn);
        });
        feedbackDiv.textContent = '';
        nextBtn.style.display = 'none';
    }

    nextBtn.onclick = () => {
        currentQuizIndex++;
        loadQuestion();
    };

    loadQuestion();
}

// Clicker game
function initClicker() {
    const sweetBtn = document.getElementById('sweet-btn');
    const sweetsCount = document.getElementById('sweets-count');
    const message = document.getElementById('clicker-message');
    let count = 0;

    sweetBtn.onclick = () => {
        count++;
        sweetsCount.textContent = count;
        if (count >= 100) {
            message.textContent = "Поздравляем! Вы собрали достаточно сладостей для фестиваля!";
            message.style.color = 'green';
            sweetBtn.disabled = true;
        } else {
            message.textContent = `Ещё ${100 - count} сладостей нужно собрать.`;
            message.style.color = '#555';
        }
    };
}

// Memory game
function initMemory() {
    const board = document.getElementById('memory-board');
    const message = document.getElementById('memory-message');

    // Pairs of symbols from the story
    const symbols = [
        {name: 'Меч', emoji: '⚔️'},
        {name: 'Шашлык', emoji: '🍢'},
        {name: 'Солнечный кристалл', emoji: '💎'},
        {name: 'Огонь', emoji: '🔥'},
        {name: 'Мечта', emoji: '💭'},
        {name: 'Курьер', emoji: '🚴‍♂️'},
        {name: 'Сладости', emoji: '🍬'},
        {name: 'Звёзды', emoji: '✨'},
        {name: 'Дерево', emoji: '🌳'},
        {name: 'Вода', emoji: '💧'}
    ];

    // Create pairs
    let cards = [];
    symbols.forEach(s => {
        cards.push({emoji: s.emoji, matched: false});
        cards.push({emoji: s.emoji, matched: false});
    });

    // Shuffle
    cards = cards.sort(() => Math.random() - 0.5);

    board.innerHTML = '';
    let flippedCards = [];
    let lockedBoard = false;

    cards.forEach((card, index) => {
        const cardDiv = document.createElement('div');
        cardDiv.className = 'memory-card';
        cardDiv.dataset.index = index;
        cardDiv.innerHTML = '<div class="card-front">?</div><div class="card-back">' + card.emoji + '</div>';
        cardDiv.addEventListener('click', flipCard);
        board.appendChild(cardDiv);
    });

    function flipCard() {
        if (lockedBoard) return;
        if (this === flippedCards[0]) return;

        this.classList.add('flipped');
        flippedCards.push(this);

        if (flippedCards.length === 2) {
            const idx1 = parseInt(flippedCards[0].dataset.index);
            const idx2 = parseInt(flippedCards[1].dataset.index);
            if (cards[idx1].emoji === cards[idx2].emoji) {
                // Match
                flippedCards[0].classList.add('matched');
                flippedCards[1].classList.add('matched');
                cards[idx1].matched = true;
                cards[idx2].matched = true;
                flippedCards = [];
                if (cards.every(c => c.matched)) {
                    message.textContent = "Все пары найдены! Отличная память!";
                    message.style.color = 'green';
                }
            } else {
                // Not match
                lockedBoard = true;
                setTimeout(() => {
                    flippedCards.forEach(card => card.classList.remove('flipped'));
                    flippedCards = [];
                    lockedBoard = false;
                }, 1000);
            }
        }
    };

    // Add CSS for memory cards (inline style)
    const style = document.createElement('style');
    style.textContent = `
        .memory-card {
            width: 60px;
            height: 60px;
            margin: 10px;
            perspective: 1000px;
            display: inline-block;
        }
        .memory-card .card-front,
        .memory-card .card-back {
            position: absolute;
            width: 100%;
            height: 100%;
            backface-visibility: hidden;
            border: 2px solid #3498db;
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 24px;
        }
        .memory-card .card-front {
            background: #ecf0f1;
            transform: rotateY(180deg);
        }
        .memory-card .card-back {
            background: #fff;
            transform: rotateY(0deg);
        }
        .memory-card.flipped .card-front {
            transform: rotateY(0deg);
        }
        .memory-card.flipped .card-back {
            transform: rotateY(180deg);
        }
        .memory-card.matched {
            opacity: 0.6;
        }
    `;
    document.head.appendChild(style);
}