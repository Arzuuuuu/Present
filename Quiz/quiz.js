

const quizData = [
    {
        question: "Quando ci siamo incontrati?",
        options: ["19 Settembre", "19 Ottobre", "19 Dicembre", "1997"],
        correctAnswers: [0],  // Multiple correct answers (Blue and Purple)
        wrongGif: "./sad.gif",  // Custom gif for incorrect answers
        correctGif: "./correct1.jpg" // Custom gif for correct answers
    },
    {
        question: "Quale e' la nostra canzone?",
        options: ["Ed Sheeran - Photograph", "Matthew - Fammi", "Sia - Gimme Love", "Adele - Hello!"],
        correctAnswers: [2],  
        wrongGif: "./wrong2.gif",
        correctGif: "./correct2.gif"
    },
    {
        question: "Che canzone ti dedicai?",
        options: ["Cadiamo Insieme", "Unstoppable", "Rossofuoco", "Tu Scema"],
        correctAnswers: [2],  
        wrongGif: "./wrong3.gif",
        correctGif: "./correct3.gif"
    },
    {
        question: "La nostra prima chat?",
        options: ["Ah di", "Polpettino", "Pippa", "Qua Qua Qua"],
        correctAnswers: [3],  
        wrongGif: "./wrong4.gif",
        correctGif: "./correct4.gif"
    },
    {
        question: "La persona piu bella e intelligente?",
        options: ["Arzu", "Aladdin Zu", "Zuzu", "Tu"],
        correctAnswers: [0,1,2],  
        wrongGif: "./wrong5.gif",
        correctGif: "./correct5.gif"
    },
    {
        question: "La mia frase che odi di piu?",
        options: ["Non credi?", "Ah di", "Easy Peasy Lemon Squeezy", "Ci sta"],
        correctAnswers: [0],  
        wrongGif: "./wrong6.gif",
        correctGif: "./correct6.gif"
    },
    {
        question: "Cosa ti portai la prima volta che ci siamo visti?",
        options: ["Rosa", "Piadina", "IPhone", "So povero"],
        correctAnswers: [0,1],  
        wrongGif: "./wrong7.gif",
        correctGif: "./correct7.gif"
    },
    {
        question: "La tua grave malattia che tu hai? XD",
        options: ["Ti dimentichi di me", "Diarrea", "Alzheimer", "So stanca"],
        correctAnswers: [0, 2, 3],  // Multiple correct answers
        wrongGif: "./wrong8.gif",
        correctGif: {
            0: "./correct8_1.gif",  // Gif for "Ti dimentichi di me"
            2: "./correct8_2.gif",  // Gif for "Alzheimer"
            3: "./correct8_2.gif"   // Gif for "So stanca"
        }
    }

];

let currentQuestionIndex = 0;

function loadQuestion() {
    const questionData = quizData[currentQuestionIndex];
    document.getElementById('quiz-question').textContent = questionData.question;

    // Load the answer options
    const optionButtons = document.querySelectorAll('.quiz-option');
    questionData.options.forEach((option, index) => {
        optionButtons[index].textContent = option;
        optionButtons[index].disabled = false; 
        optionButtons[index].classList.remove('disabled'); 
    });

    document.getElementById('feedback').innerHTML = ''; 
}

function checkAnswer(selectedIndex) {
    const questionData = quizData[currentQuestionIndex];
    const feedbackDiv = document.getElementById('feedback');

    if (questionData.correctAnswers.includes(selectedIndex)) {
        // Show correct GIF and move to next question
        if (currentQuestionIndex === quizData.length - 1) {
            feedbackDiv.innerHTML = `<img src="${questionData.correctGif[selectedIndex]}" alt="Correct!">`;
        } else {
            feedbackDiv.innerHTML = `<img src="${questionData.correctGif}" alt="Correct!">`;
        }

        setTimeout(() => {
            currentQuestionIndex++;
            if (currentQuestionIndex < quizData.length) {
                loadQuestion();
            } else {
                showCompletionMessage();
            }
        }, 2000); 
    } else {
        // For wrong answers, show specific wrong gifs
        if (typeof questionData.wrongGif === 'object') {
            feedbackDiv.innerHTML = `<img src="${questionData.wrongGif[selectedIndex]}" alt="Try Again!">`;
        } else {
            feedbackDiv.innerHTML = `<img src="${questionData.wrongGif}" alt="Try Again!">`;
        }
    }
}

function showCompletionMessage() {
    const feedbackDiv = document.getElementById('feedback');
    feedbackDiv.innerHTML = `
        <p>Hai completato il QUIZZZZ</p>
        <button id="next-page-btn" onclick="goToNextPage()">Go to Next Page</button>
    `;
}

function goToNextPage() {
    window.location.href = "../video/video.html"; // Change to the correct URL
}

// Load the first question
loadQuestion();


const backgroundMusic = document.getElementById('background-music');
backgroundMusic.volume = 0.6;  // Set the volume to 60%
backgroundMusic.play();        // Start the music

