let currentQuestion = 1;
const totalQuestions = 3;

function showQuestion(questionNumber) {
    for (let i = 1; i <= totalQuestions; i++) {
        let questionDiv = document.getElementById("question" + i);
        questionDiv.style.display = i === questionNumber ? "block" : "none";
    }
    document.getElementById("submitButton").style.display = questionNumber === totalQuestions ? "block" : "none";
}

function changeQuestion(direction) {
    currentQuestion += direction;
    if (currentQuestion < 1) {
        currentQuestion = 1;
    } else if (currentQuestion > totalQuestions) {
        currentQuestion = totalQuestions;
    }
    showQuestion(currentQuestion);
}

function displayResults() {
    // Logic to calculate and display results
    // For now, just displaying a simple message
    document.getElementById('result').textContent = "You have completed the test.";
}

// Initially show the first question
showQuestion(currentQuestion);
