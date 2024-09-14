const questions = [
    "I tuoi desideri piu' belli che vorresti che si esaudissero?",
    "Cosa ti renderebbe felice al momento ora?",
    "Cosa ti piacerebbe che avessi o accadesse nel futuro che ti renderebbe felice?",
    "C'e' qualcosa che io possa fare per renderti felice ora, domani e in futuro?",
    "C'e' qualcosa che ti tieni dentro e che vorresti dirmi? Qualsiasi cosa che non hai mai avuto il coraggio per paura.",
    "Dimmi cosa pensi dei nostri momenti"
];

let currentQuestion = 0;
let answers = [];

// Function to show the next question with animation
function showNextQuestion() {
    const questionElem = document.getElementById('question');
    questionElem.classList.remove('fade-in');

    setTimeout(() => {
        questionElem.textContent = questions[currentQuestion];
        questionElem.classList.add('fade-in');
    }, 300);
}

// Set the first question with animation
showNextQuestion();

document.getElementById('nextButton').addEventListener('click', function() {
    const answer = document.getElementById('answer').value;

    if (answer.trim() === '') {
        alert("Rispondi o rispondi a voce e poi scrivi fatto e vai avanti");
        return;
    }

    // Save the answer locally
    answers.push({ question: questions[currentQuestion], answer: answer });

    // Clear the textarea
    document.getElementById('answer').value = '';

    // Move to the next question
    currentQuestion++;

    if (currentQuestion < questions.length) {
        // Show the next question with animation
        showNextQuestion();
    } else {
        // All questions answered
        displayFinalMessage();
    }
});

// Function to display a final message with animation and a button to go to the next page
function displayFinalMessage() {
    const questionBox = document.getElementById('question-box');
    questionBox.innerHTML = `
        <p class="fade-in">Grazie per avere risposto alle domande, sono veramente importanti per me e per capirti <3 </p>
        <button id="nextPageButton" class="fade-in" style="margin-top: 20px;">Vai alla prossima pagina</button>
    `;

    // Add an event listener to navigate to the next page when the button is clicked
    document.getElementById('nextPageButton').addEventListener('click', function() {
        window.location.href = '../end/end.html'; // Replace with your actual next page URL
    });
}
