const questions = [
    {
        question: "1. Which HTML tag is used to embed JavaScript?",
        answers: [
            { text: "<javascript>", correct: false },
            { text: "<script>", correct: true },
            { text: "<js>", correct: false },
            { text: "<code>", correct: false }
        ]
    },
    {
        question: "2. What is the default position value in CSS?",
        answers: [
            { text: "absolute", correct: false },
            { text: "relative", correct: false },
            { text: "static", correct: true },
            { text: "fixed", correct: false }
        ]
    },
    {
        question: "3. What will typeof null return in JavaScript?",
        answers: [
            { text: "null", correct: false },
            { text: "undefined", correct: false },
            { text: "object", correct: true },
            { text: "number", correct: false }
        ]
    },
    {
        question: "4. Which method converts JSON into a JavaScript object?",
        answers: [
            { text: "JSON.stringify()", correct: false },
            { text: "JSON.parse()", correct: true },
            { text: "JSON.convert()", correct: false },
            { text: "JSON.toObject()", correct: false }
        ]
    },
    {
        question: "5. Which normal form removes partial dependency?",
        answers: [
            { text: "1NF", correct: false },
            { text: "2NF", correct: true },
            { text: "3NF", correct: false },
            { text: "BCNF", correct: false }
        ]
    },
    {
        question: "6. Which scheduling algorithm uses time slices?",
        answers: [
            { text: "FCFS", correct: false },
            { text: "SJF", correct: false },
            { text: "Round Robin", correct: true },
            { text: "Priority", correct: false }
        ]
    },
    {
        question: "7. What is the time complexity of binary search?",
        answers: [
            { text: "O(n)", correct: false },
            { text: "O(log n)", correct: true },
            { text: "O(n²)", correct: false },
            { text: "O(1)", correct: false }
        ]
    },
    {
        question: "8. Which data structure follows FIFO?",
        answers: [
            { text: "Stack", correct: false },
            { text: "Queue", correct: true },
            { text: "Tree", correct: false },
            { text: "Graph", correct: false }
        ]
    },
    {
        question: "9. Which keyword declares a variable in JavaScript?",
        answers: [
            { text: "var", correct: true },
            { text: "int", correct: false },
            { text: "let()", correct: false },
            { text: "define", correct: false }
        ]
    },
    {
        question: "10. Which data type is not primitive in JavaScript?",
        answers: [
            { text: "string", correct: false },
            { text: "number", correct: false },
            { text: "object", correct: true },
            { text: "boolean", correct: false }
        ]
    }
];

// DOM Elements
const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const startBtn = document.getElementById('start-btn');
const questionElement = document.querySelector(".question");
const optionsElement = document.querySelector(".options");
const nextBtn = document.querySelector(".next-btn");

// Variables
let currentQuestionIndex = 0;
let score = 0;

// Start Quiz
startBtn.addEventListener('click', startQuiz);

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    startScreen.style.display = 'none';
    quizScreen.style.display = 'block';
    nextBtn.innerHTML = "Next";
    nextBtn.style.display = "none";
    showQuestion();
}

// Show Question
function showQuestion() {
    resetState();

    const currentQuestion = questions[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("option");
        button.dataset.correct = answer.correct;

        button.addEventListener("click", selectAnswer);
        optionsElement.appendChild(button);
    });
}

// Reset State
function resetState() {
    nextBtn.style.display = "none";
    optionsElement.innerHTML = "";
}

// Select Answer
function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";

    Array.from(optionsElement.children).forEach(button => {
        button.disabled = true;

        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
    });

    if (isCorrect) {
        score++;
        selectedBtn.classList.add("correct");
    } else {
        selectedBtn.classList.add("incorrect");
    }

    nextBtn.style.display = "block";
}

// Show Score
function showScore() {
    resetState();

    const percentage = Math.round((score / questions.length) * 100);

    questionElement.innerHTML = `
        <h2>Your Score: ${score}/${questions.length}</h2>
        <p>${percentage}%</p>
    `;

    nextBtn.innerText = "Play Again";
    nextBtn.style.display = "block";
}

// Next Button
function handleNextButton() {
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextBtn.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startScreen.style.display = 'block';
        quizScreen.style.display = 'none';
    }
});