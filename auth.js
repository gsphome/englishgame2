const auth = {
    user: null,

    init() {
        this.user = JSON.parse(localStorage.getItem('user'));
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
                <h1 class="text-2xl font-bold mb-4">${MESSAGES.en.loginTitle}</h1>
                <input type="text" id="username-input" class="w-full px-4 py-2 border rounded-lg mb-4" placeholder="Enter your name">
                <button id="login-btn" class="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg">${MESSAGES.en.loginButton}</button>
            </div>
        `;

        document.getElementById('login-btn').addEventListener('click', () => {
            const username = document.getElementById('username-input').value.trim();
            if (username) {
                this.login(username);
            }
        });
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