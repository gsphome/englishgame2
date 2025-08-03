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
        const groupedModules = learningModules.reduce((acc, module) => {
            if (!acc[module.gameMode]) {
                acc[module.gameMode] = [];
            }
            acc[module.gameMode].push(module);
            return acc;
        }, {});

        let menuHtml = `<h1 class="text-3xl font-bold text-center mb-8">${MESSAGES.en.mainMenu}</h1>`;

        const gameModeOrder = ['quiz', 'flashcard', 'completion'];
        const quizModuleOrder = ['quiz-phrasal-verbs', 'idioms-quiz'];

        menuHtml += `<div class="flex flex-row justify-around gap-8">`; // Container for horizontal categories

        gameModeOrder.forEach(gameMode => {
            if (groupedModules[gameMode]) {
                menuHtml += `<div class="flex flex-col items-center">`; // Each category section as a column
                menuHtml += `<h2 class="text-2xl font-semibold mt-6 mb-4 capitalize">${gameMode}s</h2>`;
                menuHtml += `<div class="flex flex-col gap-4">`; // Modules within category as a column

                let modulesToRender = groupedModules[gameMode];

                if (gameMode === 'quiz') {
                    modulesToRender.sort((a, b) => {
                        return quizModuleOrder.indexOf(a.id) - quizModuleOrder.indexOf(b.id);
                    });
                }

                modulesToRender.forEach(module => {
                    menuHtml += `
                        <button class="bg-white hover:bg-gray-200 text-gray-800 font-semibold py-4 px-6 rounded-lg shadow-md transition duration-300" data-module-id="${module.id}">
                            ${module.name}
                        </button>
                    `;
                });
                menuHtml += `</div>`; // Close modules div
                menuHtml += `</div>`; // Close category section div
            }
        });
        menuHtml += `</div>`; // Close horizontal categories container

        appContainer.innerHTML = menuHtml;

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
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.renderMenu();
            }
        });
    },

    renderFlashcard(module) {
        let currentIndex = 0;
        const appContainer = document.getElementById('app-container');

        const renderCurrentCard = () => {
            const cardData = module.data[currentIndex];
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