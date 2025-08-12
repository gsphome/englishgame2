const MESSAGES = {
    _currentLanguage: 'en', // Default language
    _listeners: [],

    es: {
        loginTitle: "Bienvenido",
        loginButton: "Iniciar Sesión",
        logoutButton: "Cerrar Sesión",
        globalScore: "Puntaje Global",
        mainMenu: "Menú Principal",
        nextButton: "Siguiente",
        prevButton: "Anterior",
        undoButton: "Deshacer",
        backToMenu: "Volver al Menú",
        sessionScore: "Puntaje de la Sesión",
        correct: "Correcto",
        incorrect: "Incorrecto",
        confirmLogout: "Confirmar Cierre de Sesión",
        confirmLogoutMessage: "¿Estás seguro de que quieres cerrar sesión?",
        flashcardSummaryMessage: "¡Felicidades! Has estudiado {count} tarjetas.",
        usernamePlaceholder: "Ingresa tu nombre",
        randomMode: "Modo Aleatorio",
        sortingGameTitle: "Juego de Clasificación de Palabras",
        checkButton: "Comprobar",
        allCorrectMessage: "¡Todo correcto! ¡Bien hecho!",
        lightMode: "Modo Claro",
        darkMode: "Modo Oscuro",
        footerWeb: "&copy; Genil Suarez - 2025 Advanced Learning App",
        footerMobile: "&copy; Genil Suarez"
    },
    en: {
        loginTitle: "Welcome",
        loginButton: "Login",
        logoutButton: "Logout",
        globalScore: "Global Score",
        mainMenu: "Main Menu",
        nextButton: "Next",
        prevButton: "Previous",
        undoButton: "Undo",
        backToMenu: "Back to Menu",
        sessionScore: "Session Score",
        correct: "Correct",
        incorrect: "Incorrect",
        confirmLogout: "Confirm Logout",
        confirmLogoutMessage: "Are you sure you want to logout?",
        flashcardSummaryMessage: "Congratulations! You have studied {count} cards.",
        usernamePlaceholder: "Enter your name",
        randomMode: "Random Mode",
        sortingGameTitle: "Word Sorting Game",
        checkButton: "Check",
        allCorrectMessage: "All correct! Well done!",
        lightMode: "Light Mode",
        darkMode: "Dark Mode",
        footerWeb: "&copy; Genil Suarez - 2025 Advanced Learning App",
        footerMobile: "&copy; Genil Suarez"
    },

    get(key) {
        return this[this._currentLanguage][key];
    },

    setLanguage(lang) {
        if (this[lang]) {
            this._currentLanguage = lang;
            this._listeners.forEach(listener => listener(lang));
        }
    },

    getLanguage() {
        return this._currentLanguage;
    },

    addListener(listener) {
        this._listeners.push(listener);
    }
};
