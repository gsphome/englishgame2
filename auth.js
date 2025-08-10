const auth = {
    user: null,

    init() {
        
        // Set initial language (e.g., from localStorage or default)
        const savedLang = localStorage.getItem('appLang');
        
        if (savedLang) {
            MESSAGES.setLanguage(savedLang);
        } else {
            MESSAGES.setLanguage('en'); // Default to English
        }

        this.user = JSON.parse(localStorage.getItem('user'));

        MESSAGES.addListener(() => {
            if (!this.user) {
                this.renderLogin();
            }
        });

        if (!this.user) {
            this.renderLogin();
        } else {
            game.init();
        }
    },

    renderLogin() {
        
        const appContainer = document.getElementById('app-container');
        appContainer.innerHTML = `
            <div class="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md text-center">
                <h1 class="text-2xl font-bold mb-4">${MESSAGES.get('loginTitle')}</h1>
                <input type="text" id="username-input" class="w-full px-4 py-2 border rounded-lg mb-4" placeholder="${MESSAGES.get('usernamePlaceholder')}">
                <button id="login-btn" class="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg">${MESSAGES.get('loginButton')}</button>
            </div>
        `;
        

        document.getElementById('login-btn').addEventListener('click', () => {
            const username = document.getElementById('username-input').value.trim();
            if (username) {
                this.login(username);
            }
        });

        document.getElementById('username-input').addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                document.getElementById('login-btn').click();
            }
        });

        // Set focus on the username input field
        document.getElementById('username-input').focus();
    },

    login(username) {
        this.user = {
            username,
            globalScore: { correct: 0, incorrect: 0 }
        };
        localStorage.setItem('user', JSON.stringify(this.user));
        game.init();
    },

    logout() {
        localStorage.removeItem('user');
        location.reload();
    },

    getUser() {
        return this.user;
    },

    updateGlobalScore(sessionScore) {
        this.user.globalScore.correct += sessionScore.correct;
        this.user.globalScore.incorrect += sessionScore.incorrect;
        localStorage.setItem('user', JSON.stringify(this.user));
    }
};

document.addEventListener('DOMContentLoaded', () => auth.init());