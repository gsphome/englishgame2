const game = {
    modal: null,
    yesButton: null,
    noButton: null,
    messageElement: null,
    currentView: null, // To keep track of the current active view (e.g., 'menu', 'flashcard', 'quiz')
    currentModule: null, // To keep track of the current module data

    toggleModal(show) {
        this.modal.classList.toggle('hidden', !show);
        if (show) {
            this.messageElement.textContent = MESSAGES.get('confirmLogoutMessage');
        }
    },

    init() {
        this.modal = document.getElementById('confirmation-modal');
        this.yesButton = document.getElementById('confirm-yes');
        this.noButton = document.getElementById('confirm-no');
        this.messageElement = document.getElementById('confirmation-message');

        this.hamburgerMenu = document.getElementById('hamburger-menu');
        this.menuOverlay = document.getElementById('menu-overlay');
        this.closeMenuBtn = document.getElementById('close-menu-btn');
        this.menuLangToggleBtn = document.getElementById('menu-lang-toggle-btn');
        this.menuLogoutBtn = document.getElementById('menu-logout-btn');

        this.yesButton.addEventListener('click', () => {
            auth.logout();
            this.toggleModal(false);
        });

        this.noButton.addEventListener('click', () => {
            this.toggleModal(false);
        });

        this.closeMenuBtn.addEventListener('click', () => this.toggleHamburgerMenu(false));
        this.menuOverlay.addEventListener('click', () => this.toggleHamburgerMenu(false));

        this.menuLangToggleBtn.addEventListener('click', () => {
            const newLang = MESSAGES.getLanguage() === 'en' ? 'es' : 'en';
            MESSAGES.setLanguage(newLang);
            localStorage.setItem('appLang', newLang);
            this.toggleHamburgerMenu(false); // Close menu after language change
        });

        this.menuLogoutBtn.addEventListener('click', () => {
            this.toggleHamburgerMenu(false); // Close menu before showing confirmation
            game.showLogoutConfirmation();
        });

        MESSAGES.addListener(this.renderHeader.bind(this));
        MESSAGES.addListener(this.renderCurrentView.bind(this));
                MESSAGES.addListener(this.updateMenuText.bind(this)); // New listener for menu text

        this.renderHeader();
        this.updateMenuText(); // Call explicitly after rendering header
        this.renderMenu();
        MESSAGES.addListener(() => {
            if (!this.modal.classList.contains('hidden')) {
                this.messageElement.textContent = MESSAGES.get('confirmLogoutMessage');
            }
        });

        this.renderHeader();
        this.renderMenu();
        this.addKeyboardListeners();
    },

    updateMenuText() {
        if (this.menuLangToggleBtn) {
            this.menuLangToggleBtn.textContent = MESSAGES.getLanguage().toUpperCase();
        }
        if (this.menuLogoutBtn) {
            this.menuLogoutBtn.textContent = MESSAGES.get('logoutButton');
        }
    },

    toggleHamburgerMenu(show) {
        document.body.classList.toggle('hamburger-menu-open', show);
    },

    renderHeader() {
        const header = document.getElementById('main-header');
        const user = auth.getUser();
        header.innerHTML = `
            <div class="container mx-auto flex justify-between items-center p-4">
                <div></div>
                <div id="global-score" class="text-lg">${MESSAGES.get('globalScore')}: <span class="text-green-500">${user.globalScore.correct}</span> / <span class="text-red-500">${user.globalScore.incorrect}</span></div>
                <div class="flex items-center">
                    <div class="font-bold text-xl mr-4">${user.username}</div>
                    <button id="hamburger-btn" class="text-2xl">&#9776;</button>
                </div>
            </div>
        `;
        document.getElementById('hamburger-btn').addEventListener('click', () => this.toggleHamburgerMenu(true));
    },

    renderCurrentView() {
        switch (this.currentView) {
            case 'menu':
                this.renderMenu();
                break;
            case 'flashcard':
                this.renderFlashcard(this.currentModule);
                break;
            case 'quiz':
                this.renderQuiz(this.currentModule);
                break;
        }
    },

    renderMenu() {
        this.currentView = 'menu';
        const appContainer = document.getElementById('app-container');
        let menuHtml = `<h1 class="text-3xl font-bold text-center mb-8">${MESSAGES.get('mainMenu')}</h1>`;

        const colors = ['bg-blue-500', 'bg-teal-500', 'bg-purple-500', 'bg-red-500', 'bg-orange-500', 'bg-yellow-600'];

        menuHtml += `<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mx-auto w-fit">`;

        learningModules.forEach((module, index) => {
            const colorClass = colors[index % colors.length];
            const icon = module.icon || '📚'; // Placeholder icon
            const description = module.description || 'Expand your knowledge.'; // Placeholder description

            menuHtml += `
                <button class="${colorClass} text-white font-semibold w-44 h-44 py-6 px-4 rounded-xl shadow-lg transition duration-300 flex flex-col items-center justify-center text-center" data-module-id="${module.id}">
                    <h2 class="text-2xl mb-2">
                        <span class="mr-1">${String.fromCharCode(65 + index)}.</span>${module.name}
                    </h2>
                    <p class="text-base opacity-90">
                        ${description}
                    </p>
                </button>
            `;
        });
        menuHtml += `</div>`;

        appContainer.innerHTML = menuHtml;
        appContainer.classList.add('main-menu-active');

        document.querySelectorAll('[data-module-id]').forEach(button => {
            button.addEventListener('click', () => {
                const moduleId = button.dataset.moduleId;
                this.startModule(moduleId);
            });
        });
    },

    startModule(moduleId) {
        const module = learningModules.find(m => m.id === moduleId);
        switch (module.gameMode) {
            case 'flashcard':
                this.renderFlashcard(module);
                break;
            case 'quiz':
                this.renderQuiz(module);
                break;
            case 'completion':
                this.renderCompletion(module);
                break;
        }
    },

    addKeyboardListeners() {
        const modal = this.modal;
        const yesButton = this.yesButton;
        const noButton = this.noButton;

        yesButton.addEventListener('click', () => {
            auth.logout();
            this.toggleModal(false);
        });

        noButton.addEventListener('click', () => {
            this.toggleModal(false);
        });

        document.addEventListener('keydown', (e) => {
            if (!modal.classList.contains('hidden')) { // If modal is open
                if (e.key === 'Enter') {
                    yesButton.click();
                } else if (e.key === 'Escape') {
                    this.toggleModal(false); // Close modal on Escape
                }
            } else if (document.body.classList.contains('hamburger-menu-open')) { // If hamburger menu is open
                this.toggleHamburgerMenu(false); // Close hamburger menu on Escape
            } else { // Modal and hamburger menu are not open
                if (e.key === 'Escape') {
                    if (document.getElementById('app-container').classList.contains('main-menu-active')) {
                        this.toggleModal(true); // Show logout modal
                    } else {
                        this.renderMenu(); // Go back to main menu
                    }
                } else if (this.currentView === 'menu') { // Check if main menu is active
                    const pressedKey = e.key.toUpperCase();
                    const moduleButtons = document.querySelectorAll('[data-module-id]');
                    moduleButtons.forEach((button, index) => {
                        if (String.fromCharCode(65 + index) === pressedKey) {
                            button.click();
                        }
                    });
                } else if (this.currentView === 'flashcard') { // If flashcard is active
                    const flashcardSummaryContainer = document.getElementById('flashcard-summary-container');
                    if (flashcardSummaryContainer && e.key === 'Enter') {
                        document.getElementById('flashcard-summary-back-to-menu-btn').click();
                        return; // Exit early if summary handled
                    }

                    if (e.key === 'Enter') {
                        const card = document.querySelector('.card');
                        if (card && card.classList.contains('is-flipped')) {
                            if (game.flashcard.currentIndex === game.flashcard.moduleData.data.length - 1) {
                                game.showFlashcardSummary(game.flashcard.moduleData.data.length);
                            } else {
                                game.flashcard.next();
                            }
                        } else {
                            game.flashcard.flip();
                        }
                    } else if (e.key === 'Backspace') {
                        e.preventDefault();
                        game.flashcard.prev();
                    }
                } else if (this.currentView === 'quiz') { // If quiz is active
                    const quizSummaryContainer = document.getElementById('quiz-summary-container');
                    if (quizSummaryContainer && e.key === 'Enter') {
                        game.renderMenu(); // Go back to menu from summary
                        return; // Exit early if summary handled
                    }

                    const feedbackContainer = document.getElementById('feedback-container');
                    const optionsDisabled = document.querySelectorAll('[data-option][disabled]').length > 0;

                    if (e.key === 'Enter' && feedbackContainer && feedbackContainer.innerHTML !== '' && optionsDisabled) {
                        game.quiz.next();
                    } else if (e.key === 'Backspace') {
                        e.preventDefault();
                        game.quiz.prev();
                    } else {
                        const pressedKey = e.key.toUpperCase();
                        const optionLetters = ['A', 'B', 'C', 'D'];
                        const optionIndex = optionLetters.indexOf(pressedKey);
                        if (optionIndex !== -1) {
                            const options = document.querySelectorAll('[data-option]');
                            if (options[optionIndex]) {
                                options[optionIndex].click();
                            }
                        }
                    }
                } else if (this.currentView === 'completion') { // If completion is active
                    const completionSummaryContainer = document.getElementById('completion-summary-container');
                    if (completionSummaryContainer && e.key === 'Enter') {
                        document.querySelector('#completion-summary-container button').click(); // Click the back to menu button
                        return; // Exit early if summary handled
                    }

                    if (e.key === 'Enter') {
                        const inputElement = document.getElementById('completion-input');
                        if (inputElement && !inputElement.disabled) {
                            game.completion.handleAnswer();
                        } else {
                            game.completion.next();
                        }
                    } else if (e.key === 'Backspace') {
                        e.preventDefault();
                        game.completion.prev();
                    }
                }
            }
        });
    },

    flashcard: {
        currentIndex: 0,
        moduleData: null,
        appContainer: null,

        init(module) {
            this.currentIndex = 0;
            this.moduleData = module;
            this.appContainer = document.getElementById('app-container');
            this.render();
        },

        render() {
            const cardData = this.moduleData.data[this.currentIndex];
            this.appContainer.classList.remove('main-menu-active');
            this.appContainer.innerHTML = `
                <div class="max-w-2xl mx-auto">
                    <div class="text-center text-gray-600 mb-4">${this.currentIndex + 1} / ${this.moduleData.data.length}</div>
                    <div class="card h-64 w-full cursor-pointer" onclick="game.flashcard.flip()">
                        <div class="card-inner">
                            <div class="card-face card-face-front">
                                <p class="text-3xl">${cardData.en}</p>
                            </div>
                            <div class="card-face card-face-back">
                                <div>
                                    <p class="text-3xl font-bold">${cardData.es}</p>
                                    <p class="text-xl text-gray-500">${cardData.ipa}</p>
                                    <p class="mt-4 italic">"${cardData.example}"</p>
                                    <p class="text-gray-500 italic">"${cardData.example_es}"</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex justify-between mt-4">
                        <button id="prev-btn" class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l">
                            ${MESSAGES.get('prevButton')}
                        </button>
                        <button id="next-btn" class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r">
                            ${MESSAGES.get('nextButton')}
                        </button>
                    </div>
                     <button class="w-full mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg" onclick="game.renderMenu()">${MESSAGES.get('backToMenu')}</button>
                </div>
            `;

            document.getElementById('prev-btn').addEventListener('click', () => this.prev());
            document.getElementById('next-btn').addEventListener('click', () => this.next());
        },

        prev() {
            if (this.currentIndex > 0) {
                this.currentIndex--;
                this.render();
            }
        },

        next() {
            if (this.currentIndex < this.moduleData.data.length - 1) {
                this.currentIndex++;
                this.render();
            } else {
                game.showFlashcardSummary(this.moduleData.data.length);
            }
        },

        flip() {
            const card = this.appContainer.querySelector('.card');
            if (card) {
                card.classList.toggle('is-flipped');
            }
        }
    },

    renderFlashcard(module) {
        this.currentView = 'flashcard';
        this.flashcard.init(module);
    },

    showFlashcardSummary(totalCards) {
        const appContainer = document.getElementById('app-container');
        appContainer.classList.remove('main-menu-active');
        appContainer.innerHTML = `
            <div id="flashcard-summary-container" class="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md text-center">
                <h1 class="text-2xl font-bold mb-4">${MESSAGES.get('sessionScore')}</h1>
                <p class="text-xl mb-4">${MESSAGES.get('flashcardSummaryMessage').replace('{count}', totalCards)}</p>
                <button id="flashcard-summary-back-to-menu-btn" class="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg" onclick="game.renderMenu()">${MESSAGES.get('backToMenu')}</button>
            </div>
        `;
    },

    showLogoutConfirmation() {
        this.toggleModal(true);
    },

    quiz: {
        currentIndex: 0,
        sessionScore: { correct: 0, incorrect: 0 },
        history: [],
        moduleData: null,
        appContainer: null,

        init(module) {
            this.currentIndex = 0;
            this.sessionScore = { correct: 0, incorrect: 0 };
            this.history = [];
            this.moduleData = module;
            this.appContainer = document.getElementById('app-container');
            this.render();
        },

        render() {
            const questionData = this.moduleData.data[this.currentIndex];
            this.appContainer.classList.remove('main-menu-active');
            let optionsHtml = '';
            const optionLetters = ['A', 'B', 'C', 'D'];
            questionData.options.forEach((option, index) => {
                optionsHtml += `
                    <button class="w-full text-left bg-white hover:bg-gray-200 text-gray-800 font-semibold py-3 px-5 rounded-lg shadow-md transition duration-300 flex items-center" data-option="${option}">
                        <span class="font-bold mr-4">${optionLetters[index]}</span>
                        <span>${option}</span>
                    </button>
                `;
            });

            this.appContainer.innerHTML = `
                <div class="max-w-4xl mx-auto">
                    <div class="text-center text-gray-600 mb-4">${this.currentIndex + 1} / ${this.moduleData.data.length}</div>
                    <div class="text-center text-gray-600 mb-4">${MESSAGES.get('correct')}: ${this.sessionScore.correct} / ${MESSAGES.get('incorrect')}: ${this.sessionScore.incorrect}</div>
                    <div class="bg-white p-8 rounded-lg shadow-md">
                        <p class="text-2xl mb-6">${questionData.sentence.replace('______', '<u>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</u>')}</p>
                        <div id="options-container" class="grid grid-cols-1 md:grid-cols-2 gap-4">${optionsHtml}</div>
                        <div id="feedback-container" class="mt-6" style="min-height: 5rem;"></div>
                    </div>
                    <div class="flex justify-between mt-4">
                        <button id="undo-btn" class="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-lg">${MESSAGES.get('undoButton')}</button>
                        <div>
                            <button id="prev-btn" class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l">${MESSAGES.get('prevButton')}</button>
                            <button id="next-btn" class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r">${MESSAGES.get('nextButton')}</button>
                        </div>
                    </div>
                     <button class="w-full mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg" onclick="game.renderMenu()">${MESSAGES.get('backToMenu')}</button>
                </div>
            `;

            document.querySelectorAll('[data-option]').forEach(button => {
                button.addEventListener('click', (e) => this.handleAnswer(e.target.closest('[data-option]').dataset.option));
            });
            
            document.getElementById('prev-btn').addEventListener('click', () => this.prev());
            document.getElementById('next-btn').addEventListener('click', () => this.next());
            document.getElementById('undo-btn').addEventListener('click', () => this.undo());
        },

        handleAnswer(selectedOption) {
            const questionData = this.moduleData.data[this.currentIndex];
            const isCorrect = selectedOption === questionData.correct;
            this.history.push({ correct: isCorrect });

            if (isCorrect) {
                this.sessionScore.correct++;
                document.querySelector(`[data-option="${selectedOption}"]`).classList.add('bg-green-500', 'text-white');
            } else {
                this.sessionScore.incorrect++;
                document.querySelector(`[data-option="${selectedOption}"]`).classList.add('bg-red-500', 'text-white');
                document.querySelector(`[data-option="${questionData.correct}"]`).classList.add('bg-green-500', 'text-white');
            }
            
            document.getElementById('feedback-container').innerHTML = `<p class="text-lg">${questionData.explanation}</p>`;
            document.querySelectorAll('[data-option]').forEach(b => {
                b.disabled = true;
                b.classList.remove('hover:bg-gray-200');
            });
        },

        prev() {
            if (this.currentIndex > 0) {
                // If the current question has been answered, undo it before going back
                if (document.querySelectorAll('[data-option][disabled]').length > 0) {
                    this.undo();
                }
                this.currentIndex--;
                this.render();
            }
        },

        next() {
            if (this.currentIndex < this.moduleData.data.length - 1) {
                this.currentIndex++;
                this.render();
            } else {
                this.showFinalScore();
            }
        },

        undo() {
            const lastAction = this.history.pop();
            if (lastAction && !lastAction.correct) {
                this.sessionScore.incorrect--;
                this.render();
            } else if(lastAction) {
                this.history.push(lastAction);
            }
        },

        showFinalScore() {
            auth.updateGlobalScore(this.sessionScore);
            game.renderHeader();
            this.appContainer.innerHTML = `
                 <div id="quiz-summary-container" class="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md text-center">
                    <h1 class="text-2xl font-bold mb-4">${MESSAGES.get('sessionScore')}</h1>
                    <p class="text-xl mb-2">${MESSAGES.get('correct')}: ${this.sessionScore.correct}</p>
                    <p class="text-xl mb-4">${MESSAGES.get('incorrect')}: ${this.sessionScore.incorrect}</p>
                    <button class="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg" onclick="game.renderMenu()">${MESSAGES.get('backToMenu')}</button>
                 </div>
            `;
        }
    },

    renderQuiz(module) {
        this.currentView = 'quiz';
        this.quiz.init(module);
    },

    renderCompletion(module) {
        this.currentView = 'completion';
        this.completion.init(module);
    },

    completion: {
        currentIndex: 0,
        sessionScore: { correct: 0, incorrect: 0 },
        history: [],
        moduleData: null,
        appContainer: null,

        init(module) {
            this.currentIndex = 0;
            this.sessionScore = { correct: 0, incorrect: 0 };
            this.moduleData = module;
            this.appContainer = document.getElementById('app-container');
            this.render();
        },

        render() {
            const questionData = this.moduleData.data[this.currentIndex];
            this.appContainer.classList.remove('main-menu-active');
            this.appContainer.innerHTML = `
                <div class="max-w-2xl mx-auto">
                    <div class="text-center text-gray-600 mb-4">${this.currentIndex + 1} / ${this.moduleData.data.length}</div>
                    <div class="text-center text-gray-600 mb-4">${MESSAGES.get('correct')}: ${this.sessionScore.correct} / ${MESSAGES.get('incorrect')}: ${this.sessionScore.incorrect}</div>
                    <div class="bg-white p-8 rounded-lg shadow-md">
                        <p class="text-2xl mb-6">${questionData.sentence.replace('______', '<input type="text" id="completion-input" class="border-b-2 border-gray-400 focus:border-blue-500 outline-none text-center text-2xl" />')}</p>
                        <div id="feedback-container" class="mt-6" style="min-height: 5rem;"></div>
                    </div>
                    <div class="flex justify-between mt-4">
                        <button id="prev-btn" class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l">
                            ${MESSAGES.get('prevButton')}
                        </button>
                        <button id="next-btn" class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r">
                            ${MESSAGES.get('nextButton')}
                        </button>
                    </div>
                    <button class="w-full mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg" onclick="game.renderMenu()">${MESSAGES.get('backToMenu')}</button>
                </div>
            `;

            document.getElementById('prev-btn').addEventListener('click', () => this.prev());
            document.getElementById('next-btn').addEventListener('click', () => this.next());
            document.getElementById('undo-btn').addEventListener('click', () => this.undo());
            document.getElementById('completion-input').focus();
        },

        handleAnswer() {
            const inputElement = document.getElementById('completion-input');
            const userAnswer = inputElement.value.trim();
            const questionData = this.moduleData.data[this.currentIndex];
            const isCorrect = userAnswer.toLowerCase() === questionData.correct.toLowerCase();

            if (isCorrect) {
                this.sessionScore.correct++;
                inputElement.classList.add('text-green-500');
            } else {
                this.sessionScore.incorrect++;
                inputElement.classList.add('text-red-500');
                document.getElementById('feedback-container').innerHTML = `<p class="text-lg">Correct: ${questionData.correct}</p>`;
            }
            inputElement.disabled = true;
            this.updateScoreDisplay();
        },

        undo() {
            const lastAction = this.history.pop();
            if (lastAction) {
                if (lastAction.isCorrect) {
                    this.sessionScore.correct--;
                } else {
                    this.sessionScore.incorrect--;
                }
                this.currentIndex = lastAction.index;
                this.render();
            }
        },

        updateScoreDisplay() {
            const scoreDisplay = this.appContainer.querySelector('.text-center.text-gray-600.mb-4:last-of-type');
            if (scoreDisplay) {
                scoreDisplay.innerHTML = `${MESSAGES.get('correct')}: ${this.sessionScore.correct} / ${MESSAGES.get('incorrect')}: ${this.sessionScore.incorrect}`;
            }
        },

        prev() {
            if (this.currentIndex > 0) {
                this.currentIndex--;
                this.render();
            }
        },

        next() {
            if (this.currentIndex < this.moduleData.data.length - 1) {
                this.currentIndex++;
                this.render();
            } else {
                this.showFinalScore();
            }
        },

        showFinalScore() {
            auth.updateGlobalScore(this.sessionScore);
            game.renderHeader();
            this.appContainer.innerHTML = `
                 <div id="completion-summary-container" class="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md text-center">
                    <h1 class="text-2xl font-bold mb-4">${MESSAGES.get('sessionScore')}</h1>
                    <p class="text-xl mb-2">${MESSAGES.get('correct')}: ${this.sessionScore.correct}</p>
                    <p class="text-xl mb-4">${MESSAGES.get('incorrect')}: ${this.sessionScore.incorrect}</p>
                    <button id="completion-summary-back-to-menu-btn" class="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg" onclick="game.renderMenu()">$ {MESSAGES.get('backToMenu')}</button>
                 </div>
            `;
        }
    }
};