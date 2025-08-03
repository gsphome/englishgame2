# Advanced Learning App

## Description

This is a web-based application for learning languages, built with modern web technologies. It provides a dynamic and interactive user experience for learning vocabulary, grammar, and more.

## Key Features

*   **Login System:** User progress is saved using `localStorage`.
*   **Global Score:** Tracks the user's overall performance across all learning modules.
*   **Keyboard Navigation:** Full control of the application using the keyboard.
*   **Dynamic Content:** The application's content is generated dynamically from the `game-db.js` file.
*   **Multiple Game Modes:** Includes flashcards, quizzes, and sentence completion exercises.

## How to Add New Learning Modules

To add new content to the application, you need to modify the `game-db.js` file. This file contains an array called `learningModules`.

1.  **Open `game-db.js`:** Locate the `learningModules` array.
2.  **Add a New Module Object:** Add a new object to the array with the following structure:

    ```javascript
    {
        id: 'unique-id', // A unique identifier for the module
        name: 'Module Name', // The name to be displayed in the menu
        gameMode: 'flashcard' | 'quiz' | 'completion', // The type of game
        data: [ /* ... content ... */ ] // An array of data for the module
    }
    ```

3.  **Provide Data for the Module:** The structure of the `data` array depends on the `gameMode`:

    *   For `flashcard` mode:

        ```javascript
        { en: "Word", es: "Palabra", ipa: "/pron/", example: "...", example_es: "..." }
        ```

    *   For `quiz` and `completion` modes:

        ```javascript
        { sentence: "...", options: ["...", "..."], correct: "...", explanation: "..." }
        ```

4.  **Save the File:** The new module will be automatically available in the application.