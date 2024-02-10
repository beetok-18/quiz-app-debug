// Declare questionsToDisplay at the global scope
let questionsToDisplay = [];

document.addEventListener('DOMContentLoaded', (event) => {
    const customizeCheckbox = document.getElementById('customTest');
    const customTestOptions = document.querySelector('.custom-test-options');
    const questionRange = document.getElementById('question-range');
    const questionValue = document.getElementById('question-value');
    const timeRange = document.getElementById('time-range');
    const timeValue = document.getElementById('time-value');
    const practiceButton = document.getElementById('practice-mode');
    const mainMenu = document.getElementById('main-menu');
    const quizContainer = document.querySelector('.quiz-container');

    questionRange.addEventListener('input', function() {
        questionValue.textContent = this.value;
    });

    timeRange.addEventListener('input', function() {
        const hours = Math.floor(this.value / 60);
        const minutes = this.value % 60;
        timeValue.textContent = `${hours}h ${minutes}m`;
    });

    customizeCheckbox.addEventListener('change', function() {
        customTestOptions.style.display = this.checked ? 'block' : 'none';
    });

    // Sample quiz bank (Replace with your actual quiz data)
    const quizBank = [
        {
            "chapter": "chapter0",
            "questions": [
                {
                    "question": "What is the principle of confidentiality in the CIA triad?",
                    "options": [
                        "Data should be accessible only to authorized users",
                        "Data should remain unchanged and unmodified",
                        "Authorized systems and services should be readily available",
                        "Data should be backed up on a regular basis"
                    ],
                    "answer": "Data should be accessible only to authorized users"
                },
                // ... more questions
            ]
        },
        // ... more chapters 
    ];

    practiceButton.addEventListener('click', function() {
        const selectedChapters = getSelectedChapters();
        const totalQuestions = parseInt(questionRange.value, 10);
        startQuiz(selectedChapters, totalQuestions);
    });

    function getSelectedChapters() {
        const selectedChapters = [];
        document.querySelectorAll('.chapter-option:checked').forEach((checkbox) => {
            selectedChapters.push(checkbox.id);
        });
        return selectedChapters;
    }

    function startQuiz(selectedChapters, totalQuestions) {
        mainMenu.style.display = 'none';
        quizContainer.style.display = 'block';
        loadQuestions(selectedChapters, totalQuestions);
    }

    function loadQuestions(selectedChapters, totalQuestions) {
        // Reset questionsToDisplay before loading new questions
        questionsToDisplay = []; 

        selectedChapters.forEach(chapterId => {
            const chapter = quizBank.find(ch => ch.chapter === chapterId);
            if (chapter) {
                questionsToDisplay = questionsToDisplay.concat(chapter.questions);
            }
        });

        // Here you may shuffle and limit the questionsToDisplay array as needed
        displayQuestion(0); // Start with the first question
    }

    let currentQuestionIndex = 0;

    function displayQuestion(index) {
        // Make sure index is within the bounds of the questionsToDisplay array
        if (index < 0 || index >= questionsToDisplay.length) {
            console.error("Question index is out of bounds.");
            return;
        }

        const questionObj = questionsToDisplay[index];
        const questionContainer = document.querySelector('.question-container');
        const questionText = document.querySelector('.question-text');
        const answerList = document.querySelector('.answer-list');

        // Update the question text
        questionText.textContent = questionObj.question;

        // Clear existing answers before adding new ones
        answerList.innerHTML = '';

        // Create answer options dynamically
        questionObj.options.forEach((option, idx) => {
            const optionElement = document.createElement('li');
            const radioButton = `<input type="radio" name="answer" id="option${idx}" value="${option}">
                                <label for="option${idx}">${option}</label>`;
            optionElement.innerHTML = radioButton;
            answerList.appendChild(optionElement);
        });
    }

    function nextQuestion() {
        if (currentQuestionIndex < questionsToDisplay.length - 1) {
            currentQuestionIndex++;
            displayQuestion(currentQuestionIndex);
        } else {
            alert('End of the quiz!');
        }
    }

    function prevQuestion() {
        if (currentQuestionIndex > 0) {
            currentQuestionIndex--;
            displayQuestion(currentQuestionIndex);
        }
    }

    document.getElementById('next-question').addEventListener('click', nextQuestion);
    document.getElementById('previous-question').addEventListener('click', prevQuestion);
});
