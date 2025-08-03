const game = {
    init() {
        this.renderHeader();
        this.renderMenu();
        this.addKeyboardListeners();
    },

    renderHeader() {
        const header = document.getElementById('main-header');
        const user = auth.getUser();
        header.innerHTML = `
            <div class="container mx-auto flex justify-between items-center p-4">
                <div class="font-bold text-xl">${user.username}</div>
                <div id="global-score" class="text-lg">${MESSAGES.en.globalScore}: ${user.globalScore.correct} / ${user.globalScore.incorrect}</div>
                <button id="logout-btn" class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg">${MESSAGES.en.logoutButton}</button>
            </div>
        `;
        document.getElementById('logout-btn').addEventListener('click', () => auth.logout());
    },

    renderMenu() {
        const appContainer = document.getElementById('app-container');
        let menuHtml = `<h1 class="text-3xl font-bold text-center mb-8">${MESSAGES.en.mainMenu}</h1>`;

        const colors = ['bg-blue-500', 'bg-teal-500', 'bg-purple-500', 'bg-red-500', 'bg-orange-500', 'bg-yellow-600'];

        menuHtml += `<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mx-auto w-fit">`;

        learningModules.forEach((module, index) => {
            const colorClass = colors[index % colors.length];
            const icon = module.icon || '📚'; // Placeholder icon
            const description = module.description || 'Expand your knowledge.'; // Placeholder description

            menuHtml += `
                <button class="${colorClass} text-white font-semibold w-44 h-44 py-6 px-4 rounded-xl shadow-lg transition duration-300 flex flex-col items-center justify-center text-center" data-module-id="${module.id}">
                    <div class="text-4xl mb-2">${String.fromCharCode(65 + index)}</div>
                    <h2 class="text-2xl font-bold mb-1">${module.name}</h2>
                    <p class="text-lg opacity-90">${description}</p>
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
            case 'completion':
                this.renderQuiz(module);
                break;
        }
    },

    addKeyboardListeners() {
        const modal = document.getElementById('confirmation-modal');
        const yesButton = document.getElementById('confirm-yes');
        const noButton = document.getElementById('confirm-no');
        const messageElement = document.getElementById('confirmation-message');

        const toggleModal = (show) => {
            modal.classList.toggle('hidden', !show);
            if (show) {
                messageElement.textContent = MESSAGES.en.confirmLogoutMessage;
            }
        };

        yesButton.addEventListener('click', () => {
            auth.logout();
            toggleModal(false);
        });

        noButton.addEventListener('click', () => {
            toggleModal(false);
        });

        document.addEventListener('keydown', (e) => {
            if (!modal.classList.contains('hidden')) { // If modal is open
                if (e.key === 'Enter') {
                    yesButton.click();
                } else if (e.key === 'Escape') {
                    toggleModal(false); // Close modal on Escape
                }
            } else { // Modal is not open
                if (e.key === 'Escape') {
                    if (document.getElementById('app-container').classList.contains('main-menu-active')) {
                        toggleModal(true); // Show logout modal
                    } else {
                        this.renderMenu(); // Go back to main menu
                    }
                } else if (e.key === 'Enter') {
                    const appContainer = document.getElementById('app-container');
                    if (appContainer.querySelector('.card')) { // If flashcard is active
                        const card = appContainer.querySelector('.card');
                        if (card.classList.contains('is-flipped')) {
                            document.getElementById('next-btn').click();
                        } else {
                            card.classList.add('is-flipped');
                        }
                    } else if (appContainer.classList.contains('main-menu-active')) { // Check if main menu is active
                        const pressedKey = e.key.toUpperCase();
                        const moduleButtons = document.querySelectorAll('[data-module-id]');
                        moduleButtons.forEach((button, index) => {
                            if (String.fromCharCode(65 + index) === pressedKey) {
                                button.click();
                            }
                        });
                    }
                }
            }
        });
    },

    renderFlashcard(module) {
        let currentIndex = 0;
        const appContainer = document.getElementById('app-container');

        const renderCurrentCard = () => {
            const cardData = module.data[currentIndex];
            appContainer.classList.remove('main-menu-active');
            appContainer.innerHTML = `
                <div class="max-w-2xl mx-auto">
                    <div class="card h-64 w-full cursor-pointer" onclick="this.classList.toggle('is-flipped')">
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
                            ${MESSAGES.en.prevButton}
                        </button>
                        <button id="next-btn" class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r">
                            ${MESSAGES.en.nextButton}
                        </button>
                    </div>
                     <button class="w-full mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg" onclick="game.renderMenu()">${MESSAGES.en.backToMenu}</button>
                </div>
            `;

            document.getElementById('prev-btn').addEventListener('click', () => {
                currentIndex = (currentIndex - 1 + module.data.length) % module.data.length;
                renderCurrentCard();
            });

            document.getElementById('next-btn').addEventListener('click', () => {
                currentIndex = (currentIndex + 1) % module.data.length;
                renderCurrentCard();
            });
        };

        renderCurrentCard();
    },

    renderQuiz(module) {
        let currentIndex = 0;
        let sessionScore = { correct: 0, incorrect: 0 };
        let history = [];
        const appContainer = document.getElementById('app-container');

        const renderCurrentQuestion = () => {
            const questionData = module.data[currentIndex];
            appContainer.classList.remove('main-menu-active');
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

            appContainer.innerHTML = `
                <div class="max-w-4xl mx-auto">
                    <div class="bg-white p-8 rounded-lg shadow-md">
                        <p class="text-2xl mb-6">${questionData.sentence.replace('______', '<u>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</u>')}</p>
                        <div id="options-container" class="grid grid-cols-1 md:grid-cols-2 gap-4">${optionsHtml}</div>
                        <div id="feedback-container" class="mt-6"></div>
                    </div>
                    <div class="flex justify-between mt-4">
                        <button id="undo-btn" class="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-lg">${MESSAGES.en.undoButton}</button>
                        <div>
                            <button id="prev-btn" class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l">${MESSAGES.en.prevButton}</button>
                            <button id="next-btn" class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r">${MESSAGES.en.nextButton}</button>
                        </div>
                    </div>
                     <button class="w-full mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg" onclick="game.renderMenu()">${MESSAGES.en.backToMenu}</button>
                </div>
            `;

            document.querySelectorAll('[data-option]').forEach(button => {
                button.addEventListener('click', () => handleAnswer(button.dataset.option));
            });
            
            document.getElementById('prev-btn').addEventListener('click', () => {
                if (currentIndex > 0) {
                    currentIndex--;
                    renderCurrentQuestion();
                }
            });

            document.getElementById('next-btn').addEventListener('click', () => {
                 if (currentIndex < module.data.length - 1) {
                    currentIndex++;
                    renderCurrentQuestion();
                } else {
                    showFinalScore();
                }
            });
            
            document.getElementById('undo-btn').addEventListener('click', () => {
                const lastAction = history.pop();
                if (lastAction && !lastAction.correct) {
                    sessionScore.incorrect--;
                    renderCurrentQuestion();
                } else if(lastAction) {
                    history.push(lastAction);
                }
            });
        };

        const handleAnswer = (selectedOption) => {
            const questionData = module.data[currentIndex];
            const isCorrect = selectedOption === questionData.correct;
            history.push({ correct: isCorrect });

            if (isCorrect) {
                sessionScore.correct++;
                document.querySelector(`[data-option="${selectedOption}"]`).classList.add('bg-green-500', 'text-white');
            } else {
                sessionScore.incorrect++;
                document.querySelector(`[data-option="${selectedOption}"]`).classList.add('bg-red-500', 'text-white');
                document.querySelector(`[data-option="${questionData.correct}"]`).classList.add('bg-green-500', 'text-white');
            }
            
            document.getElementById('feedback-container').innerHTML = `<p class="text-lg">${questionData.explanation}</p>`;
            document.querySelectorAll('[data-option]').forEach(b => b.disabled = true);
        };
        
        const showFinalScore = () => {
            auth.updateGlobalScore(sessionScore);
            this.renderHeader();
            appContainer.innerHTML = `
                 <div class="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md text-center">
                    <h1 class="text-2xl font-bold mb-4">${MESSAGES.en.sessionScore}</h1>
                    <p class="text-xl mb-2">${MESSAGES.en.correct}: ${sessionScore.correct}</p>
                    <p class="text-xl mb-4">${MESSAGES.en.incorrect}: ${sessionScore.incorrect}</p>
                    <button class="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg" onclick="game.renderMenu()">${MESSAGES.en.backToMenu}</button>
                 </div>
            `;
        }

        renderCurrentQuestion();
    }
};