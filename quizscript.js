const questions = [
    {
        question: "When was Ulysses S. Grant born?",
        options: ["1822", "1823", "1824", "1825"],
        correctAnswer: "1822"
    },
    {
        question: "What role did Grant play during the American Civil War?",
        options: ["Union General", "Confederate General", "President of the United States", "Ambassador"],
        correctAnswer: "Union General"
    },
    {
        question: "Where did General Grant accept the Confederate surrender in 1865?",
        options: ["Appomattox Court House", "Gettysburg", "Washington D.C.", "New York"],
        correctAnswer: "Appomattox Court House"
    },
    {
        question: "What was the name of Grant's wife?",
        options: ["Julia Dent", "Mary Todd", "Ellen Wilson", "Martha Washington"],
        correctAnswer: "Julia Dent"
    },
    {
        question: "Which U.S. president did Grant succeed?",
        options: ["Andrew Johnson", "Abraham Lincoln", "Franklin Pierce", "James Buchanan"],
        correctAnswer: "Andrew Johnson"
    },
    {
        question: "What is Ulysses S. Grant’s middle name?",
        options: ["Samuel", "Sidney", "Simpson", "Samuelson"],
        correctAnswer: "Simpson"
    },
    {
        question: "Which major international event took place during Grant's presidency?",
        options: ["The Spanish-American War", "he Treaty of Paris (ending the Civil War)", "The Great Chicago Fire", "The completion of the Transcontinental Railroad"],
        correctAnswer: "The completion of the Transcontinental Railroad"
    },
    {
        question: "What year did Ulysses S. Grant become the 18th President of the United States?",
        options: ["1868", "1869", "1870", "1871"],
        correctAnswer: "1869"
    },
    {
        question: "Which battle is considered the turning point of the Civil War for Grant?",
        options: ["Battle of Gettysburg", "Battle of Shiloh", "Battle of Vicksburg", "Battle of Antietam"],
        correctAnswer: "Battle of Vicksburg"
    },
    {
        question: "What military rank did Ulysses S. Grant hold at the end of the Civil War?",
        options: ["Major General", "Lieutenant General", "Colonel", "General of the Army"],
        correctAnswer: "General of the Army"
    }

];

let currentQuestionIndex = 0;

const questionContainer = document.getElementById("question-container");
const nextButton = document.getElementById("next-question-btn");
const resultContainer = document.getElementById("result");

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    let htmlContent = "<p>" + currentQuestion.question + "</p>";

    currentQuestion.options.forEach(function(option, index) {
        htmlContent += '<label>' +
            '<input type="radio" name="answer" value="' + option + '" id="option' + index + '">' +
            option +
            '</label><br>';
    });
   
    questionContainer.innerHTML = htmlContent;

    resultContainer.textContent = '';
}
function checkAnswer() {
    const selectedOption = document.querySelector('input[name="answer"]:checked');

    if (!selectedOption) {
        resultContainer.textContent = "Please select an answer!";
        resultContainer.style.color = "red";
        return false;
    }

    const userAnswer = selectedOption.value;
    const correctAnswer = questions[currentQuestionIndex].correctAnswer;

    if (userAnswer === correctAnswer) {
        resultContainer.textContent = "Correct! Well done!";
        resultContainer.style.color = "green";
    } else {
        resultContainer.textContent = "Incorrect! The correct answer was: " + correctAnswer;
        resultContainer.style.color = "red";
    }

    return true;
}

document.addEventListener('change', function(event) {
    if (event.target.name === 'answer') {
        checkAnswer();  
    }
});
nextButton.addEventListener("click", function () {
    if (currentQuestionIndex === questions.length) {
        resetQuiz();
    } else {
        const isAnswerCorrect = checkAnswer();

        if (isAnswerCorrect) {
            currentQuestionIndex++;
            if (currentQuestionIndex < questions.length) {
                loadQuestion();
                resultContainer.textContent = "";  
            } else {
                resultContainer.textContent = "You have completed the quiz. Click the button to restart.";
                resultContainer.style.color = "blue";
                nextButton.textContent = "Restart Quiz";
            }
        }
    }
});

function resetQuiz() {
    currentQuestionIndex = 0;
    nextButton.textContent = "Next Question"; 
    loadQuestion();
    resultContainer.textContent = ""; 
    nextButton.disabled = false; 
}
loadQuestion();
