const learningModules = [
    {
        id: 'vocab-general',
        name: 'General Vocabulary',
        gameMode: 'flashcard',
        data: [
            { en: "Hello", es: "Hola", ipa: "/həˈloʊ/", example: "Hello, how are you?", example_es: "Hola, ¿cómo estás?" },
            { en: "Goodbye", es: "Adiós", ipa: "/ɡʊdˈbaɪ/", example: "It's time to say goodbye.", example_es: "Es hora de decir adiós." },
            { en: "Thank you", es: "Gracias", ipa: "/θæŋk juː/", example: "Thank you for your help.", example_es: "Gracias por tu ayuda." },
            { en: "Sorry", es: "Lo siento", ipa: "/ˈsɒri/", example: "I'm sorry for being late.", example_es: "Siento llegar tarde." },
        ]
    },
    {
        id: 'quiz-phrasal-verbs',
        name: 'Phrasal Verbs Quiz',
        gameMode: 'quiz',
        data: [
            {
                sentence: "She will look ______ the kids tomorrow.",
                options: ["after", "for", "up", "at"],
                correct: "after",
                explanation: "'To look after' means to take care of someone or something."
            },
            {
                sentence: "I need to give ______ smoking.",
                options: ["up", "in", "away", "off"],
                correct: "up",
                explanation: "'To give up' means to quit a habit."
            },
            {
                sentence: "He decided to take ______ a new hobby.",
                options: ["on", "up", "over", "in"],
                correct: "up",
                explanation: "'To take up' means to start a new activity."
            }
        ]
    },
    {
        id: 'completion-used-to',
        name: 'Grammar: Used To',
        gameMode: 'completion',
        data: [
            {
                sentence: "I ______ live in a small town.",
                options: ["used to", "use to", "am used to", "was using to"],
                correct: "used to",
                explanation: "'Used to' is used to talk about past habits or states that are no longer true."
            },
            {
                sentence: "She ______ be very shy as a child.",
                options: ["used to", "use to", "is used to", "has used to"],
                correct: "used to",
                explanation: "'Used to' is followed by the base form of the verb."
            }
        ]
    },
    {
        id: 'idioms-quiz',
        name: 'Idioms Quiz',
        gameMode: 'quiz',
        data: [
            {
                sentence: "It's raining cats and ______.",
                options: ["dogs", "mice", "birds", "fish"],
                correct: "dogs",
                explanation: "'Raining cats and dogs' means it's raining very heavily."
            },
            {
                sentence: "Don't cry over spilt ______.",
                options: ["milk", "water", "juice", "wine"],
                correct: "milk",
                explanation: "'Don't cry over spilt milk' means there's no use in being upset over something that has already happened and cannot be changed."
            }
        ]
    }
];