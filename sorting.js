game.sorting = {
    moduleData: null,
    appContainer: null,
    words: [],
    categories: [],
    userAnswers: {}, // Stores the current category for each word
    originalWordPositions: {}, // To track initial positions for Undo/Reset
    sessionScore: { correct: 0, incorrect: 0 },
    history: [], // To store actions for undo functionality

    init(module) {
        this.moduleData = module;
        this.appContainer = document.getElementById('app-container');
        this.words = this.shuffleArray(module.data.map(item => item.word)); // Shuffle words
        this.categories = module.categories;
        this.userAnswers = {};
        this.originalWordPositions = {};
        this.sessionScore = { correct: 0, incorrect: 0 };
        this.history = [];
        this.render();
    },

    render() {
        this.appContainer.classList.remove('main-menu-active');
        this.appContainer.innerHTML = `
            <div id="sorting-container" class="max-w-4xl mx-auto p-4">
                <h1 class="text-3xl font-bold text-center mb-6">${MESSAGES.get('sortingGameTitle')}</h1>

                <div id="word-bank" class="bg-white p-4 rounded-lg shadow-md mb-6 min-h-[100px] border-2 border-gray-300 flex flex-wrap justify-center items-center" ondrop="game.sorting.drop(event)" ondragover="game.sorting.allowDrop(event)">
                    <!-- Words will be rendered here -->
                </div>

                <div id="categories-container" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                    <!-- Categories will be rendered here -->
                </div>

                <div class="flex justify-between mt-4">
                    <button id="undo-btn" class="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-lg">${MESSAGES.get('undoButton')}</button>
                    <button id="check-btn" class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg">${MESSAGES.get('checkButton')}</button>
                </div>
                <button id="back-to-menu-sorting-btn" class="w-full mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg" onclick="game.renderMenu()">${MESSAGES.get('backToMenu')}</button>

                <div id="score-display" class="text-center text-xl font-bold mt-6"></div>
            </div>
        `;

        this.renderWords();
        this.renderCategories();
        this.addEventListeners();
    },

    renderWords() {
        const wordBank = document.getElementById('word-bank');
        wordBank.innerHTML = ''; // Clear existing words
        this.words.forEach(wordText => {
            const wordElem = document.createElement('span');
            wordElem.textContent = wordText;
            wordElem.className = 'word bg-gray-200 text-gray-800 font-semibold py-2 px-4 rounded-full shadow-sm cursor-grab m-2 transition duration-200 hover:bg-gray-300';
            wordElem.draggable = true;
            wordElem.id = 'word-' + wordText.replace(/\s+/g, '-').toLowerCase(); // Unique ID for drag/drop
            wordElem.dataset.word = wordText;
            wordElem.ondragstart = this.drag;
            wordBank.appendChild(wordElem);
            this.originalWordPositions[wordElem.id] = 'word-bank'; // Store initial position
        });
    },

    renderCategories() {
        const categoriesContainer = document.getElementById('categories-container');
        categoriesContainer.innerHTML = ''; // Clear existing categories
        this.categories.forEach(categoryName => {
            const categoryElem = document.createElement('div');
            categoryElem.id = 'category-' + categoryName.replace(/\s+/g, '-').toLowerCase();
            categoryElem.className = 'category bg-gray-100 p-4 rounded-lg shadow-md border-2 border-dashed border-gray-400 min-h-[150px]';
            categoryElem.ondrop = this.drop;
            categoryElem.ondragover = this.allowDrop;
            categoryElem.innerHTML = `<h2 class="text-xl font-semibold mb-3 text-center">${categoryName}</h2>`;
            categoriesContainer.appendChild(categoryElem);
        });
    },

    addEventListeners() {
        document.getElementById('check-btn').addEventListener('click', () => this.checkAnswers());
        document.getElementById('undo-btn').addEventListener('click', () => this.undo());
    },

    allowDrop(ev) {
        ev.preventDefault();
    },

    drag(ev) {
        ev.dataTransfer.setData("text", ev.target.id);
    },

    drop(ev) {
        ev.preventDefault();
        const wordId = ev.dataTransfer.getData("text");
        const wordElem = document.getElementById(wordId);
        let target = ev.target;

        // Find the actual category or word-bank element
        while (target && !target.id.startsWith('category-') && target.id !== 'word-bank') {
            target = target.parentElement;
        }

        if (target && (target.id.startsWith('category-') || target.id === 'word-bank')) {
            const oldParentId = wordElem.parentElement.id;
            const newParentId = target.id;

            if (oldParentId !== newParentId) {
                // Record the action for undo
                game.sorting.history.push({
                    wordId: wordId,
                    from: oldParentId,
                    to: newParentId
                });
                target.appendChild(wordElem);
                game.sorting.userAnswers[wordElem.dataset.word] = newParentId.replace('category-', '').replace('word-', '');
                game.sorting.clearFeedback(); // Clear feedback on new move
            }
        }
    },

    checkAnswers() {
        this.sessionScore = { correct: 0, incorrect: 0 };
        const scoreDisplay = document.getElementById('score-display');
        let allCorrect = true;

        this.moduleData.data.forEach(item => {
            const wordElem = document.getElementById('word-' + item.word.replace(/\s+/g, '-').toLowerCase());
            if (!wordElem) return; // Word might not be rendered yet or missing

            const currentCategoryElement = wordElem.parentElement;
            const currentCategoryId = currentCategoryElement ? currentCategoryElement.id.replace('category-', '') : 'word-bank';

            // Remove previous feedback classes
            wordElem.classList.remove('bg-green-500', 'bg-red-500', 'text-white');

            if (currentCategoryId === item.category) {
                this.sessionScore.correct++;
                wordElem.classList.add('bg-green-500', 'text-white');
            } else {
                this.sessionScore.incorrect++;
                wordElem.classList.add('bg-red-500', 'text-white');
                allCorrect = false;
            }
        });

        scoreDisplay.textContent = `${MESSAGES.get('correct')}: ${this.sessionScore.correct} / ${MESSAGES.get('incorrect')}: ${this.sessionScore.incorrect}`;

        if (allCorrect && this.sessionScore.correct === this.words.length) {
            scoreDisplay.textContent += ` - ${MESSAGES.get('allCorrectMessage')}`;
            auth.updateGlobalScore(this.sessionScore); // Update global score only on full completion
        }
    },

    undo() {
        if (this.history.length > 0) {
            const lastAction = this.history.pop();
            const wordElem = document.getElementById(lastAction.wordId);
            const previousParent = document.getElementById(lastAction.from);
            if (wordElem && previousParent) {
                previousParent.appendChild(wordElem);
                this.clearFeedback(); // Clear feedback on undo
            }
        }
    },

    clearFeedback() {
        document.querySelectorAll('.word').forEach(wordElem => {
            wordElem.classList.remove('bg-green-500', 'bg-red-500', 'text-white');
        });
        document.getElementById('score-display').textContent = '';
    },

    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
};
