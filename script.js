const quiz = [
    {
        question: "What does HTML stand for?",
        ans1text: "HyperText Markup Language",
        ans2text: "HyperText Machine Language",
        ans3text: "HighText Markup Language",
        ans4text: "HyperLink Markup Language",
        answer: "HyperText Markup Language"
    },
    {
        question: "Which of the following is the correct syntax for linking an external CSS file?",
        ans1text: '<link rel="stylesheet" href="style.css">',
        ans2text: '<css src="style.css">',
        ans3text: '<link src="style.css">',
        ans4text: '<style src="style.css">',
        answer: '<link rel="stylesheet" href="style.css">'
    },
    {
        question: "What does the 'box-sizing' property do in CSS?",
        ans1text: "Defines how the total width and height of an element is calculated",
        ans2text: "Changes the font size",
        ans3text: "Sets the background color of an element",
        ans4text: "Controls the visibility of an element",
        answer: "Defines how the total width and height of an element is calculated"
    },
    {
        question: "Which HTML element is used to specify a footer for a document or section?",
        ans1text: "<footer>",
        ans2text: "<bottom>",
        ans3text: "<section>",
        ans4text: "<end>",
        answer: "<footer>"
    },
    {
        question: "In JavaScript, which keyword is used to declare a constant?",
        ans1text: "const",
        ans2text: "let",
        ans3text: "var",
        ans4text: "constant",
        answer: "const"
    },
    {
        question: "What does 'NaN' stand for in JavaScript?",
        ans1text: "Not a Number",
        ans2text: "New and Needed",
        ans3text: "Not a Node",
        ans4text: "None of the Above",
        answer: "Not a Number"
    },
    {
        question: "Which property is used in CSS to change the text color?",
        ans1text: "color",
        ans2text: "font-color",
        ans3text: "text-color",
        ans4text: "text-style",
        answer: "color"
    },
    {
        question: "How do you select an element with the id 'main' in JavaScript?",
        ans1text: "document.getElementById('main')",
        ans2text: "document.getElementByClass('main')",
        ans3text: "getElementById('main')",
        ans4text: "selectElementById('main')",
        answer: "document.getElementById('main')"
    },
    {
        question: "What is the correct JavaScript syntax to change the content of the HTML element with id 'demo'?",
        ans1text: "document.getElementById('demo').innerHTML = 'Hello World!'",
        ans2text: "document.getElementById('demo').textContent = 'Hello World!'",
        ans3text: "document.getElementById('demo').innerText = 'Hello World!'",
        ans4text: "All of the above",
        answer: "All of the above"
    },
    {
        question: "Which property is used to change the font size of an element in CSS?",
        ans1text: "font-size",
        ans2text: "text-size",
        ans3text: "font-style",
        ans4text: "text-font",
        answer: "font-size"
    }
];

const questionElement = document.getElementById("quiz-question");
const option_a = document.getElementById("text_option_a");
const option_b = document.getElementById("text_option_b");
const option_c = document.getElementById("text_option_c");
const option_d = document.getElementById("text_option_d");
const submit = document.getElementById("submit");

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    const allAnswers = document.querySelectorAll('input[name="quiz-options"]');
    allAnswers.forEach(option => option.checked = false);
    
    questionElement.textContent = quiz[currentQuestion].question;
    option_a.textContent = quiz[currentQuestion].ans1text;
    option_b.textContent = quiz[currentQuestion].ans2text;
    option_c.textContent = quiz[currentQuestion].ans3text;
    option_d.textContent = quiz[currentQuestion].ans4text;
}

loadQuestion();

submit.addEventListener("click", () => {
    const checkedAns = document.querySelector('input[type="radio"]:checked');
    if (checkedAns === null) {
        alert("Please Select an Answer");
    } else {
        const selectedAnswerText = checkedAns.nextElementSibling.textContent;
        if (selectedAnswerText === quiz[currentQuestion].answer) {
            score++;
        }

        const feedback = selectedAnswerText === quiz[currentQuestion].answer ? 'Correct!' : 'Wrong!';
        alert(feedback);

        currentQuestion++;

        if (currentQuestion < quiz.length) {
            loadQuestion();
        } else {

            localStorage.setItem("quizScore", score);
            window.location.href = "score.html";
        }
    }
});
